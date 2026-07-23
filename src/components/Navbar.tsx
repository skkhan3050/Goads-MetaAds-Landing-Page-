import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { GoAdsLiveLogo } from './GoAdsLiveLogo';

interface NavbarProps {
  onOpenAuditModal: () => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal, onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problems', href: '#problems' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Bar for Dubai Badge */}
      <div className="bg-[#0A0A0A] text-white text-xs py-2 px-4 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 bg-emerald-500/20 text-emerald-400 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Live in Dubai
            </span>
            <span className="hidden sm:inline text-neutral-400">
              <MapPin className="w-3 h-3 inline mr-1 text-[#FFC000]" />
              Business Bay, Dubai • Meta Certified Agency
            </span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400 text-[11px]">
            <span className="hidden md:inline-flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 2 New Client Slots Open for Q3
            </span>
            <a
              href="https://wa.me/917439469915?text=Hi%20GoAdsLive,%20I'd%20like%20to%20scale%20my%20Meta%20Ads!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFC000] transition-colors flex items-center gap-1 font-medium text-neutral-300"
            >
              <Phone className="w-3 h-3 text-[#FFC000]" /> +917439469915
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - Sleek Dark Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#050505]/95 backdrop-blur-md border-b border-[#1F1F1F] ${
          isScrolled ? 'py-3 shadow-2xl shadow-black/80' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <a href="#" className="flex items-center group hover:opacity-95 transition-opacity">
            <GoAdsLiveLogo size="md" />
          </a>

          {/* Desktop Navigation Links with Generous Gap Spacing */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-bold text-neutral-100 hover:text-[#FFC000] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* 1. WHATSAPP Green Border Button (Matching Image 1) */}
            <a
              href="https://wa.me/917439469915?text=Hi%20GoAdsLive,%20I'd%20like%20to%20scale%20my%20Meta%20Ads!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-extrabold text-[#25D366] bg-[#050505] hover:bg-[#25D366]/10 border border-[#25D366] px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 tracking-wider"
            >
              <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.14 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.733 1.484h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WHATSAPP</span>
            </a>

            {/* 2. Free Meta Ads Audit Button */}
            <button
              onClick={onOpenAuditModal}
              className="text-xs font-bold text-white bg-[#1C1C1C] hover:bg-[#282828] border border-[#333333] hover:border-[#FFC000]/60 px-4 py-2.5 rounded-full transition-all flex items-center justify-center cursor-pointer"
            >
              Free Meta Ads Audit
            </button>
            <a
              href="tel:+917439469915"
              className="text-xs font-extrabold text-black bg-[#FFC000] hover:bg-[#e6ad00] px-5 py-2.5 rounded-full shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] flex items-center gap-1.5 cursor-pointer"
            >
              Book Strategy Call
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+917439469915"
              className="text-xs font-extrabold text-black bg-[#FFC000] px-3 py-2 rounded-lg"
            >
              Book Call
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg border border-[#333333] bg-[#1A1A1A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0A] border-b border-[#222222] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pt-2 border-b border-[#1F1F1F] pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-neutral-300 hover:text-[#FFC000] py-2 px-3 rounded-lg hover:bg-[#181818]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full text-sm font-bold text-white bg-[#1A1A1A] hover:bg-[#262626] border border-[#333333] py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FFC000]" />
                Get Free Meta Ads Audit
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full text-sm font-extrabold text-black bg-[#FFC000] hover:bg-[#e6ad00] py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
