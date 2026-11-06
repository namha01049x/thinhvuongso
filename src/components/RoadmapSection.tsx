import React, { useState } from 'react';
import { ROADMAP_STATIONS, RoadmapStation } from '../data/dtvData';
import { ArrowRight, CheckCircle2, Compass, Sparkles } from 'lucide-react';

interface RoadmapSectionProps {
  onOpenProgramModal: (programId: string) => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  onOpenProgramModal,
}) => {
  const [activeStation, setActiveStation] = useState<RoadmapStation>(
    ROADMAP_STATIONS[2] // Default highlight Tầng 2 (Bứt Phá Tài Chính)
  );

  const handleStationAction = (target: string) => {
    if (target.startsWith('program:')) {
      const programId = target.replace('program:', '');
      onOpenProgramModal(programId);
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hanh-trinh"
      className="py-20 lg:py-28 bg-nen-sau/70 border-b border-kem/10 relative overflow-hidden"
    >
      <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="nhan">
              <span>Lộ trình 5 tầng học tập · Đi đúng nấc thang năng lực</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-kem leading-tight">
              Một con đường học tập.{' '}
              <em className="font-serif italic text-cam font-semibold">
                Nhiều điểm bắt đầu.
              </em>
            </h2>
            <p className="text-yen text-base sm:text-lg leading-relaxed">
              Bạn không cần phải học tất cả cùng lúc. Tùy vào việc bạn đang cần xây móng
              căn bản, tháo gỡ nút thắt dòng tiền trước mắt hay tìm người giữ nhịp dài hạn
              12 tháng, hãy chọn đúng trạm dừng phù hợp nhất.
            </p>
          </div>

          <a href="#bai-test" className="btn-o text-xs sm:text-sm shrink-0">
            <Compass className="w-4 h-4 text-cam" />
            <span>Chưa rõ tầng nào? Làm bài test 3 câu</span>
          </a>
        </div>

        {/* Desktop Interactive SVG Curved Road */}
        <div className="hidden lg:block bg-abyssal/80 border border-kem/10 rounded-lg p-8 relative">
          <div className="flex items-center justify-between text-xs font-mono text-yen mb-2">
            <span>Bấm vào từng trạm (Tầng 0 → Tầng 4) trên bản đồ để xem chi tiết</span>
            <span className="text-cam flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Đang xem: {activeStation.tier} · {activeStation.name}
            </span>
          </div>

          <svg
            viewBox="0 0 1200 230"
            className="w-full h-auto overflow-visible"
            aria-label="Bản đồ 5 tầng học tập Đạo Thịnh Vượng"
          >
            <defs>
              <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(238,233,223,0.2)" />
                <stop offset="50%" stopColor="#FFB162" />
                <stop offset="100%" stopColor="rgba(255,177,98,0.35)" />
              </linearGradient>
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Dashed Track */}
            <path
              id="dtv-road-path"
              d="M 110 165 C 220 165, 220 85, 330 85 C 465 85, 465 155, 600 155 C 735 155, 735 75, 870 75 C 980 75, 980 135, 1090 135"
              fill="none"
              stroke="url(#roadGrad)"
              strokeWidth="3"
              strokeDasharray="8 6"
            />

            {/* Animated Traveling Light Particle */}
            <circle r="5" fill="#FFB162" filter="url(#glow)">
              <animateMotion
                dur="9s"
                repeatCount="indefinite"
                path="M 110 165 C 220 165, 220 85, 330 85 C 465 85, 465 155, 600 155 C 735 155, 735 75, 870 75 C 980 75, 980 135, 1090 135"
              />
            </circle>

            {/* 5 Interactive Station Nodes */}
            {ROADMAP_STATIONS.map((station) => {
              const isSelected = activeStation.tier === station.tier;
              const isOpen = station.status === 'open';
              return (
                <g
                  key={station.tier}
                  className="cursor-pointer group"
                  onClick={() => setActiveStation(station)}
                >
                  {/* Pulse ring for open/selected stations */}
                  {(isSelected || isOpen) && (
                    <circle
                      cx={station.cx}
                      cy={station.cy}
                      r={isSelected ? 26 : 20}
                      fill="none"
                      stroke="#FFB162"
                      strokeWidth="1.5"
                      strokeOpacity={isSelected ? '0.6' : '0.3'}
                    />
                  )}

                  {/* Main Station Circle */}
                  <circle
                    cx={station.cx}
                    cy={station.cy}
                    r={isSelected ? 16 : 12}
                    fill={isSelected ? '#FFB162' : '#1B2632'}
                    stroke="#FFB162"
                    strokeWidth="2.5"
                  />

                  {/* Tier Label */}
                  <text
                    x={station.cx}
                    y={station.cy - 28}
                    textAnchor="middle"
                    className="font-mono text-[11px] uppercase tracking-wider fill-[#FFB162] font-semibold"
                  >
                    {station.tier}
                  </text>

                  {/* Station Name */}
                  <text
                    x={station.cx}
                    y={station.cy + 36}
                    textAnchor="middle"
                    className={`font-sans text-xs font-semibold ${
                      isSelected ? 'fill-[#EEE9DF]' : 'fill-[#C9C1B1]'
                    }`}
                  >
                    {station.name.length > 26
                      ? station.name.slice(0, 25) + '…'
                      : station.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile & All-Device Station Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {ROADMAP_STATIONS.map((station) => {
            const isSelected = activeStation.tier === station.tier;
            return (
              <button
                key={station.tier}
                type="button"
                onClick={() => setActiveStation(station)}
                className={`p-3.5 rounded text-left border transition-all ${
                  isSelected
                    ? 'bg-xanh border-cam shadow-md'
                    : 'bg-abyssal/60 border-kem/10 hover:border-kem/30'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-mono text-xs font-bold text-cam">
                    {station.tier}
                  </span>
                  {station.status === 'open' && (
                    <span className="w-2 h-2 rounded-full bg-cam" />
                  )}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-kem line-clamp-1">
                  {station.name}
                </p>
                <p className="text-[11px] text-yen mt-0.5 line-clamp-1">{station.tag}</p>
              </button>
            );
          })}
        </div>

        {/* Active Station Detailed Breakdown Card */}
        <div className="the vien-chay p-6 sm:p-8 lg:p-10 bg-abyssal/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded bg-cam text-abyssal font-mono text-xs font-bold uppercase tracking-wider">
                  {activeStation.tier}
                </span>
                <span className="px-3 py-1 rounded bg-xanh/80 border border-kem/15 font-mono text-xs text-yen">
                  {activeStation.tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-kem">
                {activeStation.name}
              </h3>
              <p className="text-base sm:text-lg font-serif italic text-cam">
                “{activeStation.headline}”
              </p>
              <p className="text-sm sm:text-base text-yen leading-relaxed">
                {activeStation.description}
              </p>

              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-yen block mb-2">
                  Phù hợp nhất với:
                </span>
                <p className="text-sm text-kem bg-nen-sau/90 p-3.5 rounded border border-kem/10">
                  {activeStation.targetAudience}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-nen-sau p-6 rounded border border-kem/10 space-y-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-cam block mb-3">
                  Các chương trình thuộc {activeStation.tier}:
                </span>
                <ul className="space-y-2.5">
                  {activeStation.programs.map((prog, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-kem font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cam shrink-0 mt-0.5" />
                      <span>{prog}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-kem/10">
                <button
                  type="button"
                  onClick={() => handleStationAction(activeStation.ctaTarget)}
                  className="btn-p w-full justify-center text-sm"
                >
                  <span>{activeStation.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
