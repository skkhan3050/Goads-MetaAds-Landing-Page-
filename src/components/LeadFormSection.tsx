import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { LeadFormData } from '../types';
import { Send, ShieldCheck, Lock, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface LeadFormSectionProps {
  onFormSubmitted?: () => void;
}

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({ onFormSubmitted }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    businessName: '',
    phoneWhatsApp: '',
    email: '',
    website: '',
    industry: 'Real Estate',
    monthlyBudget: 'AED 10,000 - AED 25,000',
    businessGoal: 'Generate More Qualified Leads',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });

      if (onFormSubmitted) {
        onFormSubmitted();
      }
    }, 800);
  };

  return (
    <section id="lead-form" className="py-20 bg-[#0A0A0A] border-t border-[#1F1F1F] relative overflow-hidden">
      {/* Background Ambient Gold Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Callout & Value Props */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#1A1810] border border-[#4A3D10] text-[#FFC000] px-4 py-1.5 rounded-full text-xs font-extrabold mb-3 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#FFC000] fill-[#FFC000]" />
              Claim Your Free Growth Blueprint
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Scale Your Business with <span className="text-[#FFC000]">Meta Ads</span>?
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              Book a free consultation with our Dubai Meta Ads media buyers and receive a personalized growth strategy tailored to your industry.
            </p>

            <div className="space-y-4 pt-2 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-3.5 bg-[#141414] p-4 rounded-2xl border border-[#2B2B2B] shadow-md">
                <div className="w-9 h-9 rounded-xl bg-[#1F1B0E] border border-[#4A3D10] text-[#FFC000] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#FFC000]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">20-Point Meta Ad Account Audit</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">We inspect your tracking, creatives, and cost per lead leakages.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-[#141414] p-4 rounded-2xl border border-[#2B2B2B] shadow-md">
                <div className="w-9 h-9 rounded-xl bg-[#1F1B0E] border border-[#4A3D10] text-[#FFC000] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#FFC000]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Competitor Audience Mapping</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Uncover where your top Dubai competitors are capturing leads.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-[#141414] p-4 rounded-2xl border border-[#2B2B2B] shadow-md">
                <div className="w-9 h-9 rounded-xl bg-[#1F1B0E] border border-[#4A3D10] text-[#FFC000] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#FFC000]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Zero Obligation Strategy Session</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Direct 1-on-1 consultation with a senior Dubai media buyer.</p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-neutral-400 font-medium pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> GDPR Safe
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#FFC000]" /> 100% Secure &amp; Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#FFC000]" /> No Spam Guarantee
              </span>
            </div>
          </div>

          {/* Right Column: Premium Dark Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#2B2B2B] relative text-white">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#1F1B0E] text-[#FFC000] border border-[#4A3D10] rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10 text-[#FFC000]" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Strategy Call Confirmed!</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you <span className="font-bold text-white">{formData.firstName}</span>! Our Dubai Meta Ads specialist has received your details and will contact you via WhatsApp within 15 minutes.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-[#FFC000] underline hover:text-[#e6ad00]"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#262626]">
                    <h3 className="text-xl font-extrabold text-white">Request Free Meta Ads Strategy</h3>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                      📍 Fast Response in UAE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-[#242424] border border-[#383838] text-white font-medium placeholder-[#8C8C8C] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Horizon Real Estate"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-[#242424] border border-[#383838] text-white font-medium placeholder-[#8C8C8C] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number WhatsApp */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                        WhatsApp Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 123 4567"
                        value={formData.phoneWhatsApp}
                        onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                        className="w-full bg-[#242424] border border-[#383838] text-white font-medium placeholder-[#8C8C8C] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.ae"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#242424] border border-[#383838] text-white font-medium placeholder-[#8C8C8C] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Website */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                        Website URL (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="www.yourcompany.ae"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full bg-[#242424] border border-[#383838] text-white font-medium placeholder-[#8C8C8C] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all"
                      />
                    </div>

                    {/* Business Industry Dropdown */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                        Business Industry *
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full bg-[#242424] border border-[#383838] text-white font-bold rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all appearance-none cursor-pointer"
                      >
                        <option value="Real Estate" className="bg-[#141414] text-white">Real Estate &amp; Off-Plan</option>
                        <option value="Healthcare" className="bg-[#141414] text-white">Healthcare &amp; Aesthetics</option>
                        <option value="E-Commerce" className="bg-[#141414] text-white">E-Commerce &amp; Retail</option>
                        <option value="B2B Services" className="bg-[#141414] text-white">B2B &amp; Professional Services</option>
                        <option value="Hospitality" className="bg-[#141414] text-white">Hospitality &amp; Luxury</option>
                        <option value="Education" className="bg-[#141414] text-white">Education &amp; Training</option>
                        <option value="Other" className="bg-[#141414] text-white">Other Industry</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Monthly Budget Dropdown */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                        Monthly Meta Advertising Budget *
                      </label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full bg-[#242424] border border-[#383838] text-white font-bold rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all appearance-none cursor-pointer"
                      >
                        <option value="AED 5,000 - AED 10,000" className="bg-[#141414] text-white">AED 5,000 - AED 10,000</option>
                        <option value="AED 10,000 - AED 25,000" className="bg-[#141414] text-white">AED 10,000 - AED 25,000</option>
                        <option value="AED 25,000 - AED 50,000" className="bg-[#141414] text-white">AED 25,000 - AED 50,000</option>
                        <option value="AED 50,000+" className="bg-[#141414] text-white">AED 50,000+ (Scale)</option>
                      </select>
                    </div>

                    {/* Business Goal Dropdown */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                        Primary Business Goal *
                      </label>
                      <select
                        value={formData.businessGoal}
                        onChange={(e) => setFormData({ ...formData, businessGoal: e.target.value })}
                        className="w-full bg-[#242424] border border-[#383838] text-white font-bold rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all appearance-none cursor-pointer"
                      >
                        <option value="Generate More Qualified Leads" className="bg-[#141414] text-white">Generate More Qualified Leads</option>
                        <option value="Lower Cost Per Acquisition" className="bg-[#141414] text-white">Lower Cost Per Acquisition (CPL)</option>
                        <option value="Scale ROAS on Online Store" className="bg-[#141414] text-white">Scale ROAS on Online Store</option>
                        <option value="Fix Pixel & CAPI Tracking" className="bg-[#141414] text-white">Fix Pixel &amp; CAPI Tracking</option>
                        <option value="Improve Ad Creative & Videos" className="bg-[#141414] text-white">Improve Ad Creative &amp; Videos</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                      Additional Message or Current Ad Challenge
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your current campaigns, target audience, or specific Dubai ad goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#242424] border border-[#383838] text-white font-medium placeholder-[#8C8C8C] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button - Electric Gold */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full text-base font-extrabold text-black bg-[#FFC000] hover:bg-[#e6ad00] py-4 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-2 transform active:scale-98 cursor-pointer mt-2"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2 text-black">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Generating Strategy...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        <span>Get Free Meta Ads Strategy</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
