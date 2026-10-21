import React, { useState } from 'react';
import { SUPPORTED_CORRIDORS } from '../data/mockData';
import { Corridor } from '../types';
import { 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  RefreshCw,
  Compass,
  Zap
} from 'lucide-react';

interface GlobalCoverageSectionProps {
  onOpenSalesModal: () => void;
}

export const GlobalCoverageSection: React.FC<GlobalCoverageSectionProps> = ({ onOpenSalesModal }) => {
  const [selectedCorridor, setSelectedCorridor] = useState<Corridor>(SUPPORTED_CORRIDORS[1]); // GBP default
  const [sendAmountUSD, setSendAmountUSD] = useState<number>(25000);

  const calculateConverted = () => {
    return (sendAmountUSD * selectedCorridor.rateToUSD).toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: selectedCorridor.currency === 'JPY' ? 0 : 2
    });
  };

  const calculateEstimatedFee = () => {
    // Transparent mid-market margin preview: 0.35% + sample fee
    const fee = (sendAmountUSD * 0.0035) + selectedCorridor.sampleFeeUSD;
    return fee.toFixed(2);
  };

  return (
    <section id="coverage" className="py-24 bg-[#0B1F3A]/40 relative overflow-hidden border-t border-slate-800/80">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#36D6F5]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Reach & Direct Clearing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Supported Countries and <span className="cyan-gradient-text">Currencies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Direct access to major commercial currency corridors with local clearing rails, reduced intermediary fees, and transparent mid-market FX rates.
          </p>
        </div>

        {/* Interactive World Map & Network Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Visual: Animated Global Network SVG Map */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-[#36D6F5]/20 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Live Corridor Telemetry Network
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#36D6F5] bg-[#36D6F5]/10 px-2 py-0.5 rounded border border-[#36D6F5]/20">
                SWIFT + Local Clearing
              </span>
            </div>

            {/* Custom SVG World Coordinate Map with Curved Flow Lines */}
            <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#071426]/80 border border-slate-800/80 p-4 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 800 450" className="w-full h-full opacity-90 select-none">
                <defs>
                  <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#36D6F5" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
                  </linearGradient>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#36D6F5" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#36D6F5" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Subtle world grid lines */}
                <g stroke="rgba(54, 214, 245, 0.08)" strokeWidth="1" strokeDasharray="4 6">
                  <line x1="50" y1="100" x2="750" y2="100" />
                  <line x1="50" y1="200" x2="750" y2="200" />
                  <line x1="50" y1="300" x2="750" y2="300" />
                  <line x1="50" y1="400" x2="750" y2="400" />
                  <line x1="200" y1="30" x2="200" y2="420" />
                  <line x1="400" y1="30" x2="400" y2="420" />
                  <line x1="600" y1="30" x2="600" y2="420" />
                </g>

                {/* Simplified continental geometric shapes for reference */}
                <path d="M 120 120 Q 180 80 230 110 T 260 210 Q 210 240 160 210 Z" fill="#0B1F3A" stroke="rgba(54, 214, 245, 0.15)" />
                <path d="M 210 260 Q 260 270 270 330 T 230 400 Q 180 370 200 300 Z" fill="#0B1F3A" stroke="rgba(54, 214, 245, 0.15)" />
                <path d="M 390 100 Q 450 80 480 130 T 430 200 Q 380 180 390 120 Z" fill="#0B1F3A" stroke="rgba(54, 214, 245, 0.15)" />
                <path d="M 400 210 Q 470 220 480 320 T 430 380 Q 380 320 390 240 Z" fill="#0B1F3A" stroke="rgba(54, 214, 245, 0.15)" />
                <path d="M 500 100 Q 640 80 700 150 T 660 260 Q 550 250 510 170 Z" fill="#0B1F3A" stroke="rgba(54, 214, 245, 0.15)" />
                <path d="M 640 310 Q 720 300 730 360 T 670 410 Q 620 380 630 330 Z" fill="#0B1F3A" stroke="rgba(54, 214, 245, 0.15)" />

                {/* Curved Connection Lines from USA Hub (x: 200, y: 160) */}
                <path d="M 200 160 Q 320 80 430 140" fill="none" stroke="url(#curveGradient)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse" />
                <path d="M 200 160 Q 300 240 250 330" fill="none" stroke="url(#curveGradient)" strokeWidth="2" />
                <path d="M 200 160 Q 420 60 670 170" fill="none" stroke="url(#curveGradient)" strokeWidth="2" strokeDasharray="8 6" />
                <path d="M 200 160 Q 450 360 680 350" fill="none" stroke="url(#curveGradient)" strokeWidth="1.5" />
                <path d="M 200 160 Q 180 200 205 230" fill="none" stroke="url(#curveGradient)" strokeWidth="2" />

                {/* Main Node: USA (New York / Global Hub) */}
                <circle cx="200" cy="160" r="16" fill="url(#nodeGlow)" />
                <circle cx="200" cy="160" r="6" fill="#36D6F5" />
                <text x="200" y="140" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">USA (USD Origin)</text>

                {/* Node: UK (London) */}
                <circle cx="410" cy="125" r="5" fill="#36D6F5" />
                <text x="410" y="112" fill="#E2E8F0" fontSize="10" textAnchor="middle">UK (GBP)</text>

                {/* Node: Frankfurt (EUR) */}
                <circle cx="445" cy="145" r="5" fill="#36D6F5" />
                <text x="455" y="165" fill="#E2E8F0" fontSize="10">EU (EUR)</text>

                {/* Node: Tokyo (JPY) */}
                <circle cx="680" cy="175" r="5" fill="#36D6F5" />
                <text x="680" y="160" fill="#E2E8F0" fontSize="10" textAnchor="middle">Tokyo (JPY)</text>

                {/* Node: Mexico City (MXN) */}
                <circle cx="195" cy="225" r="5" fill="#36D6F5" />
                <text x="145" y="230" fill="#E2E8F0" fontSize="10">Mexico (MXN)</text>

                {/* Node: São Paulo (BRL) */}
                <circle cx="270" cy="340" r="5" fill="#36D6F5" />
                <text x="270" y="360" fill="#E2E8F0" fontSize="10" textAnchor="middle">Brazil (BRL)</text>

                {/* Node: Sydney (AUD) */}
                <circle cx="690" cy="360" r="5" fill="#36D6F5" />
                <text x="690" y="380" fill="#E2E8F0" fontSize="10" textAnchor="middle">Australia (AUD)</text>
              </svg>

              {/* Floating Live Telemetry Badge */}
              <div className="absolute bottom-4 left-4 bg-[#071426]/90 border border-[#36D6F5]/25 rounded-xl p-2.5 px-3 flex items-center gap-2.5 backdrop-blur-md shadow-lg">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                <div className="text-[11px] text-slate-300 font-mono">
                  Origin: <strong className="text-white">US ACH / Fedwire</strong> ➔ Direct Overseas Clearing
                </div>
              </div>
            </div>

            {/* Quick Country Pill Selector */}
            <div className="mt-6 flex flex-wrap gap-2">
              {SUPPORTED_CORRIDORS.map((c) => (
                <button
                  key={c.currency}
                  onClick={() => setSelectedCorridor(c)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    selectedCorridor.currency === c.currency
                      ? 'bg-[#36D6F5] text-[#071426] shadow-md shadow-[#36D6F5]/20 font-bold'
                      : 'bg-[#0B1F3A] text-slate-300 hover:text-white border border-slate-700/60'
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.currency}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Visual: Interactive Corridor Rate & Fee Simulator */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-7 border border-[#36D6F5]/25 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs uppercase font-mono tracking-wider text-[#36D6F5] font-semibold flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                Interactive Corridor Calculator
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Mid-Market Rate</span>
            </div>

            {/* Input Amount in USD */}
            <div className="my-5 space-y-2">
              <label className="text-xs text-slate-400 font-medium flex items-center justify-between">
                <span>You Disburse (USD)</span>
                <span className="text-[11px] text-slate-400">Domestic ACH / Fedwire</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                <input
                  type="number"
                  value={sendAmountUSD}
                  onChange={(e) => setSendAmountUSD(Math.max(100, Number(e.target.value)))}
                  className="w-full bg-[#071426] border border-slate-700 rounded-xl py-3 pl-8 pr-16 text-lg font-bold text-white focus:outline-none focus:border-[#36D6F5]"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 font-mono">
                  USD 🇺🇸
                </span>
              </div>
            </div>

            {/* Calculated Payout */}
            <div className="my-5 space-y-2">
              <label className="text-xs text-slate-400 font-medium flex items-center justify-between">
                <span>Beneficiary Receives ({selectedCorridor.country})</span>
                <span className="text-[11px] text-emerald-400 font-mono">Direct Local Rail</span>
              </label>
              <div className="relative">
                <div className="w-full bg-[#071426] border border-[#36D6F5]/40 rounded-xl py-3 pl-4 pr-16 text-xl font-extrabold text-[#36D6F5]">
                  {calculateConverted()}
                </div>
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-300 font-mono">
                  {selectedCorridor.currency} {selectedCorridor.flag}
                </span>
              </div>
            </div>

            {/* Transparent Breakdown */}
            <div className="bg-[#071426]/70 rounded-xl p-4 border border-slate-800 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Wholesale Mid-Market FX</span>
                <span className="font-mono text-slate-200">1 USD = {selectedCorridor.rateToUSD} {selectedCorridor.currency}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Estimated Transparent Fee</span>
                <span className="font-mono text-emerald-400 font-bold">${calculateEstimatedFee()} USD</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Estimated Delivery Speed</span>
                <span className="font-mono text-white flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#36D6F5]" />
                  {selectedCorridor.estimatedDelivery}
                </span>
              </div>
              <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                <span>Supported Rails</span>
                <span className="text-[11px] text-slate-300">{selectedCorridor.methods.join(', ')}</span>
              </div>
            </div>

            <button
              onClick={onOpenSalesModal}
              className="w-full mt-5 cyan-gradient-btn py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Lock Corridor Terms for Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="mt-3 text-center text-[10px] text-slate-500 font-mono">
              * Indicative wholesale rates and delivery timelines. Specific enterprise tiers receive customized volume discounts upon onboarding.
            </p>
          </div>

        </div>

        {/* 8 Primary Country Cards Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {SUPPORTED_CORRIDORS.map((c) => (
            <div
              key={c.currency}
              onClick={() => setSelectedCorridor(c)}
              className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                selectedCorridor.currency === c.currency
                  ? 'bg-[#0B1F3A] border-[#36D6F5] shadow-lg shadow-[#36D6F5]/10'
                  : 'bg-[#071426] border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <span className="text-2xl block mb-1">{c.flag}</span>
              <span className="text-xs font-bold text-white block">{c.currency}</span>
              <span className="text-[10px] text-slate-400 truncate block mt-0.5">{c.country}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
