import React from 'react';
import { TARGET_AUDIENCES } from '../data/scalexData';
import { Rocket, Store, Building2, ShoppingBag, Briefcase, Globe2, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-5 h-5" />,
  Store: <Store className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Globe2: <Globe2 className="w-5 h-5" />,
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-24 bg-[#070A14] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-3.5 py-1 mb-4">
            About ScaleX
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            We Turn Business Ambitions Into{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Growth.
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal text-balance">
            ScaleX is a digital growth agency focused on helping businesses unlock their full potential. We build powerful digital experiences, automate repetitive business operations, and create advertising strategies designed to connect brands with their ideal customers.
          </p>
        </div>

        {/* Mission Statement Box */}
        <div className="relative mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0B0F19] via-blue-950/40 to-purple-950/40 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Subtle brand glow in card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs uppercase font-bold tracking-widest text-cyan-400">Our Core Mission</span>
                <p className="text-xl sm:text-2xl font-bold text-white mt-2 leading-relaxed">
                  "Help businesses save time, strengthen their online presence, and scale with smarter technology."
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    Zero Fluff Strategy
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    Bespoke High-Code Solutions
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    Measurable Commercial ROI
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex items-center justify-center p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-scalex-glow">
                <img
                  src="/assets/aistudio/scalex_d4beeebd.jpeg"
                  alt="ScaleX Emblem"
                  className="w-20 h-20 object-cover rounded-xl shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-white">
              Tailored For Modern Businesses Ready to Scale
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Whether you are an ambitious startup or an established enterprise, our systems adapt to your growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_AUDIENCES.map((item, index) => (
              <div
                key={index}
                className="bg-[#0B0F19]/80 rounded-2xl p-6 border border-white/10 shadow-lg hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                  {iconMap[item.icon] || <Globe2 className="w-5 h-5" />}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
