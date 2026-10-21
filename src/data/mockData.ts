import { Transaction, InvoiceRecord, Corridor, Article, Testimonial, FAQItem } from '../types';

export const SAMPLE_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-101',
    referenceNumber: 'NX-9481-USD',
    recipient: 'Shin-Etsu Precision Ltd',
    recipientCompany: 'Shin-Etsu Electronics',
    country: 'Japan',
    countryCode: 'JP',
    flag: '🇯🇵',
    currency: 'JPY',
    amountUSD: 84500.00,
    localAmount: 12928500,
    localCurrency: 'JPY',
    method: 'SWIFT Wire',
    status: 'Completed',
    date: 'Oct 21, 2026',
    category: 'Supply Chain',
    feeUSD: 14.50,
    timeline: [
      { stage: 'Initiated', timestamp: '08:30 AM EST', completed: true, description: 'Order authorized via 2FA' },
      { stage: 'Compliance Clearing', timestamp: '08:42 AM EST', completed: true, description: 'OFAC & Sanctions screening cleared' },
      { stage: 'FX Conversion', timestamp: '09:05 AM EST', completed: true, description: 'Locked wholesale mid-market rate: 153.00 JPY' },
      { stage: 'Settled to Beneficiary', timestamp: '10:15 AM EST', completed: true, description: 'Credited to Bank of Tokyo account' }
    ]
  },
  {
    id: 'tx-102',
    referenceNumber: 'NX-9482-EUR',
    recipient: 'Bavaria Components GmbH',
    recipientCompany: 'Bavaria Automotive Parts',
    country: 'Germany (EU)',
    countryCode: 'DE',
    flag: '🇪🇺',
    currency: 'EUR',
    amountUSD: 142300.00,
    localAmount: 131800,
    localCurrency: 'EUR',
    method: 'SEPA',
    status: 'Processing',
    date: 'Oct 21, 2026',
    category: 'Supply Chain',
    feeUSD: 18.00,
    timeline: [
      { stage: 'Initiated', timestamp: '09:12 AM EST', completed: true, description: 'Batch payout submitted' },
      { stage: 'Compliance Clearing', timestamp: '09:20 AM EST', completed: true, description: 'Screening passed' },
      { stage: 'FX Conversion', timestamp: '09:45 AM EST', completed: true, current: true, description: 'Routing via Frankfurt clearing gateway' },
      { stage: 'Settled to Beneficiary', timestamp: 'Est. 12:30 PM EST', completed: false, description: 'Awaiting local Bundesbank settlement' }
    ]
  },
  {
    id: 'tx-103',
    referenceNumber: 'NX-9483-DOM',
    recipient: 'Apex Logistics North America',
    recipientCompany: 'Apex Freight Systems LLC',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    currency: 'USD',
    amountUSD: 36750.00,
    localAmount: 36750.00,
    localCurrency: 'USD',
    method: 'Same-Day ACH',
    status: 'Completed',
    date: 'Oct 20, 2026',
    category: 'Vendor Payout',
    feeUSD: 1.50,
    timeline: [
      { stage: 'Initiated', timestamp: '11:00 AM EST', completed: true, description: 'Domestic disbursement batch' },
      { stage: 'Compliance Clearing', timestamp: '11:01 AM EST', completed: true, description: 'Domestic routing verified' },
      { stage: 'NACHA Window 2', timestamp: '01:00 PM EST', completed: true, description: 'Same-day ACH batch window released' },
      { stage: 'Settled to Beneficiary', timestamp: '03:45 PM EST', completed: true, description: 'Funds available in Chase Commercial' }
    ]
  },
  {
    id: 'tx-104',
    referenceNumber: 'NX-9484-GBP',
    recipient: 'Thames Design & Engineering Ltd',
    recipientCompany: 'Thames Industrial Ltd',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    currency: 'GBP',
    amountUSD: 52400.00,
    localAmount: 41250.00,
    localCurrency: 'GBP',
    method: 'BACS',
    status: 'Completed',
    date: 'Oct 20, 2026',
    category: 'Software / SaaS',
    feeUSD: 8.50,
    timeline: [
      { stage: 'Initiated', timestamp: '07:15 AM EST', completed: true, description: 'Authorized by Controller' },
      { stage: 'Compliance Clearing', timestamp: '07:25 AM EST', completed: true, description: 'UK FCA checks cleared' },
      { stage: 'FX Conversion', timestamp: '07:40 AM EST', completed: true, description: 'Mid-market GBP conversion locked' },
      { stage: 'Settled to Beneficiary', timestamp: '08:50 AM EST', completed: true, description: 'Credited to Barclays UK' }
    ]
  },
  {
    id: 'tx-105',
    referenceNumber: 'NX-9485-MXN',
    recipient: 'Monterrey Assembly Plant SA',
    recipientCompany: 'Grupo Monterrey Ensambles',
    country: 'Mexico',
    countryCode: 'MX',
    flag: '🇲🇽',
    currency: 'MXN',
    amountUSD: 98200.00,
    localAmount: 1816700,
    localCurrency: 'MXN',
    method: 'Local Clearing',
    status: 'Pending',
    date: 'Oct 21, 2026',
    category: 'Supply Chain',
    feeUSD: 12.00,
    timeline: [
      { stage: 'Initiated', timestamp: '10:05 AM EST', completed: true, description: 'Dual approval required' },
      { stage: 'Compliance Clearing', timestamp: 'Pending', completed: false, current: true, description: 'Awaiting secondary CFO signature' },
      { stage: 'SPEI Gateway', timestamp: 'Queued', completed: false, description: 'Direct SPEI payment window' },
      { stage: 'Settled to Beneficiary', timestamp: 'Estimated', completed: false, description: 'Banorte business account' }
    ]
  },
  {
    id: 'tx-106',
    referenceNumber: 'NX-9486-CAD',
    recipient: 'Toronto Maple Cloud Systems',
    recipientCompany: 'Maple Tech Inc',
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    currency: 'CAD',
    amountUSD: 24600.00,
    localAmount: 34190.00,
    localCurrency: 'CAD',
    method: 'Local Clearing',
    status: 'Completed',
    date: 'Oct 19, 2026',
    category: 'Payroll',
    feeUSD: 4.20,
    timeline: [
      { stage: 'Initiated', timestamp: '02:00 PM EST', completed: true, description: 'Payroll batch run #42' },
      { stage: 'Compliance Clearing', timestamp: '02:04 PM EST', completed: true, description: 'Automated verification' },
      { stage: 'EFT Rails', timestamp: '02:30 PM EST', completed: true, description: 'Canadian Payments Association' },
      { stage: 'Settled to Beneficiary', timestamp: '04:15 PM EST', completed: true, description: 'RBC Royal Bank accounts credited' }
    ]
  },
  {
    id: 'tx-107',
    referenceNumber: 'NX-9487-BRL',
    recipient: 'São Paulo Agricultural Exports',
    recipientCompany: 'Brasil Commodities Trading',
    country: 'Brazil',
    countryCode: 'BR',
    flag: '🇧🇷',
    currency: 'BRL',
    amountUSD: 115000.00,
    localAmount: 644000.00,
    localCurrency: 'BRL',
    method: 'SWIFT Wire',
    status: 'Processing',
    date: 'Oct 21, 2026',
    category: 'Supply Chain',
    feeUSD: 22.00,
    timeline: [
      { stage: 'Initiated', timestamp: '09:00 AM EST', completed: true, description: 'Import letter of credit transfer' },
      { stage: 'Compliance Clearing', timestamp: '09:18 AM EST', completed: true, description: 'Central Bank of Brazil registration' },
      { stage: 'FX Conversion', timestamp: '10:00 AM EST', completed: true, current: true, description: 'Converting at 5.60 BRL per USD' },
      { stage: 'Settled to Beneficiary', timestamp: 'Est. 02:00 PM EST', completed: false, description: 'Banco Itaú settlement' }
    ]
  },
  {
    id: 'tx-108',
    referenceNumber: 'NX-9488-AUD',
    recipient: 'Sydney Renewable Metals Ltd',
    recipientCompany: 'Oceania Mining Corp',
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    currency: 'AUD',
    amountUSD: 67800.00,
    localAmount: 104412.00,
    localCurrency: 'AUD',
    method: 'Local Clearing',
    status: 'Completed',
    date: 'Oct 18, 2026',
    category: 'Supply Chain',
    feeUSD: 9.00,
    timeline: [
      { stage: 'Initiated', timestamp: '06:00 PM EST', completed: true, description: 'Supplier purchase order #9021' },
      { stage: 'Compliance Clearing', timestamp: '06:05 PM EST', completed: true, description: 'Cleared' },
      { stage: 'NPP Fast Settlement', timestamp: '06:15 PM EST', completed: true, description: 'Australian New Payments Platform' },
      { stage: 'Settled to Beneficiary', timestamp: '06:45 PM EST', completed: true, description: 'Commonwealth Bank of Australia' }
    ]
  }
];

