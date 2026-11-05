import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ProcessSection } from './components/ProcessSection';
import { FoundersSection } from './components/FoundersSection';
import { ConversionBanner } from './components/ConversionBanner';
import { ContactSection } from './components/ContactSection';
import { PaymentSection } from './components/PaymentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModals';
import { CookieBanner } from './components/CookieBanner';
import { AgencyConfigModal } from './components/AgencyConfigModal';
import { DEFAULT_CONFIG, INITIAL_FOUNDERS } from './data/scalexData';
import { AgencyConfig, FounderProfile } from './types';

export default function App() {
  // Agency business configuration state (persisted in localStorage)
  const [config, setConfig] = useState<AgencyConfig>(() => {
    try {
      const saved = localStorage.getItem('scalex_agency_config');
      return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
    } catch {
      return DEFAULT_CONFIG;
    }
  });

  // Founder profile cards state (persisted in localStorage)
  const [founders, setFounders] = useState<FounderProfile[]>(() => {
    try {
      const saved = localStorage.getItem('scalex_founders_data');
      return saved ? JSON.parse(saved) : INITIAL_FOUNDERS;
    } catch {
      return INITIAL_FOUNDERS;
    }
  });

  // UI Modals state
  const [preSelectedService, setPreSelectedService] = useState<string>('');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy',
  });
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Save config handler
  const handleSaveConfig = (newConfig: AgencyConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('scalex_agency_config', JSON.stringify(newConfig));
    } catch {
      // ignore storage errors
    }
  };

  // Save founders handler
  const handleSaveFounders = (newFounders: FounderProfile[]) => {
    setFounders(newFounders);
    try {
      localStorage.setItem('scalex_founders_data', JSON.stringify(newFounders));
    } catch {
      // ignore storage errors
    }
  };

  // Reset to default placeholders
  const handleResetDefaults = () => {
    setConfig(DEFAULT_CONFIG);
    setFounders(INITIAL_FOUNDERS);
    try {
      localStorage.removeItem('scalex_agency_config');
      localStorage.removeItem('scalex_founders_data');
    } catch {
      // ignore
    }
  };

  const scrollToContact = (service?: string) => {
    if (service) {
      setPreSelectedService(service);
    }
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070E] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenConsultation={() => scrollToContact()}
        onOpenSettings={() => setIsConfigModalOpen(true)}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onBookConsultation={() => scrollToContact()}
          onExploreServices={scrollToServices}
        />

        {/* 3. About ScaleX */}
        <AboutSection
          onLearnMore={scrollToServices}
        />

        {/* 4. Our Services */}
        <ServicesSection
          whatsappNumber={config.whatsappNumber}
          onSelectServiceForContact={(serviceTitle) => scrollToContact(serviceTitle)}
        />

        {/* 5. Why Choose ScaleX */}
        <WhyChooseSection />

        {/* 6. Our Working Process */}
        <ProcessSection />

        {/* 7. Founders and Leadership */}
        <FoundersSection
          founders={founders}
          onOpenEditModal={() => setIsConfigModalOpen(true)}
        />

        {/* 8. Client Conversion Banner */}
        <ConversionBanner
          whatsappNumber={config.whatsappNumber}
          onStartProject={() => scrollToContact()}
        />

        {/* 9. Contact Section */}
        <ContactSection
          config={config}
          preSelectedService={preSelectedService}
          onClearPreSelectedService={() => setPreSelectedService('')}
        />

        {/* 10. Payment Integration & Custom Quotation */}
        <PaymentSection
          onRequestQuote={() => scrollToContact('Custom Project Scope')}
        />

        {/* 11. Testimonials */}
        <TestimonialsSection />

        {/* 12. FAQ Section */}
        <FaqSection
          whatsappNumber={config.whatsappNumber}
        />
      </main>

      {/* 13. Footer */}
      <Footer
        config={config}
        onOpenPrivacy={() => setLegalModal({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModal({ isOpen: true, type: 'terms' })}
        onSelectService={(title) => scrollToContact(title)}
      />

      {/* 14. Direct WhatsApp Integration (Floating on every page) */}
      <FloatingWhatsApp
        whatsappNumber={config.whatsappNumber}
      />

      {/* 15. Legal Policies Modals */}
      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={() => setLegalModal({ isOpen: false, type: 'privacy' })}
      />

      {/* 16. Cookie Consent Banner */}
      <CookieBanner
        onOpenPrivacy={() => setLegalModal({ isOpen: true, type: 'privacy' })}
      />

      {/* 17. Agency Customization & Configuration Modal */}
      <AgencyConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
        founders={founders}
        onSaveFounders={handleSaveFounders}
        onResetDefaults={handleResetDefaults}
      />

    </div>
  );
}
