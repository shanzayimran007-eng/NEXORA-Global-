import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Building, 
  Briefcase, 
  Sparkles,
  ArrowRight,
  Clock,
  Copy
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [fullName, setFullName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState('Importer / Exporter');
  const [serviceInterest, setServiceInterest] = useState(initialService || 'Global Payments');
  const [message, setMessage] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ referenceId: string; timestamp: string } | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid corporate email';
    } else if (businessEmail.endsWith('@gmail.com') || businessEmail.endsWith('@yahoo.com') || businessEmail.endsWith('@hotmail.com')) {
      newErrors.businessEmail = 'Please provide your corporate or business domain email';
    }
    if (!companyName.trim()) newErrors.companyName = 'Company Name is required';
    if (!message.trim() || message.trim().length < 15) {
      newErrors.message = 'Please provide a brief message describing your monthly volume or goals (min 15 chars)';
    }
    if (!privacyConsent) {
      newErrors.privacyConsent = 'You must acknowledge the privacy disclosure to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      const generatedRef = `NX-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedData({
        referenceId: generatedRef,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + ' EST'
      });
      setIsSubmitting(false);
    }, 900);
  };

  const copyReference = () => {
    if (submittedData) {
      navigator.clipboard.writeText(submittedData.referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFullName('');
    setBusinessEmail('');
    setCompanyName('');
    setMessage('');
    setPrivacyConsent(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#071426] relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#0B1F3A] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#36D6F5]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with exact requested text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Connect with US Treasury Advisors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready to Move Your <span className="cyan-gradient-text">Business Forward?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us about your business and discover the right financial workflow for your needs.
          </p>

          {/* Quick Action Channels */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-semibold">
            <a
              href="#contact-form"
              className="px-4 py-2 rounded-xl bg-[#0B1F3A] border border-[#36D6F5]/40 text-[#36D6F5] flex items-center gap-2 hover:bg-[#071426] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Sales</span>
            </a>
            <a
              href="#contact-form"
              className="px-4 py-2 rounded-xl bg-[#0B1F3A] border border-slate-700 text-slate-300 flex items-center gap-2 hover:border-[#36D6F5]/40 transition-colors"
            >
              <Briefcase className="w-4 h-4 text-[#36D6F5]" />
              <span>Request a Quote</span>
            </a>
            <a
              href="mailto:sales@nexoraglobal.example.com?subject=Enterprise%20Treasury%20Inquiry"
              className="px-4 py-2 rounded-xl bg-[#0B1F3A] border border-slate-700 text-slate-300 flex items-center gap-2 hover:border-[#36D6F5]/40 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#36D6F5]" />
              <span>Send an Email</span>
            </a>
          </div>
        </div>

        {/* Contact Container */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Institutional Value Proposition & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-7 border border-[#36D6F5]/20 space-y-5">
              <h3 className="text-xl font-bold text-white">
                What to Expect Upon Submission
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#36D6F5]/20 text-[#36D6F5] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Same-Day Dedicated Account Executive</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      A US-based financial specialist reviews your cross-border volume and provides tailored rate tiers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#36D6F5]/20 text-[#36D6F5] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Custom Corridor & FX Spreads</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Receive an itemized fee quote showing exact wholesale FX savings compared to standard commercial banks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#36D6F5]/20 text-[#36D6F5] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Rapid Digital KYB Verification</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Streamlined corporate verification gets your US operating accounts active without paperwork delays.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-[#36D6F5]" />
                  <span>Support Hours: Mon – Fri, 8:00 AM – 8:00 PM EST</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Confidential NDA & Non-Disclosure Compliant</span>
                </div>
              </div>
            </div>

            {/* Direct contact info card */}
            <div className="p-6 rounded-2xl bg-[#0B1F3A]/60 border border-slate-800 space-y-2 text-xs">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Direct Inquiries</span>
              <p className="text-white font-mono font-semibold">sales@nexoraglobal.example.com</p>
              <p className="text-slate-400 font-mono">+1 (800) 555-0199 (US Commercial Line)</p>
            </div>
          </div>

          {/* Right Column: Full Functional Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-7 sm:p-9 border border-[#36D6F5]/25 shadow-2xl relative">
              
              {submittedData ? (
                /* Success State */
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                      Thank you, <strong className="text-white">{fullName}</strong>. Your commercial inquiry for <strong className="text-white">{companyName}</strong> has been assigned to our senior treasury advisory desk.
                    </p>
                  </div>

                  {/* Reference Ticket Box */}
                  <div className="bg-[#071426] p-4 rounded-2xl border border-[#36D6F5]/40 max-w-sm mx-auto flex items-center justify-between">
                    <div className="text-left">
                      <span className="text-[10px] text-slate-400 font-mono uppercase">Reference Ticket ID</span>
                      <div className="text-lg font-extrabold text-[#36D6F5] font-mono">{submittedData.referenceId}</div>
                      <span className="text-[10px] text-slate-500 font-mono">Logged at {submittedData.timestamp}</span>
                    </div>
                    <button
                      onClick={copyReference}
                      className="p-2 rounded-xl bg-[#0B1F3A] hover:bg-[#071426] border border-slate-700 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1"
                    >
                      {copiedRef ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedRef ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-400">
                    We typically respond to verified corporate inquiries within 2 to 4 business hours.
                  </p>

                  <button
                    onClick={resetForm}
                    className="cyan-gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Full Name <span className="text-[#36D6F5]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full bg-[#071426] border rounded-xl py-3 px-3.5 text-xs text-white placeholder-slate-500 focus:outline-none ${
                          errors.fullName ? 'border-red-500' : 'border-slate-700 focus:border-[#36D6F5]'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Business Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Corporate Email <span className="text-[#36D6F5]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@company.com"
                        value={businessEmail}
                        onChange={(e) => setBusinessEmail(e.target.value)}
                        className={`w-full bg-[#071426] border rounded-xl py-3 px-3.5 text-xs text-white placeholder-slate-500 focus:outline-none ${
                          errors.businessEmail ? 'border-red-500' : 'border-slate-700 focus:border-[#36D6F5]'
                        }`}
                      />
                      {errors.businessEmail && <p className="text-[11px] text-red-400 mt-1">{errors.businessEmail}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Company Name <span className="text-[#36D6F5]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vanguard Logistics LLC"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className={`w-full bg-[#071426] border rounded-xl py-3 px-3.5 text-xs text-white placeholder-slate-500 focus:outline-none ${
                          errors.companyName ? 'border-red-500' : 'border-slate-700 focus:border-[#36D6F5]'
                        }`}
                      />
                      {errors.companyName && <p className="text-[11px] text-red-400 mt-1">{errors.companyName}</p>}
                    </div>

                    {/* Business Type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Business Type
                      </label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full bg-[#071426] border border-slate-700 rounded-xl py-3 px-3.5 text-xs text-slate-200 focus:outline-none focus:border-[#36D6F5]"
                      >
                        <option value="Importer / Exporter">Importer / Exporter</option>
                        <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                        <option value="Technology & SaaS">Technology & SaaS</option>
                        <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                        <option value="Freight & Logistics">Freight & Logistics</option>
                        <option value="Multi-Entity Enterprise">Multi-Entity Enterprise</option>
                      </select>
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Primary Service of Interest
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        'Global Payments',
                        'Invoice Financing',
                        'FX & Hedging',
                        'Treasury API'
                      ].map((svc) => (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => setServiceInterest(svc)}
                          className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                            serviceInterest === svc
                              ? 'bg-[#36D6F5] text-[#071426] border-[#36D6F5] font-bold'
                              : 'bg-[#071426] text-slate-300 border-slate-700 hover:border-slate-500'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Estimated Monthly Volume & Requirements <span className="text-[#36D6F5]">*</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your primary payment corridors, monthly foreign exchange volumes, or outstanding invoice amounts..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full bg-[#071426] border rounded-xl py-3 px-3.5 text-xs text-white placeholder-slate-500 focus:outline-none ${
                        errors.message ? 'border-red-500' : 'border-slate-700 focus:border-[#36D6F5]'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="space-y-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="mt-1 accent-[#36D6F5] rounded"
                      />
                      <span className="text-xs text-slate-400 leading-snug">
                        I confirm that I represent a registered business entity and agree to the transmission of this data for commercial evaluation in accordance with the Privacy Policy.
                      </span>
                    </label>
                    {errors.privacyConsent && (
                      <p className="text-[11px] text-red-400">{errors.privacyConsent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cyan-gradient-btn py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#36D6F5]/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Secured Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Corporate Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-500 font-mono">
                    Protected by reCAPTCHA Enterprise • 256-bit TLS Transmission
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
