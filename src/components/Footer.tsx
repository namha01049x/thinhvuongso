import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

interface FooterProps {
  onOpenProgramModal: (programId: string) => void;
  onOpenPortalModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenProgramModal,
  onOpenPortalModal,
}) => {
  return (
    <footer className="bg-nen-chan text-yen pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-kem/10">
          {/* Col 1: Brand & Legal Entity (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-xanh border border-cam/40 flex items-center justify-center">
                <span className="font-serif italic font-bold text-cam text-lg">ĐTV</span>
              </div>
              <div>
                <p className="font-sans font-bold text-lg text-kem uppercase tracking-wider">
                  Thịnh Vượng Số
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cam">
                  Phát triển bản thân · Tài chính · Kinh doanh · Đầu tư
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-yen leading-relaxed max-w-md">
              Hệ sinh thái giáo dục và huấn luyện thực hành giúp người Việt trưởng thành
              phát triển năng lực làm chủ đời sống, công việc và tài chính trên nền tảng
              nội lực vững vàng.
            </p>

            {/* Legal Entity Details */}
            <div className="space-y-2 pt-1 text-xs text-yen/90">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-cam shrink-0 mt-0.5" />
                <span>
                  <strong className="text-kem">Công ty TNHH Thịnh Vượng Số</strong> · Mã số
                  thuế: <span className="font-mono text-kem">0111281148</span>
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cam shrink-0 mt-0.5" />
                <span>
                  Số 28, ngõ 81 Đông Ngạc, Phường Đông Ngạc, Thành phố Hà Nội, Việt Nam
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cam shrink-0" />
                <span>
                  Hotline / Zalo:{' '}
                  <a
                    href="https://zalo.me/84985878672"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kem hover:text-cam font-mono"
                  >
                    0985.878.672
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cam shrink-0" />
                <a
                  href="mailto:support@thinhvuongso.vn"
                  className="text-kem hover:text-cam font-mono"
                >
                  support@thinhvuongso.vn
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Programs by Tier (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cam">
              Chương trình theo tầng
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#cong-dong"
                  className="hover:text-cam transition-colors flex items-center justify-between"
                >
                  <span>Tầng 0 · LIVE Người Dẫn Đường</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenProgramModal('binh-dan-hoc-vu-tai-chinh')}
                  className="hover:text-cam transition-colors text-left"
                >
                  Tầng 1 · Bình Dân Học Vụ Tài Chính
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenProgramModal('but-pha-tai-chinh')}
                  className="text-cam font-medium hover:underline text-left flex items-center gap-1.5"
                >
                  <span>Tầng 2 · Bứt Phá Tài Chính (Mở ĐK)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenProgramModal('tinh-hoa-thinh-vuong')}
                  className="hover:text-cam transition-colors text-left"
                >
                  Tầng 3 · Tinh Hoa Thịnh Vượng (12 tháng)
                </button>
              </li>
              <li>
                <a href="#dong-hanh" className="hover:text-cam transition-colors">
                  Đồng hành 1-1 & Liên Đoàn Thịnh Vượng
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecosystem Websites & Portals (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cam">
              Hệ sinh thái số
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={onOpenPortalModal}
                  className="hover:text-cam transition-colors inline-flex items-center gap-1 text-left"
                >
                  <span>Học viện Thực hành</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li>
                <a
                  href="https://butphataichinh.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cam transition-colors inline-flex items-center gap-1"
                >
                  <span>butphataichinh.vn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://tinhhoathinhvuong.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cam transition-colors inline-flex items-center gap-1"
                >
                  <span>tinhhoathinhvuong.vn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="chuyensan" className="hover:text-cam transition-colors">
                  Chuyên san Thịnh Vượng Số
                </a>
              </li>
              <li>
                <a href="#bai-test" className="hover:text-cam transition-colors">
                  Bài test định vị 3 câu
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Policies & Social Channels (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cam">
              Kết nối & Chính sách
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="https://zalo.me/84985878672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cam transition-colors"
                >
                  Zalo Official Hỗ trợ
                </a>
              </li>
              <li>
                <a
                  href="https://thinhvuongso.vn/ve-dtv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cam transition-colors"
                >
                  Về Thịnh Vượng Số
                </a>
              </li>
              <li>
                <a
                  href="https://thinhvuongso.vn/dieu-khoan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cam transition-colors"
                >
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a
                  href="https://thinhvuongso.vn/bao-mat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cam transition-colors"
                >
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-yen/70">
          <p>
            © {new Date().getFullYear()} Công ty TNHH Thịnh Vượng Số (MST: 0111281148). Bảo
            lưu mọi quyền.
          </p>
          <p className="text-center sm:text-right">
            Giáo dục thực chất · Không phím hàng · Không cam kết lợi nhuận ảo.
          </p>
        </div>
      </div>

      {/* Giant Background Watermark matching thinhvuongso.vn */}
      <div
        className="pointer-events-none select-none text-center font-sans font-extrabold uppercase tracking-[0.18em] text-kem/[0.025] leading-none mt-8"
        style={{ fontSize: 'clamp(2.8rem, 9.5vw, 8.5rem)' }}
        aria-hidden="true"
      >
        THỊNH VƯỢNG SỐ
      </div>
    </footer>
  );
};
