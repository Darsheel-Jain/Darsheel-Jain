import React, { useState, useEffect } from 'react';
import { ContactFormData, AgencyConfig } from '../types';
import { SERVICES } from '../data/scalexData';
import { MessageSquare, Phone, Mail, MapPin, CheckCircle, Send, AlertCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ContactSectionProps {
  config: AgencyConfig;
  preSelectedService?: string;
  onClearPreSelectedService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  config,
  preSelectedService = '',
  onClearPreSelectedService,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    whatsappNumber: '',
    serviceRequired: preSelectedService || 'Website Development',
    projectBudget: '$2,500 – $5,000',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preSelectedService }));
    }
  }, [preSelectedService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp Number is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message about your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onClearPreSelectedService) onClearPreSelectedService();
    }, 600);
  };

  const handleSendViaWhatsAppDirectly = () => {
    const formattedMsg = `*New ScaleX Project Inquiry*\n• *Name:* ${formData.fullName}\n• *Business:* ${formData.businessName}\n• *Email:* ${formData.email}\n• *WhatsApp:* ${formData.whatsappNumber}\n• *Service:* ${formData.serviceRequired}\n• *Budget:* ${formData.projectBudget}\n• *Details:* ${formData.message}`;
    const url = getWhatsAppUrl(config.whatsappNumber, formattedMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const budgetOptions = [
    'Under $1,500',
    '$1,500 – $3,000',
    '$3,000 – $6,000',
    '$6,000 – $12,000',
    '$12,000+',
    'Flexible / Undecided',
  ];

  return (
    <section id="contact" className="py-24 bg-[#070A14] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-3.5 py-1 mb-4">
            Initiate Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Let's Talk About Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Business.
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed font-normal text-balance">
            Fill out the form below for a customized digital growth plan, or connect directly through our official WhatsApp desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Benefits */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[#0B0F19]/90 rounded-3xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">
                Direct Contact Details
              </h3>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Direct WhatsApp
                    </span>
                    <a
                      href={getWhatsAppUrl(config.whatsappNumber, 'Hello ScaleX! I would like to speak directly with an advisor.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {config.displayWhatsapp}
                    </a>
                    <span className="text-xs text-emerald-400 block mt-0.5">
                      Fastest response · Average &lt; 30 mins
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/50 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Business Email
                    </span>
                    <a
                      href={`mailto:${config.email}`}
                      className="text-base font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {config.email}
                    </a>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Monitored 24/7 by client success team
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-950/50 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-base font-bold text-white block">
                      {config.location}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Serving national & international businesses
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed">
                  <strong className="font-bold text-cyan-300 block mb-1">What happens next?</strong>
                  We review your business requirements, prepare benchmark insights, and deliver a personalized scope and timeline within 24 hours.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 bg-[#0B0F19]/90 rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed mb-8">
                  Thank you, <strong className="font-semibold text-white">{formData.fullName}</strong>. A ScaleX growth director will review your details for <strong className="font-semibold text-white">{formData.businessName}</strong> and reply shortly.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsAppDirectly}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors cursor-pointer shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send to WhatsApp Now</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        email: '',
                        whatsappNumber: '',
                        serviceRequired: 'Website Development',
                        projectBudget: '$2,500 – $5,000',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Row 1: Full Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alexander Stone"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors bg-white/[0.03] ${
                        errors.fullName
                          ? 'border-red-400/80 bg-red-950/20 focus:border-red-400'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Business Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vanguard Logistics"
                      value={formData.businessName}
                      onChange={(e) => {
                        setFormData({ ...formData, businessName: e.target.value });
                        if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors bg-white/[0.03] ${
                        errors.businessName
                          ? 'border-red-400/80 bg-red-950/20 focus:border-red-400'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.businessName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email Address & WhatsApp Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alexander@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors bg-white/[0.03] ${
                        errors.email
                          ? 'border-red-400/80 bg-red-950/20 focus:border-red-400'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      WhatsApp Number <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.whatsappNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, whatsappNumber: e.target.value });
                        if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors bg-white/[0.03] ${
                        errors.whatsappNumber
                          ? 'border-red-400/80 bg-red-950/20 focus:border-red-400'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.whatsappNumber && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.whatsappNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Service Required & Project Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 text-sm text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none bg-[#0F172A] cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Complete ScaleX Growth Engine (All 4 Services)">
                        Complete ScaleX Growth Engine (All 4 Services)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Project Budget <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <select
                      value={formData.projectBudget}
                      onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 text-sm text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none bg-[#0F172A] cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    Message / Project Goals <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current challenges, objectives, and what you would like ScaleX to build, automate, or scale..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors bg-white/[0.03] ${
                      errors.message
                        ? 'border-red-400/80 bg-red-950/20 focus:border-red-400'
                        : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Form Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 shadow-scalex-glow transition-all duration-200 active:scale-[0.99] disabled:opacity-50 cursor-pointer border border-white/20"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Details...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4 text-cyan-200" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsAppDirectly}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-xl transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