export const SAMPLE_INVOICES: InvoiceRecord[] = [
  {
    id: 'inv-8941',
    invoiceNumber: 'INV-2026-8941',
    buyer: 'Global Retail Partners Corp',
    buyerCountry: 'United States',
    invoiceAmount: 125000.00,
    issueDate: 'Sep 28, 2026',
    dueDate: 'Nov 27, 2026',
    terms: 'Net-60',
    status: 'Approved for Advance',
    advanceRatePercent: 85,
    advanceAmount: 106250.00,
    feePercent: 1.85,
    daysRemaining: 37
  },
  {
    id: 'inv-8942',
    invoiceNumber: 'INV-2026-8942',
    buyer: 'Nordic Consumer Electronics A/S',
    buyerCountry: 'Denmark (EU)',
    invoiceAmount: 89400.00,
    issueDate: 'Oct 05, 2026',
    dueDate: 'Dec 04, 2026',
    terms: 'Net-60',
    status: 'Funded',
    advanceRatePercent: 88,
    advanceAmount: 78672.00,
    feePercent: 1.95,
    daysRemaining: 44
  },
  {
    id: 'inv-8943',
    invoiceNumber: 'INV-2026-8943',
    buyer: 'Pacific Rim Hardware Wholesalers',
    buyerCountry: 'United States',
    invoiceAmount: 210000.00,
    issueDate: 'Oct 12, 2026',
    dueDate: 'Nov 11, 2026',
    terms: 'Net-30',
    status: 'Under Review',
    advanceRatePercent: 85,
    advanceAmount: 178500.00,
    feePercent: 1.65,
    daysRemaining: 21
  },
  {
    id: 'inv-8944',
    invoiceNumber: 'INV-2026-8944',
    buyer: 'Bordeaux Logistics Alliance',
    buyerCountry: 'France (EU)',
    invoiceAmount: 64200.00,
    issueDate: 'Aug 15, 2026',
    dueDate: 'Oct 14, 2026',
    terms: 'Net-60',
    status: 'Settled',
    advanceRatePercent: 90,
    advanceAmount: 57780.00,
    feePercent: 1.80,
    daysRemaining: 0
  }
];

