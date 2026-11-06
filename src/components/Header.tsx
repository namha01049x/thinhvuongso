import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, GraduationCap, ArrowRight, PhoneCall } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface HeaderProps {
  onOpenPortalModal: () => void;
}

const NAV_LINKS = [
  { label: 'Về ĐTV', href: '#ve-dtv' },
  { label: 'Hành trình 5 tầng', href: '#hanh-trinh' },
  { label: 'Bài test 3 câu', href: '#bai-test' },
  { label: 'Chương trình', href: '#chuong-trinh' },
  { label: 'Học viện', href: '#hoc-vien' },
  { label: 'Phương pháp', href: '#phuong-phap' },
  { label: 'Chuyên san', href: '#chuyen-san' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenPortalModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-abyssal/90 backdrop-blur-md border-b border-kem/10 shadow-lg shadow-black/25 py-3'
          : 'bg-abyssal/75 backdrop-blur-sm border-b border-kem/5 py-4'
      }`}
    >
      <div className="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Đạo Thịnh Vượng - Trang chủ"
        >
          <div className="w-10 h-10 rounded bg-xanh/80 border border-cam/35 flex items-center justify-center relative overflow-hidden group-hover:border-cam transition-colors">
            <svg
              viewBox="0 0 40 40"
              className="w-6 h-6 text-cam"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="15"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeDasharray="3 2"
              />
              <circle
                cx="20"
                cy="20"
                r="9"
                stroke="#EEE9DF"
                strokeWidth="1.2"
                strokeOpacity="0.6"
              />
              <path
                d="M20 7L23.5 16.5L33 20L23.5 23.5L20 33L16.5 23.5L7 20L16.5 16.5L20 7Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="rgba(255,177,98,0.15)"
              />
              <circle cx="20" cy="20" r="2.5" fill="#FFB162" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-base sm:text-lg tracking-wider text-kem uppercase leading-none">
              Đạo Thịnh Vượng
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-yen uppercase mt-1">
              Phát triển bản thân · Tài chính · Kinh doanh
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6" aria-label="Điều hướng chính">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-yen hover:text-cam transition-colors font-medium py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenPortalModal}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded text-xs font-mono uppercase tracking-wider text-kem bg-xanh/50 hover:bg-xanh border border-kem/15 hover:border-cam/40 transition-all"
          >
            <GraduationCap className="w-4 h-4 text-cam" />
            Cổng học viên
          </button>

          <a
            href="#dong-hanh"
            className="btn-p !py-2.5 !px-4 text-xs uppercase tracking-wider font-mono"
          >
            <span>Đăng ký tư vấn 1-1</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#bai-test"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-cam/15 border border-cam/40 text-cam text-xs font-medium"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Test 3 câu</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-xanh/60 border border-kem/15 text-kem hover:text-cam focus:outline-none"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-nen-sau border-b border-kem/15 overflow-hidden"
          >
            <div className="max-w-dtv mx-auto px-4 py-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 rounded bg-xanh/35 hover:bg-xanh/70 text-kem hover:text-cam text-sm font-medium flex items-center justify-between transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-yen" />
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-kem/10 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortalModal();
                  }}
                  className="btn-o w-full justify-center text-sm !py-2.5"
                >
                  <GraduationCap className="w-4 h-4 text-cam" />
                  <span>Khu Học Tập Thịnh Vượng Số ↗</span>
                </button>
                <a
                  href="#dong-hanh"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-p w-full justify-center text-sm !py-2.5"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Đăng ký tư vấn & Đồng hành 1-1</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
