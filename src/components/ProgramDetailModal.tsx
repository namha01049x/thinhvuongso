import React from 'react';
import { ProgramItem } from '../data/dtvData';
import {
  X,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ExternalLink,
  AlertCircle,
  GraduationCap,
  Lock,
} from 'lucide-react';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  onClose: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
}) => {
  if (!program) return null;

  const handleRegisterScroll = () => {
    onClose();
    const formEl = document.getElementById('dong-hanh');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-nen-sau border border-cam/40 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="flex items-start justify-between gap-4 border-b border-kem/10 pb-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-cam text-abyssal font-mono text-xs font-bold uppercase">
                {program.statusLabel}
              </span>
              <span className="font-mono text-xs text-yen">{program.tierLabel}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-kem pt-1">
              {program.title}
            </h3>
            <p className="text-sm font-serif italic text-cam">“{program.tagline}”</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            className="p-2 rounded bg-xanh text-kem hover:text-cam shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview & Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm text-yen leading-relaxed">{program.description}</p>

            <div className="p-4 rounded bg-abyssal border border-kem/10 space-y-2 text-xs">
              <p className="text-kem">
                <strong className="text-cam font-mono uppercase">Hình thức:</strong>{' '}
                {program.format}
              </p>
              {program.schedule && (
                <p className="text-kem flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cam shrink-0" />
                  <span>{program.schedule}</span>
                </p>
              )}
            </div>

            {/* Target Audience */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-cam">
                Chương trình được thiết kế dành riêng cho:
              </h4>
              <ul className="space-y-2">
                {program.forWhom.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-kem"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cam shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {program.notForWhom && (
              <div className="space-y-2 pt-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-nau">
                  Không phù hợp nếu bạn:
                </h4>
                <ul className="space-y-1.5">
                  {program.notForWhom.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-yen"
                    >
                      <AlertCircle className="w-4 h-4 text-nau shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Pricing & Deliverables Box */}
          <div className="lg:col-span-5 space-y-4">
            {program.priceInfo && (
              <div className="p-5 rounded bg-abyssal border border-cam/35 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-cam block">
                  Thông tin học phí & Ưu đãi
                </span>
                {program.priceInfo.earlyBird ? (
                  <div className="space-y-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-yen">Đăng ký sớm (GĐ1):</span>
                      <span className="text-lg font-bold text-cam">
                        {program.priceInfo.earlyBird}
                      </span>
                    </div>
                    {program.priceInfo.phase2 && (
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-yen">Giai đoạn 2:</span>
                        <span className="text-sm font-semibold text-kem">
                          {program.priceInfo.phase2}
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-yen">Học phí tiêu chuẩn:</span>
                      <span className="text-xs text-yen line-through">
                        {program.priceInfo.standard}
                      </span>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm font-semibold text-kem">
                    {program.priceInfo.standard}
                  </p>
                )}
                {program.priceInfo.note && (
                  <p className="text-[11px] text-yen pt-2 border-t border-kem/10">
                    {program.priceInfo.note}
                  </p>
                )}
              </div>
            )}

            <div className="p-5 rounded bg-abyssal border border-kem/10 space-y-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-cam block">
                Quyền lợi & Công cụ thực hành đi kèm:
              </span>
              <ul className="space-y-2">
                {program.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-kem">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cam shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Stages / Syllabus */}
        <div className="space-y-3 pt-4 border-t border-kem/10">
          <h4 className="font-mono text-xs uppercase tracking-wider text-cam">
            Chi tiết nội dung khung chương trình ({program.stages.length} phần):
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.stages.map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded bg-abyssal border border-kem/10 space-y-2"
              >
                <span className="font-mono text-xs text-cam font-bold">
                  {st.stageNumber}
                </span>
                <h5 className="text-base font-bold text-kem">{st.title}</h5>
                <p className="text-xs text-yen">{st.focus}</p>
                <ul className="space-y-1 pt-2 border-t border-kem/5">
                  {st.outcomes.map((out, j) => (
                    <li key={j} className="text-xs text-kem/90 flex items-start gap-1.5">
                      <span className="text-cam">•</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="pt-4 border-t border-kem/10 flex flex-wrap items-center justify-between gap-4">
          {program.externalUrl ? (
            <a
              href={program.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-o text-xs"
            >
              <span>Mở chuyên trang {program.previewUrl?.replace('https://', '')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={handleRegisterScroll}
            className="btn-p text-xs sm:text-sm"
          >
            <span>Đăng ký tư vấn / Giữ chỗ chương trình này</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface StudentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentPortalModal: React.FC<StudentPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-nen-sau border border-cam/40 rounded-lg max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-kem/10 pb-4">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-6 h-6 text-cam" />
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-cam block">
                Khu Học Tập Thịnh Vượng Số
              </span>
              <h3 className="text-lg font-bold text-kem">
                Cổng Học Viên · Khu Học Tập Thực Hành
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded bg-xanh text-kem hover:text-cam"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-yen leading-relaxed">
          Hệ thống Khu Học Tập dành cho học viên chính thức của các chương trình{' '}
          <strong className="text-kem">Bình Dân Học Vụ Tài Chính</strong>,{' '}
          <strong className="text-kem">Bứt Phá Tài Chính</strong> và{' '}
          <strong className="text-kem">Tinh Hoa Thịnh Vượng</strong>.
        </p>

        <div className="p-4 rounded bg-abyssal border border-kem/10 space-y-3 text-xs text-yen">
          <div className="flex items-center gap-2 text-kem font-medium">
            <Lock className="w-4 h-4 text-cam" />
            <span>Tính năng bên trong Cổng Học Viên:</span>
          </div>
          <ul className="space-y-1.5 pl-6 list-disc">
            <li>Xem lại toàn bộ bản ghi Zoom chất lượng cao theo từng buổi</li>
            <li>Tải biểu mẫu kiểm kê tài chính, dòng tiền và khung 5 lớp</li>
            <li>Nộp bài tập thực hành trên số thật và nhận phản hồi</li>
            <li>Theo dõi tiến độ rèn luyện xuyên suốt 12 tháng</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href="khuhoctap"
            className="btn-p w-full justify-center text-xs sm:text-sm"
          >
            <span>Truy cập Khu Học Tập Thịnh Vượng Số ↗</span>
          </a>
          <button
            type="button"
            onClick={() => {
              onClose();
              document.getElementById('dong-hanh')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-o w-full justify-center text-xs"
          >
            <span>Chưa có tài khoản? Đăng ký học</span>
          </button>
        </div>
      </div>
    </div>
  );
};
