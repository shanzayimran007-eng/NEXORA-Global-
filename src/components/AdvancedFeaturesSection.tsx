import React, { useState } from 'react';
import { 
  Globe2, 
  Receipt, 
  Percent, 
  ShieldCheck, 
  Layers, 
  BarChart4, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  FileSpreadsheet, 
  Sliders, 
  Clock, 
  Download, 
  Sparkles,
  DollarSign,
  AlertCircle
} from 'lucide-react';

interface AdvancedFeaturesProps {
  onOpenSalesModal: (featureName?: string) => void;
  onExploreFinancing: () => void;
}

export const AdvancedFeaturesSection: React.FC<AdvancedFeaturesProps> = ({
  onOpenSalesModal,
  onExploreFinancing
}) => {
  // Feature 2: Interactive Invoice Financing Advance Slider
  const [demoInvoiceAmount, setDemoInvoiceAmount] = useState<number>(125000);
  const [advanceRate, setAdvanceRate] = useState<number>(85);

  // Feature 3: Interactive FX Converter
  const [fxFromUSD, setFxFromUSD] = useState<number>(50000);
  const [selectedCurrency, setSelectedCurrency] = useState<'EUR' | 'GBP' | 'JPY'>('EUR');
  const fxRates = { EUR: 0.9262, GBP: 0.7872, JPY: 153.02 };

  // Feature 6: Demo report downloaded state
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const handleDownloadDemoReport = () => {
    setDownloadSuccess(true);
    // Create an illustrative CSV file and trigger download
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Date,Reference,Recipient,Country,Currency,AmountUSD,FeeUSD,Status\n"
      + "2026-10-21,NX-9481-USD,Shin-Etsu Precision,JP,JPY,84500.00,14.50,Completed\n"
      + "2026-10-21,NX-9482-EUR,Bavaria Components,DE,EUR,142300.00,18.00,Processing\n"
      + "2026-10-20,NX-9483-DOM,Apex Logistics,US,USD,36750.00,1.50,Completed\n"
      + "2026-10-20,NX-9484-GBP,Thames Design,GB,GBP,52400.00,8.50,Completed\n";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Nexora_Corporate_Treasury_Report_Oct2026.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="features" className="py-24 bg-[#071426] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Advanced Financial Features for <span className="cyan-gradient-text">Global Business</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Institutional-grade payments, receivables liquidity, risk mitigation, and treasury management built for modern finance leaders.
          </p>
        </div>

        {/* Feature 1: Global Payments and Settlement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5]">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Feature 01 • Multi-Rail Routing</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Global Payments and Direct Clearing Settlement
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              Consolidate high-volume domestic US disbursements (Fedwire and Same-Day ACH) alongside overseas supplier settlement. Rather than forcing all payments through slow correspondent banking chains, our intelligent router detects the fastest and most cost-effective path.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Instant domestic wire execution and automated NACHA settlement batches</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Local clearing in UK, Europe, Australia, Mexico, and Japan</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Automated supplier remittance advices generated in vendor native languages</span>
              </li>
            </ul>
            <button
              onClick={() => onOpenSalesModal('Global Payments')}
              className="cyan-gradient-btn px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg mt-4"
            >
              <span>Explore Payment Corridors</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-[#36D6F5]/25 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-[#36D6F5] font-semibold">
                  Intelligent Rail Selector
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Real-Time Routing</span>
              </div>

              {/* Multi-rail comparative cards */}
              <div className="space-y-3 mt-5">
                <div className="p-4 rounded-xl bg-[#071426] border border-[#36D6F5]/40 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">Direct Local Clearing (SEPA / BACS)</span>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono">Recommended</span>
                    </div>
                    <span className="text-xs text-slate-400 block mt-1">Direct central bank clearing • 0.35% FX spread</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-white font-mono">$7.00 USD</span>
                    <span className="text-[10px] text-emerald-400 block font-mono">Same-day</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#071426]/60 border border-slate-800 flex items-center justify-between opacity-80">
                  <div>
                    <span className="text-xs font-bold text-slate-300">Legacy SWIFT Correspondent</span>
                    <span className="text-xs text-slate-400 block mt-1">Intermediary bank deductions • 2.5% FX spread</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-400 font-mono">$45.00+ USD</span>
                    <span className="text-[10px] text-slate-400 block font-mono">2-4 days</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#071426]/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-300">US Domestic Same-Day ACH</span>
                    <span className="text-xs text-slate-400 block mt-1">Direct NACHA window processing</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400 font-mono">$1.50 USD</span>
                    <span className="text-[10px] text-slate-400 block font-mono">Under 4 hours</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-xl bg-[#0B1F3A] border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0" />
                <span>Router dynamically chooses the optimal rail to minimize delays and fees.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Invoice Financing (Reversed Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-[#36D6F5]/25 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-[#36D6F5]" />
                  <span className="text-xs font-mono uppercase text-white font-semibold">
                    Invoice Advance Simulation
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Approved for Advance
                </span>
              </div>

              {/* Invoice details mock */}
              <div className="mt-5 space-y-4">
                <div className="flex justify-between items-center text-xs text-slate-400 pb-2 border-b border-slate-800/80">
                  <span>Buyer / Debtor</span>
                  <strong className="text-white">Global Retail Partners Corp (US)</strong>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 pb-2 border-b border-slate-800/80">
                  <span>Payment Terms</span>
                  <span className="font-mono text-slate-200">Net-60 Commercial Terms</span>
                </div>

                {/* Slider for Demo Invoice Amount */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">Invoice Value:</span>
                    <span className="font-bold text-white font-mono">${demoInvoiceAmount.toLocaleString()} USD</span>
                  </div>
                  <input
                    type="range"
                    min="25000"
                    max="500000"
                    step="5000"
                    value={demoInvoiceAmount}
                    onChange={(e) => setDemoInvoiceAmount(Number(e.target.value))}
                    className="w-full accent-[#36D6F5] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>$25k</span>
                    <span>$250k</span>
                    <span>$500k</span>
                  </div>
                </div>

                {/* Calculated Advance Card */}
                <div className="bg-[#071426] p-4 rounded-2xl border border-[#36D6F5]/30">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Immediate Advance ({advanceRate}%)</span>
                    <span className="text-emerald-400 font-semibold font-mono">Disbursed in 24h</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#36D6F5] font-mono">
                    ${(demoInvoiceAmount * (advanceRate / 100)).toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex justify-between text-[11px] text-slate-400">
                    <span>Remaining {(100 - advanceRate)}% upon customer payoff</span>
                    <span>Discount fee: ~1.85%</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-[10px] text-slate-500 font-mono">
                * Illustrative calculation. Subject to verified buyer creditworthiness and commercial underwriting.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5]">
              <Receipt className="w-3.5 h-3.5" />
              <span>Feature 02 • Working Capital</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Invoice Financing Without Equity Dilution or Restrictive Debt
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              Why wait 30, 60, or 90 days for major commercial enterprise customers to pay? Advance up to 85%–90% of your verified receivables to purchase inventory, fulfill larger orders, or meet payroll without pledging personal guarantees.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Credit evaluated primarily on your commercial customer, not company debt ratios</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Non-notification options available for confidential client relationships</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Seamless integration with QuickBooks, Xero, and enterprise ERP systems</span>
              </li>
            </ul>
            <button
              onClick={onExploreFinancing}
              className="cyan-gradient-btn px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg mt-4"
            >
              <span>Calculate Financing Options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature 3: Foreign Exchange and Transparent Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5]">
              <Percent className="w-3.5 h-3.5" />
              <span>Feature 03 • Foreign Exchange</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Institutional FX Spreads & Guaranteed Rate Locks
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              Traditional commercial banks quietly mark up exchange rates by 2% to 4% above the real mid-market rate. Nexora provides institutional wholesale mid-market pricing with transparent margin markups as low as 0.25%–0.50%.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Real-time mid-market rate streaming directly from liquidity partners</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Up to 24-hour rate freeze on confirmed cross-border purchase orders</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Forward contract capabilities to hedge long-term supplier commitments</span>
              </li>
            </ul>
            <button
              onClick={() => onOpenSalesModal('FX & Pricing')}
              className="cyan-gradient-btn px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg mt-4"
            >
              <span>Request Custom FX Volume Rates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-[#36D6F5]/25 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-[#36D6F5] font-semibold">
                  Live FX Margin Comparison
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">Wholesale Feed Active</span>
              </div>

              {/* Currency Selector Pills */}
              <div className="flex gap-2 my-4">
                {(['EUR', 'GBP', 'JPY'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setSelectedCurrency(curr)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                      selectedCurrency === curr 
                        ? 'bg-[#36D6F5] text-[#071426]' 
                        : 'bg-[#071426] text-slate-300 border border-slate-700'
                    }`}
                  >
                    USD ➔ {curr}
                  </button>
                ))}
              </div>

              {/* Live Calculator */}
              <div className="space-y-4">
                <div className="bg-[#071426] p-4 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Sending Amount (USD)</span>
                    <span>1 USD = {fxRates[selectedCurrency]} {selectedCurrency}</span>
                  </div>
                  <div className="text-xl font-bold text-white font-mono">
                    ${fxFromUSD.toLocaleString()} USD
                  </div>
                </div>

                <div className="bg-[#071426] p-4 rounded-xl border border-[#36D6F5]/40">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Vendor Payout ({selectedCurrency})</span>
                    <span className="text-emerald-400 font-mono">Nexora Wholesale: +$1,420 more than bank average</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#36D6F5] font-mono">
                    {(fxFromUSD * fxRates[selectedCurrency]).toLocaleString('en-US', { maximumFractionDigits: 2 })} {selectedCurrency}
                  </div>
                </div>

                {/* Savings comparison table */}
                <div className="p-3 bg-[#0B1F3A] rounded-xl border border-slate-800 text-xs space-y-2">
                  <div className="flex justify-between text-slate-400">
                    <span>Typical Bank Hidden FX Markup (~3.2%)</span>
                    <span className="text-red-400 font-mono">-${(fxFromUSD * 0.032).toFixed(2)} USD</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Nexora Transparent Wholesale (~0.35%)</span>
                    <span className="text-emerald-400 font-mono font-bold">-${(fxFromUSD * 0.0035).toFixed(2)} USD</span>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-white">
                    <span>Estimated Net Savings</span>
                    <span className="text-[#36D6F5] font-mono">+${(fxFromUSD * (0.032 - 0.0035)).toFixed(2)} USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Privacy, Governance, and Security (Reversed Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-[#36D6F5]/25 shadow-2xl relative space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-[#36D6F5] font-semibold flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  Dual-Custody Authorization Gate
                </span>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Enforced Policy
                </span>
              </div>

              {/* Security hierarchy visual */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#071426] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Initiated by Controller</span>
                      <span className="text-[10px] text-slate-400 font-mono">Verified with Hardware WebAuthn Key</span>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="p-3.5 rounded-xl bg-[#071426] border border-[#36D6F5]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#36D6F5]/20 text-[#36D6F5] flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Required: Secondary CFO Approval</span>
                      <span className="text-[10px] text-[#36D6F5] font-mono">Triggered for amounts &gt; $50,000 USD</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-[#36D6F5]/10 text-[#36D6F5] px-2 py-0.5 rounded">
                    Awaiting Sign
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#071426]/60 border border-slate-800 flex items-center justify-between opacity-70">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs">
                      3
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-300 block">Automated Sanctions & OFAC Check</span>
                      <span className="text-[10px] text-slate-400 font-mono">Clearing within 60 seconds</span>
                    </div>
                  </div>
                  <Lock className="w-4 h-4 text-slate-500" />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                <span>Encryption standard:</span>
                <span className="font-mono text-white">AES-256 GCM in transit & at rest</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Feature 04 • Security Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Enterprise Governance, Dual Custody & Account Protection
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              Maintain institutional control over corporate funds. Protect against unauthorized disbursements and social engineering with programmable spending thresholds, granular role hierarchies, and dual-custody signing.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Role-Based Access Control (RBAC): View-Only, Preparer, Approver, and Admin tiers</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Dual-custody workflows enforcing two distinct officer approvals on large transfers</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>Immutable cryptographic audit logs for simplified financial audits</span>
              </li>
            </ul>
            <button
              onClick={() => onOpenSalesModal('Security & Governance')}
              className="cyan-gradient-btn px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg mt-4"
            >
              <span>Review Compliance Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature 5 & 6: Treasury Management & Interactive Reporting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Feature 5: Treasury & Multi-Entity */}
          <div className="glass-panel rounded-3xl p-7 border border-[#36D6F5]/20 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>Feature 05 • Treasury Management</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Treasury & Multi-Entity Management
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Oversee cash positions across domestic parent companies and international subsidiaries in a consolidated dashboard. Transfer liquidity between entities without third-party delay.
              </p>
              <div className="space-y-2.5">
                <div className="p-3 bg-[#071426] rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-white font-medium">Nexora US Logistics LLC (Operating)</span>
                  <span className="font-mono text-[#36D6F5] font-bold">$1,240,500 USD</span>
                </div>
                <div className="p-3 bg-[#071426] rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-white font-medium">Nexora Europe BV (Amsterdam)</span>
                  <span className="font-mono text-emerald-400 font-bold">€412,000 EUR</span>
                </div>
                <div className="p-3 bg-[#071426] rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-white font-medium">Nexora Pacific Ltd (Tokyo)</span>
                  <span className="font-mono text-purple-400 font-bold">¥22,500,000 JPY</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onOpenSalesModal('Treasury Management')}
              className="mt-6 w-full py-3 px-4 rounded-xl text-center font-bold text-xs sm:text-sm text-white bg-[#0B1F3A] border border-slate-700 hover:border-[#36D6F5] transition-all flex items-center justify-center gap-2"
            >
              <span>Configure Multi-Entity Treasury</span>
              <ArrowRight className="w-4 h-4 text-[#36D6F5]" />
            </button>
          </div>

          {/* Feature 6: Interactive Reporting & CSV Demo Download */}
          <div className="glass-panel rounded-3xl p-7 border border-[#36D6F5]/20 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
                <BarChart4 className="w-3.5 h-3.5" />
                <span>Feature 06 • Reporting & Export</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Financial Reporting & Instant Ledger Export
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Automate your month-end financial close. Generate standardized general ledger exports compatible with NetSuite, SAP, QuickBooks, and Sage Intacct with custom categorizations.
              </p>
              
              <div className="bg-[#071426] p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Export Format:</span>
                  <span className="font-mono text-white bg-[#0B1F3A] px-2 py-0.5 rounded border border-slate-700">Standard CSV / Ledger 2.0</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Tax & FX Gain/Loss:</span>
                  <span className="font-mono text-emerald-400">Automated FIFO Reconciliation</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Audit Trail:</span>
                  <span className="font-mono text-slate-300">Timestamped with Officer Signatures</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleDownloadDemoReport}
              className={`mt-6 w-full py-3 px-4 rounded-xl text-center font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                downloadSuccess 
                  ? 'bg-emerald-500 text-slate-900' 
                  : 'cyan-gradient-btn'
              }`}
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Report Downloaded (CSV)</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Sample Treasury Report (CSV)</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
