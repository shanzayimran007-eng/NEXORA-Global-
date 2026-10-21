import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Globe, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  DollarSign, 
  Sparkles,
  CreditCard,
  Building,
  RefreshCw
} from 'lucide-react';

interface HeroSectionProps {
  onOpenSalesModal: () => void;
  onExploreFeatures: () => void;
  onSelectTransaction?: (txId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenSalesModal, 
  onExploreFeatures,
}) => {
  const [balance, setBalance] = useState(1842950.40);
  const [tickerIndex, setTickerIndex] = useState(0);

  const notifications = [
    { text: 'Inbound Wire $142,300.00 USD from Bavaria GmbH cleared via SEPA', type: 'in', time: 'Just now' },
    { text: 'Disbursed $84,500.00 USD to Tokyo Supplier (JPY Locked at 153.02)', type: 'out', time: '2m ago' },
    { text: 'Invoice #8941 approved for $106,250.00 advance', type: 'in', time: '5m ago' },
    { text: 'Domestic Same-Day ACH $36,750.00 released to Apex Logistics', type: 'out', time: '12m ago' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % notifications.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [notifications.length]);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-[#071426] bg-grid-pattern overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#36D6F5]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#0B1F3A] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#36D6F5]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/90 border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] shadow-lg shadow-[#071426]/50">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36D6F5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#36D6F5]"></span>
              </span>
              <span>Next-Gen Global Financial Infrastructure</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-normal">For US Businesses</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Powering the Future of{' '}
              <span className="cyan-gradient-text block mt-1">
                Global Business Finance
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
              Manage payments, streamline financial operations, and explore smarter ways to move money across borders with a modern business finance platform.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenSalesModal}
                className="cyan-gradient-btn px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 group shadow-xl shadow-[#36D6F5]/20 cursor-pointer"
              >
                <span>Talk to Sales</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreFeatures}
                className="px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-[#0B1F3A]/80 hover:bg-[#0B1F3A] border border-slate-700/80 hover:border-[#36D6F5]/50 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Explore Features</span>
                <ArrowDownLeft className="w-4 h-4 text-[#36D6F5] rotate-[-90deg]" />
              </button>
            </div>

            {/* Key Trust Checkmarks */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0" />
                <span>Zero Monthly Account Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0" />
                <span>Mid-Market FX Transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0" />
                <span>US Partner Bank Custody</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Financial Dashboard Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Illustrative Demo Badge */}
              <div className="absolute -top-4 right-4 z-20 px-2.5 py-1 rounded-md bg-[#071426]/90 border border-slate-700 text-[10px] font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Interactive Demo Preview
              </div>

              {/* Main Card: Business Operating Account */}
              <div className="glass-panel rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden border border-[#36D6F5]/25">
                
                {/* Subtle top sheen */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#36D6F5] to-transparent opacity-60" />

                {/* Account Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] border border-[#36D6F5]/30 flex items-center justify-center text-[#36D6F5]">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                        Primary Commercial Operating
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20">Active</span>
                      </h2>
                      <p className="text-xs text-slate-400 font-mono">Routing: 021000021 • Acct: •••• 8492</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 block font-medium">Auto-Hedging</span>
                    <span className="text-xs text-[#36D6F5] font-semibold flex items-center justify-end gap-1">
                      <RefreshCw className="w-3 h-3 animate-spin" style={{ animationDuration: '8s' }} />
                      Enabled
                    </span>
                  </div>
                </div>

                {/* Balance Display */}
                <div className="my-5">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-1 flex items-center justify-between">
                    <span>Available Total Balance (USD Equiv.)</span>
                    <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +14.2% MoM
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
                    <span>${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    <span className="text-sm font-medium text-slate-400">USD</span>
                  </div>

                  {/* Multi-currency breakdown pills */}
                  <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-slate-800/60">
                    <div className="bg-[#0B1F3A]/70 p-2 rounded-lg border border-slate-700/50">
                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                        <span>🇺🇸</span> USD
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">$1.22M</div>
                    </div>
                    <div className="bg-[#0B1F3A]/70 p-2 rounded-lg border border-slate-700/50">
                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                        <span>🇪🇺</span> EUR
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">€380.4k</div>
                    </div>
                    <div className="bg-[#0B1F3A]/70 p-2 rounded-lg border border-slate-700/50">
                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                        <span>🇬🇧</span> GBP
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">£145.8k</div>
                    </div>
                    <div className="bg-[#0B1F3A]/70 p-2 rounded-lg border border-slate-700/50">
                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                        <span>🇯🇵</span> JPY
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">¥18.2M</div>
                    </div>
                  </div>
                </div>

                {/* Animated Mini Progress Chart */}
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Working Capital Utilization</span>
                    <span className="text-slate-200 font-semibold font-mono">68.4% Operating Reserve</span>
                  </div>
                  <div className="h-2 w-full bg-[#0B1F3A] rounded-full overflow-hidden p-[1px] border border-slate-700">
                    <div className="h-full bg-gradient-to-r from-[#36D6F5] via-blue-400 to-indigo-500 rounded-full w-[68%] transition-all duration-1000"></div>
                  </div>
                </div>

                {/* Recent Activity Ticker */}
                <div className="p-3 rounded-xl bg-[#0B1F3A]/90 border border-[#36D6F5]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      notifications[tickerIndex].type === 'in' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#36D6F5]/20 text-[#36D6F5]'
                    }`}>
                      {notifications[tickerIndex].type === 'in' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>
                    <p className="text-xs text-slate-200 truncate font-medium">
                      {notifications[tickerIndex].text}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">
                    {notifications[tickerIndex].time}
                  </span>
                </div>
              </div>

              {/* Floating Element 1: Cross-Border FX Card (Bottom Left Overlap) */}
              <div className="glass-card-interactive absolute -bottom-8 -left-4 sm:-left-8 max-w-[270px] p-4 rounded-xl shadow-2xl z-20 border border-[#36D6F5]/30 animate-float-slow hidden sm:block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#36D6F5]" />
                    Real-Time FX Lock
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#36D6F5]/10 text-[#36D6F5] font-mono">0.32% Spread</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">USD ➔ EUR</span>
                  <span className="font-bold text-white font-mono">0.9262 EUR</span>
                </div>
                <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Guaranteed Rate Lock for 24h
                </div>
              </div>

              {/* Floating Element 2: Invoice Advance Ready (Top Right Overlap) */}
              <div className="glass-card-interactive absolute -top-8 -right-4 sm:-right-6 max-w-[250px] p-4 rounded-xl shadow-2xl z-20 border border-[#36D6F5]/30 animate-float-delayed hidden sm:block">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#36D6F5] tracking-wider flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Advance Approved
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">INV-8941</span>
                </div>
                <div className="text-base font-extrabold text-white">
                  $106,250.00 <span className="text-[11px] text-slate-400 font-normal">USD</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  85% Net-60 advance for Global Retail Corp. Available in 24h.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
