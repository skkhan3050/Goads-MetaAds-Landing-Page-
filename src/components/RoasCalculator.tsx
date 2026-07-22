import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Target, ArrowRight, Sparkles } from 'lucide-react';

interface RoasCalculatorProps {
  onOpenBookingModal: () => void;
}

const INDUSTRY_BENCHMARKS = {
  'Real Estate': { avgCpl: 140, conversionRate: 0.12, avgDealValue: 45000, roasMultiplier: 4.8 },
  'Healthcare & Dental': { avgCpl: 120, conversionRate: 0.25, avgDealValue: 3500, roasMultiplier: 5.2 },
  'E-Commerce': { avgCpl: 45, conversionRate: 0.03, avgDealValue: 450, roasMultiplier: 6.4 },
  'B2B & Professional Services': { avgCpl: 180, conversionRate: 0.15, avgDealValue: 18000, roasMultiplier: 4.5 },
  'Hospitality & Luxury': { avgCpl: 90, conversionRate: 0.20, avgDealValue: 2200, roasMultiplier: 5.0 },
};

export const RoasCalculator: React.FC<RoasCalculatorProps> = ({ onOpenBookingModal }) => {
  const [budget, setBudget] = useState<number>(15000);
  const [selectedIndustry, setSelectedIndustry] = useState<keyof typeof INDUSTRY_BENCHMARKS>('Real Estate');

  const benchmark = INDUSTRY_BENCHMARKS[selectedIndustry];

  const estimatedLeads = Math.round(budget / benchmark.avgCpl);
  const estimatedDeals = Math.round(estimatedLeads * benchmark.conversionRate);
  const estimatedRevenue = Math.round(budget * benchmark.roasMultiplier);
  const calculatedRoas = (estimatedRevenue / budget).toFixed(1);

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Interactive ROI Forecaster
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Calculate Your Meta Ads <span className="text-gradient-blue">ROAS &amp; Lead Revenue</span> in Dubai
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Estimate your potential qualified leads, cost per acquisition, and return on ad spend based on real GCC market benchmark data.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-200/80 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Controls Side */}
          <div className="md:col-span-7 space-y-6">
            {/* Industry Selection */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                1. Select Your Business Industry in Dubai
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.keys(INDUSTRY_BENCHMARKS).map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind as keyof typeof INDUSTRY_BENCHMARKS)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      selectedIndustry === ind
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Budget Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-900">
                  2. Planned Monthly Meta Ad Spend (AED)
                </label>
                <span className="text-lg font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-xl border border-blue-100">
                  AED {budget.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="100000"
                step="1000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 font-medium mt-1">
                <span>AED 3,000 (Starter)</span>
                <span>AED 50,000</span>
                <span>AED 100,000+ (Scale)</span>
              </div>
            </div>

            {/* Benchmark Insights Note */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-1.5">
              <div className="font-bold text-gray-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Dubai Market Benchmark Data:
              </div>
              <p>
                • Estimated CPL for {selectedIndustry}: <span className="font-bold text-gray-900">AED {benchmark.avgCpl}</span>
              </p>
              <p>
                • Projected ROAS Target: <span className="font-bold text-emerald-600">{benchmark.roasMultiplier}x Return</span>
              </p>
            </div>
          </div>

          {/* Results Display Side */}
          <div className="md:col-span-5 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 text-white rounded-2xl p-6 flex flex-col justify-between border border-gray-800 shadow-inner">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Forecasted Growth</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Dubai Market Proven
                </span>
              </div>

              {/* Estimated ROAS */}
              <div className="bg-gray-800/60 p-3.5 rounded-xl border border-gray-700/60">
                <span className="text-xs text-gray-400 block mb-1">Target ROAS Return</span>
                <div className="text-3xl font-extrabold text-emerald-400 flex items-baseline gap-1">
                  {calculatedRoas}x
                  <span className="text-xs font-normal text-gray-400">Return on Ad Spend</span>
                </div>
              </div>

              {/* Projected Revenue */}
              <div className="bg-gray-800/60 p-3.5 rounded-xl border border-gray-700/60">
                <span className="text-xs text-gray-400 block mb-1">Projected Monthly Revenue</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  AED {estimatedRevenue.toLocaleString()}
                </div>
              </div>

              {/* Leads & Deals */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-800/60 p-3 rounded-xl border border-gray-700/60">
                  <span className="text-gray-400 block">Est. Leads</span>
                  <span className="text-xl font-bold text-blue-400">{estimatedLeads} Leads</span>
                </div>
                <div className="bg-gray-800/60 p-3 rounded-xl border border-gray-700/60">
                  <span className="text-gray-400 block">Closed Deals</span>
                  <span className="text-xl font-bold text-purple-400">~{estimatedDeals} Clients</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBookingModal}
              className="mt-6 w-full text-xs sm:text-sm font-bold text-white cta-gradient hover:opacity-95 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              Get Custom ROAS Strategy
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
