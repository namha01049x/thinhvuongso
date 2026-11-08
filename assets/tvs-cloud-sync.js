/**
 * THỊNH VƯỢNG SỐ - ĐỘNG CƠ ĐỒNG BỘ ĐÁM MÂY (TVS CLOUD SYNC ENGINE)
 * Quản lý tập trung thiết bị (1 PC, 2 Tablet, 2 Điện thoại, 1 Tab) và tài khoản qua Google Firebase Firestore
 */
(function(window) {
  'use strict';

  var TVS_CLOUD = {
    db: null,
    isInitialized: false,
    activeUnsubscribe: null,
    currentAccountId: null
  };

  // 1. Lấy thông số cấu hình Firebase (Ưu tiên cấu hình lưu trong máy hoặc file firebase-config.js)
  function resolveConfig() {
    try {
      var custom = localStorage.getItem('tvs_firebase_config_custom');
      if (custom) {
        var p = JSON.parse(custom);
        if (p && p.apiKey && p.projectId) return p;
      }
    } catch(e) {}

    if (window.TVS_FIREBASE_CONFIG && window.TVS_FIREBASE_CONFIG.apiKey && window.TVS_FIREBASE_CONFIG.projectId) {
      return window.TVS_FIREBASE_CONFIG;
    }
    return null;
  }

  // 2. Khởi tạo kết nối Google Firebase
  TVS_CLOUD.init = function() {
    var cfg = resolveConfig();
    if (!cfg || !cfg.apiKey || !cfg.projectId) {
      console.log('ℹ️ [TVS Cloud] Chưa cấu hình Firebase. Hệ thống đang chạy ở chế độ cục bộ an toàn (Local Fallback).');
      TVS_CLOUD.isInitialized = false;
      TVS_CLOUD.db = null;
      updateCloudIndicator(false);
      return false;
    }

    try {
      if (typeof window.firebase === 'undefined') {
        console.warn('⚠️ [TVS Cloud] Thư viện Firebase SDK chưa tải xong.');
        return false;
      }

      if (!window.firebase.apps || !window.firebase.apps.length) {
        window.firebase.initializeApp(cfg);
      }
      TVS_CLOUD.db = window.firebase.firestore();
      TVS_CLOUD.isInitialized = true;
      console.log('✅ [TVS Cloud] Đã kết nối thành công tới Google Firebase Firestore (Dự án: ' + cfg.projectId + ')');
      updateCloudIndicator(true, cfg.projectId);
      try {
        TVS_CLOUD.seedDefaultLicenseKeysAsync();
      } catch(e) {}
      return true;
    } catch(err) {
      console.error('❌ [TVS Cloud] Lỗi khởi tạo Firebase:', err);
      TVS_CLOUD.isInitialized = false;
      TVS_CLOUD.db = null;
      updateCloudIndicator(false);
      return false;
    }
  };

  // 3. Kiểm tra trạng thái sẵn sàng của Cloud
  TVS_CLOUD.isReady = function() {
    return !!(TVS_CLOUD.isInitialized && TVS_CLOUD.db);
  };

  // 4. Lấy dữ liệu danh sách thiết bị từ Cloud (Async)
  TVS_CLOUD.getDeviceRegistryAsync = function(accountId) {
    var acc = String(accountId || '').trim();
    if (!acc) return Promise.resolve({ desktops: [], tablets: [], mobiles: [] });

    if (!TVS_CLOUD.isReady()) {
      // Fallback lấy từ localStorage
      if (typeof window.getDeviceRegistry === 'function') {
        return Promise.resolve(window.getDeviceRegistry(acc));
      }
      return Promise.resolve({ desktops: [], tablets: [], mobiles: [] });
    }

    return TVS_CLOUD.db.collection('tvs_device_registries').doc(acc).get()
      .then(function(doc) {
        if (doc.exists) {
          var data = doc.data() || {};
          var reg = {
            desktops: Array.isArray(data.desktops) ? data.desktops : [],
            tablets: Array.isArray(data.tablets) ? data.tablets : [],
            mobiles: Array.isArray(data.mobiles) ? data.mobiles : []
          };
          // Cập nhật lại cache local
          if (typeof window.saveDeviceRegistry === 'function') {
            window.saveDeviceRegistry(acc, reg);
          }
          return reg;
        } else {
          return { desktops: [], tablets: [], mobiles: [] };
        }
      })
      .catch(function(err) {
        console.warn('⚠️ [TVS Cloud] Lỗi đọc Registry từ Firestore, chuyển sang cache local:', err);
        if (typeof window.getDeviceRegistry === 'function') {
          return window.getDeviceRegistry(acc);
        }
        return { desktops: [], tablets: [], mobiles: [] };
      });
  };

  // 5. Lưu dữ liệu danh sách thiết bị lên Cloud (Async)
  TVS_CLOUD.saveDeviceRegistryAsync = function(accountId, regData) {
    var acc = String(accountId || '').trim();
    if (!acc) return Promise.resolve();

    // Luôn lưu cache local trước
    if (typeof window.saveDeviceRegistry === 'function') {
      window.saveDeviceRegistry(acc, regData);
    }

    if (!TVS_CLOUD.isReady()) {
      return Promise.resolve();
    }

    var payload = {
      accountId: acc,
      desktops: regData.desktops || [],
      tablets: regData.tablets || [],
      mobiles: regData.mobiles || [],
      updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
    };

    return TVS_CLOUD.db.collection('tvs_device_registries').doc(acc).set(payload, { merge: true })
      .then(function() {
        console.log('☁️ [TVS Cloud] Đã đồng bộ danh sách thiết bị lên Google Cloud cho tài khoản:', acc);
      })
      .catch(function(err) {
        console.error('❌ [TVS Cloud] Lỗi đồng bộ lên Firestore:', err);
      });
  };

  // 6. Lắng nghe thay đổi thời gian thực (Real-time Cloud Listener)
  // Nếu máy tính khác đăng nhập và thu hồi quyền máy này -> Tự động đăng xuất tức thì!
  TVS_CLOUD.listenToDeviceChanges = function(accountId, onRemoteLogout, onSync) {
    var acc = String(accountId || '').trim();
    if (!acc || !TVS_CLOUD.isReady()) return;

    // Hủy listener cũ nếu có
    if (TVS_CLOUD.activeUnsubscribe) {
      TVS_CLOUD.activeUnsubscribe();
      TVS_CLOUD.activeUnsubscribe = null;
    }

    TVS_CLOUD.currentAccountId = acc;
    var curDevId = (typeof window.getOrGenerateDeviceId === 'function') ? window.getOrGenerateDeviceId() : null;

    TVS_CLOUD.activeUnsubscribe = TVS_CLOUD.db.collection('tvs_device_registries').doc(acc)
      .onSnapshot(function(doc) {
        if (!doc.exists) return;
        var data = doc.data() || {};
        var reg = {
          desktops: Array.isArray(data.desktops) ? data.desktops : [],
          tablets: Array.isArray(data.tablets) ? data.tablets : [],
          mobiles: Array.isArray(data.mobiles) ? data.mobiles : []
        };

        // Cập nhật giao diện local
        if (typeof window.saveDeviceRegistry === 'function') {
          window.saveDeviceRegistry(acc, reg);
        }
        if (typeof window.updateDeviceUI === 'function') {
          window.updateDeviceUI();
        }
        if (typeof onSync === 'function') {
          onSync(reg);
        }

        // KIỂM TRA XEM THIẾT BỊ HIỆN TẠI CÓ CÒN NẰM TRONG DANH SÁCH CHO PHÉP KHÔNG
        if (curDevId) {
          var allActive = [].concat(reg.desktops, reg.tablets, reg.mobiles);
          var isStillAllowed = allActive.some(function(d) { return d.id === curDevId; });

          // Nếu trước đó thiết bị này từng hoạt động mà giờ bị xóa khỏi Cloud:
          if (!isStillAllowed && allActive.length > 0) {
            console.warn('🚨 [TVS Cloud] Thiết bị này đã bị thu hồi quyền từ xa bởi một thiết bị khác!');
            if (typeof onRemoteLogout === 'function') {
              onRemoteLogout();
            } else if (typeof window.handleRemoteDeviceKick === 'function') {
              window.handleRemoteDeviceKick();
            }
          }
        }
      }, function(err) {
        console.warn('⚠️ [TVS Cloud] Lỗi Realtime Listener Firestore:', err);
      });
  };

  // =========================================================================
  // 6A. MẬT KHẨU AN TOÀN & BĂM BẢO MẬT (SHA-256 SECURE HASHING)
  // =========================================================================
  TVS_CLOUD.hashPinAsync = function(pin) {
    var str = String(pin || '').trim();
    if (!str) return Promise.resolve('');
    if (typeof window.crypto !== 'undefined' && window.crypto.subtle && typeof TextEncoder !== 'undefined') {
      try {
        var buffer = new TextEncoder().encode(str + '_tvs_secure_salt_2026');
        return window.crypto.subtle.digest('SHA-256', buffer).then(function(hash) {
          var hashArray = Array.from(new Uint8Array(hash));
          return hashArray.map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
        }).catch(function() { return str; });
      } catch(e) { return Promise.resolve(str); }
    }
    return Promise.resolve(str);
  };

  TVS_CLOUD.verifyPinAsync = function(enteredPin, storedPin) {
    var rawEntered = String(enteredPin || '').trim();
    var rawStored = String(storedPin || '').trim();
    if (!rawEntered || !rawStored) return Promise.resolve(false);

    // 1. Khớp thẳng (Legacy plaintext pin)
    if (rawEntered === rawStored) return Promise.resolve(true);

    // 2. So khớp theo SHA-256 hash
    return TVS_CLOUD.hashPinAsync(rawEntered).then(function(hash) {
      return (hash === rawStored);
    });
  };

  // =========================================================================
  // 6B. ĐỒNG BỘ HỒ SƠ HỌC VIÊN LÊN CLOUD (COLLECTION tvs_students)
  // =========================================================================
  TVS_CLOUD.getStudentAsync = function(accountId) {
    var acc = String(accountId || '').replace(/[\s\-\.]/g, '').trim();
    if (!acc) return Promise.resolve(null);

    function getFromLocalCache() {
      try {
        var raw = localStorage.getItem('tvs_students_database') || localStorage.getItem('tvs_students_database_v2');
        if (raw) {
          var list = JSON.parse(raw);
          if (Array.isArray(list)) {
            var found = list.find(function(s) {
              var sPhone = (s.phone || s.id || '').replace(/[\s\-\.]/g, '').trim();
              return sPhone === acc;
            });
            if (found) return found;
          }
        }
      } catch(e) {}
      return null;
    }

    if (!TVS_CLOUD.isReady()) {
      return Promise.resolve(getFromLocalCache());
    }

    return TVS_CLOUD.db.collection('tvs_students').doc(acc).get()
      .then(function(doc) {
        if (doc.exists) {
          var cloudData = doc.data() || {};
          TVS_CLOUD.syncStudentToLocalCache(cloudData);
          return cloudData;
        } else {
          return getFromLocalCache();
        }
      })
      .catch(function(err) {
        console.warn('⚠️ [TVS Cloud] Lỗi đọc học viên từ Firestore, dùng local cache:', err);
        return getFromLocalCache();
      });
  };

  TVS_CLOUD.saveStudentAsync = function(student) {
    if (!student) return Promise.resolve();
    var acc = String(student.phone || student.id || '').replace(/[\s\-\.]/g, '').trim();
    if (!acc) return Promise.resolve();

    // Luôn cập nhật local cache trước
    TVS_CLOUD.syncStudentToLocalCache(student);

    if (!TVS_CLOUD.isReady()) {
      return Promise.resolve(student);
    }

    var payload = {
      id: acc,
      phone: acc,
      name: String(student.name || '').trim(),
      email: String(student.email || '').trim().toLowerCase(),
      course: String(student.course || 'but-pha').trim(),
      courseName: String(student.courseName || 'Bứt Phá Tài Chính (Mentor Trần Nam Hà)').trim(),
      pin: String(student.pin || student.passcode || '').trim(),
      isActivated: (student.isActivated !== false),
      licenseCode: String(student.licenseCode || '').trim(),
      registeredAt: student.registeredAt || new Date().toISOString(),
      registeredDateFormatted: student.registeredDateFormatted || '',
      completedLessons: Array.isArray(student.completedLessons) ? student.completedLessons : [],
      role: String(student.role || (acc === '0981501865' ? 'mentor' : 'student')).trim(),
      updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
    };

    return TVS_CLOUD.db.collection('tvs_students').doc(acc).set(payload, { merge: true })
      .then(function() {
        console.log('☁️ [TVS Cloud] Đã đồng bộ hồ sơ học viên lên Google Cloud:', acc);
        return payload;
      })
      .catch(function(err) {
        console.error('❌ [TVS Cloud] Lỗi đồng bộ hồ sơ học viên lên Firestore:', err);
        return payload;
      });
  };

  TVS_CLOUD.syncStudentToLocalCache = function(student) {
    if (!student) return;
    var acc = String(student.phone || student.id || '').replace(/[\s\-\.]/g, '').trim();
    if (!acc) return;
    try {
      var keys = ['tvs_students_database', 'tvs_students_database_v2'];
      keys.forEach(function(k) {
        var list = [];
        var raw = localStorage.getItem(k);
        if (raw) {
          try { list = JSON.parse(raw); } catch(e) {}
        }
        if (!Array.isArray(list)) list = [];
        var idx = list.findIndex(function(s) {
          var sPhone = (s.phone || s.id || '').replace(/[\s\-\.]/g, '').trim();
          return sPhone === acc;
        });
        if (idx !== -1) {
          list[idx] = Object.assign({}, list[idx], student);
        } else {
          list.push(student);
        }
        localStorage.setItem(k, JSON.stringify(list));
      });
    } catch(e) {}
  };

  // =========================================================================
  // 6C. XÁC THỰC & KÍCH HOẠT MÃ BẢN QUYỀN TRÊN CLOUD (COLLECTION tvs_license_keys)
  // =========================================================================
  TVS_CLOUD.verifyAndClaimLicenseKeyAsync = function(rawCode, studentPhone, studentName) {
    var code = String(rawCode || '').trim().toUpperCase();
    var cleanPhone = String(studentPhone || '').replace(/[\s\-\.]/g, '').trim();
    var name = String(studentName || '').trim();

    if (!code) {
      return Promise.resolve({ success: false, error: 'Vui lòng nhập Mã kích hoạt khóa học bản quyền!' });
    }

    // Đặc quyền vĩnh viễn: Mentor Trần Nam Hà
    if (cleanPhone === '0981501865') {
      return Promise.resolve({
        success: true,
        item: {
          code: 'TVS-MASTER-NAMHA',
          course: 'all',
          courseName: 'Trọn bộ 3 Tầng Thực Chiến'
        }
      });
    }

    // Nếu Cloud chưa kết nối -> Fallback local
    if (!TVS_CLOUD.isReady()) {
      if (typeof window._legacyVerifyLicenseKey === 'function') {
        return Promise.resolve(window._legacyVerifyLicenseKey(code, cleanPhone, name));
      }
      return Promise.resolve({ success: false, error: 'Chưa thể kết nối máy chủ xác thực bản quyền. Vui lòng thử lại!' });
    }

    // Tra cứu trực tiếp trên Firestore
    return TVS_CLOUD.db.collection('tvs_license_keys').doc(code).get()
      .then(function(doc) {
        if (!doc.exists) {
          return {
            success: false,
            error: 'Mã kích hoạt "' + code + '" không tồn tại trên hệ thống. Vui lòng kiểm tra lại từng ký tự hoặc liên hệ Mentor Trần Nam Hà (0981 501 865)!'
          };
        }

        var keyData = doc.data() || {};
        if (keyData.isUsed) {
          var usedPhone = String(keyData.usedByPhone || '').replace(/[\s\-\.]/g, '').trim();
          if (usedPhone === cleanPhone) {
            return {
              success: true,
              item: keyData,
              alreadyYours: true
            };
          }
          return {
            success: false,
            error: 'Mã kích hoạt "' + code + '" đã được kích hoạt cho học viên khác (' + (keyData.usedByName ? keyData.usedByName + ' - ' : '') + 'SĐT ' + keyData.usedByPhone + '). Mỗi mã chỉ kích hoạt 1 lần cho đúng 1 học viên duy nhất!'
          };
        }

        // Mã hợp lệ và chưa ai dùng -> Khóa chết vào SĐT học viên này
        var claimPayload = {
          code: code,
          course: keyData.course || 'but-pha',
          courseName: keyData.courseName || 'Bứt Phá Tài Chính (Mentor Trần Nam Hà)',
          createdAt: keyData.createdAt || new Date().toISOString(),
          isUsed: true,
          usedByPhone: cleanPhone,
          usedByName: name || ('Học viên ' + cleanPhone),
          usedAt: new Date().toISOString(),
          updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
        };

        return TVS_CLOUD.db.collection('tvs_license_keys').doc(code).set(claimPayload, { merge: true })
          .then(function() {
            console.log('☁️ [TVS Cloud] Đã kích hoạt mã bản quyền trên Cloud thành công:', code, 'cho SĐT:', cleanPhone);
            return {
              success: true,
              item: claimPayload
            };
          })
          .catch(function(claimErr) {
            console.error('❌ [TVS Cloud] Lỗi lưu kích hoạt bản quyền:', claimErr);
            return {
              success: false,
              error: 'Không thể xác thực mã trên máy chủ. Lỗi: ' + (claimErr.message || claimErr)
            };
          });
      })
      .catch(function(err) {
        console.error('❌ [TVS Cloud] Lỗi tra cứu bản quyền trên Firestore:', err);
        return {
          success: false,
          error: 'Lỗi kết nối máy chủ xác thực bản quyền: ' + (err.message || err)
        };
      });
  };

  // Khởi tạo các mã bản quyền gốc ban đầu lên Firestore nếu chưa có
  TVS_CLOUD.seedDefaultLicenseKeysAsync = function() {
    if (!TVS_CLOUD.isReady()) return Promise.resolve();
    var defaultKeys = [
      { code: 'TVS-BP-8899-2026', course: 'but-pha', courseName: 'Bứt Phá Tài Chính (Mentor Trần Nam Hà)', createdAt: '2026-11-01T08:00:00.000Z', isUsed: false, usedByPhone: null, usedByName: null, usedAt: null },
      { code: 'TVS-BP-7766-2026', course: 'but-pha', courseName: 'Bứt Phá Tài Chính (Mentor Trần Nam Hà)', createdAt: '2026-11-01T08:00:00.000Z', isUsed: false, usedByPhone: null, usedByName: null, usedAt: null },
      { code: 'TVS-BD-1234-2026', course: 'binh-dan', courseName: 'Bình Dân Học Vụ Tài Chính', createdAt: '2026-11-01T08:00:00.000Z', isUsed: false, usedByPhone: null, usedByName: null, usedAt: null },
      { code: 'TVS-VIP-9999-2026', course: 'all', courseName: 'Trọn bộ 3 Tầng Thực Chiến', createdAt: '2026-11-01T08:00:00.000Z', isUsed: false, usedByPhone: null, usedByName: null, usedAt: null },
      { code: 'TVS-MASTER-NAMHA', course: 'all', courseName: 'Trọn bộ 3 Tầng Thực Chiến', createdAt: '2026-11-01T08:00:00.000Z', isUsed: true, usedByPhone: '0981501865', usedByName: 'Mentor Trần Nam Hà', usedAt: '2026-11-01T08:00:00.000Z' }
    ];

    var promises = defaultKeys.map(function(k) {
      var ref = TVS_CLOUD.db.collection('tvs_license_keys').doc(k.code);
      return ref.get().then(function(d) {
        if (!d.exists) {
          return ref.set(k);
        }
      }).catch(function() {});
    });
    return Promise.all(promises);
  };

  // 7. Cập nhật nhãn trạng thái đám mây trên Header / Dashboard
  function updateCloudIndicator(isConnected, projectId) {
    var badges = document.querySelectorAll('.tvs-cloud-badge');
    badges.forEach(function(badge) {
      if (isConnected) {
        badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span><span class="text-green-300 font-mono text-[10.5px]">Đám mây Google: Đã kết nối (' + projectId + ')</span>';
        badge.className = 'tvs-cloud-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-950/40 border border-green-500/40 cursor-pointer hover:border-green-400';
      } else {
        badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400"></span><span class="text-amber-300 font-mono text-[10.5px]">Đám mây: Chưa nạp mã (Cài đặt)</span>';
        badge.className = 'tvs-cloud-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 cursor-pointer hover:border-amber-400';
      }
      badge.onclick = function() {
        if (typeof window.openFirebaseSetupModal === 'function') {
          window.openFirebaseSetupModal();
        }
      };
    });
  }

  // 8. Xử lý khi thiết bị bị đăng xuất từ xa bởi thiết bị khác (Remote Kick)
  window.handleRemoteDeviceKick = function() {
    try {
      localStorage.removeItem('tvs_active_student');
      localStorage.removeItem('tvs_student_auth');
      localStorage.removeItem('tvs_last_active_time');
    } catch(e) {}

    var kickModal = document.getElementById('remote-kicked-modal');
    if (!kickModal) {
      kickModal = document.createElement('div');
      kickModal.id = 'remote-kicked-modal';
      kickModal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-abyssal/90 backdrop-blur-md';
      kickModal.innerHTML = 
        '<div class="the p-6 sm:p-8 bg-nen-sau border-2 border-red-500/70 rounded-2xl max-w-md w-full space-y-4 shadow-2xl text-left">' +
        '  <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950/60 border border-red-500/50 text-red-300 font-mono text-[10.5px] font-bold uppercase">' +
        '    <span>⚠️ PHIÊN HỌC ĐÃ KẾT THÚC</span>' +
        '  </div>' +
        '  <h3 class="text-lg sm:text-xl font-bold text-kem leading-snug">Tài Khoản Đăng Nhập Trên Thiết Bị Khác</h3>' +
        '  <p class="text-xs text-yen leading-relaxed">' +
        '    Tài khoản của bạn vừa được đăng nhập trên một thiết bị khác (hoặc quyền trên thiết bị này đã được thu hồi từ xa). Để bảo vệ dữ liệu và tuân thủ định mức thiết bị của Thịnh Vượng Số, phiên làm việc trên máy tính này đã tự động kết thúc.' +
        '  </p>' +
        '  <div class="pt-2">' +
        '    <button type="button" onclick="location.reload()" class="btn-p w-full justify-center !py-2.5 text-xs font-bold cursor-pointer">' +
        '      <span>Đăng Nhập Lại Trên Thiết Bị Này ↗</span>' +
        '    </button>' +
        '  </div>' +
        '</div>';
      document.body.appendChild(kickModal);
    } else {
      kickModal.classList.remove('hidden');
    }
    document.body.style.overflow = 'hidden';
  };

  // 9. Quản lý Modal Cài Đặt Đám Mây Google Firebase
  window.openFirebaseSetupModal = function() {
    ensureSetupModalDom();
    var modal = document.getElementById('firebase-setup-modal');
    if (!modal) return;
    var textarea = document.getElementById('fb-config-paste');
    var currentCfg = localStorage.getItem('tvs_firebase_config_custom');
    if (!currentCfg && window.TVS_FIREBASE_CONFIG && window.TVS_FIREBASE_CONFIG.apiKey) {
      currentCfg = JSON.stringify(window.TVS_FIREBASE_CONFIG, null, 2);
    }
    if (currentCfg && textarea) {
      textarea.value = currentCfg;
    }
    modal.classList.remove('hidden');
  };

  window.closeFirebaseSetupModal = function() {
    var modal = document.getElementById('firebase-setup-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.saveAndConnectFirebase = function() {
    var textarea = document.getElementById('fb-config-paste');
    var statusBox = document.getElementById('fb-connect-status');
    if (!textarea || !textarea.value.trim()) {
      alert('Vui lòng dán đoạn mã cấu hình firebaseConfig từ Google Console!');
      return;
    }

    var raw = textarea.value.trim();
    var parsed = null;
    try {
      parsed = JSON.parse(raw);
    } catch(e) {
      try {
        var jsonText = raw.replace(/^[\s\S]*?\{/, '{').replace(/\};?[\s\S]*$/, '}');
        jsonText = jsonText.replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
        jsonText = jsonText.replace(/,\s*}/g, '}');
        parsed = JSON.parse(jsonText);
      } catch(err2) {
        alert('Không thể đọc định dạng cấu hình. Vui lòng kiểm tra lại đoạn mã firebaseConfig!');
        return;
      }
    }

    if (!parsed || !parsed.apiKey || !parsed.projectId) {
      alert('Đoạn mã cấu hình thiếu apiKey hoặc projectId. Vui lòng copy chính xác từ Firebase Console!');
      return;
    }

    localStorage.setItem('tvs_firebase_config_custom', JSON.stringify(parsed));
    
    if (statusBox) {
      statusBox.className = 'p-2.5 rounded-lg text-xs font-mono bg-green-950/50 border border-green-500/50 text-green-300';
      statusBox.innerHTML = 'Đang kết nối tới dự án: <strong>' + parsed.projectId + '</strong>...';
      statusBox.classList.remove('hidden');
    }

    var ok = TVS_CLOUD.init();
    if (ok) {
      setTimeout(function() {
        alert('Kết nối Google Firebase Firestore thành công! Hệ thống đã kích hoạt chế độ chặn thiết bị đa máy tính thời gian thực.');
        window.closeFirebaseSetupModal();
        if (typeof window.updateDeviceUI === 'function') window.updateDeviceUI();
      }, 500);
    } else {
      alert('Không thể kết nối tới Firebase với thông số vừa nhập. Vui lòng kiểm tra lại apiKey hoặc Firestore Database đã được bật chưa.');
    }
  };

  window.resetFirebaseToLocal = function() {
    if (confirm('Bạn có chắc muốn xóa cấu hình Đám mây và chuyển về chạy bộ nhớ Cục bộ (Local)?')) {
      localStorage.removeItem('tvs_firebase_config_custom');
      TVS_CLOUD.isInitialized = false;
      TVS_CLOUD.db = null;
      updateCloudIndicator(false);
      alert('Đã chuyển về chế độ bộ nhớ cục bộ an toàn.');
      window.closeFirebaseSetupModal();
      location.reload();
    }
  };

  function ensureSetupModalDom() {
    if (document.getElementById('firebase-setup-modal')) return;
    var div = document.createElement('div');
    div.id = 'firebase-setup-modal';
    div.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-abyssal/90 backdrop-blur-md hidden text-left';
    div.innerHTML = 
      '<div class="the p-6 sm:p-8 bg-nen-sau border-2 border-cam/60 rounded-2xl max-w-lg w-full space-y-4 shadow-2xl relative">' +
      '  <button type="button" onclick="window.closeFirebaseSetupModal()" class="absolute top-4 right-4 text-yen hover:text-kem text-lg cursor-pointer">✕</button>' +
      '  <div class="flex items-center gap-2">' +
      '    <span class="w-2.5 h-2.5 rounded-full bg-cam"></span>' +
      '    <h3 class="text-lg sm:text-xl font-bold text-kem">Cài Đặt Đám Mây Google Firebase</h3>' +
      '  </div>' +
      '  <p class="text-xs text-yen leading-relaxed">' +
      '    Kết nối cơ sở dữ liệu đám mây Firestore để kích hoạt tính năng <strong class="text-cam">chặn đăng nhập chéo thiết bị thời gian thực</strong> (1 PC, 2 Tablet, 2 Điện thoại, 1 Tab) trên toàn quốc.' +
      '  </p>' +
      '  <div class="p-3 rounded-xl bg-abyssal/80 border border-kem/15 space-y-1.5 text-[11px] text-yen">' +
      '    <div class="font-bold text-cam">3 Bước Lấy Mã Cấu Hình:</div>' +
      '    <div>1. Vào <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" class="text-cam hover:underline">console.firebase.google.com</a> tạo dự án mới (miễn phí).</div>' +
      '    <div>2. Vào <strong>Firestore Database</strong> > Bấm <strong>Tạo cơ sở dữ liệu</strong> (Chọn vị trí <em>asia-southeast1</em>).</div>' +
      '    <div>3. Vào <strong>Cài đặt dự án (Project Settings)</strong> > Thêm ứng dụng Web (&lt;/&gt;) > Copy đoạn <code>const firebaseConfig = { ... }</code> dán vào bên dưới.</div>' +
      '  </div>' +
      '  <div class="space-y-2 text-xs">' +
      '    <label class="block text-yen font-mono text-[11px]">Dán mã cấu hình (firebaseConfig):</label>' +
      '    <textarea id="fb-config-paste" rows="5" placeholder="const firebaseConfig = {\n  apiKey: &quot;AIzaSy...&quot;,\n  projectId: &quot;thinhvuongso-...&quot;\n};" class="w-full p-2.5 rounded-lg bg-abyssal border border-kem/20 text-kem font-mono text-[11px] focus:outline-none focus:border-cam"></textarea>' +
      '    <div id="fb-connect-status" class="hidden p-2 rounded-lg text-xs font-mono"></div>' +
      '  </div>' +
      '  <div class="flex gap-2 pt-2">' +
      '    <button type="button" onclick="window.saveAndConnectFirebase()" class="btn-p flex-1 justify-center text-xs !py-2.5 font-bold cursor-pointer">' +
      '      <span>Lưu & Kích Hoạt Đám Mây</span>' +
      '    </button>' +
      '    <button type="button" onclick="window.resetFirebaseToLocal()" class="btn-o justify-center text-xs !py-2.5 text-yen hover:text-red-300 border-red-500/30 cursor-pointer">' +
      '      <span>Dùng Cục Bộ</span>' +
      '    </button>' +
      '  </div>' +
      '</div>';
    document.body.appendChild(div);
  }

  // 10. Tự động khởi tạo khi tải xong DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', TVS_CLOUD.init);
  } else {
    TVS_CLOUD.init();
  }

  window.TVS_CLOUD = TVS_CLOUD;
})(window);
