import React, { useState } from 'react';
import { 
  UserCheck, 
  Layers, 
  Send, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Building2, 
  FileCheck2,
  Sparkles
} from 'lucide-react';

interface ProcessSectionProps {
  onGetStarted: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onGetStarted }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      subtitle: 'KYB Business Verification',
      icon: UserCheck,
      description: 'Submit basic corporate details (EIN, articles of incorporation, beneficial ownership). Our streamlined digital compliance workflow verifies US entities quickly and securely.',
      bulletPoints: [
        'Automated digital KYB verification for US entities',
        'Multi-entity & holding group corporate structures',
        'Immediate developer sandbox access for API testing'
      ],
      tag: 'Step 1 • Onboarding'
    },
    {
      number: '02',
      title: 'Connect and Manage Your Finances',
      subtitle: 'Consolidate Accounts & Invoices',
      icon: Layers,
      description: 'Link your primary commercial operating accounts, import outstanding Net-30/60 trade receivables, and integrate with QuickBooks, NetSuite, or custom ERP systems in minutes.',
      bulletPoints: [
        'Direct bank feed synchronization via secure open banking',
        'Automated invoice ingestion and buyer credit checks',
        'Role-based permissions for controllers, CFOs, and bookkeepers'
      ],
      tag: 'Step 2 • Integration'
    },
    {
      number: '03',
      title: 'Manage Global Payments',
      subtitle: 'Disburse & Track Worldwide',
      icon: Send,
      description: 'Initiate single or batch disbursements across US domestic ACH, Fedwire, and 140+ international corridors. Monitor every transfer lifecycle with live milestone notifications.',
      bulletPoints: [
        'Wholesale mid-market FX with guaranteed rate locks',
        'End-to-end telemetry and automated vendor receipts',
        'Flexible working capital advances against qualified invoices'
      ],
      tag: 'Step 3 • Execution'
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#071426] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-[#36D6F5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Three Steps to <span className="cyan-gradient-text">Streamlined Operations</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Transition your business from fragmented banking portals and manual reconciliation to an automated global treasury engine.
          </p>
        </div>

        {/* Process Steps: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 -translate-y-8 bg-gradient-to-r from-[#36D6F5]/20 via-[#36D6F5]/50 to-[#36D6F5]/20 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isSelected = activeStep === index + 1;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index + 1)}
                  className={`glass-card-interactive rounded-3xl p-7 flex flex-col justify-between cursor-pointer border transition-all duration-300 ${
                    isSelected
                      ? 'border-[#36D6F5] bg-[#0B1F3A]/90 shadow-xl shadow-[#36D6F5]/15 scale-[1.02]'
                      : 'border-slate-800/80 bg-[#0B1F3A]/50 hover:border-[#36D6F5]/30'
                  }`}
                >
                  <div>
                    {/* Step Top Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#071426] border border-[#36D6F5]/40 flex items-center justify-center text-[#36D6F5] shadow-lg shadow-[#36D6F5]/10">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-extrabold text-slate-700 font-mono group-hover:text-[#36D6F5]/40 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#36D6F5] font-semibold block mb-1">
                      {step.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Step Details list */}
                    <ul className="space-y-2.5 pt-4 border-t border-slate-800/80">
                      {step.bulletPoints.map((bp, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-[#36D6F5] shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">Status</span>
                    <span className="text-xs font-semibold text-[#36D6F5] flex items-center gap-1">
                      Verified Workflow
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 pl-6 pr-2 rounded-2xl bg-[#0B1F3A]/80 border border-slate-800 shadow-xl">
            <span className="text-sm font-medium text-slate-200">
              Ready to modernize your cross-border financial operations?
            </span>
            <button
              onClick={onGetStarted}
              className="cyan-gradient-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Get Started with Nexora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
