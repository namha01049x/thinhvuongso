import React from 'react';
import { ArrowRight, Compass, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { QUICK_SHORTCUTS, TICKER_ITEMS, STATS_DATA } from '../data/dtvData';

interface HeroSectionProps {
  onOpenProgramModal: (programId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenProgramModal }) => {
  const handleShortcutClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    shortcutId: string
  ) => {
    if (shortcutId === 'binh-dan') {
      e.preventDefault();
      onOpenProgramModal('binh-dan-hoc-vu-tai-chinh');
    } else if (shortcutId === 'but-pha') {
      e.preventDefault();
      onOpenProgramModal('but-pha-tai-chinh');
    } else if (shortcutId === 'tinh-hoa') {
      e.preventDefault();
      onOpenProgramModal('tinh-hoa-thinh-vuong');
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-kem/10">
      {/* Background Hall Image with Deep Abyssal Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://thinhvuongso.vn/anh/c04-hoi-truong.webp"
          alt="Hội trường học tập Thịnh Vượng Số"
          className="w-full h-full object-cover object-center opacity-[0.12] scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 75% 30%, rgba(44, 59, 77, 0.45) 0%, rgba(27, 38, 50, 0.94) 65%, #1B2632 100%)',
          }}
        />
      </div>

      <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="nhan">
              <span>Thịnh Vượng Số · Hệ sinh thái huấn luyện thực chất</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-kem leading-[1.14]">
              Phát triển năng lực{' '}
              <em className="font-serif italic font-semibold text-cam">làm chủ</em> đời
              sống, công việc và tài chính.
            </h1>

            <p className="text-base sm:text-lg text-yen leading-relaxed max-w-2xl">
              Nơi kết nối 4 trụ cột{' '}
              <strong className="text-kem font-medium">
                Phát triển bản thân, Tài chính, Kinh doanh và Đầu tư
              </strong>{' '}
              thành một lộ trình nhất quán · giúp bạn nhìn rõ thực trạng, gỡ đúng nút thắt
              gốc và xây dựng sự thịnh vượng bền vững trên chính con số thật của mình.
            </p>

            {/* Credibility Micro-Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs text-yen bg-xanh/35 border border-kem/10 px-3.5 py-2.5 rounded">
                <CheckCircle2 className="w-4 h-4 text-cam shrink-0" />
                <span>Lấy Phát triển bản thân làm gốc</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-yen bg-xanh/35 border border-kem/10 px-3.5 py-2.5 rounded">
                <CheckCircle2 className="w-4 h-4 text-cam shrink-0" />
                <span>Học đến đâu làm ra bảng số đến đó</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-yen bg-xanh/35 border border-kem/10 px-3.5 py-2.5 rounded">
                <CheckCircle2 className="w-4 h-4 text-cam shrink-0" />
                <span>Đồng hành giữ nhịp dài hạn 12 tháng</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href="#bai-test" className="btn-p text-sm sm:text-base">
                <Compass className="w-5 h-5" />
                <span>Làm bài test 3 câu chọn điểm bắt đầu</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#chuong-trinh" className="btn-o text-sm sm:text-base">
                <Layers className="w-4 h-4 text-cam" />
                <span>Khám phá 5 tầng chương trình</span>
              </a>
            </div>
          </div>

          {/* Right Column: Animated 3-Ring Orbit Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[390px] sm:h-[390px] flex items-center justify-center">
              {/* Outer Ambient Glow */}
              <div
                className="absolute inset-6 rounded-full blur-2xl opacity-35 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,177,98,0.28) 0%, rgba(44,59,77,0.4) 60%, transparent 100%)',
                }}
              />

              {/* Outer Ring (Ring 3) */}
              <div className="absolute inset-0 rounded-full border border-kem/10 orbit-slow">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-nen-sau border border-kem/20 text-[10px] font-mono text-yen whitespace-nowrap">
                  04 · Quản trị vốn & Đầu tư
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-nen-sau border border-kem/20 text-[10px] font-mono text-yen whitespace-nowrap">
                  03 · Tạo giá trị & Kinh doanh
                </div>
              </div>

              {/* Middle Ring (Ring 2) */}
              <div className="absolute inset-10 sm:inset-12 rounded-full border border-dashed border-cam/30 orbit-reverse">
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-3 h-3 rounded-full bg-cam shadow-[0_0_12px_#FFB162]" />
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-kem/70" />
              </div>

              {/* Inner Ring (Ring 1) */}
              <div className="absolute inset-20 sm:inset-24 rounded-full border border-kem/20 bg-xanh/40 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4 shadow-inner">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cam">
                  Trụ cột gốc
                </span>
                <p className="font-serif italic text-lg sm:text-xl text-kem font-semibold mt-1">
                  Phát triển bản thân
                </p>
                <span className="text-[11px] text-yen mt-1">
                  Nhận thức · Nội lực · Kỷ luật
                </span>
              </div>

              {/* Corner Floating Stat Pill */}
              <button
                type="button"
                onClick={() => onOpenProgramModal('but-pha-tai-chinh')}
                className="absolute bottom-2 right-0 sm:right-2 bg-nen-sau/95 border border-cam/45 rounded px-3.5 py-2 text-left shadow-xl hover:border-cam transition-colors group"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-cam">
                  <Sparkles className="w-3 h-3" />
                  <span>Khóa gần nhất</span>
                </div>
                <p className="text-xs font-semibold text-kem group-hover:text-cam transition-colors">
                  Bứt Phá Tài Chính · 06/12
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* 6 Quick-Action Shortcuts Bar (#loi-tat) */}
        <div id="loi-tat" className="mt-14 pt-10 border-t border-kem/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <span className="font-mono text-xs uppercase tracking-widest text-yen">
              Lối tắt theo đúng nhu cầu hiện tại của bạn
            </span>
            <span className="text-xs text-yen/80">
              Chọn 1 trong 6 điểm chạm bên dưới để đi thẳng vào nội dung cần tìm
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
            {QUICK_SHORTCUTS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleShortcutClick(e, item.id)}
                className={`the p-4 flex flex-col justify-between group ${
                  item.isHighlight ? 'vien-chay bg-xanh/40' : ''
                }`}
              >
                <div>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider block mb-1.5 ${
                      item.isHighlight ? 'text-cam font-semibold' : 'text-yen'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <h2 className="text-sm font-semibold text-kem group-hover:text-cam transition-colors leading-snug">
                    {item.title}
                  </h2>
                </div>
                <div className="mt-4 pt-2.5 border-t border-kem/10 flex items-center justify-between text-xs text-yen group-hover:text-cam transition-colors">
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 5 Core Ecosystem Metrics (#dtv-dem) */}
        <div
          id="dtv-dem"
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6"
        >
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="bg-nen-sau/70 border border-kem/10 rounded p-4 flex flex-col justify-between"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-cam">
                {stat.value}
                <span className="text-lg sm:text-xl font-sans font-semibold text-kem">
                  {stat.suffix}
                </span>
              </div>
              <div className="mt-2">
                <p className="text-xs sm:text-sm font-semibold text-kem">{stat.label}</p>
                <p className="text-[11px] text-yen mt-0.5">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Marquee Ticker */}
      <div className="mt-14 border-y border-kem/10 bg-nen-sau/90 py-3 overflow-hidden">
        <div className="marquee-track flex items-center gap-8">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((text, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-yen">
                {text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cam/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
