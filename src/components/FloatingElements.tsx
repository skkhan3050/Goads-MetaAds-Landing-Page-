import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp, Calendar } from 'lucide-react';

interface FloatingElementsProps {
  onOpenBookingModal: () => void;
  onOpenAuditModal: () => void;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({ onOpenBookingModal }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
      if (currentScroll > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC000] via-amber-400 to-[#FF8C00] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Action Buttons Right Stack (Desktop only, mobile has sticky bottom bar) */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 hidden sm:flex flex-col items-center gap-3.5">
        {/* Optional Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-[#1A1A1A] text-white shadow-xl border border-[#333333] flex items-center justify-center hover:bg-[#262626] transition-all hover:scale-110 cursor-pointer"
            aria-label="Scroll Back To Top"
          >
            <ChevronUp className="w-5 h-5 text-white" />
          </button>
        )}



        {/* 1. Phone Call Floating Button (Warm Coral / Orange Circle) */}
        <a
          href="tel:+917439469915"
          className="w-13 h-13 rounded-full bg-[#E85D35] hover:bg-[#d44e27] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group cursor-pointer border-2 border-white/20"
          aria-label="Call Us Directly"
        >
          <Phone className="w-6 h-6 text-white stroke-[2.5]" />
        </a>

        {/* 2. WhatsApp Floating Button (Official Green Circle) */}
        <a
          href="https://wa.me/917439469915?text=Hi%20GoAdsLive,%20I'd%20like%20to%20scale%20my%20Meta%20Ads!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group cursor-pointer border-2 border-white/20"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.14 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.733 1.484h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Sticky Bottom Mobile CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-[#050505]/95 backdrop-blur-md border-t border-[#1F1F1F] p-2.5 z-40 lg:hidden shadow-2xl">
        <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
          <a
            href="tel:+917439469915"
            className="flex flex-col items-center justify-center py-2 bg-[#E85D35] text-white rounded-xl active:scale-95 transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-white mb-0.5" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/917439469915?text=Hi%20GoAdsLive,%20I'd%20like%20to%20scale%20my%20Meta%20Ads!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 bg-[#25D366] text-white rounded-xl active:scale-95 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBookingModal}
            className="flex flex-col items-center justify-center py-2 bg-[#FFC000] text-black font-extrabold rounded-xl active:scale-95 transition-all shadow-sm"
          >
            <Calendar className="w-4 h-4 text-black mb-0.5" />
            <span>Book Call</span>
          </button>
        </div>
      </div>
    </>
  );
};
