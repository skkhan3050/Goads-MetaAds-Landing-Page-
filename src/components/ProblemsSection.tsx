import React from 'react';
import { AlertTriangle, TrendingDown, UserX, DollarSign, ShieldAlert, Radio, ArrowRight } from 'lucide-react';

interface ProblemsSectionProps {
  onOpenAuditModal: () => void;
}

const PROBLEMS = [
  {
    icon: TrendingDown,
    title: 'High Cost Per Lead (CPL)',
    description: 'Spending hundreds of Dirhams per lead without seeing acceptable acquisition margins or conversion ratios in Dubai.',
    fix: 'We rebuild your audience targeting & creative angles to slash CPL by up to 50%.'
  },
  {
    icon: UserX,
    title: 'Poor Quality & Invalid Leads',
    description: 'Meta lead forms filled with wrong phone numbers, uninterested users, and non-responsive prospects that waste sales time.',
    fix: 'We introduce custom qualifying questions & WhatsApp double-optin funnels.'
  },
  {
    icon: DollarSign,
    title: 'Low Return on Ad Spend (ROAS)',
    description: 'Campaigns barely breaking even or losing money due to outdated campaign structures and unoptimized ad copy.',
    fix: 'We implement AI campaign optimization & dynamic audience retargeting.'
  },
  {
    icon: ShieldAlert,
    title: 'Meta Ads Getting Account Rejected',
    description: 'Constant account suspensions, rejected ad copy, or strict Meta policy violations stalling your sales pipeline.',
    fix: 'Our Meta Certified team crafts 100% policy-compliant, pre-approved ad funnels.'
  },
  {
    icon: Radio,
    title: 'No Pixel or CAPI Tracking',
    description: 'iOS 14+ updates and browser privacy blocking your Meta Pixel, leaving you blind to actual conversion sources.',
    fix: 'We install server-side Meta Conversion API (CAPI) with 100% data accuracy.'
  },
  {
    icon: DollarSign,
    title: 'Wasted Advertising Budget',
    description: 'Pouring thousands of AED into boost posts or inexperienced freelancers without a structured growth roadmap.',
    fix: 'We implement transparent, data-driven media buying mapped directly to revenue.'
  }
];

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="problems" className="py-20 bg-[#0A0A0A] border-t border-[#1F1F1F] relative overflow-hidden">
      {/* Subtle Ambient Gold Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1A1810] border border-[#4A3D10] text-[#FFC000] px-4 py-1.5 rounded-full text-xs font-extrabold mb-3 shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5 text-[#FFC000]" />
            Common Dubai Ad Pitfalls
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Is Your Business Facing These <span className="text-[#FFC000]">Meta Ad Challenges</span>?
          </h2>
          <p className="text-neutral-400 mt-3 text-base sm:text-lg">
            Running Facebook &amp; Instagram ads in Dubai without a specialized GCC strategy often leads to money drained into unresponsive leads.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#141414] rounded-2xl p-6 border border-[#2B2B2B] hover:border-[#FFC000]/60 shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1F1B0E] border border-[#4A3D10] flex items-center justify-center text-[#FFC000] mb-4 group-hover:scale-110 group-hover:bg-[#FFC000] group-hover:text-black transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFC000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center bg-[#141414] p-6 sm:p-8 rounded-3xl border border-[#2B2B2B] shadow-2xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-extrabold text-white text-lg">
              Want to identify where your Meta Ads are losing money?
            </h4>
            <p className="text-sm text-neutral-400 mt-1">
              Request a complimentary 20-point audit from our Dubai media buyers.
            </p>
          </div>
          <button
            onClick={onOpenAuditModal}
            className="shrink-0 text-sm font-extrabold text-black bg-[#FFC000] hover:bg-[#e6ad00] px-6 py-3 rounded-full transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
          >
            <span>Get Free Ad Audit</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};
