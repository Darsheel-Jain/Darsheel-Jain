import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/scalexData';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 bg-[#05070E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-3.5 py-1 mb-4">
            Structured Execution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Our Working{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Process.
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed font-normal text-balance">
            A battle-tested 4-step framework engineered to take your business from initial ambition to predictable digital growth.
          </p>
        </div>

        {/* 4-Step Interactive Timeline Header Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-950/50 border-cyan-400 shadow-scalex-glow ring-2 ring-cyan-400/30'
                    : 'bg-[#0B0F19]/80 border-white/10 hover:border-white/20 hover:bg-[#0F172A]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected
                        ? 'bg-cyan-400 text-slate-950'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    Step {step.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </span>
                </div>
                <div
                  className={`text-base font-bold transition-colors ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {step.title}
                </div>
                <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                  {step.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="bg-gradient-to-br from-[#0B0F19] via-[#090D1A] to-blue-950/60 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3">
                Phase {PROCESS_STEPS[activeStep].number} · {PROCESS_STEPS[activeStep].duration}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Step {PROCESS_STEPS[activeStep].number} – {PROCESS_STEPS[activeStep].title}
              </h3>
              <p className="text-lg text-slate-300 font-normal leading-relaxed mb-6">
                "{PROCESS_STEPS[activeStep].description}"
              </p>

              <div className="space-y-2.5">
                <span className="text-xs uppercase font-bold tracking-wider text-cyan-300 block mb-2">
                  Key Milestones & Deliverables:
                </span>
                {PROCESS_STEPS[activeStep].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center p-0.5 shadow-scalex-glow">
                    <img
                      src="/assets/aistudio/scalex_d4beeebd.jpeg"
                      alt="ScaleX Process"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Quality Assurance & Sprints</h4>
                    <p className="text-xs text-slate-400">ScaleX Precision Guarantee</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Every step is backed by agile weekly check-ins, transparent documentation, and real-time client collaboration dashboards.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-white cursor-pointer"
                >
                  ← Previous Step
                </button>
                <span className="text-slate-400 font-mono">
                  {activeStep + 1} of {PROCESS_STEPS.length}
                </span>
                <button
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-white font-bold cursor-pointer"
                >
                  Next Step →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
