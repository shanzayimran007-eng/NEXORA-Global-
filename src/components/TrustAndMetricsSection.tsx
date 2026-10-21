import React from 'react';
import { 
  ShieldCheck, 
  Eye, 
  Workflow, 
  LineChart, 
  Lock, 
  CheckCircle2, 
  Building2,
  Sparkles,
  Layers
} from 'lucide-react';
import { TRUST_METRICS, PARTNER_LOGOS } from '../data/mockData';

export const TrustAndMetricsSection: React.FC = () => {
  const qualitativePillars = [
    {
      icon: Eye,
      title: 'Transparent Workflows',
      description: 'Zero hidden FX markups, no surprise monthly account upkeep costs, and full itemized ledger receipts before executing any domestic or international disbursement.'
    },
    {
      icon: Workflow,
      title: 'Business-Focused Tools',
      description: 'Engineered specifically for US enterprises, importers, exporters, and multi-entity corporations needing batch payroll, vendor wires, and receivable factoring.'
    },
    {
      icon: LineChart,
      title: 'Clear Transaction Tracking',
      description: 'Granular status milestones from compliance screening and FX rate-lock to foreign clearing house release, with automated vendor confirmations.'
    },
    {
      icon: Lock,
      title: 'Institutional Protection',
      description: '256-bit AES encryption, role-based authorization hierarchies, hardware WebAuthn 2FA, and dual-custody governance for high-value corporate treasury safety.'
    }
  ];

  return (
    <section className="py-20 bg-[#0B1F3A]/30 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metrics Strip */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-[#36D6F5]/25 shadow-2xl relative mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="text-center sm:text-left space-y-1 relative">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight cyan-gradient-text font-mono block">
                  {metric.value}
                </span>
                <span className="text-sm font-bold text-slate-200 block">
                  {metric.label}
                </span>
                <span className="text-xs text-slate-400 block font-mono">
                  {metric.sub}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>* Figures reflect platform architecture metrics & simulated enterprise volume capacities.</span>
            <span className="font-mono text-[#36D6F5]">Independent Institutional Audits • SOC 2 Aligned</span>
          </div>
        </div>

        {/* Qualitative Trust Pillars */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Built on Financial Responsibility and <span className="cyan-gradient-text">Absolute Transparency</span>
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            We hold ourselves to the highest institutional standards. Every transaction, advance, and foreign exchange operation is governed by clear, verifiable terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualitativePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i} 
                className="glass-card-interactive rounded-2xl p-6 bg-[#071426]/70 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] border border-[#36D6F5]/30 flex items-center justify-center text-[#36D6F5] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-[#36D6F5] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Rails & Protocol Badges */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Integrated with Leading Global Payment Rails & Clearing Systems
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNER_LOGOS.map((partner, index) => (
              <div 
                key={index} 
                className="p-3.5 rounded-xl bg-[#071426] border border-slate-800/80 text-center hover:border-[#36D6F5]/40 transition-colors"
              >
                <div className="text-xs font-bold text-white tracking-wide">{partner.name}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">{partner.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
