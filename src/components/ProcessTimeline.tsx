import React from 'react';
import { PhoneCall, Search, FileText, Rocket, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenBookingModal: () => void;
}

const STEPS = [
  {
    step: '01',
    icon: PhoneCall,
    title: 'Free Discovery Call',
    timeframe: 'Day 1',
    description: 'We analyze your business goals, target customer profiles in Dubai, current ad bottlenecks, and ad budget parameters.'
  },
  {
    step: '02',
    icon: Search,
    title: 'Business & Pixel Audit',
    timeframe: 'Day 2 - 3',
    description: 'Our technical team inspects your Meta Ad Account history, Pixel event logs, CAPI server health, and landing page conversion friction.'
  },
  {
    step: '03',
    icon: FileText,
    title: 'Strategy & Creative Blueprint',
    timeframe: 'Day 4 - 5',
    description: 'We draft bespoke ad copies, produce bilingual Reels video creatives, design static graphics, and architect Advantage+ campaigns.'
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Campaign Launch',
    timeframe: 'Day 6 - 7',
    description: 'Your ads go live with real-time Meta Pixel & CAPI tracking, automated budget guardrails, and direct lead alerts to WhatsApp.'
  },
  {
    step: '05',
    icon: LineChart,
    title: 'Optimization & Scaling',
    timeframe: 'Ongoing (Week 2+)',
    description: 'We relentlessly prune underperforming assets, scale winning ad sets smoothly, and send transparent weekly video reports.'
  }
];

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="process" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-blue-200">
            5-Step Onboarding &amp; Execution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Proven <span className="text-gradient-blue">Meta Scaling Roadmap</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            From initial audit to profitable scaling in less than 7 days.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="relative group">
                <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-blue-600 font-mono">
                        {s.step}
                      </span>
                      <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                        {s.timeframe}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl cta-gradient text-white flex items-center justify-center mb-3 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-extrabold text-gray-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Fast Execution
                  </div>
                </div>

                {/* Arrow Connector for Desktop */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-blue-400 font-bold pointer-events-none">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBookingModal}
            className="text-sm font-bold text-white cta-gradient hover:opacity-95 px-8 py-4 rounded-2xl shadow-lg inline-flex items-center gap-2"
          >
            Start Step 1: Free Discovery Call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
