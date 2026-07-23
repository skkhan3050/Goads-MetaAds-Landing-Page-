import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Send } from 'lucide-react';
import { GoAdsLiveLogo } from './GoAdsLiveLogo';

interface FooterProps {
  onOpenAuditModal: () => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#050505] text-white pt-16 pb-20 border-t border-[#1F1F1F] relative overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-14 pb-14 border-b border-[#1F1F1F]">
          
          {/* Column 1: Brand Info & Newsletter (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center">
              <GoAdsLiveLogo size="md" />
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm font-normal">
              GoAdsLive is a performance-driven digital marketing agency helping businesses grow through Meta Ads, Google Ads, Influencer Marketing, Creative Production, SEO, Branding, and AI-powered marketing solutions.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium pt-1">
              <span className="text-sm">🚀</span>
              <span>Trusted By Brands Across India, Dubai, USA &amp; Canada</span>
            </div>

            {/* Email Subscription Form */}
            <form onSubmit={handleSubscribe} className="pt-3 max-w-sm">
              {subscribed ? (
                <p className="text-xs font-bold text-[#FFC000]">✓ Thank you for subscribing!</p>
              ) : (
                <div className="relative border-b border-neutral-700 flex items-center justify-between pb-2 focus-within:border-[#FFC000] transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none w-full pr-24 font-medium"
                  />
                  <button
                    type="submit"
                    className="text-xs font-extrabold text-[#FFC000] hover:text-[#e6ad00] flex items-center gap-1.5 shrink-0 transition-all cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5 text-[#FFC000]" />
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-extrabold text-base text-white mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-300 font-medium">
              <li><a href="#" className="hover:text-[#FFC000] transition-colors">Home</a></li>
              <li><a href="#problems" className="hover:text-[#FFC000] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">Our Team</a></li>
              <li><a href="#case-studies" className="hover:text-[#FFC000] transition-colors">Our Projects</a></li>
              <li><a href="#case-studies" className="hover:text-[#FFC000] transition-colors">Testimonials</a></li>
              <li><a href="#lead-form" className="hover:text-[#FFC000] transition-colors">Founder Message</a></li>
              <li><a href="#lead-form" className="hover:text-[#FFC000] transition-colors">Blogs</a></li>
              <li><a href="#faq" className="hover:text-[#FFC000] transition-colors">Faq</a></li>
              <li><a href="#lead-form" className="hover:text-[#FFC000] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-extrabold text-base text-white mb-6 tracking-tight">Our Services</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-300 font-medium">
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">Meta Ads</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">Google Ads</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">Ecommerce Ads</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">AI Content Creation</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">UGC Ads</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">Influencer Marketing</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">Video Production</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">Graphic Designing</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">Branding</a></li>
              <li><a href="#services" className="hover:text-[#FFC000] transition-colors">GMB Optimization</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-extrabold text-base text-white mb-6 tracking-tight">Contact Us</h4>

            {/* Phone */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#FFC000] text-black flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-4 h-4 text-black fill-black" />
              </div>
              <div className="text-xs sm:text-sm text-neutral-200 font-bold pt-1.5">
                <a href="tel:+917439469915" className="hover:text-[#FFC000] transition-colors">
                  +91-07439469915
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#FFC000] text-black flex items-center justify-center shrink-0 shadow-md">
                <Mail className="w-4 h-4 text-black fill-black" />
              </div>
              <div className="text-xs sm:text-sm text-neutral-200 font-bold pt-1.5 break-all">
                <a href="mailto:GOADSLIVE002@GMAIL.COM" className="hover:text-[#FFC000] transition-colors uppercase">
                  GOADSLIVE002@GMAIL.COM
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#FFC000] text-black flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-4 h-4 text-black" />
              </div>
              <div className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed pt-1">
                1c, Circus Market Pl, Lower Range, Beck Bagan, Ballygunge, Kolkata, West Bengal 700017, India
              </div>
            </div>

            {/* Serving Reach */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#FFC000] text-black flex items-center justify-center shrink-0 shadow-md">
                <Globe className="w-4 h-4 text-black" />
              </div>
              <div className="text-xs sm:text-sm text-neutral-200 font-bold pt-1.5">
                Serving India, Dubai, USA &amp; Canada
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-neutral-400 gap-6">
          <div>
            © {new Date().getFullYear()} GoAdsLive. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <a href="#" className="hover:text-[#FFC000] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#FFC000] transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-[#FFC000] transition-colors">GDPR Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
