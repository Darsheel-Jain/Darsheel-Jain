import React from 'react';
import { ScaleXLogo } from './ScaleXLogo';
import { AgencyConfig } from '../types';
import { SERVICES } from '../data/scalexData';
import { MessageCircle, Mail, MapPin, Linkedin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  config: AgencyConfig;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onSelectService: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onOpenPrivacy,
  onOpenTerms,
  onSelectService,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#03050A] text-white pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <ScaleXLogo size="lg" variant="dark" showTagline />
            <p className="mt-4 text-base font-bold text-cyan-400">
              "{config.tagline}"
            </p>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              A premium digital growth agency helping businesses unlock their full potential through high-performance websites, AI-powered automation, and high-ROI advertising campaigns.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ScaleX on LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={config.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ScaleX on Instagram"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-purple-500 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={config.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ScaleX on Facebook"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-5">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onSelectService(s.title);
                      scrollToSection('contact');
                    }}
                    className="text-left hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct WhatsApp & Business Details Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 block">WhatsApp Desk</span>
                  <a
                    href={getWhatsAppUrl(config.whatsappNumber, 'Hello ScaleX! I would like to inquire about your services.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors font-medium"
                  >
                    {config.displayWhatsapp}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 block">Business Email</span>
                  <a
                    href={`mailto:${config.email}`}
                    className="text-white hover:text-cyan-400 transition-colors font-medium break-all"
                  >
                    {config.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 block">Headquarters</span>
                  <span className="text-slate-300">{config.location}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ScaleX. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer ml-2 border border-white/10"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
