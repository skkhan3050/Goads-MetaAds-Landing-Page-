import React from 'react';
import { Check, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenBookingModal: () => void;
}

const PLANS = [
  {
    name: 'Starter Plan',
    tagline: 'Ideal for local Dubai businesses & single service brands',
    badge: 'Popular for Local Lead Gen',
    featured: false,
    features: [
      'Meta Ads Campaign Setup & Management',
      'Targeted Audience Research (Dubai / UAE)',
      'A/B Creative & Headline Testing',
      'Basic Meta Pixel Setup',
      'Direct Lead Alert Integration (WhatsApp / Email)',
      'Bi-Weekly Performance Video Reports',
      'Dedicated Junior Media Buyer'
    ],
    cta: 'Request Custom Quote'
  },
  {
    name: 'Growth Plan',
    tagline: 'Built for fast-growing Real Estate, Healthcare & E-Commerce',
    badge: '🔥 Recommended for Scaling',
    featured: true,
    features: [
      'Everything in Starter Plan +',
      'Full Meta Server-Side Conversion API (CAPI)',
      'Advantage+ Catalog & Shopping Campaigns',
      'Bilingual UGC & Reel Video Ad Editing',
      'Omnipresent Retargeting Funnels',
      'Custom Qualifying Lead Questionnaires',
      'Weekly Strategy Video Calls & Daily Chat Support',
      'Dedicated Senior Media Buyer in Dubai'
    ],
    cta: 'Request Custom Quote'
  },
  {
    name: 'Enterprise Plan',
    tagline: 'Tailored for large GCC corporations & High-Ad-Spend brands',
    badge: 'Multi-Region & High Spend',
    featured: false,
    features: [
      'Everything in Growth Plan +',
      'Multi-Country Media Buying (UAE, KSA, Qatar, Kuwait)',
      'Custom Landing Page CRO Design & Funnel Build',
      'HubSpot / Salesforce / HighLevel CRM Pipeline Sync',
      '24/7 Real-Time Client Analytics Portal',
      'Dedicated Creative Team & Content Scripting',
      'Dedicated Account Director & Priority SLA Support',
      'Custom Performance & KPI Guarantee Framework'
    ],
    cta: 'Request Custom Quote'
  }
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="pricing" className="py-20 bg-[#0A0A0A] border-t border-[#1F1F1F] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1A1810] border border-[#4A3D10] text-[#FFC000] px-4 py-1.5 rounded-full text-xs font-extrabold mb-3 shadow-sm">
            Transparent Performance Packages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tailored <span className="text-[#FFC000]">Meta Advertising Partnerships</span>
          </h2>
          <p className="text-neutral-400 mt-3 text-base sm:text-lg">
            Flexible performance packages customized according to your monthly ad spend and revenue scaling targets.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.featured
                  ? 'bg-[#141414] border-2 border-[#FFC000] shadow-2xl shadow-amber-500/10 scale-105 z-10'
                  : 'bg-[#141414] border border-[#2B2B2B] hover:border-[#FFC000]/50'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFC000] text-black font-black text-xs px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                  Most Popular in Dubai
                </div>
              )}

              <div>
                <div className="mb-6">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFC000] bg-[#1F1B0E] px-3 py-1 rounded-full border border-[#4A3D10]">
                    {plan.badge}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-3">{plan.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{plan.tagline}</p>
                </div>

                <div className="space-y-3 my-6 pt-6 border-t border-[#242424]">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-200 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#1F1B0E] border border-[#4A3D10] text-[#FFC000] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#FFC000]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="tel:+917439469915"
                className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  plan.featured
                    ? 'bg-[#FFC000] text-black hover:bg-[#e6ad00]'
                    : 'bg-[#242424] hover:bg-[#333333] text-white'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className={`w-4 h-4 ${plan.featured ? 'text-black' : 'text-white'}`} />
              </a>
            </div>
          ))}
        </div>

        {/* Custom Terms Banner */}
        <div className="mt-12 text-center text-xs text-neutral-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#FFC000]" />
          <span>All packages include performance KPIs, zero hidden lock-ins, and direct Meta media buyer access.</span>
        </div>
      </div>
    </section>
  );
};
