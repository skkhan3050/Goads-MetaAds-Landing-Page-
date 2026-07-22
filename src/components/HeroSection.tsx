import React from 'react';
import { HeroAuditFormCard } from './HeroAuditFormCard';
import { ArrowRight, Sparkles, Star, Users, ShieldCheck, Clock, MapPin, Check, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenAuditModal: () => void;
  onOpenBookingModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAuditModal, onOpenBookingModal }) => {
  return (
    <section className="relative pt-6 pb-6 lg:pt-10 lg:pb-10 overflow-hidden bg-[#0A0A0A]">
      {/* Background Subtle Ambient Yellow Glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-amber-500/10 via-yellow-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Headline, Copy, Checkpoints, CTAs, Trust Badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col justify-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1A1810] border border-[#4A3D10] rounded-full px-4 py-1.5 shadow-sm w-fit mx-auto lg:mx-0">
              <Zap className="w-3.5 h-3.5 text-[#FFC000] fill-[#FFC000]" />
              <span className="text-xs font-extrabold text-[#FFC000] tracking-wide uppercase">
                #1 Meta Ads Agency in Dubai
              </span>
              <span className="text-neutral-600">|</span>
              <span className="text-xs text-neutral-300 font-medium">Facebook &amp; Instagram Experts</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Scale Your Business with High-Converting{' '}
              <span className="text-[#FFC000]">Meta Ads in Dubai</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Generate more qualified leads, increase sales, and maximize ROAS with expert Facebook &amp; Instagram advertising strategies tailored for your business.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-1 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFC000] text-black flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">
                  100% Authentic &amp; Proven Meta Ad Strategies
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFC000] text-black flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">
                  Fast Campaign Launch Across Dubai &amp; GCC
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFC000] text-black flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">
                  Direct 1-on-1 Senior Media Buyer Guidance
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="tel:+917439469915"
                className="w-full sm:w-auto text-base font-extrabold text-black bg-[#FFC000] hover:bg-[#e6ad00] px-8 py-4 rounded-full shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </a>

              <button
                onClick={onOpenAuditModal}
                className="w-full sm:w-auto text-base font-bold text-white bg-[#1C1C1C] hover:bg-[#282828] border border-[#333333] hover:border-[#FFC000]/60 px-7 py-4 rounded-full shadow-sm transition-all hover:text-[#FFC000] flex items-center justify-center cursor-pointer"
              >
                <span>Get Free Meta Ads Audit</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Audit Form Card Full Height */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <HeroAuditFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};
