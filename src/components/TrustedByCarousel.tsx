import React from 'react';

const LOGO_ITEMS = [
  {
    id: 'meta',
    svg: (
      <div className="flex items-center gap-2 text-white font-extrabold text-base tracking-tight">
        <svg className="w-5 h-5 text-[#FFC000]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"/>
        </svg>
        <span>Meta Business</span>
      </div>
    )
  },
  {
    id: 'woocommerce',
    svg: (
      <div className="flex items-center gap-2 text-white font-extrabold text-base tracking-tight">
        <div className="bg-[#96588A] text-white px-2 py-0.5 rounded-md text-xs font-black tracking-wider uppercase shadow-sm">
          WOO
        </div>
        <span className="text-white font-bold text-base">WooCommerce</span>
      </div>
    )
  },
  {
    id: 'shopify',
    svg: (
      <div className="flex items-center gap-2 text-white font-extrabold text-base tracking-tight">
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/>
        </svg>
        <span>shopify</span>
      </div>
    )
  },
  {
    id: 'google',
    svg: (
      <div className="flex items-center gap-2 text-white font-extrabold text-base tracking-tight">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
        <span>Google Ads</span>
      </div>
    )
  },
  {
    id: 'hubspot',
    svg: (
      <div className="flex items-center gap-2 text-white font-extrabold text-base tracking-tight">
        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>HubSpot</span>
      </div>
    )
  },
  {
    id: 'stripe',
    svg: (
      <div className="flex items-center gap-1.5 text-[#635BFF] font-black text-xl tracking-tighter">
        <span>stripe</span>
      </div>
    )
  },
  {
    id: 'tiktok',
    svg: (
      <div className="flex items-center gap-2 text-white font-extrabold text-base tracking-tight">
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.82.1V9.25a6.32 6.32 0 0 0-6.19 6.33 6.33 6.33 0 0 0 10.78 4.47 6.27 6.27 0 0 0 1.83-4.47V9.01a8.27 8.27 0 0 0 4.87 1.57V7.12a4.84 4.84 0 0 1-2-.43z"/>
        </svg>
        <span>TikTok Ads</span>
      </div>
    )
  }
];

export const TrustedByCarousel: React.FC = () => {
  const repeatedLogos = [...LOGO_ITEMS, ...LOGO_ITEMS, ...LOGO_ITEMS];

  return (
    <section className="py-10 bg-[#0F0F0F] border-y border-[#222222] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-xs uppercase tracking-widest font-extrabold text-neutral-400">
          Trusted by 100+ Growing Brands Across Dubai &amp; GCC
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left/Right Fading Edge overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-12">
          {repeatedLogos.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex items-center justify-center opacity-85 hover:opacity-100 transition-all duration-300 h-11 px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl shadow-sm hover:border-[#FFC000]/60 shrink-0"
            >
              {item.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
