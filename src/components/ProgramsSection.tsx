import React, { useState, useMemo } from 'react';
import { PROGRAMS_DATA, ProgramItem } from '../data/dtvData';
import {
  Sparkles,
  Calendar,
  Layers,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Filter,
  BookOpen,
} from 'lucide-react';

interface ProgramsSectionProps {
  onOpenProgramModal: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onOpenProgramModal,
}) => {
  const [tierFilter, setTierFilter] = useState<string>('all');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const featuredPrograms = useMemo(
    () =>
      PROGRAMS_DATA.filter((p) =>
        ['but-pha-tai-chinh', 'tinh-hoa-thinh-vuong', 'binh-dan-hoc-vu-tai-chinh'].includes(
          p.id
        )
      ),
    []
  );

  const filteredPrograms = useMemo(() => {
    return PROGRAMS_DATA.filter((program) => {
      const matchTier = tierFilter === 'all' || program.tier === tierFilter;
      const matchRole =
        roleFilter === 'all' ||
        program.roles.includes(
          roleFilter as 'lam-cong' | 'tu-doanh' | 'chu-doanh-nghiep' | 'nha-dau-tu'
        );
      const matchStatus = statusFilter === 'all' || program.status === statusFilter;
      return matchTier && matchRole && matchStatus;
    });
  }, [tierFilter, roleFilter, statusFilter]);

  const getStatusBadgeStyle = (status: ProgramItem['status']) => {
    switch (status) {
      case 'open':
        return 'bg-cam text-abyssal font-bold';
      case 'self-paced':
        return 'bg-xanh border border-cam/40 text-cam';
      case 'free':
        return 'bg-xanh/80 border border-kem/20 text-kem';
      default:
        return 'bg-nen-chan border border-kem/10 text-yen';
    }
  };

  return (
    <section
      id="chuong-trinh"
      className="py-20 lg:py-28 border-b border-kem/10 relative bg-nen-sau/40"
    >
      <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Part 1: 3 Flagship Programs Spotlight */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl space-y-4">
              <div className="nhan">
                <span>Hệ thống chương trình đào tạo & huấn luyện</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-kem leading-tight">
                3 chương trình trụ cột đang mở lối cho{' '}
                <em className="font-serif italic text-cam font-semibold">
                  hành trình của bạn.
                </em>
              </h2>
              <p className="text-yen text-base sm:text-lg">
                Mỗi chương trình được thiết kế cho một tầng năng lực cụ thể: từ chuẩn hóa
                nền móng cá nhân (Tầng 1), giải quyết dứt điểm bài toán dòng tiền & thu nhập
                (Tầng 2) đến rèn luyện toàn diện 4 hệ trong 12 tháng (Tầng 3).
              </p>
            </div>
          </div>

          {/* 3 Flagship Cards with Browser Preview Frames */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {featuredPrograms.map((program) => {
              const isOpen = program.status === 'open';
              return (
                <div
                  key={program.id}
                  className={`the flex flex-col justify-between overflow-hidden ${
                    isOpen ? 'vien-chay bg-xanh/35' : ''
                  }`}
                >
                  <div>
                    {/* Browser Mockup Header & Screenshot */}
                    {program.previewImage && (
                      <div className="border-b border-kem/10 bg-nen-chan">
                        <div className="px-3.5 py-2 flex items-center justify-between border-b border-kem/10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-nau" />
                            <span className="w-2 h-2 rounded-full bg-cam" />
                            <span className="w-2 h-2 rounded-full bg-xanh" />
                          </div>
                          <span className="font-mono text-[10px] text-yen truncate">
                            {program.previewUrl?.replace('https://', '')}
                          </span>
                          <span className="text-[10px] font-mono text-cam">LIVE</span>
                        </div>
                        <div className="relative h-48 overflow-hidden group">
                          <img
                            src={program.previewImage}
                            alt={program.title}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-abyssal via-transparent to-transparent opacity-80" />
                          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                            <span
                              className={`px-2.5 py-0.5 rounded font-mono text-[11px] uppercase tracking-wider ${getStatusBadgeStyle(
                                program.status
                              )}`}
                            >
                              {program.statusLabel}
                            </span>
                            <span className="font-mono text-[11px] text-kem bg-abyssal/85 px-2.5 py-0.5 rounded border border-kem/15">
                              {program.tierLabel.split('·')[0]}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Body */}
                    <div className="p-6 space-y-4">
                      <div>
                        <span className="font-mono text-xs text-cam uppercase tracking-wider">
                          {program.tierLabel}
                        </span>
                        <h3 className="text-2xl font-bold text-kem mt-1">
                          {program.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-serif italic text-kem/90 mt-1.5">
                          “{program.tagline}”
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-yen leading-relaxed">
                        {program.description}
                      </p>

                      {program.schedule && (
                        <div className="flex items-center gap-2 text-xs text-kem bg-nen-sau/80 px-3 py-2 rounded border border-kem/10">
                          <Calendar className="w-4 h-4 text-cam shrink-0" />
                          <span>{program.schedule}</span>
                        </div>
                      )}

                      {program.priceInfo && (
                        <div className="p-3.5 rounded bg-nen-sau border border-cam/25 space-y-1">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-yen block">
                            Chính sách học phí / Tham gia:
                          </span>
                          {program.priceInfo.earlyBird ? (
                            <div className="flex flex-wrap items-baseline gap-2">
                              <span className="text-sm font-bold text-cam">
                                {program.priceInfo.earlyBird}
                              </span>
                              <span className="text-xs text-yen line-through">
                                {program.priceInfo.standard}
                              </span>
                            </div>
                          ) : (
                            <p className="text-xs font-semibold text-kem">
                              {program.priceInfo.standard}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Key Stages Summary */}
                      <div className="space-y-2 pt-1">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-yen block">
                          Cấu trúc chương trình ({program.stages.length} học phần):
                        </span>
                        <ul className="space-y-1.5">
                          {program.stages.slice(0, 4).map((st, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-kem/90"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-cam shrink-0 mt-0.5" />
                              <span>
                                <strong className="font-mono text-cam">
                                  {st.stageNumber.split('·')[0]}:
                                </strong>{' '}
                                {st.title}
                              </span>
                            </li>
                          ))}
                          {program.stages.length > 4 && (
                            <li className="text-xs text-cam font-mono pl-5">
                              + {program.stages.length - 4} chặng thực hành tiếp theo...
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTAs */}
                  <div className="p-6 pt-0 space-y-2.5">
                    <button
                      type="button"
                      onClick={() => onOpenProgramModal(program.id)}
                      className={`w-full justify-center text-xs sm:text-sm ${
                        isOpen ? 'btn-p' : 'btn-o'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Xem chi tiết khung đào tạo & Đăng ký</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {program.externalUrl && (
                      <a
                        href={program.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 text-center text-xs font-mono text-yen hover:text-cam flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Mở chuyên trang {program.previewUrl?.replace('https://', '')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Complete 8-Program Filterable Catalog */}
        <div className="pt-8 border-t border-kem/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-cam font-mono text-xs uppercase tracking-wider mb-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Tra cứu toàn bộ danh mục 8 chương trình thuộc Đạo Thịnh Vượng</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-kem">
                Bộ lọc chương trình theo Tầng học tập, Vai trò và Trạng thái
              </h3>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={tierFilter}
                onChange={(e) => setTierFilter(e.target.value)}
                aria-label="Lọc theo tầng học tập"
                className="px-3.5 py-2 rounded bg-abyssal border border-kem/15 text-xs sm:text-sm text-kem focus:outline-none focus:border-cam"
              >
                <option value="all">Tất cả tầng học tập (Tầng 0 → 3)</option>
                <option value="tang-0">Tầng 0 · Cộng đồng & Miễn phí</option>
                <option value="tang-1">Tầng 1 · Xây nền (Bình Dân Học Vụ)</option>
                <option value="tang-2">Tầng 2 · Học theo bài toán (Chuyên đề)</option>
                <option value="tang-3">Tầng 3 · Đồng hành chuyên sâu 12 tháng</option>
              </select>

              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                aria-label="Lọc theo vai trò"
                className="px-3.5 py-2 rounded bg-abyssal border border-kem/15 text-xs sm:text-sm text-kem focus:outline-none focus:border-cam"
              >
                <option value="all">Mọi vai trò</option>
                <option value="lam-cong">Người đi làm hưởng lương</option>
                <option value="tu-doanh">Người tự doanh / Freelancer</option>
                <option value="chu-doanh-nghiep">Chủ doanh nghiệp SME</option>
                <option value="nha-dau-tu">Người tích sản / Nhà đầu tư</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                aria-label="Lọc theo trạng thái"
                className="px-3.5 py-2 rounded bg-abyssal border border-kem/15 text-xs sm:text-sm text-kem focus:outline-none focus:border-cam"
              >
                <option value="all">Mọi trạng thái</option>
                <option value="open">Đang mở đăng ký</option>
                <option value="self-paced">Học theo lộ trình 6 chặng</option>
                <option value="free">Miễn phí hàng tuần</option>
                <option value="completed">Đã tổ chức (Lưu trữ Học viện)</option>
              </select>
            </div>
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredPrograms.map((item) => (
              <div
                key={item.id}
                className="the p-5 flex flex-col justify-between bg-abyssal/75"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-yen">
                      {item.tierLabel.split('·')[0]}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded font-mono text-[10px] ${getStatusBadgeStyle(
                        item.status
                      )}`}
                    >
                      {item.statusLabel}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-kem">{item.title}</h4>
                  <p className="text-xs text-yen leading-relaxed line-clamp-3">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-kem/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-yen">
                    {item.stages.length} phần nội dung
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenProgramModal(item.id)}
                    className="btn-l text-xs text-cam"
                  >
                    <span>Chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
