import React from 'react';
import { SERVICES } from '../data/scalexData';
import { ServiceItem } from '../types';
import { Globe, Cpu, Palette, TrendingUp, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ServicesSectionProps {
  whatsappNumber: string;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

const iconComponents: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  whatsappNumber,
  onSelectServiceForContact,
}) => {
  const handleServiceCta = (service: ServiceItem, mode: 'contact' | 'whatsapp') => {
    if (mode === 'whatsapp') {
      const url = getWhatsAppUrl(whatsappNumber, service.whatsappMessage);
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      onSelectServiceForContact(service.title);
    }
  };

  return (
    <section id="services" className="py-24 bg-[#05070E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-3.5 py-1 mb-4">
            Our Core Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Comprehensive Growth Capabilities{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Built to Scale.
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 font-normal leading-relaxed text-balance">
            We do not sell isolated tactics. We engineer complete commercial digital systems that connect high-performing web experiences, autonomous AI operations, and high-converting advertising.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => {
            const isBlueTheme = index % 2 === 0;
            return (
              <div
                key={service.id}
                className="bg-[#0B0F19]/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl hover:shadow-scalex-hover hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle card top gradient accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 transition-opacity ${
                    isBlueTheme
                      ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_12px_#00D2FF]'
                      : 'bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 shadow-[0_0_12px_#7C3AED]'
                  }`}
                />

                <div>
                  {/* Top Row: Service Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                      SERVICE {service.number}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${
                        isBlueTheme
                          ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/30'
                          : 'bg-purple-950/40 text-purple-400 border border-purple-500/30'
                      }`}
                    >
                      {iconComponents[service.iconName] || <Globe className="w-6 h-6" />}
                    </div>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-300 mb-4">
                    {service.headline}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-white/10">
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-3">
                      Included Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs Footer */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Primary CTA */}
                  <button
                    onClick={() => handleServiceCta(service, 'contact')}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 shadow-scalex-glow transition-all duration-200 cursor-pointer active:scale-[0.99] border border-white/20"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-200" />
                  </button>

                  {/* WhatsApp Quick Chat */}
                  <button
                    onClick={() => handleServiceCta(service, 'whatsapp')}
                    title="Discuss this service on WhatsApp"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-xl transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs sm:text-sm">WhatsApp</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
