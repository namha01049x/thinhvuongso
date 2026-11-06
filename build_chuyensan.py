import json
import html
import re

with open('articles.json', 'r', encoding='utf-8') as f:
    articles = json.load(f)

# Sort or organize articles: spotlight first
spotlight_slug = 'ba-thu-trong-nha-can-sua-de-tien-bac-va-thinh-vuong-chay-ve-mui-am'
spotlight = next((a for a in articles if a['slug'] == spotlight_slug), articles[0])

# Category counters
cat_counts = {
    'all': len(articles),
    'Phát triển bản thân': sum(1 for a in articles if a['category'] == 'Phát triển bản thân'),
    'Tài chính': sum(1 for a in articles if a['category'] == 'Tài chính'),
    'Kinh doanh': sum(1 for a in articles if a['category'] == 'Kinh doanh'),
    'Đầu tư': sum(1 for a in articles if a['category'] == 'Đầu tư')
}

articles_json_escaped = json.dumps(articles, ensure_ascii=False)

html_content = f'''<!DOCTYPE html>
<html lang="vi" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chuyên San Thịnh Vượng Số · Bài Viết Triết Lý & Thực Hành | Mentor Trần Nam Hà</title>
  <meta name="description" content="Chuyên san Thịnh Vượng Số: Bài viết thực chiến theo 4 trụ cột Phát triển bản thân, Tài chính cá nhân, Kinh doanh tạo giá trị và Quản trị đầu tư cùng Mentor Trần Nam Hà." />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href="https://daothinhvuong.vn/chuyensan" />
  <meta name="theme-color" content="#1B2632" />
  <meta name="author" content="Thịnh Vượng Số · Mentor Trần Nam Hà" />

  <!-- Clean URL: Tu dong loai bo duoi .html tren thanh dia chi trinh duyet -->
  <script>
    (function () {{
      if (window.location.pathname.endsWith('.html')) {{
        var cleanPath = window.location.pathname
          .replace(/\/index\\.html$/, '/')
          .replace(/\\.html$/, '');
        if (!cleanPath) cleanPath = '/';
        window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
      }}
    }})();
  </script>

  <!-- Security & Privacy Meta Headers -->
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=(), usb=()" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="vi_VN" />
  <meta property="og:site_name" content="Thịnh Vượng Số" />
  <meta property="og:title" content="Chuyên San Thịnh Vượng Số · Bài Viết Triết Lý & Thực Hành | Mentor Trần Nam Hà" />
  <meta property="og:description" content="Khám phá các bài viết chuyên sâu về tư duy tiền bạc, gỡ nợ, kinh doanh và tích sản thực chiến từ Mentor Trần Nam Hà." />
  <meta property="og:url" content="https://daothinhvuong.vn/chuyensan" />
  <meta property="og:image" content="https://daothinhvuong.vn/anh/cd-bia-1.webp" />

  <!-- Favicon TVS -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%23141C25' stroke='%23E5B879' stroke-opacity='0.45' stroke-width='1.2'/%3E%3Cpath d='M11.5 28.5V19.5L15 16.5V28.5H11.5Z' fill='%23C9C1B1'/%3E%3Cpath d='M18.25 28.5V14.5L21.75 11.5V28.5H18.25Z' fill='%23EEE9DF'/%3E%3Cpath d='M25 28.5V9.5L28.5 6.5V28.5H25Z' fill='%23E5B879'/%3E%3C/svg%3E" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://cdn.tailwindcss.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" /></noscript>

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {{
      darkMode: 'class',
      theme: {{
        extend: {{
          colors: {{
            abyssal: 'rgb(var(--rgb-abyssal) / <alpha-value>)',
            xanh: 'rgb(var(--rgb-xanh) / <alpha-value>)',
            kem: 'rgb(var(--rgb-kem) / <alpha-value>)',
            yen: 'rgb(var(--rgb-yen) / <alpha-value>)',
            cam: 'rgb(var(--rgb-cam) / <alpha-value>)',
            nau: 'rgb(var(--rgb-nau) / <alpha-value>)',
            'nen-sau': 'rgb(var(--rgb-nen-sau) / <alpha-value>)',
            'nen-chan': 'rgb(var(--rgb-nen-chan) / <alpha-value>)',
          }},
          fontFamily: {{
            sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
            serif: ['"Playfair Display"', 'Georgia', 'serif'],
            mono: ['"IBM Plex Mono"', 'monospace'],
          }},
          maxWidth: {{
            dtv: '1280px',
            doc: '820px',
          }},
        }},
      }},
    }};
    try {{
      if (localStorage.getItem('tvs_theme') === 'light') {{
        document.documentElement.classList.add('theme-light');
      }}
    }} catch (e) {{}}
  </script>

  <style>
    :root {{
      --rgb-abyssal: 27 38 50;
      --rgb-nen-sau: 22 33 44;
      --rgb-nen-chan: 18 27 36;
      --rgb-xanh: 44 59 77;
      --rgb-kem: 238 233 223;
      --rgb-yen: 201 193 177;
      --rgb-cam: 255 177 98;
      --rgb-nau: 163 81 57;
      --canvas: #1B2632;
      --panel: #16212C;
      --footer: #121B24;
      --surface: #2C3B4D;
      --text-primary: #EEE9DF;
      --text-secondary: #C9C1B1;
      --accent: #FFB162;
      --abyssal: #1B2632;
      --xanh: #2C3B4D;
      --kem: #EEE9DF;
      --yen: #C9C1B1;
      --cam: #FFB162;
      --nau: #A35139;
      --nen-sau: #16212C;
      --nen-chan: #121B24;
      --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
    }}

    html.theme-light {{
      --rgb-abyssal: 240 235 225;
      --rgb-nen-sau: 248 245 238;
      --rgb-nen-chan: 228 220 206;
      --rgb-xanh: 214 204 188;
      --rgb-kem: 15 23 34;
      --rgb-yen: 44 56 72;
      --rgb-cam: 166 75 10;
      --rgb-nau: 136 46 22;
      --canvas: #F0EBE1;
      --panel: #F8F5EE;
      --footer: #E4DCCE;
      --surface: #D6CCBC;
      --text-primary: #0F1722;
      --text-secondary: #2C3848;
      --accent: #B8560F;
      --abyssal: #F0EBE1;
      --xanh: #D6CCBC;
      --kem: #0F1722;
      --yen: #2C3848;
      --cam: #A64B0A;
      --nau: #882E16;
      --nen-sau: #F8F5EE;
      --nen-chan: #E4DCCE;
    }}

    body {{
      background-color: var(--abyssal);
      color: var(--kem);
      font-family: 'Be Vietnam Pro', system-ui, -apple-system, sans-serif;
      line-height: 1.68;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }}

    .btn-p {{
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.25rem;
      border-radius: 0.375rem;
      background-color: #FFB162;
      color: #1B2632 !important;
      font-weight: 600;
      transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
      cursor: pointer;
      text-decoration: none;
    }}
    .btn-p:hover {{
      background-color: #FFA240;
      transform: translateY(-1px);
    }}

    .btn-o {{
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.25rem;
      border-radius: 0.375rem;
      background-color: transparent;
      border: 1px solid rgba(var(--rgb-kem) / 0.25);
      color: var(--kem);
      font-weight: 500;
      transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
      cursor: pointer;
      text-decoration: none;
    }}
    .btn-o:hover {{
      border-color: #FFB162;
      color: #FFB162;
      background-color: rgba(var(--rgb-cam) / 0.08);
    }}

    .nhan {{
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.25rem 0.625rem;
      border-radius: 0.25rem;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.6875rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      background-color: rgba(var(--rgb-kem) / 0.06);
      border: 1px solid rgba(var(--rgb-kem) / 0.18);
      color: var(--yen);
    }}

    /* Article content styling */
    .article-body h2 {{
      font-size: 1.45rem;
      font-weight: 700;
      color: var(--kem);
      margin-top: 2rem;
      margin-bottom: 0.85rem;
      line-height: 1.35;
      border-left: 3px solid #FFB162;
      padding-left: 0.75rem;
    }}
    .article-body h3 {{
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--kem);
      margin-top: 1.5rem;
      margin-bottom: 0.65rem;
      line-height: 1.4;
    }}
    .article-body p {{
      margin-bottom: 1.15rem;
      color: var(--kem);
      font-size: 1.05rem;
      line-height: 1.8;
    }}
    .article-body strong {{
      color: #FFB162;
      font-weight: 600;
    }}
    html.theme-light .article-body strong {{
      color: #A64B0A;
    }}
    .article-body blockquote {{
      border-left: 3px solid #FFB162;
      padding: 0.85rem 1.25rem;
      margin: 1.5rem 0;
      background-color: rgba(var(--rgb-cam) / 0.08);
      border-radius: 0 0.5rem 0.5rem 0;
      font-style: italic;
      color: var(--kem);
    }}
    .article-body ul, .article-body ol {{
      margin: 1rem 0 1.25rem 1.5rem;
      color: var(--kem);
    }}
    .article-body li {{
      margin-bottom: 0.5rem;
      line-height: 1.7;
    }}
    .article-body img {{
      max-width: 100%;
      height: auto;
      border-radius: 0.75rem;
      margin: 1.5rem auto;
      border: 1px solid rgba(var(--rgb-kem) / 0.15);
    }}
    .article-body figcaption {{
      text-align: center;
      font-size: 0.825rem;
      color: var(--yen);
      margin-top: -0.85rem;
      margin-bottom: 1.5rem;
      font-style: italic;
    }}

    /* Q&A details styling */
    .article-body details {{
      background-color: var(--panel);
      border: 1px solid rgba(var(--rgb-kem) / 0.15);
      border-radius: 0.5rem;
      padding: 0.85rem 1.15rem;
      margin-bottom: 0.75rem;
      transition: all 0.2s ease;
    }}
    .article-body details[open] {{
      border-color: rgba(var(--rgb-cam) / 0.4);
    }}
    .article-body summary {{
      font-weight: 600;
      color: var(--kem);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
    }}
    .article-body summary::-webkit-details-marker {{
      display: none;
    }}
    .article-body summary::after {{
      content: '+';
      color: #FFB162;
      font-family: monospace;
      font-size: 1.1rem;
      font-weight: bold;
    }}
    .article-body details[open] summary::after {{
      content: '-';
    }}
    .article-body details p {{
      margin-top: 0.75rem;
      font-size: 0.95rem;
      color: var(--yen);
      border-top: 1px solid rgba(var(--rgb-kem) / 0.1);
      padding-top: 0.75rem;
      margin-bottom: 0;
      line-height: 1.7;
    }}
    .article-body svg {{
      display: none;
    }}

    /* Custom Scrollbar for reader */
    #reader-modal-body::-webkit-scrollbar {{
      width: 6px;
    }}
    #reader-modal-body::-webkit-scrollbar-track {{
      background: rgba(0, 0, 0, 0.1);
    }}
    #reader-modal-body::-webkit-scrollbar-thumb {{
      background: rgba(255, 177, 98, 0.4);
      border-radius: 3px;
    }}
    #reader-modal-body::-webkit-scrollbar-thumb:hover {{
      background: rgba(255, 177, 98, 0.8);
    }}

    /* Light mode adaptations */
    html.theme-light .bg-nen-sau {{ background-color: #F8F5EE !important; }}
    html.theme-light .bg-nen-chan {{ background-color: #E4DCCE !important; }}
    html.theme-light .bg-abyssal {{ background-color: #F0EBE1 !important; }}
    html.theme-light .bg-xanh {{ background-color: #E6DECE !important; }}
    html.theme-light .border-kem\\/10 {{ border-color: rgba(15, 23, 34, 0.16) !important; }}
    html.theme-light .border-kem\\/20 {{ border-color: rgba(15, 23, 34, 0.26) !important; }}
  </style>
</head>
<body class="selection:bg-cam selection:text-abyssal">

  <!-- ==================== READING PROGRESS BAR ==================== -->
  <div id="reading-progress-container" class="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
    <div id="reading-progress-fill" class="h-full bg-cam transition-all duration-75 shadow-[0_0_8px_#FFB162]" style="width: 0%"></div>
  </div>

  <!-- ==================== HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-abyssal/90 backdrop-blur-md border-b border-kem/15 transition-colors">
    <div class="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
      
      <!-- Brand Logo -->
      <a href="./" class="flex items-center gap-3 group shrink-0" aria-label="Trang chủ Thịnh Vượng Số">
        <div class="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded border border-kem/20 bg-xanh/40">
          <svg class="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5.7 28V24.5L9.1 21.7V28H5.7Z" fill="#E5B879" />
            <path d="M12 28V19.8L15.4 17V28H12Z" fill="#D38A4A" />
            <path d="M18.3 28V15L21.7 12.2V28H18.3Z" fill="#EEE9DF" />
            <path d="M24.6 28V10.2L28 7.4V28H24.6Z" fill="#E5B879" />
          </svg>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-2">
            <span class="font-sans font-bold text-base sm:text-lg tracking-wide text-kem uppercase leading-none">
              Thịnh Vượng Số
            </span>
            <span class="px-1.5 py-0.5 rounded bg-kem/10 border border-kem/20 font-mono text-[9px] font-semibold text-yen tracking-widest uppercase leading-none">TVS</span>
          </div>
          <span class="font-mono text-[9px] sm:text-[10px] tracking-wider text-cam uppercase mt-1 leading-tight font-medium">
            Chuyên San · Triết Lý & Thực Hành
          </span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-medium" aria-label="Điều hướng Chuyên San">
        <a href="./" class="text-yen hover:text-cam transition-colors">Trang chủ TVS</a>
        <a href="khoahoc" class="text-yen hover:text-cam transition-colors">Hệ Thống Khóa Học ↗</a>
        <a href="khuhoctap" class="text-yen hover:text-cam transition-colors">Khu Học Tập ↗</a>
        <a href="chuyensan" class="text-cam font-semibold underline underline-offset-4">Chuyên San TVS</a>
        <a href="#danh-sach-bai" class="text-yen hover:text-cam transition-colors">15 Bài Viết Cốt Lõi</a>
        <a href="#ve-tac-gia" class="text-yen hover:text-cam transition-colors">Mentor Trần Nam Hà</a>
      </nav>

      <!-- Action & Theme Switch -->
      <div class="flex items-center gap-2 sm:gap-3">
        <a href="tel:0981501865" class="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-yen hover:text-cam transition-colors px-3 py-1.5 rounded border border-kem/20 bg-xanh/30">
          <svg class="w-3.5 h-3.5 text-cam" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <span>0981501865</span>
        </a>

        <!-- Nút chuyển theme sáng/tối -->
        <button type="button" id="header-theme-toggle" onclick="window.toggleSiteTheme()" aria-label="Chuyển giao diện sáng tối" class="hidden sm:inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-kem/30 hover:border-cam text-kem hover:text-cam text-xs font-medium transition-all bg-transparent cursor-pointer">
          <svg id="header-theme-sun" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          <svg id="header-theme-moon" class="w-3.5 h-3.5 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <span id="header-theme-label" class="hidden md:inline font-mono text-[11px]">Nền sáng</span>
        </button>

        <a href="khuhoctap" class="btn-p !py-1.5 sm:!py-2 !px-3 sm:!px-3.5 text-xs font-mono uppercase tracking-wider">
          <span>Khu học tập ↗</span>
        </a>

        <!-- Mobile hamburger button -->
        <button type="button" onclick="window.toggleChuyenSanMobileNav()" aria-label="Mở menu di động" class="lg:hidden p-2 rounded bg-xanh/60 border border-kem/20 text-kem hover:text-cam shrink-0 cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="cs-mobile-drawer" class="hidden lg:hidden bg-nen-sau border-b border-kem/15 p-4 space-y-2">
      <a href="./" class="block px-3 py-2 rounded bg-xanh/30 text-kem hover:text-cam text-xs font-medium">← Quay về Trang chủ Thịnh Vượng Số</a>
      <a href="khoahoc" class="block px-3 py-2 rounded bg-xanh/30 text-kem hover:text-cam text-xs font-medium">Hệ Thống Khóa Học Thực Chiến ↗</a>
      <a href="khuhoctap" class="block px-3 py-2 rounded bg-xanh/30 text-kem hover:text-cam text-xs font-medium">Khu Học Tập (Cổng Học Viên) ↗</a>
      <a href="#danh-sach-bai" onclick="window.toggleChuyenSanMobileNav()" class="block px-3 py-2 rounded bg-cam/20 text-cam text-xs font-semibold">15 Bài Viết Chuyên San Cốt Lõi</a>
      <a href="#ve-tac-gia" onclick="window.toggleChuyenSanMobileNav()" class="block px-3 py-2 rounded bg-xanh/30 text-kem hover:text-cam text-xs font-medium">Mentor Trần Nam Hà & Ban Biên Tập</a>
      <div class="pt-2 border-t border-kem/10 flex items-center justify-between">
        <span class="text-xs text-yen">Chế độ giao diện:</span>
        <button type="button" onclick="window.toggleSiteTheme()" class="px-2.5 py-1 rounded border border-kem/20 text-xs font-mono text-kem">Đổi Sáng/Tối</button>
      </div>
    </div>
  </header>

  <!-- ==================== HERO SECTION & SEARCH ==================== -->
  <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-abyssal via-nen-sau to-abyssal border-b border-kem/15">
    <div class="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 font-mono text-xs text-yen" aria-label="Breadcrumb">
        <a href="./" class="hover:text-cam transition-colors">Trang chủ TVS</a>
        <span>/</span>
        <span class="text-cam font-semibold">Chuyên San Thịnh Vượng Số</span>
      </nav>

      <!-- Main Headline -->
      <div class="max-w-3xl space-y-4">
        <div class="nhan text-cam border-cam/30 bg-cam/10">
          <span class="w-1.5 h-1.5 rounded-full bg-cam animate-pulse"></span>
          Chuyên San Thịnh Vượng Số · Đọc Chậm · Ngẫm Sâu
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-kem leading-tight">
          Bài Viết Theo Bốn Trụ Cột, Gắn Với Những Bài Toán Thật.
        </h1>
        <p class="text-yen text-base sm:text-lg leading-relaxed">
          Không lý thuyết sáo rỗng, không hô hào làm giàu nhanh. Từng bài viết đúc kết từ 15 năm kinh nghiệm thực chiến của Mentor Trần Nam Hà cùng đội ngũ Thịnh Vượng Số, giúp bạn tháo gỡ rối rắm tài chính, quản trị tâm lý và xây dựng sự thịnh vượng bền vững cho gia đình.
        </p>
      </div>

      <!-- Search & Filter Controls -->
      <div class="space-y-4 pt-2">
        <div class="relative max-w-xl">
          <input
            type="text"
            id="article-search-input"
            oninput="window.handleSearchArticles(this.value)"
            placeholder="Tìm kiếm bài viết theo từ khóa (tiền bạc, nợ, đất đai, thói quen, thu nhập...)"
            class="w-full px-4 py-3 pl-11 rounded-xl bg-nen-sau border border-kem/20 text-kem text-sm focus:border-cam focus:outline-none placeholder:text-yen/60 shadow-lg"
          />
          <svg class="w-5 h-5 text-yen absolute left-3.5 top-3.5 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <button type="button" id="clear-search-btn" onclick="window.clearSearch()" class="hidden absolute right-3 top-3 text-xs font-mono text-yen hover:text-cam px-2 py-0.5 rounded bg-xanh/40">
            Xóa
          </button>
        </div>

        <!-- Category Pills -->
        <div class="flex flex-wrap items-center gap-2 pt-1" id="category-pills">
          <button type="button" onclick="window.filterCategory('all')" class="cat-pill active px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all bg-cam text-abyssal font-bold" data-cat="all">
            Tất cả ({cat_counts['all']})
          </button>
          <button type="button" onclick="window.filterCategory('Phát triển bản thân')" class="cat-pill px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all bg-xanh/40 text-yen hover:text-kem hover:border-cam/50 border border-kem/15" data-cat="Phát triển bản thân">
            Phát triển bản thân ({cat_counts['Phát triển bản thân']})
          </button>
          <button type="button" onclick="window.filterCategory('Tài chính')" class="cat-pill px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all bg-xanh/40 text-yen hover:text-kem hover:border-cam/50 border border-kem/15" data-cat="Tài chính">
            Tài chính & Dòng tiền ({cat_counts['Tài chính']})
          </button>
          <button type="button" onclick="window.filterCategory('Kinh doanh')" class="cat-pill px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all bg-xanh/40 text-yen hover:text-kem hover:border-cam/50 border border-kem/15" data-cat="Kinh doanh">
            Kinh doanh & Tạo giá trị ({cat_counts['Kinh doanh']})
          </button>
          <button type="button" onclick="window.filterCategory('Đầu tư')" class="cat-pill px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all bg-xanh/40 text-yen hover:text-kem hover:border-cam/50 border border-kem/15" data-cat="Đầu tư">
            Đầu tư & Tích sản ({cat_counts['Đầu tư']})
          </button>
        </div>
      </div>

    </div>
  </section>

  <!-- ==================== SPOTLIGHT FEATURED ARTICLE ==================== -->
  <section id="spotlight-section" class="py-8 bg-nen-sau border-b border-kem/10">
    <div class="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-abyssal via-xanh/20 to-abyssal border border-cam/30 shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          <div class="lg:col-span-5 relative group overflow-hidden rounded-xl border border-kem/20 aspect-[16/10] cursor-pointer" onclick="window.openArticle('{spotlight['slug']}')">
            <img 
              src="{spotlight['image']}" 
              alt="{spotlight['title']}" 
              onerror="this.onerror=null;this.src='anh/cd-bia-1.webp';"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <span class="px-2.5 py-1 rounded bg-cam text-abyssal font-mono text-xs font-bold uppercase">
                Bài viết tiêu biểu
              </span>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-4">
            <div class="flex flex-wrap items-center gap-2 text-xs font-mono text-yen">
              <span class="px-2 py-0.5 rounded bg-kem/10 border border-kem/20 text-cam">{spotlight['category']}</span>
              <span>·</span>
              <span>{spotlight['date']}</span>
              <span>·</span>
              <span>{spotlight['read_time']}</span>
            </div>

            <h2 
              onclick="window.openArticle('{spotlight['slug']}')" 
              class="text-2xl sm:text-3xl font-bold text-kem hover:text-cam transition-colors cursor-pointer leading-snug"
            >
              {spotlight['title']}
            </h2>

            <p class="text-yen text-sm sm:text-base leading-relaxed line-clamp-3">
              {spotlight['lead']}
            </p>

            <div class="pt-2 flex flex-wrap items-center gap-4">
              <button 
                type="button" 
                onclick="window.openArticle('{spotlight['slug']}')" 
                class="btn-p !py-2.5 !px-5 text-xs font-mono uppercase tracking-wider"
              >
                <span>Đọc toàn văn bài viết →</span>
              </button>
              <span class="text-xs text-yen font-mono">Tác giả: Mentor Trần Nam Hà & Ban Biên Tập</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ==================== ARTICLE GRID (15 ARTICLES) ==================== -->
  <section id="danh-sach-bai" class="py-12 sm:py-16 lg:py-24 bg-abyssal border-b border-kem/10">
    <div class="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-kem/10">
        <div>
          <span class="nhan text-cam border-cam/30 bg-cam/10 mb-2">Thư viện bài viết</span>
          <h2 class="text-2xl sm:text-3xl font-bold text-kem">Tất cả bài viết Chuyên san Thịnh Vượng Số</h2>
        </div>
        <span id="article-count-display" class="font-mono text-xs text-yen">
          Hiển thị 15 bài viết
        </span>
      </div>

      <!-- Grid -->
      <div id="articles-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
'''

