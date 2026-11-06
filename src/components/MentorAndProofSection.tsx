import React from 'react';
import {
  COMMUNITY_PHOTOS_ROW_1,
  COMMUNITY_PHOTOS_ROW_2,
  CHUYEN_SAN_ARTICLES,
} from '../data/dtvData';
import {
  Award,
  Building2,
  GraduationCap,
  Quote,
  Radio,
  BookOpen,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

export const MentorAndProofSection: React.FC = () => {
  return (
    <div>
      {/* PART 1: High-Contrast Palladian Light Section (#EEE9DF) for Mentor Trần Nam Hà */}
      <section className="py-20 lg:py-28 bg-kem text-abyssal border-b border-abyssal/10">
        <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 5 cols: Mentor Portrait & Credentials */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border-2 border-abyssal/15 bg-xanh shadow-2xl">
                <img
                  src="https://daothinhvuong.vn/anh/mentor-vo-hoai-nam.webp"
                  alt="Mentor Trần Nam Hà - Nhà sáng lập Đạo Thịnh Vượng"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-top"
                />
                <div className="p-5 bg-abyssal text-kem space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-cam">
                      Nhà sáng lập & Người dẫn đường
                    </span>
                    <span className="font-mono text-[11px] text-yen">
                      Đạo Thịnh Vượng
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-kem">Mentor Trần Nam Hà</h3>
                  <p className="text-xs text-yen leading-relaxed">
                    Cử nhân Quản trị Kinh doanh · Aston Business School (Birmingham, Vương
                    quốc Anh) · Hơn 15 năm thực chiến xây dựng doanh nghiệp, quản trị tài
                    chính và đầu tư.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 cols: Mentor Story, Philosophy & Track Record */}
            <div className="lg:col-span-7 space-y-6">
              <div className="nhan-sang">
                <span>Người dẫn đường · Kinh nghiệm từ thương trường thật</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-abyssal leading-tight">
                “Chúng ta không thiếu công thức kiếm tiền. Chúng ta thiếu một{' '}
                <em className="font-serif italic text-nau font-semibold">
                  nội lực vững vàng
                </em>{' '}
                và một cấu trúc tài chính có kỷ luật.”
              </h2>

              <p className="text-sm sm:text-base text-abyssal/85 leading-relaxed">
                Sau thời gian du học và tốt nghiệp tại{' '}
                <strong>Aston Business School (Birmingham, UK)</strong>, ông Trần Nam Hà
                trực tiếp sáng lập, điều hành và tham gia quản trị vốn tại nhiều doanh
                nghiệp trong lĩnh vực đầu tư, thương mại và nông nghiệp công nghệ cao trước
                khi sáng lập <strong>Đạo Thịnh Vượng</strong> cùng đồng sáng lập & CEO{' '}
                <strong>Phan Trọng Quỳnh</strong>.
              </p>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded bg-white/75 border border-abyssal/10 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2 text-nau font-mono text-xs font-semibold uppercase">
                    <GraduationCap className="w-4 h-4" />
                    <span>Nền tảng Học thuật Quốc tế</span>
                  </div>
                  <p className="text-sm font-bold text-abyssal">
                    Aston Business School · Birmingham, UK
                  </p>
                  <p className="text-xs text-abyssal/75 leading-relaxed">
                    Đào tạo bài bản về quản trị tài chính doanh nghiệp, phân tích dòng vốn
                    và chiến lược vận hành tại Anh Quốc.
                  </p>
                </div>

                <div className="p-4 rounded bg-white/75 border border-abyssal/10 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2 text-nau font-mono text-xs font-semibold uppercase">
                    <Building2 className="w-4 h-4" />
                    <span>Thực tiễn Sáng lập & Điều hành</span>
                  </div>
                  <p className="text-sm font-bold text-abyssal">
                    MHDI Invest · Aquaria Ltd · Akikoi JSC
                  </p>
                  <p className="text-xs text-abyssal/75 leading-relaxed">
                    Trực tiếp đi qua các chu kỳ thăng trầm của thị trường với tư cách người
                    làm chủ doanh nghiệp và nhà đầu tư thực thụ.
                  </p>
                </div>
              </div>

              {/* Core Teaching Commitment */}
              <div className="p-5 rounded bg-abyssal text-kem space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-cam font-mono text-xs uppercase tracking-wider">
                  <Quote className="w-4 h-4" />
                  <span>Nguyên tắc đồng hành tại Đạo Thịnh Vượng</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cam shrink-0 mt-0.5" />
                    <span>Không hô hào khẩu hiệu hay hứa hẹn làm giàu nhanh</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cam shrink-0 mt-0.5" />
                    <span>Chỉ giảng những gì đã trực tiếp làm và trả giá bằng tiền thật</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cam shrink-0 mt-0.5" />
                    <span>Giữ nhịp bền bỉ mỗi tuần để học viên làm ra kết quả thực</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: Community Life (2-Row Infinite Marquee + LIVE Người Dẫn Đường + Cẩm nang) */}
      <section
        id="cong-dong"
        className="py-20 lg:py-28 bg-abyssal border-b border-kem/10 overflow-hidden"
      >
        <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="nhan">
              <span>Đời sống cộng đồng · Môi trường học thật · làm thật</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-kem leading-tight">
              Đi một mình dễ bỏ cuộc.{' '}
              <em className="font-serif italic text-cam font-semibold">
                Đi cùng cộng đồng có người giữ nhịp.
              </em>
            </h2>
            <p className="text-yen text-base sm:text-lg leading-relaxed">
              Những khoảnh khắc đối thoại thẳng thắn tại Hội trường Đạo Thịnh Vượng, các buổi
              mổ xẻ bài toán tại Hội Quán Tinh Hoa và những tối thứ Năm cùng LIVE Người Dẫn
              Đường.
            </p>
          </div>
        </div>

        {/* 2-Row Counter-Rotating Photo Marquee */}
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="overflow-hidden">
            <div className="marquee-track gap-4 px-2">
              {[...COMMUNITY_PHOTOS_ROW_1, ...COMMUNITY_PHOTOS_ROW_1].map((photo, idx) => (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[360px] shrink-0 rounded overflow-hidden border border-kem/15 bg-nen-sau relative group"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3.5 flex items-center justify-between gap-2">
                    <p className="text-xs text-kem line-clamp-1">{photo.caption}</p>
                    <span className="font-mono text-[10px] text-cam px-2 py-0.5 rounded bg-xanh shrink-0">
                      {photo.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Reverse) */}
          <div className="overflow-hidden">
            <div className="marquee-track-reverse gap-4 px-2">
              {[...COMMUNITY_PHOTOS_ROW_2, ...COMMUNITY_PHOTOS_ROW_2].map((photo, idx) => (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[360px] shrink-0 rounded overflow-hidden border border-kem/15 bg-nen-sau relative group"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3.5 flex items-center justify-between gap-2">
                    <p className="text-xs text-kem line-clamp-1">{photo.caption}</p>
                    <span className="font-mono text-[10px] text-cam px-2 py-0.5 rounded bg-xanh shrink-0">
                      {photo.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2 Community Touchpoint Cards: LIVE Người Dẫn Đường & Cẩm nang Tích sản */}
        <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: LIVE Người Dẫn Đường */}
            <div className="the vien-chay p-6 sm:p-8 bg-nen-sau/90 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-nau/25 border border-nau text-cam font-mono text-xs">
                    <span className="w-2 h-2 rounded-full bg-nau animate-ping" />
                    <Radio className="w-3.5 h-3.5" />
                    20h30 Thứ Năm hàng tuần · Qua Zoom
                  </span>
                  <span className="font-mono text-xs text-yen">Tầng 0 · Mở tự do</span>
                </div>

                <h3 className="text-2xl font-bold text-kem">LIVE Người Dẫn Đường</h3>
                <p className="text-sm text-yen leading-relaxed">
                  Điểm hẹn định kỳ mỗi tối thứ Năm để bạn nghe phân tích một chủ đề trọng
                  tâm về đời sống, công việc hoặc quản lý tài chính và trực tiếp đặt câu hỏi
                  về tình huống mình đang gặp phải.
                </p>
              </div>

              <div className="pt-4 border-t border-kem/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-yen">
                  Đăng ký nhận link phòng Zoom định kỳ qua Zalo
                </span>
                <a href="#dong-hanh" className="btn-p !py-2.5 !px-5 text-xs">
                  <span>Đăng ký tham dự LIVE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Cẩm nang Tích sản từ đâu? */}
            <div className="the p-6 sm:p-8 bg-nen-sau/90 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-xanh border border-cam/35 text-cam font-mono text-xs">
                    <BookOpen className="w-3.5 h-3.5" />
                    Ấn phẩm hướng dẫn thực hành
                  </span>
                  <span className="font-mono text-xs text-yen">Tài liệu miễn phí</span>
                </div>

                <h3 className="text-2xl font-bold text-kem">
                  Cẩm nang: “Tích sản từ đâu?” (4 quy trình cốt lõi)
                </h3>
                <p className="text-sm text-yen leading-relaxed">
                  Tài liệu cô đọng giúp người mới bắt đầu phân biệt rõ giữa đầu cơ lướt sóng
                  và tích sản bền vững, kèm theo 4 quy trình chuẩn bị dòng tiền trước khi mua
                  tài sản đầu tiên.
                </p>
              </div>

              <div className="pt-4 border-t border-kem/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-yen">
                  Nhận bản đọc trực tiếp qua Email & Zalo bên dưới
                </span>
                <a href="#cam-nang" className="btn-o !py-2.5 !px-5 text-xs">
                  <span>Tải Cẩm nang miễn phí</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 3: Chuyên san Đạo Thịnh Vượng (3 Featured Deep-Dive Articles) */}
      <section
        id="chuyen-san"
        className="py-20 lg:py-24 bg-nen-sau/50 border-b border-kem/10"
      >
        <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <div className="nhan">
                <span>Chuyên san Đạo Thịnh Vượng · Đọc chậm · Ngẫm sâu</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-kem">
                Những bài viết bóc tách bản chất từ thực tiễn
              </h2>
            </div>

            <a
              href="chuyensan"
              className="btn-l text-xs text-cam"
            >
              <span>Xem toàn bộ Chuyên san</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHUYEN_SAN_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="the p-6 flex flex-col justify-between bg-abyssal/80"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cam">{article.category}</span>
                    <span className="text-yen">{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-kem leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-yen leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-kem/10 space-y-3">
                  <p className="text-xs font-serif italic text-kem/90">
                    “{article.keyTakeaway}”
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-l text-xs text-cam"
                  >
                    <span>Đọc bài viết đầy đủ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