export const SUPPORTED_CORRIDORS: Corridor[] = [
  {
    country: 'United States',
    currency: 'USD',
    flag: '🇺🇸',
    rateToUSD: 1.0000,
    popularPair: 'USD / Domestic',
    methods: ['Fedwire', 'Same-Day ACH', 'Standard ACH'],
    estimatedDelivery: 'Same-day to 1 business day',
    sampleFeeUSD: 1.50
  },
  {
    country: 'United Kingdom',
    currency: 'GBP',
    flag: '🇬🇧',
    rateToUSD: 0.7872,
    popularPair: 'USD / GBP',
    methods: ['Faster Payments (FPS)', 'BACS', 'CHAPS'],
    estimatedDelivery: 'Under 2 hours',
    sampleFeeUSD: 8.50
  },
  {
    country: 'European Union',
    currency: 'EUR',
    flag: '🇪🇺',
    rateToUSD: 0.9262,
    popularPair: 'USD / EUR',
    methods: ['SEPA Instant', 'Standard SEPA', 'TARGET2'],
    estimatedDelivery: 'Same-day to 1 business day',
    sampleFeeUSD: 7.00
  },
  {
    country: 'Canada',
    currency: 'CAD',
    flag: '🇨🇦',
    rateToUSD: 1.3898,
    popularPair: 'USD / CAD',
    methods: ['EFT Clearing', 'Interac Wire', 'Lynx'],
    estimatedDelivery: 'Same-day',
    sampleFeeUSD: 5.00
  },
  {
    country: 'Australia',
    currency: 'AUD',
    flag: '🇦🇺',
    rateToUSD: 1.5402,
    popularPair: 'USD / AUD',
    methods: ['NPP Fast Settlement', 'Direct Entry', 'RITS'],
    estimatedDelivery: 'Under 4 hours',
    sampleFeeUSD: 9.00
  },
  {
    country: 'Brazil',
    currency: 'BRL',
    flag: '🇧🇷',
    rateToUSD: 5.6015,
    popularPair: 'USD / BRL',
    methods: ['PIX Commercial', 'TED', 'SWIFT Commercial'],
    estimatedDelivery: 'Same-day to 24 hours',
    sampleFeeUSD: 15.00
  },
  {
    country: 'Mexico',
    currency: 'MXN',
    flag: '🇲🇽',
    rateToUSD: 18.5020,
    popularPair: 'USD / MXN',
    methods: ['SPEI Real-Time', 'SPID (USD in MX)', 'Local Wire'],
    estimatedDelivery: 'Under 1 hour (SPEI)',
    sampleFeeUSD: 6.50
  },
  {
    country: 'Japan',
    currency: 'JPY',
    flag: '🇯🇵',
    rateToUSD: 153.02,
    popularPair: 'USD / JPY',
    methods: ['Zengin System', 'BoJ-NET', 'SWIFT Direct'],
    estimatedDelivery: 'Same-day to 24 hours',
    sampleFeeUSD: 12.00
  }
];

