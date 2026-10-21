import React, { useState } from 'react';
import { 
  Globe2, 
  Zap, 
  LayoutDashboard, 
  Receipt, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Sparkles,
  BarChart3,
  Layers,
  Percent
} from 'lucide-react';

interface BenefitsSectionProps {
  onLearnMore?: (benefitId: string) => void;
  onOpenSalesModal: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenSalesModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const benefits = [
    {
      id: 'global-reach',
      icon: Globe2,
      badge: '140+ Corridors',
      title: 'Global Business Reach',
      summary: 'Help businesses manage cross-border payment workflows with local and international routing.',
      description: 'Expand seamlessly across global supplier networks. Access direct clearing mechanisms across Europe, the United Kingdom, Japan, Latin America, and Asia without managing disconnected foreign banking relationships.',
      highlights: [
        'Multi-currency accounts in USD, EUR, GBP, CAD, AUD & JPY',
        'Direct connection to SEPA, BACS, SPEI, and PIX local rails',
        'Elimination of multi-tiered intermediary banking friction'
      ],
      previewStats: { label: 'Supported Corridors', value: '140+', note: 'Local & SWIFT rails' }
    },
    {
      id: 'faster-workflows',
      icon: Zap,
      badge: 'Real-Time Telemetry',
      title: 'Faster Payment Workflows',
      summary: 'Present efficient transfer tracking and streamlined financial operations across your organization.',
      description: 'Automate repetitive disbursement processes with batch payment processing, intelligent rail routing, and milestone-by-milestone status tracking that keeps vendors informed without manual email chains.',
      highlights: [
        'Granular lifecycle telemetry from initiation to bank deposit',
        'Batch CSV and API-driven supplier disbursement engines',
        'Automated notifications for international vendor beneficiaries'
      ],
      previewStats: { label: 'Operational Time Saved', value: '75%', note: 'On manual reconciliations' }
    },
    {
      id: 'unified-dashboard',
      icon: LayoutDashboard,
      badge: 'Single Glass Pane',
      title: 'Unified Financial Dashboard',
      summary: 'Bring payment activity, invoice records, and transaction management together in one interface.',
      description: 'Eliminate fragmented spreadsheets and disparate software tools. Consolidate your domestic checking, international disbursements, working capital advances, and audit histories inside a singular interface.',
      highlights: [
        'Holistic cash positioning across all operating entities',
        'Integrated invoice financing and factoring pipeline management',
        'Exportable transaction histories with one-click ERP compatibility'
      ],
      previewStats: { label: 'Unified Visibility', value: '100%', note: 'Real-time multi-account sync' }
    },
    {
      id: 'transparent-pricing',
      icon: Percent,
      badge: 'Zero Hidden Margins',
      title: 'Transparent Pricing',
      summary: 'Explain fees and exchange rates clearly, with no unsupported pricing claims or surprise charges.',
      description: 'Gain certainty over operational cash burn. See exact wholesale exchange rates, clear fixed transfer fees, and upfront advance discount percentages before committing any corporate transaction.',
      highlights: [
        'Live wholesale mid-market foreign exchange rates with transparent margin',
        'Zero monthly subscription fees or unexpected account inactivity charges',
        'Clear, itemized invoices for every domestic and cross-border payment'
      ],
      previewStats: { label: 'Fee Transparency', value: '100%', note: 'Disclosed before execution' }
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-[#071426] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0B1F3A]/70 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Nexora Global</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="cyan-gradient-text">Modern Enterprise Growth</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Four foundational advantages designed specifically for US companies moving capital across domestic and international trade borders.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isSelected = activeTab === index;
            return (
              <div
                key={benefit.id}
                onClick={() => setActiveTab(index)}
                className={`glass-card-interactive rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer border transition-all duration-300 ${
                  isSelected 
                    ? 'border-[#36D6F5] bg-[#0B1F3A]/90 shadow-xl shadow-[#36D6F5]/15 translate-y-[-4px]' 
                    : 'border-slate-800/80 bg-[#0B1F3A]/50 hover:border-[#36D6F5]/40'
                }`}
              >
                <div>
                  {/* Icon & Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#071426] border border-[#36D6F5]/30 flex items-center justify-center text-[#36D6F5] shadow-md shadow-[#36D6F5]/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#36D6F5]/10 text-[#36D6F5] border border-[#36D6F5]/20">
                      {benefit.badge}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {benefit.summary}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    {benefit.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#36D6F5] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom stats pill */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono uppercase">{benefit.previewStats.label}</span>
                    <span className="text-lg font-extrabold text-[#36D6F5]">{benefit.previewStats.value}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 text-right max-w-[100px] leading-tight">
                    {benefit.previewStats.note}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic deep-dive drawer for selected benefit */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-[#36D6F5]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#36D6F5]">
              Spotlight: {benefits[activeTab].title}
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {benefits[activeTab].description}
            </p>
          </div>
          <button
            onClick={onOpenSalesModal}
            className="cyan-gradient-btn px-6 py-3 rounded-xl text-sm font-bold shrink-0 flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Discuss Institutional Terms</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
