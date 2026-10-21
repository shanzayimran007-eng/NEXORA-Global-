import React, { useState } from 'react';
import { 
  SAMPLE_TRANSACTIONS 
} from '../data/mockData';
import { Transaction } from '../types';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Filter, 
  Search, 
  ChevronRight,
  Send,
  Zap,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

interface GlobalPaymentsSectionProps {
  onSelectTransaction: (tx: Transaction) => void;
  onInitiateTransfer: () => void;
}

export const GlobalPaymentsSection: React.FC<GlobalPaymentsSectionProps> = ({
  onSelectTransaction,
  onInitiateTransfer
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTransactions = SAMPLE_TRANSACTIONS.filter((tx) => {
    const matchesFilter = 
      filterType === 'all' ? true :
      filterType === 'domestic' ? tx.countryCode === 'US' :
      filterType === 'crossborder' ? tx.countryCode !== 'US' :
      filterType === 'processing' ? tx.status === 'Processing' || tx.status === 'Pending' :
      true;

    const matchesSearch = 
      tx.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.referenceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.currency.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: Transaction['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case 'Processing':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-500/10 text-[#36D6F5] border border-[#36D6F5]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#36D6F5] animate-ping"></span>
            Processing
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <Clock className="w-3 h-3" />
            Pending Dual Sign
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="payments" className="py-24 bg-[#071426] relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-[#0B1F3A]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>End-to-End Payment Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Global Payments and <span className="cyan-gradient-text">Real-Time Transactions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Execute domestic Same-Day ACH and high-value Fedwire alongside cross-border supplier disbursements in 140+ corridors with transparent mid-market foreign exchange.
          </p>
        </div>

        {/* Filter and Control Bar */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border border-[#36D6F5]/15">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Corridors' },
              { id: 'crossborder', label: 'Cross-Border & FX' },
              { id: 'domestic', label: 'US Domestic (ACH & Fedwire)' },
              { id: 'processing', label: 'Active Clearing' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-[#36D6F5] text-[#071426] shadow-md shadow-[#36D6F5]/20'
                    : 'bg-[#0B1F3A]/60 text-slate-300 hover:text-white hover:bg-[#0B1F3A] border border-slate-700/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar & quick action */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search vendor, ref, or currency..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-[#071426] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#36D6F5]"
              />
            </div>
            <button
              onClick={onInitiateTransfer}
              className="cyan-gradient-btn px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Simulate Transfer</span>
            </button>
          </div>
        </div>

        {/* Transactions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTransactions.map((tx) => (
            <div
              key={tx.id}
              onClick={() => onSelectTransaction(tx)}
              className="glass-card-interactive rounded-2xl p-5 cursor-pointer relative group flex flex-col justify-between"
            >
              <div>
                {/* Top row: Flag, Currency, Status */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" role="img" aria-label={tx.country}>
                      {tx.flag}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {tx.currency}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {tx.method}
                      </span>
                    </div>
                  </div>
                  {getStatusBadge(tx.status)}
                </div>

                {/* Recipient info */}
                <div className="mt-3">
                  <h3 className="text-sm font-bold text-white group-hover:text-[#36D6F5] transition-colors truncate">
                    {tx.recipient}
                  </h3>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {tx.recipientCompany}
                  </p>
                </div>
              </div>

              {/* Bottom section: Amount and fee */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-medium">Disbursed</span>
                    <div className="text-base font-extrabold text-white">
                      ${tx.amountUSD.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-medium">Local Payout</span>
                    <div className="text-xs font-semibold text-slate-300 font-mono">
                      {tx.localAmount.toLocaleString('en-US')} {tx.localCurrency}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono">{tx.date}</span>
                  <span className="text-[#36D6F5] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5 font-medium">
                    View Tracking <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-mono">
            * Illustrative demo transactions representing typical corporate domestic & cross-border payout streams. Click any card to inspect full settlement timeline & compliance routing.
          </p>
        </div>

      </div>
    </section>
  );
};
