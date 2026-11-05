import React, { useState } from 'react';
import { SAMPLE_TESTIMONIALS } from '../data/scalexData';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldAlert } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? SAMPLE_TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === SAMPLE_TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  const current = SAMPLE_TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#070A14] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-3.5 py-1 mb-4">
            Client Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            What Our Clients{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Say.
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed font-normal text-balance">
            Real outcomes from forward-thinking businesses that partnered with ScaleX to modernize their systems and accelerate growth.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0B0F19]/90 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative shadow-scalex-glow">
            
            {/* Top quote icon & placeholder indicator */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 text-white flex items-center justify-center shadow-scalex-glow">
                <Quote className="w-6 h-6" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  Sample Testimonial Placeholder
                </span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Main Quote Text */}
            <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-8">
              "{current.quote}"
            </blockquote>

            {/* Metric pill */}
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                Key Result: {current.metrics}
              </span>
            </div>

            {/* Client Info & Carousel Navigation Controls */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-base font-bold text-white">
                  {current.clientName}
                </div>
                <div className="text-xs text-slate-400">
                  {current.clientRole} · {current.companyName} ({current.companyIndustry})
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-slate-400 px-2">
                  0{currentIndex + 1} / 0{SAMPLE_TESTIMONIALS.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Compliance Notice */}
          <div className="mt-6 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
            <span>Sample placeholder testimonials for presentation. Actual verified reviews will be published upon client consent.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
