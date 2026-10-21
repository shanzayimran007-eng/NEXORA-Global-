import React, { useState } from 'react';
import { Transaction, Article } from '../types';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Globe2, 
  Receipt, 
  ArrowRight, 
  Download, 
  Copy, 
  Building2, 
  Calendar, 
  BookOpen,
  DollarSign,
  AlertCircle,
  Sparkles,
  Lock
} from 'lucide-react';

/* 1. Transaction Detail Modal */
interface TransactionDetailModalProps {
  transaction: Transaction | null;
  onClose: () => void;
}

export const TransactionDetailModal: React.FC<TransactionDetailModalProps> = ({ transaction, onClose }) => {
  if (!transaction) return null;
  const [copied, setCopied] = useState(false);

  const copyRef = () => {
    navigator.clipboard.writeText(transaction.referenceNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 border border-[#36D6F5]/30 shadow-2xl bg-[#071426] max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{transaction.flag}</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">{transaction.recipient}</h3>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                  transaction.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                  transaction.status === 'Processing' ? 'bg-sky-500/10 text-[#36D6F5] border-[#36D6F5]/25' :
                  'bg-amber-500/10 text-amber-300 border-amber-500/20'
                }`}>
                  {transaction.status}
                </span>
              </div>
              <p className="text-xs text-slate-400">{transaction.recipientCompany} • {transaction.country}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-[#0B1F3A] hover:bg-slate-800 border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Amount & Reference */}
        <div className="my-6 p-4 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-slate-400 font-mono uppercase">Disbursed Amount (USD)</span>
            <div className="text-2xl font-extrabold text-white font-mono">
              ${transaction.amountUSD.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
            </div>
            <span className="text-xs text-[#36D6F5] font-mono mt-0.5 block">
              Beneficiary: {transaction.localAmount.toLocaleString()} {transaction.localCurrency}
            </span>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-[10px] text-slate-400 font-mono uppercase">Reference Number</span>
            <div className="flex items-center gap-1.5 font-mono text-sm text-slate-200 mt-0.5">
              <span>{transaction.referenceNumber}</span>
              <button onClick={copyRef} className="text-slate-400 hover:text-[#36D6F5] p-1">
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Method: {transaction.method}</span>
          </div>
        </div>

        {/* 4-Stage Settlement Telemetry Tracker */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#36D6F5] font-semibold">
            Real-Time Settlement Telemetry
          </h4>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
            {transaction.timeline.map((step, idx) => (
              <div key={idx} className="relative">
                <span className={`absolute -left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  step.completed 
                    ? 'bg-emerald-500 text-slate-950' 
                    : step.current 
                    ? 'bg-[#36D6F5] text-slate-950 animate-pulse' 
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  {step.completed ? '✓' : idx + 1}
                </span>

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${step.completed || step.current ? 'text-white' : 'text-slate-500'}`}>
                    {step.stage}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {step.timestamp}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fee breakdown & compliance */}
        <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>Intermediary Rail Fee: <strong className="text-white">${transaction.feeUSD.toFixed(2)} USD</strong></span>
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            OFAC Screened
          </span>
        </div>

      </div>
    </div>
  );
};

/* 2. Article Reader Modal */
interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenSalesModal: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ article, onClose, onOpenSalesModal }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-10 border border-[#36D6F5]/30 shadow-2xl bg-[#071426] max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#36D6F5]/10 text-[#36D6F5] text-xs font-mono font-semibold border border-[#36D6F5]/25">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">{article.readTime}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-[#0B1F3A] hover:bg-slate-800 border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 leading-tight">
          {article.title}
        </h2>

        {/* Author */}
        <div className="flex items-center gap-3 my-5 py-3 border-y border-slate-800/80">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-10 h-10 rounded-full object-cover border border-[#36D6F5]/40"
          />
          <div>
            <div className="text-sm font-bold text-white">{article.author.name}</div>
            <div className="text-xs text-[#36D6F5]">{article.author.role} • {article.date}</div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="p-4 rounded-2xl bg-[#0B1F3A]/70 border-l-4 border-[#36D6F5] text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
          "{article.summary}"
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {article.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="my-6 p-5 rounded-2xl bg-[#071426] border border-slate-800 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#36D6F5] font-bold">
            Executive Key Takeaways
          </h4>
          <ul className="space-y-2">
            {article.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#36D6F5] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">Interested in implementing these practices?</span>
          <button
            onClick={() => {
              onClose();
              onOpenSalesModal();
            }}
            className="cyan-gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold"
          >
            Schedule Treasury Consultation
          </button>
        </div>

      </div>
    </div>
  );
};

/* 3. Legal Document Modal */
interface LegalDocumentModalProps {
  docType: 'privacy' | 'terms' | 'cookies' | 'disclosures' | null;
  onClose: () => void;
}

export const LegalDocumentModal: React.FC<LegalDocumentModalProps> = ({ docType, onClose }) => {
  if (!docType) return null;

  const docContent = {
    privacy: {
      title: 'Nexora Global Finance — Privacy Policy',
      lastUpdated: 'October 2026',
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'We collect corporate entity information (legal business name, EIN, state of incorporation, corporate address, beneficial ownership data), financial transaction data (wire instructions, accounts receivable details, bank feed tokens), and platform telemetry solely to deliver payment clearing and compliance services.'
        },
        {
          heading: '2. Use of Corporate Data',
          body: 'Information is utilized exclusively to perform Know-Your-Business (KYB) compliance, screen against sanctions (OFAC, FinCEN, EU CFSP), execute client-authorized disbursements, and service invoice financing facilities.'
        },
        {
          heading: '3. Data Encryption and Retention',
          body: 'All client information is encrypted using 256-bit AES at rest and TLS 1.3 in transit. Financial transaction logs are preserved in accordance with Bank Secrecy Act (BSA) recordkeeping requirements.'
        }
      ]
    },
    terms: {
      title: 'Nexora Global Finance — Terms of Service',
      lastUpdated: 'October 2026',
      sections: [
        {
          heading: '1. Commercial Eligibility',
          body: 'Nexora services are available exclusively to duly registered corporations, LLCs, and authorized commercial partnerships. Services are strictly commercial in nature and not offered to individual consumers.'
        },
        {
          heading: '2. Partner Depository Relationship',
          body: 'Nexora Global Finance Inc. is a financial technology company and not a bank. Custody and banking services are provided by our regulated US partner depository institutions.'
        },
        {
          heading: '3. Transaction Authorization and Settlement',
          body: 'Users are responsible for maintaining dual-custody access credentials. Orders submitted via dashboard or API are final once clearing gates commence.'
        }
      ]
    },
    cookies: {
      title: 'Nexora Global Finance — Cookie Policy',
      lastUpdated: 'October 2026',
      sections: [
        {
          heading: '1. Essential Operational Cookies',
          body: 'We use strictly essential cookies for secure session maintenance, CSRF protection, and multi-factor authentication token validation.'
        },
        {
          heading: '2. Performance and Analytics',
          body: 'Aggregated analytics cookies measure platform routing latencies and user interface responsiveness without transmitting individual financial data.'
        }
      ]
    },
    disclosures: {
      title: 'Institutional Disclosures & Regulatory Notices',
      lastUpdated: 'October 2026',
      sections: [
        {
          heading: '1. Depository Partner Disclosures',
          body: 'All depository accounts and domestic wire clearing services are facilitated through FDIC-insured partner banks. Funds in depository partner accounts are insured up to $250,000 per eligible depositor.'
        },
        {
          heading: '2. Receivables & Invoice Financing',
          body: 'Invoice financing calculations displayed on this website are illustrative models. Actual advance rates, terms, and discount percentages are subject to debtor credit approval and formal commercial factoring agreements.'
        },
        {
          heading: '3. Non-Bank Financial Technology Operator',
          body: 'Nexora Global Finance does not take public deposits. All cross-border foreign exchange activities are executed via registered MSBs and regulated foreign exchange clearing rails.'
        }
      ]
    }
  };

  const currentDoc = docContent[docType];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-10 border border-[#36D6F5]/30 shadow-2xl bg-[#071426] max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-xl font-bold text-white">{currentDoc.title}</h3>
            <span className="text-xs text-slate-400 font-mono">Last Updated: {currentDoc.lastUpdated}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-[#0B1F3A] hover:bg-slate-800 border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Draft Notice Banner */}
        <div className="my-5 p-3 rounded-xl bg-[#0B1F3A]/70 border border-[#36D6F5]/25 text-xs text-slate-300 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#36D6F5] shrink-0" />
          <span>Official Legal Draft for Review — Subject to institutional enterprise terms.</span>
        </div>

        {/* Sections */}
        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {currentDoc.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-bold text-white text-sm sm:text-base">{sec.heading}</h4>
              <p>{sec.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="cyan-gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};

/* 4. Interactive Get Started / Onboarding Preview Modal */
interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSalesModal: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose, onOpenSalesModal }) => {
  if (!isOpen) return null;
  const [step, setStep] = useState(1);
  const [entityName, setEntityName] = useState('');
  const [ein, setEin] = useState('');
  const [monthlyVolume, setMonthlyVolume] = useState('$50,000 – $250,000 USD');

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-[#36D6F5]/30 shadow-2xl bg-[#071426]">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#36D6F5] animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#36D6F5] font-semibold">
              Interactive Corporate Onboarding Walkthrough
            </span>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-between my-5 text-xs text-slate-400 font-mono">
          <span className={step >= 1 ? 'text-[#36D6F5] font-bold' : ''}>1. Entity KYB</span>
          <span>➔</span>
          <span className={step >= 2 ? 'text-[#36D6F5] font-bold' : ''}>2. Corridors</span>
          <span>➔</span>
          <span className={step >= 3 ? 'text-[#36D6F5] font-bold' : ''}>3. Treasury Activation</span>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white">Enter Your US Registered Entity</h3>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Company Legal Name</label>
              <input
                type="text"
                placeholder="e.g. Acme Global Logistics LLC"
                value={entityName}
                onChange={(e) => setEntityName(e.target.value)}
                className="w-full bg-[#0B1F3A] border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#36D6F5]"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Employer Identification Number (EIN)</label>
              <input
                type="text"
                placeholder="XX-XXXXXXX"
                value={ein}
                onChange={(e) => setEin(e.target.value)}
                className="w-full bg-[#0B1F3A] border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#36D6F5]"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Estimated Monthly Payment Volume</label>
              <select
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(e.target.value)}
                className="w-full bg-[#0B1F3A] border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#36D6F5]"
              >
                <option>$25,000 – $50,000 USD</option>
                <option>$50,000 – $250,000 USD</option>
                <option>$250,000 – $1,000,000 USD</option>
                <option>$1,000,000+ USD (Enterprise)</option>
              </select>
            </div>
            <button
              onClick={handleNext}
              className="w-full cyan-gradient-btn py-3 rounded-xl text-xs font-bold mt-4"
            >
              Continue to Corridor Selection ➔
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white">Select Required Payment Corridors</h3>
            <p className="text-xs text-slate-400">Choose primary routes you require for supplier disbursements:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {['🇺🇸 US Domestic ACH / Fedwire', '🇪🇺 European Union (EUR)', '🇬🇧 United Kingdom (GBP)', '🇯🇵 Japan (JPY)', '🇲🇽 Mexico (MXN)', '🇧🇷 Brazil (BRL)'].map((c, i) => (
                <div key={i} className="p-2.5 bg-[#0B1F3A] rounded-xl border border-slate-700 flex items-center gap-2 text-white font-medium">
                  <input type="checkbox" defaultChecked className="accent-[#36D6F5]" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-full cyan-gradient-btn py-3 rounded-xl text-xs font-bold mt-4"
            >
              Proceed to Activation Review ➔
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Application Pre-Validated</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your profile parameters qualify for our accelerated KYB review desk with wholesale FX tiering. Connect with our treasury onboarding officer to finalize document submission.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenSalesModal();
              }}
              className="w-full cyan-gradient-btn py-3 rounded-xl text-xs font-bold"
            >
              Connect with Senior Onboarding Officer
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