export const INSIGHTS_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Managing International Business Payments: Mitigating FX Volatility in 2026',
    slug: 'managing-international-business-payments-fx-volatility',
    category: 'Global Treasury',
    readTime: '6 min read',
    date: 'Oct 14, 2026',
    author: {
      name: 'Sarah Chen, CFA',
      role: 'Head of Global Markets Strategy',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    summary: 'A tactical guide for US CFOs and treasurers navigating currency fluctuations, supplier payment hedging, and multi-currency account structures.',
    content: [
      'For US companies sourcing materials across Asia, Europe, and Latin America, currency swings can erode 3% to 7% of operating margins overnight if treasury teams rely solely on traditional spot transactions.',
      'Modern financial technology enables middle-market businesses to access institutional-grade FX tooling that was previously restricted to Fortune 500 multinationals. By coupling multi-currency holding accounts with transparent mid-market spreads and automated payment corridors, finance teams gain predictable cost structures.',
      'Key considerations when modernizing your international payment workflow include evaluating payment method routing (such as local clearing networks like SEPA and SPEI over expensive SWIFT correspondent banking chains), batch payment scheduling, and establishing firm dual-authorization approval hierarchies to protect operational cash reserves.'
    ],
    keyTakeaways: [
      'Local clearing rails frequently deliver faster settlement with up to 70% lower intermediary charges than legacy correspondent banking.',
      'Holding local currency balances shields against double-conversion fees when paying recurring international suppliers.',
      'Automated reconciliation into enterprise ERP systems cuts invoice processing time from days to minutes.'
    ]
  },
  {
    id: 'art-2',
    title: 'Understanding Invoice Financing: Accelerating Cash Flow Without Equity Dilution',
    slug: 'understanding-invoice-financing-cash-flow',
    category: 'Working Capital',
    readTime: '5 min read',
    date: 'Oct 08, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'VP of Commercial Credit Solutions',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
    },
    summary: 'How fast-growing B2B firms and distributors unlock up to 90% of outstanding accounts receivable value within 24 hours to fuel inventory cycles.',
    content: [
      'Waiting 60 to 90 days for major enterprise customers to settle commercial invoices is one of the most acute operational bottlenecks facing growing suppliers, distributors, and logistics providers.',
      'Invoice financing—often referred to as accounts receivable financing or selective factoring—bridges this liquidity gap. Unlike traditional bank lines of credit that require personal guarantees and months of underwriting, invoice financing is backed primarily by the creditworthiness of your commercial buyers.',
      'Upon submitting a verified invoice, businesses can receive an illustrative advance of 80% to 90% of the invoice balance. The remaining percentage, minus a transparent discount fee, is disbursed when the debtor settles the account directly.'
    ],
    keyTakeaways: [
      'Preserve company equity and avoid long-term debt liabilities on your corporate balance sheet.',
      'Flexible liquidity scales organically with your sales volume—as invoicing grows, borrowing capacity expands.',
      'No rigid minimum draw commitments or hidden facility cancellation penalties.'
    ]
  },
  {
    id: 'art-3',
    title: 'Improving Cash Flow for Growing Importers & Exporters: Practical Best Practices',
    slug: 'improving-cash-flow-importers-exporters',
    category: 'Supply Chain Finance',
    readTime: '7 min read',
    date: 'Sep 29, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Director of Trade Operations',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    summary: 'Actionable strategies for supply chain leaders to streamline customs duties, harmonize payment terms, and optimize working capital cycles.',
    content: [
      'The modern global supply chain requires synchronized operational and financial execution. Importers frequently face a cash conversion cycle gap of 75 to 120 days between placing overseas purchase orders and receiving customer payments.',
      'To maintain healthy cash flow velocity, top-performing trade enterprises align their vendor payment terms with receivable factoring, leverage automated customs and duty payment channels, and employ real-time shipment status triggers to authorize fractional milestone disbursements.',
      'By consolidating domestic ACH disbursements, international wire transfers, and invoice tracking into a single unified dashboard, companies eliminate disconnected spreadsheets and gain complete visibility into forward liquidity requirements.'
    ],
    keyTakeaways: [
      'Synchronize supplier milestone disbursements with certified customs clearance milestones.',
      'Negotiate early-payment vendor discounts while leveraging receivable advances to fund the gap.',
      'Maintain automated audit logs for comprehensive compliance and simplified year-end tax reporting.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Switching our cross-border payment operations to Nexora eliminated four separate banking portals. We pay our suppliers in Japan, Germany, and Mexico with total fee transparency and real-time tracking.",
    author: 'David Sterling',
    title: 'Chief Financial Officer',
    company: 'Sterling Pacific Components LLC',
    location: 'Chicago, Illinois',
    metric: '68%',
    metricLabel: 'Reduction in wire transfer fees',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    quote: "Invoice financing through Nexora provided our distribution business the liquidity cushion needed to accept high-volume retailer contracts without taking on dilutive venture capital or restrictive bank debt.",
    author: 'Amara Patel',
    title: 'Founder & CEO',
    company: 'Horizon Wholesale Goods Inc',
    location: 'Austin, Texas',
    metric: '$1.4M',
    metricLabel: 'Working capital unlocked in 90 days',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    quote: "The unified financial dashboard allows our treasury team to manage domestic Same-Day ACH and European SEPA wires side-by-side with dual-authorization controls that satisfy our institutional audit requirements.",
    author: 'Robert K. Meyer',
    title: 'VP of Treasury Operations',
    company: 'Vanguard Industrial Supply Corp',
    location: 'Atlanta, Georgia',
    metric: '4.8x',
    metricLabel: 'Faster invoice settlement cycles',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Platform & Operations',
    question: 'How does the platform work?',
    answer: 'Nexora Global Finance is a unified business financial technology platform that connects US enterprises to domestic clearing networks (Fedwire, Same-Day ACH) and global payment rails across 140+ countries. Through an institutional web dashboard and API, your finance team can initiate single or batch payments, hold multi-currency balances, track transaction lifecycles in real time, and unlock working capital through integrated invoice financing.'
  },
  {
    id: 'faq-2',
    category: 'Eligibility & Onboarding',
    question: 'Which businesses can use the platform?',
    answer: 'The platform is engineered for US-registered legal entities, including corporations (C-Corp, S-Corp), LLCs, partnerships, and authorized cross-border subsidiaries. Typical clients include importers, exporters, wholesale distributors, enterprise SaaS providers, manufacturing entities, and multi-entity holding firms with minimum monthly payment volumes of $25,000 USD or outstanding commercial invoices.'
  },
  {
    id: 'faq-3',
    category: 'Global Payments',
    question: 'How do international payments work?',
    answer: 'When you initiate an international transfer, Nexora routes the payment via the most efficient available network—prioritizing direct local clearing systems (such as SEPA in the EU, Faster Payments in the UK, SPEI in Mexico, or PIX in Brazil) before falling back to SWIFT. This reduces intermediary correspondent banking fees and delivers real-time milestone tracking from clearance to beneficiary deposit.'
  },
  {
    id: 'faq-4',
    category: 'Invoice Financing',
    question: 'What is invoice financing?',
    answer: 'Invoice financing (accounts receivable factoring) allows businesses to unlock up to 85% to 90% of the cash tied up in verified, unpaid commercial invoices issued to creditworthy business debtors. Instead of waiting 30, 60, or 90 days for customer settlement, your business receives upfront working capital. Once the buyer pays the invoice balance, the remaining funds are disbursed to you minus a transparent discount fee.'
  },
  {
    id: 'faq-5',
    category: 'Pricing & Transparent Fees',
    question: 'What fees should businesses expect?',
    answer: 'We operate on a strictly transparent pricing model with zero hidden monthly maintenance surcharges. Domestic Same-Day ACH begins at $1.50 per transaction, Fedwire transfers at $12.00, and cross-border disbursements feature wholesale mid-market foreign exchange rates with transparent margin markups as low as 0.25% to 0.60%. Invoice financing discount fees typically range between 1.5% and 2.5% per 30-day period depending on buyer credit profile.'
  },
  {
    id: 'faq-6',
    category: 'Security & Compliance',
    question: 'How are business accounts protected?',
    answer: 'Accounts are safeguarded by bank-grade 256-bit AES encryption in transit and at rest, multi-factor hardware authentication (WebAuthn/TOTP), granular role-based access control (RBAC), and dual-custody authorization rules requiring two distinct officer approvals for high-value disbursements. All client funds are held in segregated accounts at regulated US partner depository institutions.'
  },
  {
    id: 'faq-7',
    category: 'Support & Sales',
    question: 'How can I contact the sales team?',
    answer: 'Our dedicated US enterprise sales and treasury advisory team can be reached directly through the contact form on this website, via email at sales@nexoraglobal.example.com, or by initiating a direct inquiry through our interactive WhatsApp business line. We provide tailored product demonstrations, volume-based pricing assessments, and rapid KYB onboarding guidance.'
  }
];

export const TRUST_METRICS = [
  { value: '$4.2B+', label: 'Volume Evaluated', sub: 'Across commercial corridors' },
  { value: '140+', label: 'Global Corridors', sub: 'Local clearing & SWIFT' },
  { value: '99.99%', label: 'Platform Uptime', sub: 'High-availability architecture' },
  { value: '50 States', label: 'US Coverage', sub: 'Fedwire & Same-Day ACH' }
];

export const PARTNER_LOGOS = [
  { name: 'SWIFT Network', label: 'SWIFT Partner Rail' },
  { name: 'Fedwire Service', label: 'Federal Reserve Wire' },
  { name: 'NACHA Network', label: 'Same-Day ACH Qualified' },
  { name: 'SEPA Clearing', label: 'Single Euro Payments Area' },
  { name: 'Plaid Sync', label: 'Verified Commercial Feeds' },
  { name: 'SOC 2 Ready', label: 'Institutional Security' }
];
