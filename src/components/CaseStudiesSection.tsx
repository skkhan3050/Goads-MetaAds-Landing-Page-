import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/contentData';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Building2, Stethoscope, ShoppingBag, ArrowRight, ShieldCheck, BarChart2 } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenBookingModal: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBookingModal }) => {
  const [activeTab, setActiveTab] = useState<string>('real-estate-dubai');

  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];



  return (
    <section id="case-studies" className="py-20 bg-[#0A0A0A] border-t border-[#1F1F1F] text-white relative">
      {/* Background Subtle Yellow/Gold Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1A1810] border border-[#4A3D10] text-[#FFC000] px-4 py-1.5 rounded-full text-xs font-extrabold mb-3 shadow-sm">
            <BarChart2 className="w-3.5 h-3.5 text-[#FFC000]" />
            Verified Client Campaign Proof
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Dubai <span className="text-[#FFC000]">Meta Ads Case Studies</span>
          </h2>
          <p className="text-neutral-400 mt-3 text-base sm:text-lg">
            See how we helped Dubai brands lower CPL, overcome iOS tracking loss, and multiply return on ad spend.
          </p>
        </div>

        {/* Industry Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
          {CASE_STUDIES.map((cs) => {
            const isSelected = cs.id === activeTab;
            return (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`py-3.5 px-6 rounded-2xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2.5 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#FFC000] text-black border-[#FFC000] shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-[#141414] text-neutral-300 border-[#2B2B2B] hover:bg-[#1C1C1C]'
                }`}
              >
                {cs.industry.includes('Real Estate') && <Building2 className="w-4 h-4" />}
                {cs.industry.includes('Dental') && <Stethoscope className="w-4 h-4" />}
                {cs.industry.includes('Fashion') && <ShoppingBag className="w-4 h-4" />}
                <span>{cs.industry}</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Feature Container */}
        <div className="bg-[#141414] rounded-3xl p-6 sm:p-10 border border-[#2B2B2B] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Client Badges, Metrics & Real Proof Screenshot */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#1F1B0E] border border-[#4A3D10] text-[#FFC000] text-xs font-extrabold px-3.5 py-1 rounded-full">
                {activeCase.industry}
              </span>
              <span className="text-xs font-extrabold text-neutral-300">
                📍 {activeCase.location}
              </span>
              <span className="text-xs font-bold text-white bg-[#242424] px-3.5 py-1 rounded-full border border-[#333333]">
                Client: {activeCase.clientName}
              </span>
            </div>

            {/* Results Badges Bar */}
            <div className="grid grid-cols-3 gap-3 bg-[#0A0A0A] p-4 rounded-2xl border border-[#262626] shadow-xs">
              <div className="text-center border-r border-[#222222] pr-2">
                <span className="text-[10px] text-neutral-400 uppercase font-extrabold block">ROAS Return</span>
                <span className="text-base sm:text-lg font-extrabold text-[#FFC000]">{activeCase.results.roas}</span>
              </div>
              <div className="text-center border-r border-[#222222] pr-2">
                <span className="text-[10px] text-neutral-400 uppercase font-extrabold block">CPL Impact</span>
                <span className="text-base sm:text-lg font-extrabold text-emerald-400">{activeCase.results.cpl}</span>
              </div>
              <div className="text-center">
                <span className="text-[10px] text-neutral-400 uppercase font-extrabold block">Attributed Sales</span>
                <span className="text-base sm:text-lg font-extrabold text-purple-400">{activeCase.results.revenue}</span>
              </div>
            </div>

            {/* Real Meta Ads Manager Proof Screenshot */}
            <div className="relative rounded-2xl overflow-hidden border border-[#2B2B2B] bg-[#050505] shadow-2xl group aspect-[16/9] max-h-[380px] w-full flex items-center justify-center p-2">
              <img
                src={
                  activeCase.id === 'real-estate-dubai'
                    ? '/assets/meta_ads_dashboard_1.png'
                    : activeCase.id === 'healthcare-dubai'
                    ? '/assets/meta_ads_dashboard_3.png'
                    : '/assets/meta_ads_dashboard_2.png'
                }
                alt={`${activeCase.industry} Meta Ads Manager Live Proof`}
                className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />

              {/* Watermark Verification Badge */}
              <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFC000]" />
                <span>Meta Business Manager Verified</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Recharts Graph (Before vs GoAdsLive) */}
          <div className="lg:col-span-5 bg-[#0A0A0A] p-6 rounded-2xl border border-[#2B2B2B] shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
              <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                ROAS Growth Trajectory (Before vs GoAdsLive)
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                Month-over-Month
              </span>
            </div>

            <div className="h-64 w-full min-h-[256px]">
              <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={200}>
                <BarChart data={activeCase.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={11} tickLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={11} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#111827',
                      borderColor: '#374151',
                      borderRadius: '12px',
                      fontSize: '12px',
                      color: '#fff',
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="beforeRoas" name="Previous Agency ROAS" fill="#475569" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="afterRoas" name="GoAdsLive ROAS" fill="#FFC000" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <a
              href="tel:+917439469915"
              className="w-full text-xs font-extrabold text-black bg-[#FFC000] hover:bg-[#e6ad00] py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Replicate This Strategy For Your Business</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
