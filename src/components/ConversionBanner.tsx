import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ConversionBannerProps {
  whatsappNumber: string;
  onStartProject: () => void;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({
  whatsappNumber,
  onStartProject,
}) => {
  const handleWhatsApp = () => {
    const url = getWhatsAppUrl(
      whatsappNumber,
      "Hello ScaleX! I'm ready to take my business to the next level and would like to start a project."
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#05070E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visually striking subtle blue-purple gradient card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-14 lg:p-16 border border-cyan-500/25 bg-gradient-to-r from-[#0B0F19] via-blue-950/60 to-purple-950/60 text-white shadow-scalex-glow">
          
          {/* Ambient light glow accents matching the logo */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-cyan-300 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/15 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Let's Build Something Exceptional</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance mb-6">
              Ready to Take Your Business to the{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                Next Level?
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl mx-auto text-balance">
              Whether you need a powerful website, intelligent automation, or advertising that reaches the right audience, ScaleX is ready to help you move forward.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 text-blue-700" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-900/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-emerald-400/30"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Chat With Us on WhatsApp</span>
              </button>
            </div>

            {/* Quick response commitment */}
            <p className="mt-8 text-xs text-slate-400">
              ⚡ Typical response time under 30 minutes during standard business hours.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
