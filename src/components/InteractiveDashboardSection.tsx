import React, { useState } from 'react';
import { SAMPLE_TRANSACTIONS, SAMPLE_INVOICES } from '../data/mockData';
import { Transaction, InvoiceRecord } from '../types';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Filter, 
  Calendar, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  RefreshCw,
  Building,
  ArrowUpRight,
  ArrowDownLeft,
  DollarSign,
  Receipt,
  Layers,
  Sparkles,
  Eye
} from 'lucide-react';

interface InteractiveDashboardProps {
  onSelectTransaction: (tx: Transaction) => void;
  onOpenSalesModal: () => void;
}

export const InteractiveDashboardSection: React.FC<InteractiveDashboardProps> = ({
  onSelectTransaction,
  onOpenSalesModal
}) => {
  const [activeTab, setActiveTab] = useState<'transactions' | 'invoices' | 'chart'>('transactions');
  const [timeRange, setTimeRange] = useState<'7D' | '30D' | '90D' | '1Y'>('30D');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredTransactions = SAMPLE_TRANSACTIONS.filter((tx) => {
    const matchesSearch = 
      tx.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.referenceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || tx.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Transaction['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case 'Processing':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/10 text-[#36D6F5] border border-[#36D6F5]/25">
            <RefreshCw className="w-3 h-3 animate-spin" />
            Processing
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <Clock className="w-3 h-3" />
            Pending Sign
          </span>
        );
    }
  };

  return (
    <section id="dashboard" className="py-24 bg-[#071426] relative overflow-hidden border-t border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[500px] bg-[#36D6F5]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Institutional Control Center</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Financial <span className="cyan-gradient-text">Dashboard Preview</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Experience the unified interface: multi-currency balance consolidation, real-time transaction telemetry, invoice liquidity pipeline, and dynamic period reporting.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0B1F3A] border border-slate-700 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Illustrative Demo Sandbox Mode</span>
          </div>
        </div>

        {/* Dashboard Frame */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#36D6F5]/25 shadow-2xl relative">
          
          {/* Top Metric Cards Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#071426]/90 p-5 rounded-2xl border border-slate-800/90 relative overflow-hidden">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Total Treasury Balance</span>
                <span className="text-emerald-400 text-xs font-semibold flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> +14.2%
                </span>
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">
                $1,842,950.40 <span className="text-xs text-slate-400 font-sans">USD</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-mono">
                Consolidated across 4 currencies
              </p>
            </div>

            <div className="bg-[#071426]/90 p-5 rounded-2xl border border-slate-800/90">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Inbound Collections ({timeRange})</span>
                <span className="text-[#36D6F5] text-xs font-semibold flex items-center gap-0.5">
                  <ArrowDownLeft className="w-3 h-3" /> Net positive
                </span>
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">
                $684,200.00 <span className="text-xs text-slate-400 font-sans">USD</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-mono">
                Receivables & customer wires
              </p>
            </div>

            <div className="bg-[#071426]/90 p-5 rounded-2xl border border-slate-800/90">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Outbound Disbursements</span>
                <span className="text-slate-400 text-xs font-semibold flex items-center gap-0.5">
                  <ArrowUpRight className="w-3 h-3" /> Scheduled
                </span>
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">
                $421,750.00 <span className="text-xs text-slate-400 font-sans">USD</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-mono">
                Supplier payouts & domestic ACH
              </p>
            </div>

            <div className="bg-[#071426]/90 p-5 rounded-2xl border border-[#36D6F5]/30">
              <div className="text-xs text-[#36D6F5] font-medium uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Invoice Advance Available</span>
                <span className="text-xs bg-[#36D6F5]/10 px-1.5 py-0.5 rounded font-mono">85% Net</span>
              </div>
              <div className="text-2xl font-extrabold text-[#36D6F5] font-mono">
                $284,922.00 <span className="text-xs text-slate-400 font-sans">USD</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 font-mono">
                Ready for immediate draw
              </p>
            </div>
          </div>

          {/* Navigation Bar inside Dashboard */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('transactions')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'transactions'
                    ? 'bg-[#36D6F5] text-[#071426] font-bold shadow-md shadow-[#36D6F5]/20'
                    : 'bg-[#0B1F3A] text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                <span>Recent Transactions</span>
                <span className="text-[10px] bg-slate-900/30 px-1.5 py-0.5 rounded font-mono">
                  {filteredTransactions.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('invoices')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'invoices'
                    ? 'bg-[#36D6F5] text-[#071426] font-bold shadow-md shadow-[#36D6F5]/20'
                    : 'bg-[#0B1F3A] text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                <Receipt className="w-3.5 h-3.5" />
                <span>Invoices & Financing</span>
                <span className="text-[10px] bg-slate-900/30 px-1.5 py-0.5 rounded font-mono">
                  {SAMPLE_INVOICES.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('chart')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'chart'
                    ? 'bg-[#36D6F5] text-[#071426] font-bold shadow-md shadow-[#36D6F5]/20'
                    : 'bg-[#0B1F3A] text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Cash Flow Activity</span>
              </button>
            </div>

            {/* Time range selector */}
            <div className="flex items-center gap-1.5 bg-[#071426] p-1 rounded-xl border border-slate-800">
              {(['7D', '30D', '90D', '1Y'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setTimeRange(r)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                    timeRange === r 
                      ? 'bg-[#0B1F3A] text-[#36D6F5] border border-[#36D6F5]/30' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Tab 1: Transactions Table */}
          {activeTab === 'transactions' && (
            <div className="pt-6">
              {/* Search & Filter Header */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by vendor or reference..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-[#071426] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#36D6F5]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-[#071426] border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-[#36D6F5]"
                  >
                    <option value="all">All Statuses</option>
                    <option value="Completed">Completed</option>
                    <option value="Processing">Processing</option>
                    <option value="Pending">Pending Sign</option>
                  </select>
                </div>
              </div>

              {/* Transactions Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase text-[10px]">
                      <th className="py-3 px-3">Reference / Date</th>
                      <th className="py-3 px-3">Recipient / Entity</th>
                      <th className="py-3 px-3">Corridor & Method</th>
                      <th className="py-3 px-3 text-right">Disbursed (USD)</th>
                      <th className="py-3 px-3 text-right">Status</th>
                      <th className="py-3 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredTransactions.map((tx) => (
                      <tr 
                        key={tx.id}
                        onClick={() => onSelectTransaction(tx)}
                        className="hover:bg-[#0B1F3A]/70 transition-colors cursor-pointer group"
                      >
                        <td className="py-3.5 px-3">
                          <span className="font-mono font-bold text-white block group-hover:text-[#36D6F5] transition-colors">
                            {tx.referenceNumber}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {tx.date}
                          </span>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="font-semibold text-white block">
                            {tx.recipient}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {tx.recipientCompany}
                          </span>
                        </td>
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-1.5">
                            <span className="text-base">{tx.flag}</span>
                            <span className="font-mono text-slate-300">{tx.currency}</span>
                            <span className="text-[10px] text-slate-500 font-mono">({tx.method})</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <span className="font-bold text-white font-mono block">
                            ${tx.amountUSD.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            Fee: ${tx.feeUSD.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          {getStatusBadge(tx.status)}
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <span className="text-[#36D6F5] text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Details <ChevronRight className="w-3 h-3" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Invoices Management Table */}
          {activeTab === 'invoices' && (
            <div className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase text-[10px]">
                      <th className="py-3 px-3">Invoice # / Buyer</th>
                      <th className="py-3 px-3">Invoice Amount</th>
                      <th className="py-3 px-3">Terms & Due Date</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3 text-right">Advance Eligible</th>
                      <th className="py-3 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {SAMPLE_INVOICES.map((inv) => (
                      <tr key={inv.id} className="hover:bg-[#0B1F3A]/70 transition-colors">
                        <td className="py-3.5 px-3">
                          <span className="font-mono font-bold text-white block">
                            {inv.invoiceNumber}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {inv.buyer} ({inv.buyerCountry})
                          </span>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="font-bold text-white font-mono">
                            ${inv.invoiceAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
                          </span>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="text-slate-300 font-mono block">{inv.terms}</span>
                          <span className="text-[10px] text-slate-400 font-mono">Due {inv.dueDate}</span>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                            inv.status === 'Funded' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                            inv.status === 'Approved for Advance' ? 'bg-sky-500/10 text-[#36D6F5] border-[#36D6F5]/25' :
                            'bg-amber-500/10 text-amber-300 border-amber-500/20'
                          }`}>
                            {inv.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <span className="font-bold text-[#36D6F5] font-mono block">
                            ${inv.advanceAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {inv.advanceRatePercent}% Advance Rate
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <button
                            onClick={onOpenSalesModal}
                            className="cyan-gradient-btn px-2.5 py-1 rounded-lg text-[11px] font-bold"
                          >
                            Draw Advance
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: Interactive Cash Flow Trend Chart */}
          {activeTab === 'chart' && (
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-400 font-mono uppercase">
                  30-Day Inflow vs Outflow Velocity (USD in Thousands)
                </span>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-[#36D6F5]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#36D6F5]"></span> Inbound Collections
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span> Outbound Disbursements
                  </span>
                </div>
              </div>

              {/* Bar visualization */}
              <div className="h-64 w-full bg-[#071426] rounded-2xl p-4 border border-slate-800 flex items-end justify-between gap-2">
                {[
                  { day: 'W1', inH: 60, outH: 45, inVal: '$140k', outVal: '$110k' },
                  { day: 'W2', inH: 85, outH: 55, inVal: '$210k', outVal: '$135k' },
                  { day: 'W3', inH: 45, outH: 70, inVal: '$115k', outVal: '$160k' },
                  { day: 'W4', inH: 95, outH: 40, inVal: '$235k', outVal: '$95k' },
                  { day: 'W5', inH: 75, outH: 60, inVal: '$180k', outVal: '$145k' },
                  { day: 'W6', inH: 100, outH: 50, inVal: '$250k', outVal: '$120k' },
                ].map((col, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                    <div className="w-full flex items-end justify-center gap-1.5 h-48">
                      {/* Inbound Bar */}
                      <div 
                        style={{ height: `${col.inH}%` }} 
                        className="w-1/2 max-w-[28px] bg-gradient-to-t from-[#0284C7] to-[#36D6F5] rounded-t-md transition-all group-hover:brightness-125"
                      />
                      {/* Outbound Bar */}
                      <div 
                        style={{ height: `${col.outH}%` }} 
                        className="w-1/2 max-w-[28px] bg-slate-700/80 rounded-t-md transition-all group-hover:bg-slate-600"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{col.day}</span>

                    {/* Tooltip on hover */}
                    <div className="absolute -top-12 bg-[#0B1F3A] border border-[#36D6F5]/40 rounded-lg p-1.5 px-2 text-[10px] font-mono shadow-xl hidden group-hover:block z-20 whitespace-nowrap">
                      In: <span className="text-[#36D6F5] font-bold">{col.inVal}</span> | Out: <span className="text-slate-300">{col.outVal}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Dashboard Footer */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>All connections secured with TLS 1.3 & 256-bit AES encryption.</span>
            </div>
            <button
              onClick={onOpenSalesModal}
              className="cyan-gradient-btn px-4 py-2 rounded-xl font-bold text-xs"
            >
              Request Full Platform Demo Access
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
