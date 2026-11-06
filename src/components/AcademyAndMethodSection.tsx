import React, { useState } from 'react';
import {
  ACADEMY_SCREENS,
  METHODOLOGY_STEPS,
  FIVE_DECISION_LAYERS,
  AcademyScreen,
} from '../data/dtvData';
import {
  CheckCircle2,
  ZoomIn,
  X,
  ShieldCheck,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';

interface AcademyAndMethodSectionProps {
  onOpenPortalModal: () => void;
}

export const AcademyAndMethodSection: React.FC<AcademyAndMethodSectionProps> = ({
  onOpenPortalModal,
}) => {
  const [zoomedScreen, setZoomedScreen] = useState<AcademyScreen | null>(null);

  return (
    <div className="divide-y divide-kem/10">
      {/* SECTION 1: Practical Academy (Khu Học Tập Thịnh Vượng Số) */}
      <section id="hoc-vien" className="py-20 lg:py-28 bg-abyssal relative">
        <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="nhan">
                <span>Khu Học Tập · Thịnh Vượng Số</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-kem leading-tight">
                Không chỉ nghe giảng qua Zoom.{' '}
                <em className="font-serif italic text-cam font-semibold">
                  Bạn có một Khu Học Tập số để làm thật.
                </em>
              </h2>
              <p className="text-yen text-base sm:text-lg leading-relaxed">
                Mỗi học viên tại Thịnh Vượng Số được cấp tài khoản riêng trên nền tảng{' '}
                <a href="khuhoctap" className="text-cam font-semibold hover:underline">Khu Học Tập Thịnh Vượng Số</a> · nơi lưu
                trữ toàn bộ bản ghi buổi học, kho biểu mẫu tài chính, bài tập thực hành trên
                số thật và bảng theo dõi tiến độ cá nhân.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenPortalModal}
                className="btn-p text-xs sm:text-sm"
              >
                <span>Trải nghiệm Cổng Học Viên</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Phone Screen Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACADEMY_SCREENS.map((screen, index) => (
              <div
                key={screen.id}
                className="the p-5 flex flex-col justify-between bg-nen-sau/80 group"
              >
                <div>
                  <span className="font-mono text-xs text-cam uppercase tracking-wider block mb-2">
                    {screen.step}
                  </span>
                  <h3 className="text-lg font-bold text-kem mb-1.5">{screen.title}</h3>
                  <p className="text-xs text-yen leading-relaxed mb-5">
                    {screen.description}
                  </p>

                  {/* Phone Frame Image */}
                  <div
                    onClick={() => setZoomedScreen(screen)}
                    className="relative mx-auto max-w-[230px] rounded-2xl overflow-hidden border-2 border-kem/15 bg-nen-chan shadow-2xl cursor-pointer group-hover:border-cam/60 transition-all"
                    style={{ animationDelay: `${index * 0.4}s` }}
                  >
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-abyssal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-abyssal/90 border border-cam text-cam text-xs font-mono flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5" />
                        Phóng to giao diện
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="mt-5 pt-4 border-t border-kem/10 space-y-1.5">
                  {screen.highlights.map((hl, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[11px] text-yen leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cam shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: 4-Step Training Methodology & Chị Lan Case Study */}
      <section id="phuong-phap" className="py-20 lg:py-28 bg-nen-sau/70 relative">
        <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="nhan">
              <span>Phương pháp huấn luyện 4 bước · Từ con số rối rắm đến hệ thống rõ ràng</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-kem leading-tight">
              Học qua bài toán thật:{' '}
              <em className="font-serif italic text-cam font-semibold">
                Nhìn rõ · Hiểu gốc · Làm thật · Quay lại.
              </em>
            </h2>
            <p className="text-yen text-base sm:text-lg leading-relaxed">
              Chúng tôi không dạy những lý thuyết tài chính viển vông ở phố Wall. Mọi khái
              niệm đều được quy đổi thành 4 bước thực hành tuần tự ngay trên thu nhập, chi
              tiêu và công việc kinh doanh thực tế của học viên.
            </p>
          </div>

          {/* 4 Methodology Cards with Chị Lan Real Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {METHODOLOGY_STEPS.map((item) => (
              <div key={item.number} className="the p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-cam">
                      {item.number}
                    </span>
                    {item.lanExample.metric && (
                      <span className="px-2.5 py-0.5 rounded bg-cam/15 border border-cam/35 font-mono text-[11px] text-cam">
                        {item.lanExample.metric}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-kem">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-kem/85">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-yen leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Chị Lan Real Situation Box */}
                <div className="mt-6 p-4 rounded bg-abyssal/90 border border-kem/10 space-y-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-cam flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {item.lanExample.label}
                  </span>
                  <p className="text-xs sm:text-sm text-kem/90 leading-relaxed">
                    {item.lanExample.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 5-Layer Capital Decision Framework (from Tinh Hoa Thịnh Vượng) */}
          <div className="the vien-chay p-6 sm:p-10 bg-abyssal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-cam font-mono text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Bộ lọc bảo toàn vốn · Tinh Hoa Thịnh Vượng</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-kem leading-snug">
                  Khung 5 lớp câu hỏi trước mọi quyết định xuống tiền hoặc mở rộng
                </h3>
                <p className="text-sm text-yen leading-relaxed">
                  Trước khi mua một tài sản, góp vốn cùng bạn bè hay mở thêm cửa hàng mới,
                  học viên Đạo Thịnh Vượng luôn đặt khoản tiền đó đi qua 5 màng lọc kỷ luật
                  này. Chỉ cần tắc ở 1 lớp, quyết định sẽ được dừng lại để bảo toàn vốn gốc.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {FIVE_DECISION_LAYERS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded bg-nen-sau border border-kem/10 hover:border-cam/40 transition-colors flex flex-col sm:flex-row sm:items-center gap-3"
                  >
                    <div className="sm:w-56 shrink-0">
                      <span className="font-mono text-xs font-semibold text-cam flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        {item.layer}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-kem leading-relaxed">
                      “{item.question}”
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Academy Phone Screen */}
      {zoomedScreen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setZoomedScreen(null)}
        >
          <div
            className="bg-nen-sau border border-cam/40 rounded-lg max-w-lg w-full p-5 space-y-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-kem/10 pb-3">
              <div>
                <span className="font-mono text-xs text-cam">{zoomedScreen.step}</span>
                <h4 className="text-base font-bold text-kem">{zoomedScreen.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setZoomedScreen(null)}
                className="p-1.5 rounded bg-xanh text-kem hover:text-cam"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto flex justify-center bg-nen-chan p-4 rounded">
              <img
                src={zoomedScreen.image}
                alt={zoomedScreen.title}
                className="max-h-[62vh] w-auto object-contain rounded"
              />
            </div>
            <p className="text-xs text-yen text-center">{zoomedScreen.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
