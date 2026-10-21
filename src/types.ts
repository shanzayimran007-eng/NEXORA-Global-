export type PaymentStatus = 'Completed' | 'Processing' | 'Pending' | 'Failed';

export type PaymentMethod = 'Fedwire' | 'Same-Day ACH' | 'SWIFT Wire' | 'Local Clearing' | 'SEPA' | 'BACS';

export interface Transaction {
  id: string;
  referenceNumber: string;
  recipient: string;
  recipientCompany: string;
  country: string;
  countryCode: string;
  flag: string;
  currency: string;
  amountUSD: number;
  localAmount: number;
  localCurrency: string;
  method: PaymentMethod;
  status: PaymentStatus;
  date: string;
  category: 'Vendor Payout' | 'Supply Chain' | 'Payroll' | 'Software / SaaS' | 'Tax & Duties';
  feeUSD: number;
  timeline: {
    stage: string;
    timestamp: string;
    completed: boolean;
    current?: boolean;
    description: string;
  }[];
}

export interface InvoiceRecord {
  id: string;
  invoiceNumber: string;
  buyer: string;
  buyerCountry: string;
  invoiceAmount: number;
  issueDate: string;
  dueDate: string;
  terms: 'Net-30' | 'Net-45' | 'Net-60' | 'Net-90';
  status: 'Approved for Advance' | 'Funded' | 'Under Review' | 'Settled';
  advanceRatePercent: number;
  advanceAmount: number;
  feePercent: number;
  daysRemaining: number;
}

export interface Corridor {
  country: string;
  currency: string;
  flag: string;
  rateToUSD: number;
  popularPair: string;
  methods: string[];
  estimatedDelivery: string;
  sampleFeeUSD: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  location: string;
  metric: string;
  metricLabel: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
