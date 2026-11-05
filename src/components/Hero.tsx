import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Zap, TrendingUp, Cpu, Globe, ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';

interface HeroProps {
  onBookConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookConsultation, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'growth' | 'automation'>('growth');

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#05070E]">
      {/* Background ambient lighting matching the ScaleX cyan-blue-purple identity */}
      <div className="absolute top-1/4 right-10 -z-10 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline kicker matching brand identity */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 rounded-full px-4 py-1.5 w-fit mb-6 shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]" />
              <span>We Build · We Automate · We Scale</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6 text-balance">
              Your Business Has Potential.{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Let's Scale It.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl text-balance">
              At <strong className="font-semibold text-white">ScaleX</strong>, we combine powerful websites, intelligent AI automation, and strategic advertising to help businesses operate smarter, attract more customers, and grow faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onBookConsultation}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white rounded-xl shadow-scalex-glow transition-all duration-200 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 hover:shadow-scalex-hover active:scale-[0.98] cursor-pointer border border-white/20"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-cyan-200" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl shadow-sm transition-all duration-200 hover:border-white/20 hover:text-white cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Three Trust-Focused Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Modern Digital Solutions
                </span>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  AI-Powered Automation
                </span>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Growth-Focused Strategies
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Digital Growth & AI Automation Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer subtle decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition duration-1000" />

            <div className="relative bg-[#0B0F19]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-black/80">
              
              {/* Header Bar of the Growth Engine Visual */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-scalex-glow flex items-center justify-center">
                    <img
                      src="/assets/aistudio/scalex_d4beeebd.jpeg"
                      alt="ScaleX Growth Engine"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      ScaleX Engine
                      <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00D2FF]" />
                    </div>
                    <div className="text-xs text-slate-400">Autonomous Scaling Pipeline</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setActiveTab('growth')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activeTab === 'growth'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Growth
                  </button>
                  <button
                    onClick={() => setActiveTab('automation')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activeTab === 'automation'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    AI System
                  </button>
                </div>
              </div>

              {/* Dynamic Engine Visualizer */}
              {activeTab === 'growth' ? (
                <div className="space-y-4">
                  {/* Metric 1 */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-400">Inbound Lead Velocity</span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                        +184% MoM
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-white tabular-nums">482</span>
                      <span className="text-xs text-slate-400">Qualified Bookings / mo</span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-2 bg-slate-800 rounded-full mt-3 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full w-[82%]" />
                    </div>
                  </div>

                  {/* Two Column Submetrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] font-medium text-slate-400">Ad Return on Spend</div>
                      <div className="text-xl font-bold text-white mt-1 tabular-nums">4.6x</div>
                      <div className="text-[11px] text-cyan-400 font-medium mt-0.5">Meta & Google</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] font-medium text-slate-400">Response Latency</div>
                      <div className="text-xl font-bold text-white mt-1 tabular-nums">28s</div>
                      <div className="text-[11px] text-purple-400 font-medium mt-0.5">24/7 AI Reception</div>
                    </div>
                  </div>

                  {/* Operational comparison bar */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/80 to-purple-950/80 border border-cyan-500/20 text-white">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        Autonomous Lead Routing
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">Real-Time Active</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Syncing website visitors directly into qualified calendar reservations & CRM pipelines.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* AI Automation Architecture Flow */}
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-blue-500/20 text-cyan-400 border border-blue-500/30 flex items-center justify-center font-bold text-[10px]">
                          01
                        </div>
                        <span className="font-semibold text-slate-200">Lead Intake & AI Chatbot</span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-medium">Instant Response</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-bold text-[10px]">
                          02
                        </div>
                        <span className="font-semibold text-slate-200">Automated Qualification & Follow-up</span>
                      </div>
                      <span className="text-[11px] text-indigo-300 font-medium">100% Automated</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-[10px]">
                          03
                        </div>
                        <span className="font-semibold text-slate-200">CRM & Calendar Direct Booking</span>
                      </div>
                      <span className="text-[11px] text-cyan-400 font-medium">Zero Drop-Off</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/25 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-cyan-200">Weekly Labor Hours Saved</div>
                      <div className="text-[11px] text-cyan-400/80">Per sales & support operations team</div>
                    </div>
                    <div className="text-3xl font-black text-cyan-400 tabular-nums">42 hrs</div>
                  </div>
                </div>
              )}

              {/* Live Status Footer */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  Enterprise Grade Security & Compliance
                </span>
                <span
                  className="text-cyan-400 font-bold cursor-pointer hover:underline"
                  onClick={onBookConsultation}
                >
                  Request Demo →
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
