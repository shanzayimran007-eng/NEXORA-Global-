import React from 'react';
import { 
  ArrowUp, 
  ShieldCheck, 
  Mail, 
  PhoneCall, 
  MessageCircle,
  ExternalLink,
  Building2,
  Globe2
} from 'lucide-react';

interface FooterProps {
  onOpenLegalModal: (docType: 'privacy' | 'terms' | 'cookies' | 'disclosures') => void;
  onOpenSalesModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal, onOpenSalesModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Benefits', href: '#benefits' },
    { name: 'Process', href: '#process' },
    { name: 'Features', href: '#features' },
    { name: 'Invoice Financing', href: '#invoice-financing' },
    { name: 'Insights & Research', href: '#insights' },
    { name: 'Contact & Sales', href: '#contact' },
    { name: 'Frequently Asked Questions', href: '#faq' }
  ];

  const serviceLinks = [
    { name: 'Global Wire Disbursements', href: '#payments' },
    { name: 'US Same-Day ACH & Fedwire', href: '#payments' },
    { name: 'Wholesale Foreign Exchange', href: '#features' },
    { name: 'Receivables & Invoice Financing', href: '#invoice-financing' },
    { name: 'Multi-Entity Treasury & Cash Mgmt', href: '#features' },
    { name: 'Commercial Developer API', href: '#features' }
  ];

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/18005550199', 
      label: 'Chat on WhatsApp',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 0.743.966 1.203.666.593 1.229.777 1.402.864.173.087.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.825z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      href: 'mailto:sales@nexoraglobal.example.com', 
      label: 'Email Corporate Desk',
      icon: <Mail className="w-4 h-4" />
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/nexoraglobal', 
      label: 'Official Instagram',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/nexoraglobal', 
      label: 'Official Facebook',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      href: 'https://tiktok.com/@nexoraglobal', 
      label: 'Official TikTok',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.08 2.33 2.34.88.21 1.83.1 2.62-.35.85-.47 1.42-1.33 1.56-2.28.1-1.04.07-2.1.07-3.15V.02z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/nexoraglobal', 
      label: 'LinkedIn Enterprise Profile',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#050e1a] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column (Col Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0B1F3A] to-[#071426] border border-[#36D6F5]/40 flex items-center justify-center text-[#36D6F5]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                NEXORA
                <span className="text-[#36D6F5] text-xs font-semibold px-1.5 py-0.5 rounded bg-[#36D6F5]/10 border border-[#36D6F5]/25">
                  GLOBAL
                </span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Nexora Global Finance delivers advanced corporate cross-border disbursements, Same-Day ACH rails, wholesale foreign exchange, and working capital invoice financing for growing US enterprises.
            </p>

            {/* Social Icons Strip */}
            <div className="pt-2 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-[#071426] hover:bg-[#0B1F3A] border border-slate-800 hover:border-[#36D6F5]/40 text-slate-400 hover:text-[#36D6F5] flex items-center justify-center transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#36D6F5]" />
                <span className="font-mono">sales@nexoraglobal.example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#36D6F5]" />
                <span className="font-mono">+1 (800) 555-0199</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Platform Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#36D6F5] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Corridors */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Solutions & Rails
            </h4>
            <ul className="space-y-2.5 text-xs">
              {serviceLinks.map((svc) => (
                <li key={svc.name}>
                  <a
                    href={svc.href}
                    className="text-slate-400 hover:text-[#36D6F5] transition-colors"
                  >
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Institutional Action
            </h4>
            <button
              onClick={onOpenSalesModal}
              className="w-full cyan-gradient-btn py-2.5 px-3 rounded-xl text-xs font-bold text-center block cursor-pointer shadow-md"
            >
              Talk to Sales
            </button>
            <a
              href="#newsletter"
              className="w-full bg-[#071426] hover:bg-[#0B1F3A] border border-slate-700 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 text-center block transition-colors"
            >
              Subscribe to Briefing
            </a>

            <div className="pt-2 text-[11px] text-slate-500 font-mono space-y-1">
              <div>US Registered Headquarters</div>
              <div>One World Trade Center, Suite 8400</div>
              <div>New York, NY 10007</div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclosures & Banking Disclaimer */}
        <div className="py-8 border-b border-slate-800/80 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong>Important Regulatory Notice & Partner Disclosures:</strong> Nexora Global Finance Inc. is a financial technology platform, not an FDIC-insured depository bank. All depositary, custody, and banking services—including domestic checking accounts, Fedwire, and Same-Day ACH processing—are provided by our licensed US partner banking and depository institutions. Funds deposited in segregated partner accounts are eligible for pass-through FDIC insurance up to applicable legal maximums subject to compliance conditions.
          </p>
          <p>
            Foreign exchange and cross-border disbursements are facilitated through registered Money Services Businesses (MSBs) and authorized clearing network partners. Invoice financing and accounts receivable factoring facilities are subject to commercial underwriting, debtor credit evaluation, and definitive documentation. Nothing contained on this website constitutes a binding offer of financing or guaranteed credit extension.
          </p>
        </div>

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Nexora Global Finance Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-[#36D6F5] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-[#36D6F5] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('cookies')}
              className="hover:text-[#36D6F5] transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('disclosures')}
              className="hover:text-[#36D6F5] transition-colors cursor-pointer"
            >
              Regulatory Disclosures
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#36D6F5] hover:text-white transition-colors cursor-pointer ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
