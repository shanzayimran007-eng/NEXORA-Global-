import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  PhoneCall,
  ArrowRight
} from 'lucide-react';

interface FAQSectionProps {
  onOpenSalesModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenSalesModal }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#0B1F3A]/30 relative overflow-hidden border-t border-slate-800/80">
      {/* Background illumination */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#36D6F5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Clear Answers for <span className="cyan-gradient-text">Finance Leaders</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Everything you need to know about corporate onboarding, cross-border settlement rails, invoice advances, and security controls.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#36D6F5]/40 bg-[#0B1F3A]/80 shadow-lg shadow-[#36D6F5]/5' 
                    : 'border-slate-800 hover:border-slate-700 bg-[#071426]/70'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  id={`accordion-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  onKeyDown={(e) => handleKeyDown(e, faq.id)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#36D6F5] rounded-2xl"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#36D6F5] font-semibold block">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white block">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-xl bg-[#071426] border border-slate-700 flex items-center justify-center shrink-0 text-[#36D6F5] transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#36D6F5]/20 border-[#36D6F5]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div
                    id={`accordion-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`accordion-btn-${faq.id}`}
                    className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#071426] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Have a specific compliance or corridor question?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Our US treasury desk provides bespoke consultations for enterprise volumes.</p>
          </div>
          <button
            onClick={onOpenSalesModal}
            className="cyan-gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold shrink-0 flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Speak with an Advisor</span>
          </button>
        </div>

      </div>
    </section>
  );
};
