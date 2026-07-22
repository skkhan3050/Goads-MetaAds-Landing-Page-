import React from 'react';
import { Award, BarChart3, UserCheck, ShieldCheck, Cpu, MonitorPlay } from 'lucide-react';

const REASONS = [
  {
    icon: Award,
    title: 'Certified Meta Media Buyers',
    description: 'Our team holds official Meta Certified Buying & Creative Professional accreditations with AED 5M+ spent in GCC markets.'
  },
  {
    icon: BarChart3,
    title: 'Transparent Weekly Reporting',
    description: 'No fluff metrics. You receive clear weekly video breakdowns highlighting ROAS, cost per lead, and revenue contribution.'
  },
  {
    icon: UserCheck,
    title: 'Dedicated Account Manager',
    description: 'Direct WhatsApp communication with your senior media buyer in Dubai with under 15-minute average response time.'
  },
  {
    icon: ShieldCheck,
    title: 'No Lock-in Contracts',
    description: 'We earn your business month after month with transparent performance pricing and flexible terms.'
  },
  {
    icon: Cpu,
    title: 'AI-Powered Campaign Engine',
    description: 'Automated 24/7 cost guardrails protect your budget while AI models continuously test new high-converting creative angles.'
  },
  {
    icon: MonitorPlay,
    title: 'Live Performance Dashboard',
    description: 'Access your custom 24/7 client portal tracking live Facebook & Instagram campaign metrics, leads, and CAPI events.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-blue-200">
            Why Dubai Businesses Choose GoAdsLive
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Built for <span className="text-gradient-blue">Measurable Growth &amp; Transparency</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            We operate as your dedicated internal performance marketing engine in Dubai.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-7 border border-gray-200/80 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl cta-gradient flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