# Generate HTML for all 15 articles
for a in articles:
    html_content += f'''
        <article class="article-card group flex flex-col rounded-xl overflow-hidden bg-nen-sau border border-kem/10 hover:border-cam/50 transition-all duration-300 shadow-lg hover:-translate-y-1" data-category="{a['category']}" data-title="{html.escape(a['title'].lower())}" data-lead="{html.escape(a['lead'].lower())}">
          <div class="aspect-[16/10] overflow-hidden bg-abyssal relative cursor-pointer" onclick="window.openArticle('{a['slug']}')">
            <img 
              src="{a['image']}" 
              alt="{html.escape(a['title'])}" 
              onerror="this.onerror=null;this.src='anh/cd-bia-1.webp';"
              loading="lazy" 
              decoding="async" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute top-3 left-3">
              <span class="px-2 py-0.5 rounded bg-abyssal/90 border border-kem/20 text-cam font-mono text-[10px] font-semibold uppercase">
                {a['category']}
              </span>
            </div>
            <div class="absolute bottom-3 right-3">
              <span class="px-2 py-0.5 rounded bg-abyssal/90 border border-kem/20 text-yen font-mono text-[10px]">
                {a['read_time']}
              </span>
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2.5">
              <span class="font-mono text-[11px] text-yen/80 block">{a['date']}</span>
              <h3 
                onclick="window.openArticle('{a['slug']}')" 
                class="text-base sm:text-lg font-bold text-kem group-hover:text-cam transition-colors cursor-pointer line-clamp-2 leading-snug"
              >
                {a['title']}
              </h3>
              <p class="text-xs sm:text-sm text-yen/85 leading-relaxed line-clamp-3">
                {a['lead']}
              </p>
            </div>

            <div class="pt-3 border-t border-kem/10 flex items-center justify-between">
              <button 
                type="button" 
                onclick="window.openArticle('{a['slug']}')" 
                class="text-xs font-bold text-cam group-hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Đọc bài viết</span>
                <span>→</span>
              </button>
              <button 
                type="button" 
                onclick="window.shareArticleDirect('{a['slug']}', '{html.escape(a['title'])}')" 
                title="Sao chép liên kết bài viết" 
                class="p-1.5 rounded hover:bg-xanh/50 text-yen hover:text-cam transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              </button>
            </div>
          </div>
        </article>
'''

