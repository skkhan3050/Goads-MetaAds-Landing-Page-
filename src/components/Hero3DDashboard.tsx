import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { TrendingUp, Users, DollarSign, Target, Sparkles, Activity, CheckCircle, ArrowUpRight, Filter } from 'lucide-react';

const PERFORMANCE_DATA = {
  '30d': [
    { day: 'Week 1', leads: 82, roas: 3.2, spend: 3200, revenue: 10240 },
    { day: 'Week 2', leads: 145, roas: 4.1, spend: 4100, revenue: 16810 },
    { day: 'Week 3', leads: 220, roas: 4.9, spend: 5400, revenue: 26460 },
    { day: 'Week 4', leads: 310, roas: 5.8, spend: 6800, revenue: 39440 },
  ],
  '7d': [
    { day: 'Mon', leads: 28, roas: 4.2, spend: 800, revenue: 3360 },
    { day: 'Tue', leads: 35, roas: 4.8, spend: 850, revenue: 4080 },
    { day: 'Wed', leads: 42, roas: 5.1, spend: 900, revenue: 4590 },
    { day: 'Thu', leads: 50, roas: 5.4, spend: 950, revenue: 5130 },
    { day: 'Fri', leads: 61, roas: 6.0, spend: 1050, revenue: 6300 },
    { day: 'Sat', leads: 58, roas: 5.7, spend: 1000, revenue: 5700 },
    { day: 'Sun', leads: 64, roas: 6.2, spend: 1100, revenue: 6820 },
  ]
};

export const Hero3DDashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'7d' | '30d'>('30d');
  const [activeTab, setActiveTab] = useState<'roas' | 'leads' | 'revenue'>('roas');

  const currentData = PERFORMANCE_DATA[timeframe];

  return (
    <div className="relative w-full max-w-2xl mx-auto perspective-1000">
      {/* Background Soft Glow Blobs */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Main Glassmorphism Dashboard Frame */}
      <div className="relative bg-gray-900/90 text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-gray-800/80 backdrop-blur-xl transform transition-transform duration-500 hover:scale-[1.01]">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-wide">Meta Ads Manager</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Dubai Feed
                </span>
              </div>
              <p className="text-xs text-gray-400">Account: GoAdsLive_Dubai_Scale_Engine</p>
            </div>
          </div>

          {/* Timeframe selector */}
          <div className="flex items-center bg-gray-800/90 p-1 rounded-xl border border-gray-700/80 text-xs font-semibold">
            <button
              onClick={() => setTimeframe('7d')}
              className={`px-3 py-1 rounded-lg transition-all ${
                timeframe === '7d' ? 'bg-blue-600 text-white shadow-xs' : 'text-gray-400 hover:text-white'
              }`}
            >
              Last 7 Days
            </button>
            <button
              onClick={() => setTimeframe('30d')}
              className={`px-3 py-1 rounded-lg transition-all ${
                timeframe === '30d' ? 'bg-blue-600 text-white shadow-xs' : 'text-gray-400 hover:text-white'
              }`}
            >
              Last 30 Days
            </button>
          </div>
        </div>

        {/* Top Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
          {/* Metric 1 */}
          <div
            onClick={() => setActiveTab('roas')}
            className={`p-3 rounded-2xl cursor-pointer transition-all border ${
              activeTab === 'roas'
                ? 'bg-blue-600/20 border-blue-500/60 shadow-lg shadow-blue-500/10'
                : 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Avg ROAS</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xl font-extrabold text-white">5.8x</div>
            <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5 mt-0.5">
              <ArrowUpRight className="w-3 h-3" /> +320% vs last month
            </div>
          </div>

          {/* Metric 2 */}
          <div
            onClick={() => setActiveTab('leads')}
            className={`p-3 rounded-2xl cursor-pointer transition-all border ${
              activeTab === 'leads'
                ? 'bg-blue-600/20 border-blue-500/60 shadow-lg shadow-blue-500/10'
                : 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Qualified Leads</span>
              <Users className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-xl font-extrabold text-white">310</div>
            <div className="text-[10px] text-blue-400 font-semibold flex items-center gap-0.5 mt-0.5">
              <ArrowUpRight className="w-3 h-3" /> AED 21.9 CPL
            </div>
          </div>

          {/* Metric 3 */}
          <div
            onClick={() => setActiveTab('revenue')}
            className={`p-3 rounded-2xl cursor-pointer transition-all border ${
              activeTab === 'revenue'
                ? 'bg-blue-600/20 border-blue-500/60 shadow-lg shadow-blue-500/10'
                : 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Revenue (AED)</span>
              <DollarSign className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="text-xl font-extrabold text-white">AED 39.4K</div>
            <div className="text-[10px] text-purple-400 font-semibold flex items-center gap-0.5 mt-0.5">
              <ArrowUpRight className="w-3 h-3" /> Tracked via CAPI
            </div>
          </div>

          {/* Metric 4 */}
          <div className="p-3 rounded-2xl bg-gray-800/50 border border-gray-700/50">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Target Geo</span>
              <Target className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl font-extrabold text-white">Dubai & GCC</div>
            <div className="text-[10px] text-amber-400 font-semibold flex items-center gap-0.5 mt-0.5">
              High Intent HNWIs
            </div>
          </div>
        </div>

        {/* Interactive Chart Container */}
        <div className="bg-gray-950/80 rounded-2xl p-4 border border-gray-800/90 mb-4">
          <div className="flex items-center justify-between mb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-300">
                {activeTab === 'roas' && 'ROAS Scale Trajectory'}
                {activeTab === 'leads' && 'Qualified Lead Volume'}
                {activeTab === 'revenue' && 'Attributed Revenue (AED)'}
              </span>
            </div>
            <span className="text-[11px] text-gray-400 font-mono">Meta Pixel + CAPI Active</span>
          </div>

          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="blueGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1877F2" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#1877F2" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                <XAxis dataKey="day" stroke="#6b7280" fontSize={11} tickLine={false} />
                <YAxis stroke="#6b7280" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111827',
                    borderColor: '#374151',
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: '#fff',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey={activeTab === 'roas' ? 'roas' : activeTab === 'leads' ? 'leads' : 'revenue'}
                  stroke="#1877F2"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#blueGlow)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live Audience & Campaign Breakdown */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-800 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-gray-300 font-medium">Top Audience:</span>
            <span className="text-gray-400 bg-gray-800 px-2.5 py-1 rounded-lg">
              Dubai Real Estate & Luxury Seekers (25-54)
            </span>
          </div>
          <div className="text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" /> 100% CAPI Server Sync
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      {/* Meta Certified Badge Floating Left */}
      <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-2xl p-3 shadow-xl border border-gray-100 hidden sm:flex items-center gap-3 animate-float z-20">
        <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">
          ∞
        </div>
        <div>
          <div className="text-xs font-bold text-gray-900">Meta Business Partner</div>
          <div className="text-[11px] text-gray-500">Dubai Verified Media Buyer</div>
        </div>
      </div>

      {/* Instagram High Conversion Badge Floating Right */}
      <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-3 shadow-xl hidden sm:flex items-center gap-2.5 animate-float z-20">
        <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
        <div>
          <div className="text-xs font-extrabold">Instant IG Lead Flow</div>
          <div className="text-[10px] text-purple-100">WhatsApp & Direct DM Funnels</div>
        </div>
      </div>
    </div>
  );
};
