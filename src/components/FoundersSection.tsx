import React from 'react';
import { FounderProfile } from '../types';
import { Linkedin, Edit3, Shield } from 'lucide-react';

interface FoundersSectionProps {
  founders: FounderProfile[];
  onOpenEditModal: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({
  founders,
  onOpenEditModal,
}) => {
  return (
    <section className="py-24 bg-[#070A14] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-3.5 py-1 mb-4">
            Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Meet the People Behind{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              ScaleX.
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed font-normal text-balance">
            Our leadership team blends technical engineering, AI systems architecture, and data-backed digital marketing.
          </p>

          {/* Quick Edit Action for Owner */}
          <div className="mt-4 flex items-center justify-center">
            <button
              onClick={onOpenEditModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-cyan-300 bg-white/5 hover:bg-white/10 border border-cyan-500/30 rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Customize Leadership Info</span>
            </button>
          </div>
        </div>

        {/* 3 Founder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <div
              key={founder.id}
              className="bg-[#0B0F19]/90 rounded-2xl p-8 border border-white/10 shadow-xl hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Professional Photo Placeholder */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 border border-white/10 flex items-center justify-center shadow-inner relative mx-auto group-hover:border-cyan-500/40 transition-colors">
                    {founder.photoUrl ? (
                      <img
                        src={founder.photoUrl}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-2">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center mx-auto mb-1 text-sm border border-cyan-500/30">
                          {founder.name.includes('[') ? `0${idx + 1}` : founder.name.charAt(0)}
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono block">
                          [Photo Placeholder]
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Role Tag */}
                  <div className="text-center mt-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-cyan-300 bg-cyan-950/60 px-3 py-0.5 rounded-full border border-cyan-500/30 inline-block">
                      {founder.role}
                    </span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400 mt-1">
                    {founder.title}
                  </p>
                </div>

                {/* Short Professional Biography */}
                <p className="text-slate-300 text-sm leading-relaxed text-center font-normal mb-6">
                  {founder.bio}
                </p>
              </div>

              {/* LinkedIn Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-center">
                <a
                  href={founder.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Placeholder Note Banner */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <Shield className="w-3.5 h-3.5 text-slate-500" />
          <span>Placeholders can be customized directly using the "Customize Leadership Info" button above.</span>
        </div>

      </div>
    </section>
  );
};
