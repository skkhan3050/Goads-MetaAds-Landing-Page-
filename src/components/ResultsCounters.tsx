import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, ArrowDownRight, DollarSign, Award, Smile, ShieldCheck } from 'lucide-react';

const METRICS = [
  { label: 'Average ROAS Increase', target: 300, suffix: '%', icon: TrendingUp, detail: 'Tested across 100+ GCC brands' },
  { label: 'Lower Cost Per Lead', target: 45, suffix: '%', icon: ArrowDownRight, detail: 'Qualified lead optimization' },
  { label: 'Managed Ad Spend', target: 5, prefix: 'AED ', suffix: 'M+', icon: DollarSign, detail: 'In Dubai & GCC markets' },
  { label: 'Successful Campaigns', target: 500, suffix: '+', icon: Award, detail: 'Meta Facebook & Instagram' },
  { label: 'Client Satisfaction', target: 98, suffix: '%', icon: Smile, detail: 'Long-term client retention' },
  { label: 'Campaign Monitoring', target: 24, suffix: '/7', icon: ShieldCheck, detail: 'AI automated guardrails' },
];

export const ResultsCounters: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(METRICS.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          METRICS.forEach((metric, index) => {
            const duration = 2000;
            const steps = 50;
            const stepTime = duration / steps;
            const increment = metric.target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= metric.target) {
                current = metric.target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.floor(current);
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3.5 py-1 rounded-full text-xs font-bold mb-3">
            Proven Performance Metrics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Data-Driven Results for <span className="text-blue-400">Dubai Businesses</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base sm:text-lg">
            Real performance numbers generated through our specialized Meta advertising methodologies.
          </p>
        </div>

        {/* 6 Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gray-800/60 rounded-2xl p-5 border border-gray-700/60 backdrop-blur-md hover:border-blue-500 transition-all hover:scale-[1.03] text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {item.prefix || ''}
                  {counts[idx]}
                  {item.suffix}
                </div>
                <div className="text-xs font-bold text-gray-200 mt-1">
                  {item.label}
                </div>
                <div className="text-[10px] text-gray-400 mt-1">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
