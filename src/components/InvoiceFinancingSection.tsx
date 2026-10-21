import React, { useState } from 'react';
import { 
  Receipt, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Sliders, 
  Sparkles,
  AlertTriangle,
  Building,
  DollarSign
} from 'lucide-react';

interface InvoiceFinancingSectionProps {
  onDiscussFinancing: (amount?: number) => void;
}

export const InvoiceFinancingSection: React.FC<InvoiceFinancingSectionProps> = ({ onDiscussFinancing }) => {
  const [sliderAmount, setSliderAmount] = useState<number>(150000);
  const [selectedTerms, setSelectedTerms] = useState<'Net-30' | 'Net-60' | 'Net-90'>('Net-60');

  // Advance calculation model (illustrative 85% advance)
  const advanceRate = 0.85;
  const advanceCalculated = sliderAmount * advanceRate;
  const estimatedDiscountFee = selectedTerms === 'Net-30' ? 0.015 : selectedTerms === 'Net-60' ? 0.0185 : 0.024;
  const feeCalculated = sliderAmount * estimatedDiscountFee;
  const rebateUponSettlement = sliderAmount - advanceCalculated - feeCalculated;

  return (
    <section id="invoice-financing" className="py-24 bg-[#071426] relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[400px] bg-[#36D6F5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with exact requested heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
            <Receipt className="w-3.5 h-3.5" />
            <span>Working Capital for High-Growth Firms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Unlock More Flexibility for <span className="cyan-gradient-text">Your Business</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Invoice financing helps companies access immediate liquidity against verified commercial receivables without waiting 30 to 90 days for client payment cycles.
          </p>
        </div>

        {/* Content & Interactive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clear professional explanation */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Bridge the Cash Conversion Gap Without Diluting Ownership
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When selling to creditworthy enterprise buyers, payment terms of 30, 60, or 90 days are standard—yet your company must pay suppliers, freight forwarders, and employees immediately. Invoice financing advances up to 85%–90% of the invoice balance upfront, turning pending receivables into deployable operating cash.
            </p>

            {/* Step-by-step breakdown */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B1F3A]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#36D6F5]/20 text-[#36D6F5] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Issue Commercial Invoices</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Deliver goods or services to your verified B2B corporate customer as usual.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B1F3A]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#36D6F5]/20 text-[#36D6F5] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Receive Upfront Advance in 24 Hours</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Upon swift document validation, up to 85%–90% of funds are deposited into your operating account.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B1F3A]/60 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-[#36D6F5]/20 text-[#36D6F5] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full Settlement Upon Customer Payment</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    When the customer pays the invoice, the remaining balance is disbursed to you minus a transparent fee.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onDiscussFinancing(sliderAmount)}
                className="cyan-gradient-btn px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 cursor-pointer shadow-xl shadow-[#36D6F5]/15"
              >
                <span>Discuss Financing Options</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Animated Interactive Invoice Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#36D6F5]/30 shadow-2xl relative">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">Commercial Receivables</span>
                  <span className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    INV-2026-8941
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-sans">
                      Verified Review Status
                    </span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-mono">Debtor</span>
                  <span className="text-xs font-semibold text-white">Global Retail Partners Corp</span>
                </div>
              </div>

              {/* Terms Selector */}
              <div className="my-5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Select Commercial Payment Terms:</span>
                <div className="flex gap-1.5">
                  {(['Net-30', 'Net-60', 'Net-90'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTerms(t)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                        selectedTerms === t
                          ? 'bg-[#36D6F5] text-[#071426]'
                          : 'bg-[#071426] text-slate-400 border border-slate-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for Invoice Amount */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs text-slate-300 font-medium">
                    Invoice Face Value:
                  </label>
                  <span className="text-xl font-extrabold text-white font-mono">
                    ${sliderAmount.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="5000"
                  value={sliderAmount}
                  onChange={(e) => setSliderAmount(Number(e.target.value))}
                  className="w-full accent-[#36D6F5] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$20,000 Min</span>
                  <span>$250,000</span>
                  <span>$500,000 Max</span>
                </div>
              </div>

              {/* Breakdown Cards */}
              <div className="bg-[#071426] rounded-2xl p-5 border border-[#36D6F5]/25 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Illustrative Upfront Advance (85%)</span>
                    <span className="text-2xl font-extrabold text-[#36D6F5] font-mono">
                      ${advanceCalculated.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                    Est. 24h Payout
                  </span>
                </div>

                {/* Progress tracker */}
                <div className="pt-2">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Advance Ratio</span>
                    <span className="font-mono text-slate-200">85% Advance / 15% Reserve</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="bg-[#36D6F5] h-full w-[85%]"></div>
                    <div className="bg-slate-600 h-full w-[15%]"></div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-400">
                    <span>Estimated Discount Fee ({(estimatedDiscountFee * 100).toFixed(2)}%)</span>
                    <span className="font-mono text-slate-200">~${feeCalculated.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Rebate to You Upon Customer Payment</span>
                    <span className="font-mono text-emerald-400 font-bold">${rebateUponSettlement.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD</span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-4 p-3 rounded-xl bg-[#0B1F3A]/60 border border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Illustrative scenario only. Approval, maximum advance rates, and discount fees depend on verified debtor credit profiles, invoice verification, and underwriting review. Nexora does not promise guaranteed funding or uniform rates.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
