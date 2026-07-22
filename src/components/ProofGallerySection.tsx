import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Maximize2, X, ExternalLink } from 'lucide-react';

export const ProofGallerySection: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const PROOFS = [
    {
      title: 'Active Leads & Conversion Scale',
      subtitle: 'Meta Ads Manager Live Performance Dashboard',
      src: '/assets/meta_ads_dashboard_1.png',
      stat: '30,499 Impressions'
    },
    {
      title: '295 Conversations at ₹10.42/Cost',
      subtitle: 'High-Intent WhatsApp Messaging Funnels',
      src: '/assets/meta_ads_dashboard_3.png',
      stat: '59,979 Impressions'
    }
  ];

  return (
    <section className="py-16 bg-[#0A0A0A] border-t border-[#1F1F1F] text-white relative overflow-hidden">
      {/* Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#1A1810] border border-[#4A3D10] text-[#FFC000] px-4 py-1.5 rounded-full text-xs font-extrabold mb-3 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC000]" />
            Meta Business Manager Verified Results
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Live Meta Ads <span className="text-[#FFC000]">Campaign Screenshots</span>
          </h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">
            Verified proof straight from our media buyer dashboards across active client accounts.
          </p>
        </div>

        {/* 2 Photos Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROOFS.map((proof, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg({ src: proof.src, title: proof.title, subtitle: proof.subtitle })}
              className="bg-[#141414] border border-[#2B2B2B] hover:border-[#FFC000] rounded-2xl p-5 transition-all duration-300 shadow-2xl group cursor-pointer flex flex-col justify-between"
            >
              {/* Browser-style Top Bar */}
              <div className="flex items-center justify-between px-2 pb-2.5 mb-3 border-b border-[#242424]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFC000]" />
                  Meta Ads Manager Verified
                </span>
              </div>

              {/* High Quality Framed Image Container */}
              <div className="relative rounded-xl overflow-hidden bg-[#050505] border border-[#222222] aspect-[16/9] mb-4 flex items-center justify-center p-1">
                <img
                  src={proof.src}
                  alt={proof.title}
                  className="w-full h-full object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Hover Overlay Badge */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="bg-[#FFC000] text-black text-xs font-black px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xl scale-95 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                    View Full Screenshot
                  </span>
                </div>

                {/* Stat Badge */}
                <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-md border border-white/10 shadow-md">
                  {proof.stat}
                </div>
              </div>

              {/* Title & Badge */}
              <div className="flex items-start justify-between gap-3 pt-1">
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#FFC000] transition-colors leading-snug">
                    {proof.title}
                  </h4>
                  <p className="text-xs font-medium text-neutral-400 mt-1">
                    {proof.subtitle}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#1F1B0E] border border-[#4A3D10] flex items-center justify-center shrink-0">
                  <ExternalLink className="w-4 h-4 text-[#FFC000]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Res Modal Lightbox Preview */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fadeIn"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#141414] border border-[#333333] rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#242424]">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#FFC000]" />
                  <h3 className="text-sm sm:text-base font-extrabold text-white">
                    {selectedImg.title}
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 mt-0.5">{selectedImg.subtitle}</p>
              </div>

              <button
                onClick={() => setSelectedImg(null)}
                className="w-9 h-9 rounded-full bg-[#242424] text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-[#333]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-auto max-h-[80vh] rounded-xl border border-[#2B2B2B] bg-[#050505]">
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
