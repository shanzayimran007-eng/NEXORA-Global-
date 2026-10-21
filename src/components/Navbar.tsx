import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Building2, 
  FileText, 
  BookOpen, 
  PhoneCall,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onOpenSalesModal: (service?: string) => void;
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSalesModal, onOpenGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefits', href: '#benefits' },
    { name: 'Process', href: '#process' },
    { name: 'Features', href: '#features' },
    { name: 'Invoice Financing', href: '#invoice-financing' },
    { name: 'Insights / Blog', href: '#insights' },
    { name: 'Contact / Get a Quote', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071426]/90 backdrop-blur-xl border-b border-[#36D6F5]/15 py-3 shadow-2xl shadow-[#071426]/80'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#36D6F5] rounded-lg p-1"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B1F3A] to-[#071426] border border-[#36D6F5]/40 flex items-center justify-center shadow-lg shadow-[#36D6F5]/10 group-hover:border-[#36D6F5] transition-all duration-300">
                <svg className="w-5 h-5 text-[#36D6F5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <div className="absolute inset-0 rounded-xl bg-[#36D6F5]/10 filter blur-sm group-hover:bg-[#36D6F5]/25 transition-all"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                  NEXORA
                  <span className="text-[#36D6F5] text-xs font-semibold px-1.5 py-0.5 rounded bg-[#36D6F5]/10 border border-[#36D6F5]/25 uppercase tracking-wider">
                    GLOBAL
                  </span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium -mt-0.5">
                  Business Finance
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-[#36D6F5] transition-colors cursor-pointer py-1 relative group focus:outline-none focus:text-[#36D6F5]"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#36D6F5] transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenSalesModal()}
                className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white bg-[#0B1F3A]/80 hover:bg-[#0B1F3A] border border-slate-700/80 hover:border-[#36D6F5]/40 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#36D6F5]" />
                Talk to Sales
              </button>
              <button
                onClick={onOpenGetStarted}
                className="cyan-gradient-btn px-5 py-2 text-sm font-bold rounded-xl cursor-pointer flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenGetStarted}
                className="cyan-gradient-btn text-xs px-3 py-1.5 rounded-lg font-bold sm:hidden"
              >
                Get Started
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="p-2 rounded-xl text-slate-300 hover:text-white bg-[#0B1F3A] border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-[#36D6F5]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#36D6F5]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-[#071426] border-l border-[#36D6F5]/20 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase font-semibold text-[#36D6F5] tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Navigation
                </span>
                <span className="text-[11px] text-slate-400">US Institutional Rails</span>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-left text-base font-medium text-slate-200 hover:bg-[#0B1F3A] hover:text-[#36D6F5] transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSalesModal();
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-semibold text-slate-200 bg-[#0B1F3A] border border-slate-700 hover:border-[#36D6F5]/50 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#36D6F5]" />
                Talk to Sales
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full cyan-gradient-btn py-3 px-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="pt-2 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#36D6F5]" />
                256-bit Encrypted • US Regulated Banking Rails
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
