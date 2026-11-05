import React, { useState } from 'react';
import { AgencyConfig, FounderProfile } from '../types';
import { X, Save, RotateCcw, Check, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

interface AgencyConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AgencyConfig;
  onSaveConfig: (newConfig: AgencyConfig) => void;
  founders: FounderProfile[];
  onSaveFounders: (newFounders: FounderProfile[]) => void;
  onResetDefaults: () => void;
}

export const AgencyConfigModal: React.FC<AgencyConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  founders,
  onSaveFounders,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'contact' | 'founders'>('contact');
  const [tempConfig, setTempConfig] = useState<AgencyConfig>({ ...config });
  const [tempFounders, setTempFounders] = useState<FounderProfile[]>(JSON.parse(JSON.stringify(founders)));
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveConfig(tempConfig);
    onSaveFounders(tempFounders);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleFounderChange = (id: string, field: keyof FounderProfile, value: string) => {
    setTempFounders((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B0F19] rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10 overflow-hidden text-slate-200">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white flex items-center justify-center shadow-scalex-glow">
              <Sparkles className="w-5 h-5 text-cyan-200" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">ScaleX Agency Customizer</h3>
              <p className="text-xs text-slate-400">Configure your business contact details & founder profiles</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 pt-4 border-b border-white/10 flex items-center gap-6 text-xs font-bold">
          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'contact'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Business Contact & WhatsApp
          </button>
          <button
            onClick={() => setActiveTab('founders')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'founders'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Founders & Leadership Cards
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {activeTab === 'contact' ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  International WhatsApp Number (digits only, no + or spaces)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 15550192834"
                  value={tempConfig.whatsappNumber}
                  onChange={(e) => setTempConfig({ ...tempConfig, whatsappNumber: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white focus:outline-none focus:border-cyan-400"
                />
                <span className="text-[11px] text-slate-400 block mt-1">
                  Preview wa.me link: <code className="text-emerald-400 font-mono">https://wa.me/{tempConfig.whatsappNumber || '[NUMBER]'}</code>
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                  Display WhatsApp Label (Shown on website)
                </label>
                <input
                  type="text"
                  placeholder="e.g. +1 (555) 019-2834 or [YOUR WHATSAPP NUMBER]"
                  value={tempConfig.displayWhatsapp}
                  onChange={(e) => setTempConfig({ ...tempConfig, displayWhatsapp: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  Business Email
                </label>
                <input
                  type="text"
                  placeholder="e.g. contact@scalex.agency or [YOUR BUSINESS EMAIL]"
                  value={tempConfig.email}
                  onChange={(e) => setTempConfig({ ...tempConfig, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  Business Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. New York, USA or [YOUR BUSINESS LOCATION]"
                  value={tempConfig.location}
                  onChange={(e) => setTempConfig({ ...tempConfig, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {tempFounders.map((founder, i) => (
                <div key={founder.id} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 uppercase">
                      {founder.role}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Profile 0{i + 1}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={founder.name}
                        onChange={(e) => handleFounderChange(founder.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/[0.04] text-white text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        Position / Title
                      </label>
                      <input
                        type="text"
                        value={founder.title}
                        onChange={(e) => handleFounderChange(founder.id, 'title', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/[0.04] text-white text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      Short Professional Biography
                    </label>
                    <textarea
                      rows={2}
                      value={founder.bio}
                      onChange={(e) => handleFounderChange(founder.id, 'bio', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/[0.04] text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="text"
                      value={founder.linkedinUrl}
                      onChange={(e) => handleFounderChange(founder.id, 'linkedinUrl', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/[0.04] text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <button
            onClick={() => {
              if (confirm('Reset contact details and founder profiles to default placeholder state?')) {
                onResetDefaults();
                onClose();
              }
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Placeholders</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
