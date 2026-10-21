/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GlobalPaymentsSection } from './components/GlobalPaymentsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { GlobalCoverageSection } from './components/GlobalCoverageSection';
import { ProcessSection } from './components/ProcessSection';
import { AdvancedFeaturesSection } from './components/AdvancedFeaturesSection';
import { InteractiveDashboardSection } from './components/InteractiveDashboardSection';
import { InvoiceFinancingSection } from './components/InvoiceFinancingSection';
import { TrustAndMetricsSection } from './components/TrustAndMetricsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { NewsletterSection } from './components/NewsletterSection';
import { SocialAndContactBar } from './components/SocialAndContactBar';
import { Footer } from './components/Footer';

import { 
  TransactionDetailModal, 
  ArticleReaderModal, 
  LegalDocumentModal, 
  GetStartedModal 
} from './components/Modals';

import { Transaction, Article } from './types';
import { SAMPLE_TRANSACTIONS } from './data/mockData';

export default function App() {
  // Modal states
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [legalDocType, setLegalDocType] = useState<'privacy' | 'terms' | 'cookies' | 'disclosures' | null>(null);
  const [getStartedOpen, setGetStartedOpen] = useState<boolean>(false);
  const [contactInitialService, setContactInitialService] = useState<string>('Global Payments');

  // Navigation handlers
  const handleOpenSalesModal = (serviceName?: string) => {
    if (serviceName) {
      setContactInitialService(serviceName);
    }
    const contactElem = document.getElementById('contact-form') || document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreFeatures = () => {
    const featuresElem = document.getElementById('features');
    if (featuresElem) {
      featuresElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreFinancing = () => {
    const financingElem = document.getElementById('invoice-financing');
    if (financingElem) {
      financingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNewsletter = () => {
    const newsletterElem = document.getElementById('newsletter');
    if (newsletterElem) {
      newsletterElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscussFinancingFromCard = (amount?: number) => {
    setContactInitialService('Invoice Financing');
    const contactElem = document.getElementById('contact-form') || document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTransactionById = (txId: string) => {
    const found = SAMPLE_TRANSACTIONS.find((t) => t.id === txId);
    if (found) {
      setSelectedTx(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#071426] text-slate-100 flex flex-col font-sans selection:bg-[#36D6F5] selection:text-[#071426]">
      {/* 2. Header and Navigation */}
      <Navbar
        onOpenSalesModal={() => handleOpenSalesModal()}
        onOpenGetStarted={() => setGetStartedOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Section */}
        <HeroSection
          onOpenSalesModal={() => handleOpenSalesModal('Global Payments')}
          onExploreFeatures={handleExploreFeatures}
          onSelectTransaction={handleSelectTransactionById}
        />

        {/* 4. Global Payments and Transactions */}
        <GlobalPaymentsSection
          onSelectTransaction={(tx) => setSelectedTx(tx)}
          onInitiateTransfer={() => setGetStartedOpen(true)}
        />

        {/* 5. Benefits Section — Why Choose Us? */}
        <BenefitsSection
          onOpenSalesModal={() => handleOpenSalesModal('Enterprise Benefits')}
        />

        {/* 6. Supported Countries and Currencies (Interactive Map & Calculator) */}
        <GlobalCoverageSection
          onOpenSalesModal={() => handleOpenSalesModal('Corridor Coverage')}
        />

        {/* 7. How It Works — Three-Step Process */}
        <ProcessSection
          onGetStarted={() => setGetStartedOpen(true)}
        />

        {/* 8. Advanced Features Section */}
        <AdvancedFeaturesSection
          onOpenSalesModal={(feat) => handleOpenSalesModal(feat)}
          onExploreFinancing={handleExploreFinancing}
        />

        {/* 9. Interactive Financial Dashboard Preview */}
        <InteractiveDashboardSection
          onSelectTransaction={(tx) => setSelectedTx(tx)}
          onOpenSalesModal={() => handleOpenSalesModal('Full Dashboard Access')}
        />

        {/* 10. Invoice Financing / Factoring Section */}
        <InvoiceFinancingSection
          onDiscussFinancing={handleDiscussFinancingFromCard}
        />

        {/* 11. Statistics and Trust Section */}
        <TrustAndMetricsSection />

        {/* 12. Testimonials and Client Logos */}
        <TestimonialsSection />

        {/* 13. Insights and Blog Section */}
        <InsightsSection
          onReadArticle={(art) => setSelectedArticle(art)}
        />

        {/* 14. Contact and Sales Conversion Section */}
        <ContactSection
          initialService={contactInitialService}
        />

        {/* 15. FAQ Section */}
        <FAQSection
          onOpenSalesModal={() => handleOpenSalesModal('General Consultation')}
        />

        {/* 16. Newsletter Subscription */}
        <NewsletterSection />
      </main>

      {/* 17. Social Media and Floating Contact Action */}
      <SocialAndContactBar
        onScrollToNewsletter={handleScrollToNewsletter}
        onOpenSalesModal={() => handleOpenSalesModal('WhatsApp Inquiry')}
      />

      {/* 18. Footer */}
      <Footer
        onOpenLegalModal={(type) => setLegalDocType(type)}
        onOpenSalesModal={() => handleOpenSalesModal()}
      />

      {/* Interactive Modals */}
      <TransactionDetailModal
        transaction={selectedTx}
        onClose={() => setSelectedTx(null)}
      />

      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenSalesModal={() => handleOpenSalesModal('Insights Follow-up')}
      />

      <LegalDocumentModal
        docType={legalDocType}
        onClose={() => setLegalDocType(null)}
      />

      <GetStartedModal
        isOpen={getStartedOpen}
        onClose={() => setGetStartedOpen(false)}
        onOpenSalesModal={() => handleOpenSalesModal('Accelerated Onboarding')}
      />
    </div>
  );
}
