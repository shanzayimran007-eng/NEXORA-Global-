import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Send, 
  X, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface SocialAndContactBarProps {
  onScrollToNewsletter: () => void;
  onOpenSalesModal: () => void;
}

export const SocialAndContactBar: React.FC<SocialAndContactBarProps> = ({
  onScrollToNewsletter,
  onOpenSalesModal
}) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('Hello Nexora team, I would like to inquire about cross-border payment rails for our US business.');
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Business configuration placeholders
  const contactConfig = {
    whatsappNumber: '+1 (800) 555-0199',
    whatsappChatUrl: 'https://wa.me/18005550199?text=Hello%20Nexora%20Global%20Treasury%20Desk',
    businessEmail: 'sales@nexoraglobal.example.com',
    instagramUrl: 'https://instagram.com/nexoraglobal',
    facebookUrl: 'https://facebook.com/nexoraglobal',
    tiktokUrl: 'https://tiktok.com/@nexoraglobal',
    linkedinUrl: 'https://linkedin.com/company/nexoraglobal'
  };

  const handleSendWhatsApp = () => {
    const encoded = encodeURIComponent(chatMessage);
    window.open(`https://wa.me/18005550199?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating WhatsApp Action Button with Tooltip */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        
        {/* Tooltip on hover / idle */}
        {!chatOpen && (
          <div 
            className={`mb-2 px-3 py-1.5 rounded-xl bg-[#0B1F3A] border border-[#36D6F5]/40 text-xs font-semibold text-white shadow-2xl transition-all duration-300 flex items-center gap-2 ${
              tooltipVisible ? 'opacity-100 translate-y-0' : 'opacity-90'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Chat with our team</span>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          aria-label="Chat with our team via WhatsApp"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-transform duration-300 hover:scale-105 cursor-pointer relative group"
        >
          {chatOpen ? (
            <X className="w-6 h-6 text-slate-950" />
          ) : (
            <MessageCircle className="w-7 h-7 text-slate-950 fill-current" />
          )}
        </button>

        {/* Interactive Chat Popup Window */}
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 sm:w-96 glass-panel rounded-3xl p-5 border border-[#36D6F5]/30 shadow-2xl bg-[#071426]/95 backdrop-blur-2xl z-50 text-left animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Nexora Treasury Desk</h4>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Online • US Commercial Line
                  </span>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="py-4 space-y-3">
              <div className="p-3 rounded-2xl bg-[#0B1F3A] border border-slate-800 text-xs text-slate-200">
                <p>
                  👋 Hi! Welcome to Nexora Global. Connect with our dedicated sales and corporate treasury desk for live rate locks, corridor availability, or invoice factoring quotes.
                </p>
                <span className="text-[9px] text-slate-400 block mt-1 font-mono">Nexora Concierge</span>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                  Your Message
                </label>
                <textarea
                  rows={3}
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="w-full p-2.5 bg-[#071426] border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#36D6F5]"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <button
                onClick={handleSendWhatsApp}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch WhatsApp Conversation</span>
              </button>

              <button
                onClick={() => {
                  setChatOpen(false);
                  onOpenSalesModal();
                }}
                className="w-full bg-[#0B1F3A] hover:bg-slate-800 text-slate-300 font-semibold py-2 rounded-xl text-xs border border-slate-700 flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#36D6F5]" />
                <span>Or Request a Callback</span>
              </button>
            </div>

            <div className="mt-3 text-[10px] text-slate-500 text-center font-mono flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#36D6F5]" />
              Official Nexora Business Verified Channel
            </div>
          </div>
        )}

      </div>
    </>
  );
};
