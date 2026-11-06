import React from 'react';
import { ArrowUpRight, Radio, Sparkles } from 'lucide-react';

interface TopAnnouncementBarProps {
  onOpenProgramModal: (programId: string) => void;
}

export const TopAnnouncementBar: React.FC<TopAnnouncementBarProps> = ({
  onOpenProgramModal,
}) => {
  return (
    <div className="bg-nen-chan border-b border-kem/10 text-xs text-yen relative z-50">
      <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Open enrollment announcement */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cam/15 border border-cam/40 text-cam font-mono text-[11px] uppercase tracking-wider font-medium">
            <Sparkles className="w-3 h-3" />
            Đang mở đăng ký
          </span>
          <span className="text-kem font-medium">
            Bứt Phá Tài Chính (06/12/2026 – 10/01/2027)
          </span>
          <button
            type="button"
            onClick={() => onOpenProgramModal('but-pha-tai-chinh')}
            className="text-cam hover:underline inline-flex items-center gap-1 font-medium"
          >
            Xem lộ trình 6 buổi
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Weekly LIVE Người Dẫn Đường */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#cong-dong"
            className="inline-flex items-center gap-2 text-yen hover:text-kem transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nau opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nau"></span>
            </span>
            <Radio className="w-3.5 h-3.5 text-cam" />
            <span className="font-mono text-[11px] tracking-wide">
              LIVE Người Dẫn Đường · 20h30 Thứ Năm hàng tuần
            </span>
          </a>
          <span className="text-kem/20">|</span>
          <a
            href="https://zalo.me/84985878672"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-yen hover:text-cam transition-colors"
          >
            Hotline/Zalo: 0985.878.672
          </a>
        </div>
      </div>
    </div>
  );
};
