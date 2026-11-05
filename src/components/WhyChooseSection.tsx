import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/scalexData';
import { Target, Layers, Lightbulb, Zap, MessageSquare, Compass, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
};

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#070A14] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Supporting Text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-3.5 py-1 mb-4">
            The ScaleX Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Why Businesses Choose{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              ScaleX.
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed font-normal text-balance">
            We don't believe in one-size-fits-all solutions. Every business has different goals, challenges, and opportunities. That's why we focus on understanding your business before recommending the right digital solutions.
          </p>
        </div>

        {/* 6 Elegant Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#0B0F19]/80 rounded-2xl p-8 border border-white/10 shadow-lg hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shadow-sm">
                    {iconMap[item.icon] || <Target className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    0{item.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-cyan-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{item.benefit}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
