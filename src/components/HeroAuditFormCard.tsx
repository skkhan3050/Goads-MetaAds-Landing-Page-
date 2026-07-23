import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Lock, ArrowRight, X } from 'lucide-react';

interface HeroAuditFormCardProps {
  onSubmittedSuccess?: () => void;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const HeroAuditFormCard: React.FC<HeroAuditFormCardProps> = ({
  onSubmittedSuccess,
  isModal = false,
  onCloseModal
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [monthlyBudget, setMonthlyBudget] = useState('AED 5,000 - AED 10,000 / mo');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti celebration
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });

      if (onSubmittedSuccess) {
        onSubmittedSuccess();
      }
    }, 700);
  };

  return (
    <div className="bg-[#141414] border border-[#2B2B2B] rounded-3xl p-4.5 sm:p-8 shadow-2xl shadow-black/80 relative overflow-hidden text-white backdrop-blur-xl w-full max-w-full box-border">
      {/* Background Subtle Yellow/Gold Glow Accent */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      {isModal && onCloseModal && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onCloseModal();
          }}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#242424] hover:bg-[#333333] active:bg-[#3D3D3D] text-neutral-300 hover:text-white flex items-center justify-center transition-all border border-[#383838] shadow-lg cursor-pointer active:scale-95 touch-manipulation"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {submitted ? (
        <div className="text-center py-10 space-y-4 relative z-10">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-950/50">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-black text-white">Free Audit Reserved!</h3>
          <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
            Thank you <span className="font-bold text-white">{fullName || 'Valued Client'}</span>! Our senior Dubai Meta Ads media buyers are preparing your audit breakdown. We will reach out via WhatsApp (<span className="text-amber-400 font-semibold">{phone || 'provided number'}</span>) within 15 minutes.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-bold text-amber-400 underline hover:text-amber-300 transition-all"
            >
              Submit another request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          {/* Header Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Claim Up to 200 AED Free Ad Budget
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm mt-1.5 leading-relaxed font-medium">
              Scale your business faster with a complimentary ad budget. <span className="font-extrabold text-white">Limited-time offer—start now.</span>
            </p>
          </div>

          {/* Form Inputs */}
          <div className="space-y-3.5 pt-1">
            {/* Full Name */}
            <div>
              <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ahmed Ali"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#242424] border border-[#383838] text-white font-medium placeholder-[#8C8C8C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all"
              />
            </div>

            {/* Email & Phone WhatsApp Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. ahmed@company.ae"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#242424] border border-[#383838] text-white font-medium placeholder-[#8C8C8C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#242424] border border-[#383838] text-white font-medium placeholder-[#8C8C8C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all"
                />
              </div>
            </div>

            {/* Monthly Ad Spend Dropdown */}
            <div>
              <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                Monthly Ad Spend
              </label>
              <select
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(e.target.value)}
                className="w-full bg-[#242424] border border-[#383838] text-white font-bold rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all appearance-none cursor-pointer"
              >
                <option value="AED 5,000 - AED 10,000 / mo" className="bg-[#141414] text-white font-semibold">
                  AED 5,000 - AED 10,000 / mo
                </option>
                <option value="AED 10,000 - AED 25,000 / mo" className="bg-[#141414] text-white font-semibold">
                  AED 10,000 - AED 25,000 / mo
                </option>
                <option value="AED 25,000 - AED 50,000 / mo" className="bg-[#141414] text-white font-semibold">
                  AED 25,000 - AED 50,000 / mo
                </option>
                <option value="AED 50,000+ / mo" className="bg-[#141414] text-white font-semibold">
                  AED 50,000+ / mo (Scale)
                </option>
              </select>
            </div>

            {/* Website URL */}
            <div>
              <label className="block text-xs sm:text-sm font-extrabold text-white mb-1.5">
                Website URL
              </label>
              <input
                type="url"
                placeholder="e.g. www.yourcompany.ae"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="w-full bg-[#242424] border border-[#383838] text-white font-medium placeholder-[#8C8C8C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFC000] focus:ring-1 focus:ring-[#FFC000] transition-all"
              />
            </div>
          </div>

          {/* Submit CTA Button - Electric Yellow/Gold */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FFC000] hover:bg-[#e6ad00] text-black font-extrabold py-4 rounded-xl text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 mt-4 cursor-pointer"
          >
            {loading ? (
              <span className="flex items-center gap-2 text-black">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Processing Request...
              </span>
            ) : (
              <>
                <span>Claim My Free Audit</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </>
            )}
          </button>

          {/* Security / Guarantee Footer */}
          <div className="pt-2 text-center">
            <p className="text-xs text-neutral-400 flex items-center justify-center gap-1.5 font-medium">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Confidential • Backed by 30-Day Work-For-Free Guarantee</span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
