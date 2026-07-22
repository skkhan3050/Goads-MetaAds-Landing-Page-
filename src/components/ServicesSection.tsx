import React from 'react';
import { Layers, UserCheck, ShoppingBag, Database, Video, Layout, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBookingModal: () => void;
}

const SERVICES = [
  {
    icon: Layers,
    title: 'Meta Ads Management',
    tagline: 'End-to-End Media Buying',
    bullets: ['Campaign Architecture & Setup', 'A/B Creative & Audience Testing', 'Agile Budget Scaling'],
    description: 'Complete hands-off management of your Facebook & Instagram campaigns by certified Dubai media buyers.'
  },
  {
    icon: UserCheck,
    title: 'High-Ticket Lead Generation',
    tagline: 'Dubai & GCC Investor Focus',
    bullets: ['Qualified Lead Filtering', 'CRM & WhatsApp Automation Sync', 'Funnel Friction Elimination'],
    description: 'Deliver high-intent leads directly into your WhatsApp or CRM system for Real Estate, B2B, and Services.'
  },
  {
    icon: ShoppingBag,
    title: 'GCC Ecommerce Scaling',
    tagline: 'Maximum ROAS & Sales',
    bullets: ['Dynamic Product Catalog Ads', 'Advantage+ Shopping Campaigns', 'Customer Acquisition Cost (CAC) Reduction'],
    description: 'Scale your online store sales in UAE & Saudi Arabia with automated catalog campaigns and cart recovery.'
  },
  {
    icon: Database,
    title: 'Pixel & Conversion API (CAPI)',
    tagline: '100% Server Tracking',
    bullets: ['Meta Pixel & Server CAPI Setup', 'Server-Side Event Matching', 'Custom Conversion Attribution'],
    description: 'Bypass browser blocking and iOS privacy limits with robust server-side conversion tracking.'
  },
  {
    icon: Video,
    title: 'Creative Strategy & UGC',
    tagline: 'Thumb-Stopping Content',
    bullets: ['Bilingual Arabic/English Copy', 'Instagram Reels Video Ads', 'High-Impact Static & Carousel Graphics'],
    description: 'We script, design, and edit high-converting ad assets optimized for mobile feeds.'
  },
  {
    icon: Layout,
    title: 'Landing Page Optimization',
    tagline: 'Maximum Conversion Rate',
    bullets: ['High-Converting CRO Design', 'A/B Split Testing Funnels', 'Mobile Speed & UX Enhancements'],
    description: 'Turn ad traffic into paying customers with lightning-fast, high-converting mobile landing pages.'
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="services" className="py-20 bg-[#0A0A0A] border-t border-[#1F1F1F] relative overflow-hidden">
      {/* Background Ambient Gold Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1A1810] border border-[#4A3D10] text-[#FFC000] px-4 py-1.5 rounded-full text-xs font-extrabold mb-3 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#FFC000] fill-[#FFC000]" />
            Core Service Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized <span className="text-[#FFC000]">Meta Advertising Services</span> in Dubai
          </h2>
          <p className="text-neutral-400 mt-3 text-base sm:text-lg">
            Everything your business needs to launch, optimize, and scale Meta Ads profitability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-[#141414] rounded-3xl p-7 border border-[#2B2B2B] hover:border-[#FFC000]/60 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F1B0E] border border-[#4A3D10] flex items-center justify-center text-[#FFC000] group-hover:scale-110 group-hover:bg-[#FFC000] group-hover:text-black transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FFC000] bg-[#1C180A] px-3 py-1 rounded-full border border-[#3D330A]">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#FFC000] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {service.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-[#FFC000] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenBookingModal}
                  className="w-full py-3.5 px-4 bg-[#1C1C1C] hover:bg-[#FFC000] text-white hover:text-black font-extrabold text-xs rounded-xl border border-[#333333] hover:border-[#FFC000] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Explore {service.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
