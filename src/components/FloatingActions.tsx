import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 500);
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top 2px Burning Flame Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none">
        <div
          className="h-full bg-cam transition-all duration-75 shadow-[0_0_8px_#FFB162]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Bottom Right Floating Stack (Zalo + Back to Top) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Lên đầu trang"
            className="w-11 h-11 rounded-full bg-nen-sau/90 border border-kem/20 text-kem hover:text-cam hover:border-cam flex items-center justify-center shadow-lg transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Zalo Floating Button with Pulse Ring */}
        <a
          href="https://zalo.me/84985878672"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn Zalo Đạo Thịnh Vượng 0985.878.672"
          className="group relative flex items-center gap-2.5 bg-cam text-abyssal font-semibold px-4 py-3 rounded-full shadow-xl hover:bg-[#ffc07d] transition-all"
        >
          <span
            className="absolute inset-0 rounded-full border-2 border-cam pointer-events-none"
            style={{ animation: 'song 2.4s ease-out infinite' }}
          />
          <MessageCircle className="w-5 h-5 fill-abyssal" />
          <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline">
            Zalo Hỗ trợ
          </span>
        </a>
      </div>
    </>
  );
};