html_content += f'''
      </div>

      <!-- Empty state if search returns no results -->
      <div id="no-results-msg" class="hidden p-12 rounded-xl bg-nen-sau border border-kem/10 text-center space-y-3">
        <p class="text-base text-kem font-semibold">Không tìm thấy bài viết nào phù hợp với từ khóa.</p>
        <p class="text-xs text-yen">Vui lòng thử tìm với từ khóa khác như "nợ", "tiền", "nhà đất", "đầu tư", hoặc chọn tab Tất cả.</p>
        <button type="button" onclick="window.clearSearch()" class="btn-o !py-2 !px-4 text-xs font-mono">
          <span>Xem tất cả bài viết</span>
        </button>
      </div>

    </div>
  </section>

  <!-- ==================== AUTHOR & ADVISORY BOARD SECTION ==================== -->
  <section id="ve-tac-gia" class="py-12 sm:py-16 lg:py-20 bg-nen-sau border-b border-kem/10">
    <div class="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-6 sm:p-8 lg:p-10 rounded-2xl bg-abyssal border border-kem/15 space-y-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-cam/60 shadow-xl bg-xanh/40">
              <img src="anh/mentor-vo-hoai-nam.webp" alt="Mentor Trần Nam Hà" class="w-full h-full object-cover" />
            </div>
            <div>
              <span class="nhan text-cam border-cam/30 bg-cam/10 mb-1">Cố vấn chuyên môn</span>
              <h3 class="text-xl sm:text-2xl font-bold text-kem">Mentor Trần Nam Hà</h3>
              <p class="text-xs text-yen font-mono mt-0.5">Đồng sáng lập Hệ sinh thái Thịnh Vượng Số</p>
            </div>
          </div>

          <div class="lg:col-span-8 space-y-4 text-xs sm:text-sm text-yen leading-relaxed border-t lg:border-t-0 lg:border-l border-kem/10 pt-6 lg:pt-0 lg:pl-8">
            <p>
              Với hơn 15 năm kinh nghiệm quản trị tài chính doanh nghiệp, tái cấu trúc dòng vốn và cố vấn tài chính cá nhân cho hàng ngàn gia đình, Mentor Trần Nam Hà luôn giữ vững quan điểm: <strong class="text-kem">"Thịnh vượng tài chính bắt đầu từ gốc rễ nội tâm và cách vận hành một gia đình bình an, nề nếp."</strong>
            </p>
            <p>
              Toàn bộ bài viết trong Chuyên San Thịnh Vượng Số được chọn lọc từ những bài toán thật, tháo gỡ từng nút thắt về nợ nần, rò rỉ dòng tiền, bế tắc thu nhập và sai lầm đầu tư, nhằm cung cấp góc nhìn tỉnh táo, thực chứng và ứng dụng được ngay.
            </p>
            <div class="pt-2 flex flex-wrap items-center gap-3">
              <a href="khoahoc" class="btn-p !py-2 !px-4 text-xs font-mono uppercase tracking-wider">
                <span>Xem Khóa Học Thực Chiến ↗</span>
              </a>
              <a href="khuhoctap" class="btn-o !py-2 !px-4 text-xs font-mono">
                <span>Vào Khu Học Tập ↗</span>
              </a>
              <a href="https://zalo.me/0981501865" target="_blank" rel="noopener noreferrer" class="btn-o !py-2 !px-4 text-xs font-mono">
                <span>Nhắn Zalo Cố Vấn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ==================== CALL TO ACTION SECTION ==================== -->
  <section class="py-16 sm:py-20 bg-gradient-to-b from-abyssal via-nen-sau to-nen-chan border-b border-kem/10 text-center">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
      <span class="nhan text-cam border-cam/30 bg-cam/10">Bắt đầu từ một câu hỏi đúng</span>
      <h2 class="text-2xl sm:text-4xl font-bold text-kem leading-snug">
        Bạn chưa chắc nên bắt đầu từ bài viết hay khóa học nào?
      </h2>
      <p class="text-xs sm:text-base text-yen leading-relaxed">
        Làm bài test 3 câu hỏi nhanh để xác định chính xác tầng học phù hợp, hoặc kết nối trực tiếp với đội ngũ cố vấn chuyên môn qua Zalo.
      </p>
      <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="./#bai-test" class="btn-p w-full sm:w-auto justify-center !py-3 !px-6 text-xs sm:text-sm font-mono uppercase tracking-wider">
          <span>Làm bài test 3 câu ↗</span>
        </a>
        <a href="https://zalo.me/0981501865" target="_blank" rel="noopener noreferrer" class="btn-o w-full sm:w-auto justify-center !py-3 !px-6 text-xs sm:text-sm font-mono">
          <span>Nhắn tư vấn qua Zalo</span>
        </a>
        <a href="khuhoctap" class="btn-o w-full sm:w-auto justify-center !py-3 !px-6 text-xs sm:text-sm font-mono">
          <span>Vào Khu Học Tập</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ==================== FULL ARTICLE READER MODAL ==================== -->
  <div id="article-reader-modal" class="hidden fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden">
    
    <!-- Modal Card -->
    <div class="bg-abyssal border border-kem/20 rounded-2xl max-w-doc w-full h-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden relative">
      
      <!-- Sticky Modal Top Bar -->
      <div class="px-4 sm:px-6 py-3.5 bg-nen-sau border-b border-kem/15 flex items-center justify-between gap-3 shrink-0">
        <div class="flex items-center gap-2 truncate">
          <button 
            type="button" 
            onclick="window.closeArticle()" 
            class="text-yen hover:text-cam p-1.5 rounded hover:bg-xanh/40 transition-colors inline-flex items-center gap-1.5 text-xs font-mono cursor-pointer"
          >
            <span>←</span>
            <span class="hidden sm:inline">Quay lại danh sách</span>
          </button>
          <span class="text-kem/20 hidden sm:inline" aria-hidden="true">|</span>
          <span id="modal-top-category" class="px-2 py-0.5 rounded bg-kem/10 border border-kem/20 text-cam font-mono text-[10px] uppercase truncate">
            Chuyên san TVS
          </span>
        </div>

        <div class="flex items-center gap-2">
          <button 
            type="button" 
            onclick="window.copyCurrentArticleLink()" 
            class="p-1.5 rounded hover:bg-xanh/40 text-yen hover:text-cam transition-colors inline-flex items-center gap-1 text-xs font-mono"
            title="Sao chép liên kết bài viết"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            <span class="hidden sm:inline">Chia sẻ</span>
          </button>
          <button 
            type="button" 
            onclick="window.closeArticle()" 
            aria-label="Đóng bài đọc" 
            class="p-1.5 rounded hover:bg-red-500/20 text-yen hover:text-red-400 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>

      <!-- Scrollable Article Reader Body -->
      <div id="reader-modal-body" class="p-5 sm:p-8 lg:p-10 overflow-y-auto flex-1 space-y-6">
        
        <!-- Header Info -->
        <div class="space-y-3 pb-6 border-b border-kem/10">
          <div class="flex flex-wrap items-center gap-2 text-xs font-mono text-yen">
            <span id="modal-badge-cat" class="text-cam font-semibold">Phát triển bản thân</span>
            <span>·</span>
            <span id="modal-pub-date">04/11/2026</span>
            <span>·</span>
            <span id="modal-read-time">6 phút đọc</span>
          </div>

          <h1 id="modal-article-title" class="text-2xl sm:text-3xl lg:text-4xl font-bold text-kem leading-tight">
            Tiêu đề bài viết
          </h1>

          <p id="modal-article-lead" class="text-sm sm:text-base text-yen leading-relaxed italic bg-nen-sau p-4 rounded-xl border border-kem/10">
            Đoạn giới thiệu tóm tắt...
          </p>
        </div>

        <!-- Tom Tat Box (neu co) -->
        <div id="modal-tom-tat-box" class="p-4 rounded-xl bg-cam/10 border border-cam/30 space-y-2">
          <div class="font-mono text-xs text-cam font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>⚡</span>
            <span>Tóm tắt nhanh từ bài viết:</span>
          </div>
          <div id="modal-tom-tat-content" class="text-xs sm:text-sm text-kem leading-relaxed">
          </div>
        </div>

        <!-- Table of Contents (Muc luc tu dong) -->
        <div id="modal-toc-box" class="hidden p-4 sm:p-5 rounded-2xl bg-nen-sau border border-kem/15 space-y-3">
          <div class="flex items-center justify-between border-b border-kem/10 pb-2.5">
            <div class="flex items-center gap-2 font-mono text-xs text-cam font-bold uppercase tracking-wider">
              <svg class="w-4 h-4 text-cam" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h10M4 18h16"></path></svg>
              <span>Mục lục nội dung</span>
            </div>
            <span id="modal-toc-count" class="font-mono text-[11px] text-yen"></span>
          </div>
          <nav id="modal-toc-content" class="space-y-1">
          </nav>
        </div>

        <!-- Main Body Content -->
        <div id="modal-article-body" class="article-body">
        </div>

        <!-- Social Share Box (Facebook & Copy Link) -->
        <div class="py-8 my-6 border-y border-kem/15 text-center space-y-4">
          <p class="text-sm sm:text-base font-semibold text-kem">
            Nếu bạn thấy bài viết này có giá trị, hãy chia sẻ cho người cần nó!
          </p>
          <div class="flex items-center justify-center gap-3.5 flex-wrap">
            <button 
              type="button" 
              onclick="window.shareCurrentArticleFacebook()" 
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#C49A6C] hover:bg-[#B38859] text-[#141C25] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>Facebook</span>
            </button>
            <button 
              type="button" 
              onclick="window.copyCurrentArticleLink()" 
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#C49A6C] hover:bg-[#B38859] text-[#141C25] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copy link</span>
            </button>
          </div>
        </div>

        <!-- Author Profile Box Inside Reader -->
        <div class="pt-8 border-t border-kem/15">
          <div class="p-5 rounded-xl bg-nen-sau border border-kem/15 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div class="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-cam bg-xanh/40">
              <img src="anh/mentor-vo-hoai-nam.webp" alt="Mentor Trần Nam Hà" onerror="this.onerror=null;this.src='anh/cd-bia-1.webp';" class="w-full h-full object-cover" />
            </div>
            <div class="space-y-1.5 text-center sm:text-left">
              <span class="font-mono text-[10px] text-cam uppercase tracking-wider block">Tác giả & Cố vấn</span>
              <strong class="text-sm sm:text-base font-bold text-kem block">Mentor Trần Nam Hà</strong>
              <p class="text-xs text-yen leading-relaxed">
                Đồng sáng lập Thịnh Vượng Số. Hơn 15 năm huấn luyện và đồng hành cùng các gia đình và doanh nghiệp SME thiết lập nền tảng tài chính thịnh vượng vững chắc.
              </p>
            </div>
          </div>
        </div>

        <!-- Course CTA inside Article -->
        <div class="p-6 rounded-2xl bg-gradient-to-r from-nen-sau via-xanh/30 to-nen-sau border-2 border-cam/40 space-y-3">
          <span class="nhan text-cam border-cam/30 bg-cam/10">Ứng dụng thực chiến</span>
          <h4 class="text-lg font-bold text-kem">Thực hành trực tiếp trên con số thật của bạn</h4>
          <p class="text-xs sm:text-sm text-yen leading-relaxed">
            Đọc bài viết là để khai sáng góc nhìn. Để thật sự giải phóng nợ nần, vá lỗ hổng dòng tiền và xây dựng tài sản, hãy tham gia lớp học thực chiến hoặc truy cập Khu Học Tập.
          </p>
          <div class="pt-2 flex flex-wrap gap-2.5">
            <a href="khoahoc" class="btn-p !py-2 !px-4 text-xs font-mono uppercase tracking-wider">
              <span>Đăng Ký Khóa Học Bứt Phá ↗</span>
            </a>
            <a href="khuhoctap" class="btn-o !py-2 !px-4 text-xs font-mono">
              <span>Vào Khu Học Tập ↗</span>
            </a>
          </div>
        </div>

        <!-- Related Articles Section (Bai viet lien quan) -->
        <div class="pt-8 border-t border-kem/15 space-y-4">
          <div class="flex items-center justify-between pb-2 border-b border-kem/10">
            <div>
              <span class="nhan text-cam border-cam/30 bg-cam/10 mb-1">Gợi ý đọc tiếp</span>
              <h3 class="text-lg sm:text-xl font-bold text-kem">Bài viết liên quan & Đọc tiếp theo</h3>
            </div>
            <span class="text-xs text-yen font-mono">3 bài viết đề xuất</span>
          </div>
          <div id="modal-related-articles" class="space-y-3.5">
          </div>
        </div>

        <!-- Comments & Discussion Section -->
        <div id="modal-comments-section" class="pt-8 border-t border-kem/15 space-y-6">
          <div class="flex items-center justify-between pb-2 border-b border-kem/10">
            <div class="flex items-center gap-3">
              <h3 class="text-lg sm:text-xl font-bold text-kem">Thảo luận về bài viết</h3>
              <span id="modal-comments-count-badge" class="px-2.5 py-0.5 rounded-full bg-cam/20 border border-cam/40 text-cam text-xs font-mono font-semibold">
                Bình luận
              </span>
            </div>
            <span class="text-xs text-yen font-mono">Cộng đồng Thịnh Vượng Số</span>
          </div>

          <!-- Comment input form -->
          <div class="p-4 sm:p-5 rounded-2xl bg-nen-sau border border-kem/15 space-y-3.5">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-cam/20 border border-cam/40 flex items-center justify-center text-cam font-bold text-sm shrink-0">
                <span>✍</span>
              </div>
              <input 
                type="text" 
                id="comment-author-input" 
                placeholder="Họ và tên của bạn (hoặc để trống để làm Bạn đọc ẩn danh)..." 
                class="flex-1 px-3.5 py-2 rounded-xl bg-abyssal border border-kem/15 text-xs sm:text-sm text-kem focus:border-cam focus:outline-none placeholder:text-yen/50" 
              />
            </div>
            <textarea 
              id="comment-text-input" 
              rows="3" 
              placeholder="Viết góc nhìn, bài học tâm đắc hoặc câu hỏi của bạn về bài viết này..." 
              class="w-full px-3.5 py-2.5 rounded-xl bg-abyssal border border-kem/15 text-xs sm:text-sm text-kem focus:border-cam focus:outline-none placeholder:text-yen/50 resize-none"
            ></textarea>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
              <span class="text-[11px] text-yen/70 font-mono">Bình luận tuân thủ tinh thần xây dựng & triết lý Thịnh Vượng Số</span>
              <button 
                type="button" 
                onclick="window.submitComment()" 
                class="btn-p !py-2 !px-4 text-xs font-mono uppercase tracking-wider self-end sm:self-auto"
              >
                <span>Gửi bình luận →</span>
              </button>
            </div>
          </div>

          <!-- Comments List -->
          <div id="modal-comments-list" class="space-y-3.5">
          </div>
        </div>

        <!-- Next / Prev Buttons -->
        <div class="pt-6 border-t border-kem/10 flex items-center justify-between gap-4">
          <button 
            type="button" 
            id="modal-prev-btn" 
            onclick="window.navigateArticle(-1)" 
            class="btn-o !py-2 !px-3 sm:!px-4 text-xs font-mono"
          >
            <span>← Bài trước</span>
          </button>
          <button 
            type="button" 
            id="modal-next-btn" 
            onclick="window.navigateArticle(1)" 
            class="btn-p !py-2 !px-3 sm:!px-4 text-xs font-mono"
          >
            <span>Bài tiếp theo →</span>
          </button>
        </div>

      </div>

    </div>
  </div>

  <!-- ==================== TOAST NOTIFICATION ==================== -->
  <div id="toast-notify" class="hidden fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-nen-sau border-2 border-cam text-kem text-xs sm:text-sm font-medium shadow-2xl flex items-center gap-3 transition-all duration-300">
    <span class="text-lg">📋</span>
    <span id="toast-text">Đã sao chép liên kết bài viết!</span>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-nen-chan border-t border-kem/15 py-12 sm:py-16 text-yen">
    <div class="max-w-dtv mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Col 1: Brand Info -->
        <div class="space-y-3">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded bg-[#141C25] border border-kem/20 flex items-center justify-center">
              <svg class="w-5 h-5" viewBox="0 0 32 32" fill="none"><path d="M5.7 28V24.5L9.1 21.7V28H5.7Z" fill="#E5B879" /><path d="M12 28V19.8L15.4 17V28H12Z" fill="#D38A4A" /><path d="M18.3 28V15L21.7 12.2V28H18.3Z" fill="#EEE9DF" /><path d="M24.6 28V10.2L28 7.4V28H24.6Z" fill="#E5B879" /></svg>
            </div>
            <span class="font-sans font-bold text-base text-kem uppercase tracking-wider">Thịnh Vượng Số</span>
          </div>
          <p class="text-xs leading-relaxed">
            Hệ sinh thái giáo dục và huấn luyện thực hành xoay quanh 4 trụ cột: Phát triển bản thân, Tài chính cá nhân, Kinh doanh tạo giá trị và Quản trị đầu tư.
          </p>
          <div class="pt-1 text-xs space-y-1 font-mono">
            <p>Hotline/Zalo: <a href="tel:0981501865" class="text-cam font-bold hover:underline">0981501865</a></p>
            <p>Email: hotro@thinhvuongso.vn</p>
          </div>
        </div>

        <!-- Col 2: Bat Dau & Lo Trinh -->
        <div class="space-y-2">
          <p class="font-mono text-xs uppercase tracking-wider text-cam font-semibold">Bắt đầu & Lộ trình</p>
          <ul class="space-y-1.5 text-xs">
            <li><a href="./#bai-test" class="hover:text-cam">Bài test định vị 3 câu</a></li>
            <li><a href="./#hanh-trinh" class="hover:text-cam">Hành trình huấn luyện 5 tầng</a></li>
            <li><a href="./#nghi-thuc-soi-chieu" class="hover:text-cam">Nghi thức soi chiếu 4 Hệ</a></li>
            <li><a href="khoahoc" class="hover:text-cam font-medium text-kem">Hệ thống Khóa học Thực chiến ↗</a></li>
          </ul>
        </div>

        <!-- Col 3: He Thong Hoc Tap -->
        <div class="space-y-2">
          <p class="font-mono text-xs uppercase tracking-wider text-cam font-semibold">Khu Học Tập</p>
          <ul class="space-y-1.5 text-xs">
            <li><a href="khuhoctap" class="hover:text-cam font-medium text-kem">Cổng Học Viên Đăng Nhập ↗</a></li>
            <li><a href="khuhoctap#khoa-hoc" class="hover:text-cam">3 Tầng Khóa Học</a></li>
            <li><a href="khuhoctap#ban-ghi-zoom" class="hover:text-cam">Kho bản ghi Zoom HD</a></li>
            <li><a href="khuhoctap#bieu-mau" class="hover:text-cam">Tải biểu mẫu tài chính</a></li>
          </ul>
        </div>

        <!-- Col 4: Chuyen San & Tien Ich -->
        <div class="space-y-2">
          <p class="font-mono text-xs uppercase tracking-wider text-cam font-semibold">Chuyên San & Hệ Sinh Thái</p>
          <ul class="space-y-1.5 text-xs">
            <li><a href="./" class="hover:text-cam">Trang chủ Thịnh Vượng Số</a></li>
            <li><a href="chuyensan" class="hover:text-cam font-medium text-cam">Chuyên san Thịnh Vượng Số</a></li>
            <li><a href="khoahoc?course=but-pha#but-pha-tai-chinh" class="hover:text-cam">Bứt Phá Tài Chính 6 Buổi Zoom</a></li>
            <li><a href="javascript:void(0);" onclick="window.toggleSiteTheme()" class="hover:text-cam">Chuyển chế độ Sáng / Tối</a></li>
          </ul>
        </div>

      </div>

      <div class="pt-6 border-t border-kem/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-yen">
        <span>© 2026 Thịnh Vượng Số. Tất cả quyền được bảo lưu.</span>
        <span>Mentor Trần Nam Hà · Phan Trọng Quỳnh</span>
      </div>
    </div>
  </footer>

  <!-- ==================== EMBEDDED ARTICLES DATA ==================== -->
  <script id="articles-data" type="application/json">
{articles_json_escaped}
  </script>

  <!-- ==================== CONTROLLER SCRIPT ==================== -->
  <script>
    var allArticles = [];
    var currentArticleIndex = -1;
    var currentCategory = 'all';

    try {{
      var raw = document.getElementById('articles-data').textContent;
      allArticles = JSON.parse(raw);
    }} catch (e) {{
      console.error('Failed to parse articles data', e);
    }}

    // Theme toggle
    window.toggleSiteTheme = function() {{
      var isLight = document.documentElement.classList.toggle('theme-light');
      try {{
        localStorage.setItem('tvs_theme', isLight ? 'light' : 'dark');
      }} catch (e) {{}}
      updateThemeUI(isLight);
    }};

    function updateThemeUI(isLight) {{
      var sun = document.getElementById('header-theme-sun');
      var moon = document.getElementById('header-theme-moon');
      var lbl = document.getElementById('header-theme-label');
      if (sun && moon) {{
        if (isLight) {{
          sun.classList.add('hidden');
          moon.classList.remove('hidden');
          if (lbl) lbl.textContent = 'Nền tối';
        }} else {{
          sun.classList.remove('hidden');
          moon.classList.add('hidden');
          if (lbl) lbl.textContent = 'Nền sáng';
        }}
      }}
    }}

    // Mobile nav toggle
    window.toggleChuyenSanMobileNav = function() {{
      var drawer = document.getElementById('cs-mobile-drawer');
      if (drawer) drawer.classList.toggle('hidden');
    }};

    // Category filter
    window.filterCategory = function(cat) {{
      currentCategory = cat;
      var buttons = document.querySelectorAll('.cat-pill');
      buttons.forEach(function(btn) {{
        if (btn.getAttribute('data-cat') === cat) {{
          btn.className = 'cat-pill active px-3.5 py-1.5 rounded-full font-mono text-xs font-bold transition-all bg-cam text-abyssal';
        }} else {{
          btn.className = 'cat-pill px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all bg-xanh/40 text-yen hover:text-kem hover:border-cam/50 border border-kem/15';
        }}
      }});

      applyFilters();
    }};

    // Search input
    window.handleSearchArticles = function(val) {{
      var clearBtn = document.getElementById('clear-search-btn');
      if (clearBtn) {{
        if (val && val.trim().length > 0) {{
          clearBtn.classList.remove('hidden');
        }} else {{
          clearBtn.classList.add('hidden');
        }}
      }}
      applyFilters();
    }};

    window.clearSearch = function() {{
      var inp = document.getElementById('article-search-input');
      if (inp) inp.value = '';
      var clearBtn = document.getElementById('clear-search-btn');
      if (clearBtn) clearBtn.classList.add('hidden');
      applyFilters();
    }};

    function applyFilters() {{
      var searchInp = document.getElementById('article-search-input');
      var query = searchInp ? searchInp.value.trim().toLowerCase() : '';
      var cards = document.querySelectorAll('.article-card');
      var visibleCount = 0;

      cards.forEach(function(card) {{
        var cat = card.getAttribute('data-category');
        var title = card.getAttribute('data-title') || '';
        var lead = card.getAttribute('data-lead') || '';

        var matchCat = (currentCategory === 'all' || cat === currentCategory);
        var matchQuery = (!query || title.indexOf(query) !== -1 || lead.indexOf(query) !== -1);

        if (matchCat && matchQuery) {{
          card.style.display = 'flex';
          visibleCount++;
        }} else {{
          card.style.display = 'none';
        }}
      }});

      var countEl = document.getElementById('article-count-display');
      if (countEl) {{
        countEl.textContent = 'Hiển thị ' + visibleCount + ' bài viết';
      }}

      var noRes = document.getElementById('no-results-msg');
      if (noRes) {{
        if (visibleCount === 0) {{
          noRes.classList.remove('hidden');
        }} else {{
          noRes.classList.add('hidden');
        }}
      }}
    }}

    // Open article modal
    window.openArticle = function(slug) {{
      var idx = allArticles.findIndex(function(a) {{ return a.slug === slug; }});
      if (idx === -1) return;
      currentArticleIndex = idx;
      var art = allArticles[idx];

      // Populate elements
      document.getElementById('modal-top-category').textContent = art.category;
      document.getElementById('modal-badge-cat').textContent = art.category;
      document.getElementById('modal-pub-date').textContent = art.date;
      document.getElementById('modal-read-time').textContent = art.read_time;
      document.getElementById('modal-article-title').textContent = art.title;
      document.getElementById('modal-article-lead').textContent = art.lead;

      var tomTatBox = document.getElementById('modal-tom-tat-box');
      var tomTatContent = document.getElementById('modal-tom-tat-content');
      if (art.tom_tat && art.tom_tat.trim().length > 0) {{
        tomTatContent.innerHTML = art.tom_tat;
        tomTatBox.classList.remove('hidden');
      }} else {{
        tomTatBox.classList.add('hidden');
      }}

      var modalBody = document.getElementById('modal-article-body');
      modalBody.innerHTML = art.body;
      var bodyImgs = modalBody.querySelectorAll('img');
      for (var bi = 0; bi < bodyImgs.length; bi++) {{
        bodyImgs[bi].onerror = function() {{
          this.onerror = null;
          this.src = 'anh/cd-bia-1.webp';
        }};
      }}

      // 1. Auto-generate Table of Contents
      generateTableOfContents(modalBody);

      // 2. Render Related Articles
      renderRelatedArticles(art.slug, art.category);

      // 3. Render Comments
      renderComments(art.slug, art.category);

      // Update Prev / Next buttons
      var prevBtn = document.getElementById('modal-prev-btn');
      var nextBtn = document.getElementById('modal-next-btn');
      if (prevBtn) prevBtn.disabled = (idx === 0);
      if (nextBtn) nextBtn.disabled = (idx === allArticles.length - 1);

      // Open modal
      var modal = document.getElementById('article-reader-modal');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      var bodyEl = document.getElementById('reader-modal-body');
      if (bodyEl) {{
        bodyEl.scrollTop = 0;
        bodyEl.onscroll = updateReadingProgress;
      }}

      // Update URL without page reload
      try {{
        window.history.pushState({{ articleSlug: slug }}, '', 'chuyensan?bai=' + slug);
      }} catch (e) {{}}
    }};

    // ==================== TABLE OF CONTENTS (MUC LUC TU DONG) ====================
    function generateTableOfContents(modalBody) {{
      var tocBox = document.getElementById('modal-toc-box');
      var tocContent = document.getElementById('modal-toc-content');
      var tocCount = document.getElementById('modal-toc-count');
      if (!tocBox || !tocContent) return;

      var headings = modalBody.querySelectorAll('h2');
      if (!headings || headings.length < 2) {{
        tocBox.classList.add('hidden');
        return;
      }}

      var html = '';
      var validCount = 0;
      for (var i = 0; i < headings.length; i++) {{
        var h = headings[i];
        var text = (h.textContent || '').trim();
        if (!text) continue;
        validCount++;
        if (!h.id) {{
          h.id = 'sec-heading-' + validCount;
        }}
        var numStr = (validCount < 10 ? '0' : '') + validCount;
        html += '<a href="javascript:void(0)" data-sec="' + h.id + '" class="toc-nav-item flex items-start gap-2.5 text-xs sm:text-sm text-yen hover:text-cam transition-colors py-1.5 px-2.5 rounded-lg hover:bg-kem/5 group">';
        html += '<span class="font-mono text-cam/70 group-hover:text-cam font-bold shrink-0">' + numStr + '.</span>';
        html += '<span class="leading-relaxed line-clamp-1 text-kem group-hover:text-cam font-medium">' + text + '</span>';
        html += '</a>';
      }}

      if (validCount >= 2) {{
        tocContent.innerHTML = html;
        if (tocCount) tocCount.textContent = validCount + ' phần nội dung';
        tocBox.classList.remove('hidden');

        var items = tocContent.querySelectorAll('.toc-nav-item');
        items.forEach(function(item) {{
          item.onclick = function() {{
            var secId = this.getAttribute('data-sec');
            window.scrollToArticleHeading(secId);
          }};
        }});
      }} else {{
        tocBox.classList.add('hidden');
      }}
    }}

    window.scrollToArticleHeading = function(id) {{
      var el = document.getElementById(id);
      var container = document.getElementById('reader-modal-body');
      if (el && container) {{
        var topOffset = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 75;
        container.scrollTo({{ top: Math.max(0, topOffset), behavior: 'smooth' }});
      }}
    }};

    // ==================== RELATED ARTICLES (BAI VIET LIEN QUAN) ====================
    function renderRelatedArticles(currentSlug, currentCat) {{
      var container = document.getElementById('modal-related-articles');
      if (!container) return;

      var others = allArticles.filter(function(a) {{ return a.slug !== currentSlug; }});
      var sameCat = others.filter(function(a) {{ return a.category === currentCat; }});
      var diffCat = others.filter(function(a) {{ return a.category !== currentCat; }});
      var recommended = sameCat.concat(diffCat).slice(0, 3);

      var html = '';
      for (var r = 0; r < recommended.length; r++) {{
        var rel = recommended[r];
        html += '<div data-slug="' + rel.slug + '" class="rel-article-card group p-3.5 sm:p-4 rounded-xl bg-nen-sau hover:bg-xanh/25 border border-kem/10 hover:border-cam/50 transition-all duration-300 cursor-pointer flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-md">';
        html += '  <div class="flex-1 space-y-1.5">';
        html += '    <div class="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-yen">';
        html += '      <span class="px-2 py-0.5 rounded bg-abyssal border border-kem/15 text-cam font-bold uppercase">' + rel.category + '</span>';
        html += '      <span>·</span>';
        html += '      <span>' + rel.read_time + '</span>';
        html += '      <span>·</span>';
        html += '      <span>' + rel.date + '</span>';
        html += '    </div>';
        html += '    <h4 class="text-sm sm:text-base font-bold text-kem group-hover:text-cam transition-colors line-clamp-2 leading-snug">';
        html += '      ' + rel.title;
        html += '    </h4>';
        html += '    <p class="text-xs text-yen line-clamp-2 leading-relaxed">';
        html += '      ' + rel.lead;
        html += '    </p>';
        html += '  </div>';
        html += '  <div class="w-full sm:w-36 h-28 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-kem/15 bg-abyssal">';
        html += '    <img src="' + rel.image + '" alt="' + rel.title.replace(/"/g, '&quot;') + '" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />';
        html += '  </div>';
        html += '</div>';
      }}

      container.innerHTML = html;

      container.querySelectorAll('img').forEach(function(img) {{
        img.onerror = function() {{
          this.onerror = null;
          this.src = 'anh/cd-bia-1.webp';
        }};
      }});

      var cards = container.querySelectorAll('.rel-article-card');
      cards.forEach(function(card) {{
        card.onclick = function() {{
          var targetSlug = this.getAttribute('data-slug');
          if (targetSlug) {{
            window.openArticle(targetSlug);
          }}
        }};
      }});
    }}

    // ==================== COMMENTS & DISCUSSION (BINH LUAN) ====================
    var defaultCommentsMap = {{
      'Tài chính': [
        {{ author: 'Lê Quang Cường', tag: 'Học viên Bứt Phá', time: '9 thg 5', text: 'Bài viết đúc kết rất sắc sảo! Lúc trước tôi chỉ mải kiếm thêm thu nhập mà quên mất việc vá lỗ rò rỉ dòng tiền. Áp dụng bảng tính của Mentor Trần Nam Hà giúp tôi thấy rõ từng con số.', likes: 14, liked: false }},
        {{ author: 'Thu Hà', tag: 'Độc giả Chuyên San', time: '18 thg 5', text: 'Góc nhìn về việc thoát nợ bằng tâm thế bình an thật sự chạm đến mình. Cảm ơn Ban biên tập Thịnh Vượng Số!', likes: 9, liked: false }}
      ],
      'Kinh doanh': [
        {{ author: 'Alex Trần', tag: 'Học viên Khóa 1', time: '22 thg 4', text: 'Chạm đúng điểm tắc nghẽn của rất nhiều anh em làm nghề tự do: cứ lấy sức mình đổi lấy tiền thì trần thu nhập luôn bị chặn đứng. Mô hình hệ thống hóa này rất giá trị!', likes: 18, liked: false }},
        {{ author: 'Phạm Đức Huy', tag: 'Chủ doanh nghiệp SME', time: '2 thg 5', text: 'Đọc xong bài này tôi phải rà soát lại ngay quy trình ủy quyền và đòn bẩy công nghệ của xưởng. Rất thực chiến!', likes: 11, liked: false }}
      ],
      'Phát triển bản thân': [
        {{ author: 'Nguyễn Văn Hưng', tag: 'Học viên Bứt Phá', time: '14 thg 6', text: 'Thói quen dừng lại 5 giây trước khi nhấc máy đã giúp tôi tránh được rất nhiều quyết định bốc đồng trong công việc và đối thoại gia đình.', likes: 21, liked: false }},
        {{ author: 'Trần Minh Tuấn', tag: 'Thành viên Cộng đồng', time: '27 thg 6', text: 'Không gian sống sạch mùi ẩm mốc đúng là kéo theo sinh khí và sự tỉnh táo trong tâm trí. Cảm ơn Mentor Trần Nam Hà rất nhiều!', likes: 16, liked: false }}
      ],
      'Đầu tư': [
        {{ author: 'Vũ Hoàng Long', tag: 'Nhà đầu tư cá nhân', time: '11 thg 5', text: 'Lời dặn về tài sản và tích lũy từng đồng tiền sạch qua năm tháng giúp mình kiềm chế lòng tham và tránh xa các cái bẫy làm giàu nhanh.', likes: 19, liked: false }},
        {{ author: 'Đặng Thanh Nga', tag: 'Độc giả Chuyên San', time: '20 thg 5', text: 'Bản chất tích sản không phải là mua xong chờ bán kiếm lời, mà là giữ lấy cội rễ kinh tế gia đình. Rất thấm thía!', likes: 12, liked: false }}
      ]
    }};

    function getArticleComments(slug, category) {{
      var key = 'tvs_comments_' + slug;
      var stored = localStorage.getItem(key);
      if (stored) {{
        try {{
          return JSON.parse(stored);
        }} catch (e) {{}}
      }}
      var seeds = defaultCommentsMap[category] || defaultCommentsMap['Tài chính'];
      var initial = JSON.parse(JSON.stringify(seeds));
      localStorage.setItem(key, JSON.stringify(initial));
      return initial;
    }}

    function renderComments(slug, category) {{
      var container = document.getElementById('modal-comments-list');
      var badge = document.getElementById('modal-comments-count-badge');
      if (!container) return;

      var comments = getArticleComments(slug, category);
      if (badge) {{
        badge.textContent = comments.length + ' bình luận';
      }}

      if (comments.length === 0) {{
        container.innerHTML = '<p class="text-xs text-yen/70 font-mono italic text-center py-4">Chưa có bình luận nào. Hãy là người đầu tiên chia sẻ góc nhìn!</p>';
        return;
      }}

      var html = '';
      for (var i = 0; i < comments.length; i++) {{
        var c = comments[i];
        var initial = (c.author || 'B').trim().charAt(0).toUpperCase();
        var heartIcon = c.liked ? '❤️' : '🤍';
        var heartColor = c.liked ? 'text-cam font-bold' : 'text-yen hover:text-cam';

        html += '<div class="p-4 rounded-xl bg-nen-sau border border-kem/10 space-y-2.5 transition-all">';
        html += '  <div class="flex items-center justify-between flex-wrap gap-2">';
        html += '    <div class="flex items-center gap-2.5">';
        html += '      <div class="w-8 h-8 rounded-full bg-xanh/60 border border-cam/40 flex items-center justify-center font-bold text-xs text-cam shrink-0">';
        html += '        ' + initial;
        html += '      </div>';
        html += '      <div>';
        html += '        <div class="flex items-center gap-2 flex-wrap">';
        html += '          <strong class="text-xs sm:text-sm font-bold text-kem">' + c.author + '</strong>';
        html += '          <span class="text-[10px] px-2 py-0.5 rounded bg-kem/10 text-yen font-mono">' + c.tag + '</span>';
        html += '        </div>';
        html += '        <span class="text-[10px] text-yen/60 font-mono">' + c.time + '</span>';
        html += '      </div>';
        html += '    </div>';
        html += '    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cam/15 border border-cam/30 text-cam text-[10px] font-mono font-medium">';
        html += '      <span>♥</span> Liked by Mentor Trần Nam Hà';
        html += '    </span>';
        html += '  </div>';
        html += '  <p class="text-xs sm:text-sm text-yen leading-relaxed pl-10">';
        html += '    ' + c.text;
        html += '  </p>';
        html += '  <div class="flex items-center gap-4 pl-10 text-[11px] font-mono">';
        html += '    <button type="button" data-slug="' + slug + '" data-idx="' + i + '" class="comment-like-btn flex items-center gap-1.5 ' + heartColor + ' transition-colors cursor-pointer">';
        html += '      <span>' + heartIcon + '</span>';
        html += '      <span>LIKE (' + (c.likes || 0) + ')</span>';
        html += '    </button>';
        html += '    <button type="button" data-author="' + encodeURIComponent(c.author) + '" class="comment-reply-btn text-yen hover:text-cam transition-colors uppercase cursor-pointer">';
        html += '      REPLY';
        html += '    </button>';
        html += '  </div>';
        html += '</div>';
      }}

      container.innerHTML = html;

      container.querySelectorAll('.comment-like-btn').forEach(function(btn) {{
        btn.onclick = function() {{
          var s = this.getAttribute('data-slug');
          var idx = parseInt(this.getAttribute('data-idx'));
          window.toggleCommentLike(s, idx);
        }};
      }});

      container.querySelectorAll('.comment-reply-btn').forEach(function(btn) {{
        btn.onclick = function() {{
          var auth = decodeURIComponent(this.getAttribute('data-author'));
          window.replyToComment(auth);
        }};
      }});
    }}

    window.submitComment = function() {{
      if (currentArticleIndex < 0 || currentArticleIndex >= allArticles.length) return;
      var art = allArticles[currentArticleIndex];
      var nameInp = document.getElementById('comment-author-input');
      var textInp = document.getElementById('comment-text-input');
      if (!textInp) return;

      var text = textInp.value.trim();
      if (!text) {{
        showToast('Vui lòng nhập nội dung bình luận trước khi gửi!');
        textInp.focus();
        return;
      }}

      var author = nameInp && nameInp.value.trim() ? nameInp.value.trim() : 'Bạn đọc Thịnh Vượng Số';
      var key = 'tvs_comments_' + art.slug;
      var comments = getArticleComments(art.slug, art.category);

      var newComment = {{
        author: author,
        tag: 'Bạn đọc',
        time: 'Vừa xong',
        text: text,
        likes: 1,
        liked: true
      }};

      comments.unshift(newComment);
      localStorage.setItem(key, JSON.stringify(comments));

      textInp.value = '';
      renderComments(art.slug, art.category);
      showToast('Bình luận của bạn đã được đăng thành công!');
    }};

    window.toggleCommentLike = function(slug, idx) {{
      var art = allArticles[currentArticleIndex];
      if (!art) return;
      var key = 'tvs_comments_' + slug;
      var comments = getArticleComments(slug, art.category);
      if (comments[idx]) {{
        if (comments[idx].liked) {{
          comments[idx].liked = false;
          comments[idx].likes = Math.max(0, (comments[idx].likes || 1) - 1);
        }} else {{
          comments[idx].liked = true;
          comments[idx].likes = (comments[idx].likes || 0) + 1;
        }}
        localStorage.setItem(key, JSON.stringify(comments));
        renderComments(slug, art.category);
      }}
    }};

    window.replyToComment = function(authorName) {{
      var textInp = document.getElementById('comment-text-input');
      if (textInp) {{
        textInp.value = '@' + authorName + ': ';
        textInp.focus();
      }}
    }};

    // ==================== SOCIAL SHARE HANDLERS ====================
    window.shareCurrentArticleFacebook = function() {{
      if (currentArticleIndex >= 0 && currentArticleIndex < allArticles.length) {{
        var art = allArticles[currentArticleIndex];
        var url = 'https://namha01049x.github.io/thinhvuongso/chuyensan?bai=' + encodeURIComponent(art.slug);
        var fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
        window.open(fbUrl, '_blank', 'noopener,noreferrer,width=650,height=550');
      }}
    }};

    window.copyCurrentArticleLink = function() {{
      if (currentArticleIndex >= 0 && currentArticleIndex < allArticles.length) {{
        var art = allArticles[currentArticleIndex];
        var url = window.location.origin + window.location.pathname.replace(/\\/[^\\/]*$/, '/') + 'chuyensan?bai=' + art.slug;
        copyTextToClipboard(url, 'Đã sao chép liên kết: ' + art.title);
      }}
    }};

    window.shareArticleDirect = function(slug, title) {{
      var url = window.location.origin + window.location.pathname.replace(/\\/[^\\/]*$/, '/') + 'chuyensan?bai=' + slug;
      copyTextToClipboard(url, 'Đã sao chép liên kết: ' + title);
    }};

    function copyTextToClipboard(text, msg) {{
      if (navigator.clipboard && navigator.clipboard.writeText) {{
        navigator.clipboard.writeText(text).then(function() {{
          showToast(msg || 'Đã sao chép liên kết thành công!');
        }}).catch(function() {{
          fallbackCopyText(text);
        }});
      }} else {{
        fallbackCopyText(text);
      }}
    }}

    function fallbackCopyText(text) {{
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {{
        document.execCommand('copy');
        showToast('Đã sao chép liên kết thành công!');
      }} catch (e) {{
        showToast('Vui lòng sao chép liên kết trên thanh địa chỉ');
      }}
      document.body.removeChild(ta);
    }}

    function showToast(msg) {{
      var toast = document.getElementById('toast-notify');
      var textEl = document.getElementById('toast-text');
      if (!toast || !textEl) return;
      textEl.textContent = msg;
      toast.classList.remove('hidden');
      setTimeout(function() {{
        toast.classList.add('hidden');
      }}, 3500);
    }}

    // Close on Escape or click backdrop
    document.addEventListener('keydown', function(e) {{
      if (e.key === 'Escape') {{
        window.closeArticle();
      }}
    }});

    document.getElementById('article-reader-modal').addEventListener('click', function(e) {{
      if (e.target === this) {{
        window.closeArticle();
      }}
    }});

    // Initialize & Handle deep linking (?bai=...)
    document.addEventListener('DOMContentLoaded', function() {{
      var isLight = document.documentElement.classList.contains('theme-light');
      updateThemeUI(isLight);

      var urlParams = new URLSearchParams(window.location.search);
      var articleParam = urlParams.get('bai');
      if (articleParam) {{
        setTimeout(function() {{
          window.openArticle(articleParam);
        }}, 200);
      }}
    }});
  </script>

</body>
</html>
'''

with open('chuyensan.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print('Successfully generated chuyensan.html!')
