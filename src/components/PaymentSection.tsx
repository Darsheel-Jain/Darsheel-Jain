import React, { useState } from 'react';
import { ShieldCheck, CreditCard, Landmark, Check, FileText, Lock, Sparkles } from 'lucide-react';

interface PaymentSectionProps {
  onRequestQuote: () => void;
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({ onRequestQuote }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [estimatedServices, setEstimatedServices] = useState<{
    web: boolean;
    ai: boolean;
    adCreative: boolean;
    adMgmt: boolean;
  }>({
    web: true,
    ai: true,
    adCreative: false,
    adMgmt: false,
  });

  const baseCurrencySymbol = { USD: '$', EUR: '€', GBP: '£' }[selectedCurrency];
  const multiplier = { USD: 1, EUR: 0.92, GBP: 0.79 }[selectedCurrency];

  const calculateEstimate = () => {
    let min = 0;
    let max = 0;
    if (estimatedServices.web) {
      min += 2400;
      max += 5500;
    }
    if (estimatedServices.ai) {
      min += 1800;
      max += 4200;
    }
    if (estimatedServices.adCreative) {
      min += 900;
      max += 2200;
    }
    if (estimatedServices.adMgmt) {
      min += 1200;
      max += 2800;
    }
    if (min === 0) return { min: 0, max: 0 };
    return {
      min: Math.round(min * multiplier),
      max: Math.round(max * multiplier),
    };
  };

  const estimate = calculateEstimate();

  return (
    <section className="py-24 bg-[#05070E] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-3.5 py-1 mb-4">
            Financial Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Secure & Convenient{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Payments.
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed font-normal text-balance">
            We partner with premier payment gateways and global banking networks to ensure seamless, compliant, and encrypted billing across all continents.
          </p>
        </div>

        {/* 4 Supported Payment Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Channel 1: Stripe */}
          <div className="bg-[#0B0F19]/90 rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col justify-between hover:border-cyan-500/30 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-950/50 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-lg mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Stripe</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Major credit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and localized digital wallets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-indigo-300 font-semibold">
              <Lock className="w-3.5 h-3.5 text-indigo-400" />
              <span>PCI-DSS Level 1 Hosted</span>
            </div>
          </div>

          {/* Channel 2: PayPal */}
          <div className="bg-[#0B0F19]/90 rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col justify-between hover:border-cyan-500/30 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/50 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-lg mb-4">
                <span className="font-extrabold text-blue-400">PP</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">PayPal</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Global balance payments, PayPal Credit, and buyer protection for verified commercial partners.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-blue-300 font-semibold">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Encrypted Global Escrow</span>
            </div>
          </div>

          {/* Channel 3: Bank Transfer / Wire */}
          <div className="bg-[#0B0F19]/90 rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col justify-between hover:border-cyan-500/30 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg mb-4">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Bank Transfer</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct ACH, SEPA, and SWIFT international corporate wire transfers with automated official invoices.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>B2B Invoice & Wire Clearing</span>
            </div>
          </div>

          {/* Channel 4: Other Supported Methods */}
          <div className="bg-[#0B0F19]/90 rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col justify-between hover:border-cyan-500/30 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-950/50 text-purple-400 border border-purple-500/30 flex items-center justify-center font-bold text-lg mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Other Methods</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Multi-currency corporate cards, Wise B2B, and milestone escrow accounts tailored to international agreements.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-purple-300 font-semibold">
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              <span>Global Multi-Currency</span>
            </div>
          </div>

        </div>

        {/* Interactive Custom Quotation & Scope Estimator */}
        <div className="bg-[#0B0F19]/95 rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-cyan-300 mb-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Scope Estimator & Quotation</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Configure Your Project Before Payment
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                ScaleX adheres strictly to bespoke proposals. Select the capabilities you need to view an indicative scope range, then request a tailored quotation. Real payment checkouts are provisioned after scope confirmation.
              </p>

              {/* Service Selection Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={estimatedServices.web}
                    onChange={(e) => setEstimatedServices({ ...estimatedServices, web: e.target.checked })}
                    className="w-4 h-4 text-cyan-500 rounded border-slate-700 bg-slate-900 focus:ring-cyan-400"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Website Development</span>
                    <span className="text-[11px] text-slate-400">Custom build & optimization</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={estimatedServices.ai}
                    onChange={(e) => setEstimatedServices({ ...estimatedServices, ai: e.target.checked })}
                    className="w-4 h-4 text-cyan-500 rounded border-slate-700 bg-slate-900 focus:ring-cyan-400"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">AI Business Automation</span>
                    <span className="text-[11px] text-slate-400">Workflows & automated chat</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={estimatedServices.adCreative}
                    onChange={(e) => setEstimatedServices({ ...estimatedServices, adCreative: e.target.checked })}
                    className="w-4 h-4 text-cyan-500 rounded border-slate-700 bg-slate-900 focus:ring-cyan-400"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Ad Creation Suite</span>
                    <span className="text-[11px] text-slate-400">High-converting graphics & copy</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={estimatedServices.adMgmt}
                    onChange={(e) => setEstimatedServices({ ...estimatedServices, adMgmt: e.target.checked })}
                    className="w-4 h-4 text-cyan-500 rounded border-slate-700 bg-slate-900 focus:ring-cyan-400"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Ad Deployment & Mgmt</span>
                    <span className="text-[11px] text-slate-400">Meta & Google campaigns</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Right Card: Dynamic Estimate & "Request a Quote" CTA */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-blue-950/60 to-purple-950/60 border border-cyan-500/30 rounded-2xl p-7 text-white flex flex-col justify-between shadow-scalex-glow">
              <div>
                <div className="flex items-center justify-between mb-4 text-xs text-slate-300">
                  <span>Indicative Scope Range</span>
                  <div className="flex items-center gap-1 bg-white/10 rounded-lg p-0.5">
                    {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                      <button
                        key={curr}
                        onClick={() => setSelectedCurrency(curr)}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded cursor-pointer ${
                          selectedCurrency === curr ? 'bg-cyan-500 text-slate-950' : 'text-slate-300'
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums">
                    {estimate.min === 0 ? (
                      'Select a service'
                    ) : (
                      <>
                        {baseCurrencySymbol}
                        {estimate.min.toLocaleString()} – {baseCurrencySymbol}
                        {estimate.max.toLocaleString()}
                      </>
                    )}
                  </div>
                  <span className="text-xs text-cyan-300 mt-1 block">
                    Tailored milestone pricing · Zero hidden retainers
                  </span>
                </div>

                <ul className="text-xs text-slate-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    Custom statement of work (SOW) provided
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    Milestone-gated payment releases
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    Hosted PCI checkout links sent upon agreement
                  </li>
                </ul>
              </div>

              {/* Standard Compliant Action Button */}
              <button
                onClick={onRequestQuote}
                className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:from-cyan-300 hover:via-blue-400 hover:to-purple-400 text-slate-950 transition-all shadow-scalex-glow active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 border border-white/20"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Custom Quote</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
