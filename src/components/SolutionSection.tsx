import React from 'react';
import { Target, Palette, Cpu, Radio, RefreshCw, Zap, CheckCircle2, Sparkles } from 'lucide-react';

const SOLUTIONS = [
  {
    icon: Target,
    title: 'Precision Audience Research',
    tag: 'GCC Market Deep Dive',
    description: 'We pinpoint high-income HNWIs, off-plan investors, and active buyers in Dubai, Abu Dhabi, and wider GCC using first-party demographic and behavioral data.',
    highlights: ['Custom Lookalike Audiences', 'Income-Tier Segmentation', 'Bilingual Expat & Local Targeting']
  },
  {
    icon: Palette,
    title: 'High-Converting Creative Strategy',
    tag: 'UGC & Motion Design',
    description: 'Our in-house design team produces thumb-stopping Instagram Reels, bilingual video ads, UGC testimonials, and high-impact carousel graphics.',
    highlights: ['Arabic & English Copywriting', 'Video Editing for IG Reels', 'Dynamic Creative A/B Testing']
  },
  {
    icon: Cpu,
    title: 'Scalable Campaign Architecture',
    tag: 'CBO & ABO Optimization',
    description: 'Structured Advantage+ Campaign Budget Optimization built to test creative angles aggressively without overspending or risking audience fatigue.',
    highlights: ['Full Funnel Setup', 'Advantage+ Budget Allocation', 'Rapid Scaling Framework']
  },
  {
    icon: Radio,
    title: 'Meta Pixel & Conversion API (CAPI)',
    tag: '100% Tracking Precision',
    description: 'Server-side integration bypasses browser restrictions, ad-blockers, and iOS 14+ tracking issues to feed Meta algorithms pristine purchase and lead signals.',
    highlights: ['Server-Side Event Deduplication', 'GTM Container Setup', 'First-Party Data Sync']
  },
  {
    icon: RefreshCw,
    title: 'Omnipresent Retargeting Campaigns',
    tag: 'Maximum Deal Closure',
    description: 'Re-engage prospects who engaged with your Instagram page, visited your landing page, or dropped off during checkout with tailored offers.',
    highlights: ['Dynamic Product Retargeting', 'Sequential Storytelling', 'WhatsApp Follow-Up Automations']
  },
  {
    icon: Zap,
    title: 'AI-Based Campaign Optimization',
    tag: '24/7 Automated Guardrails',
    description: 'Machine learning algorithms monitor cost-per-result every hour to automatically pause underperforming creatives and scale winning ad sets smoothly.',
    highlights: ['Predictive Bid Management', '24/7 Hourly Performance Rules', 'Anti-Ad Fatigue Refresh']
  }
];

export const SolutionSection: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            The GoAdsLive Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            How We Scale Your Business with <span className="text-gradient-blue">Meta Ads</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            A comprehensive performance marketing system designed to dominate Facebook &amp; Instagram advertising in Dubai.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-7 border border-gray-200/80 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl cta-gradient flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
