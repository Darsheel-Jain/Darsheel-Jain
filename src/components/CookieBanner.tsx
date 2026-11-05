import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('scalex_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('scalex_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem('scalex_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-md bg-[#0B0F19]/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/15 text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-xs leading-relaxed">
          <span className="font-bold text-white block mb-1">Cookie & Privacy Preferences</span>
          We use cookies to analyze web traffic and deliver a personalized agency experience.{' '}
          <button
            onClick={onOpenPrivacy}
            className="text-cyan-400 underline font-semibold hover:text-cyan-300 cursor-pointer"
          >
            Review Policy
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t border-white/10">
        <button
          onClick={decline}
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          Essential Only
        </button>
        <button
          onClick={accept}
          className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-colors shadow-md cursor-pointer"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
