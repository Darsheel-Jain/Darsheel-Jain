import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsappNumber }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const url = getWhatsAppUrl(whatsappNumber, DEFAULT_WHATSAPP_MESSAGE);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Interactive Floating Quick Tooltip / Bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-200/90 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
          <div className="text-xs leading-snug">
            <span className="font-bold text-slate-900 block mb-0.5">ScaleX Direct Desk</span>
            Chat with our growth specialists directly on WhatsApp!
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 -mt-1 -mr-1 transition-colors"
            aria-label="Close message preview"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
        aria-label="Direct WhatsApp Chat with ScaleX"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-25 group-hover:opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </button>
    </div>
  );
};
