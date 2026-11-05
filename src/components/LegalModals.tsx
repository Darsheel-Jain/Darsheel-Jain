import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B0F19] rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-white/10 overflow-hidden text-slate-200">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-slate-400">ScaleX Digital Growth Agency · Effective 2026</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-300 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <h4 className="font-bold text-white text-base">1. Information We Collect</h4>
              <p>
                When you interact with ScaleX through our website contact forms, WhatsApp channels, or consultation schedulers, we collect information you voluntarily provide such as your full name, business name, email address, WhatsApp telephone number, and project requirements.
              </p>

              <h4 className="font-bold text-white text-base">2. How We Use Your Information</h4>
              <p>
                We use the collected information exclusively to communicate regarding your digital projects, evaluate technical feasibility, generate customized proposals, and provide contracted agency services (website development, business AI automation, and advertising management). We never sell or rent your business data.
              </p>

              <h4 className="font-bold text-white text-base">3. Client Confidentiality & Intellectual Property</h4>
              <p>
                All proprietary client workflows, business models, ad creatives, CRM database configurations, and software source codes developed under paid contracts remain the exclusive property of the respective client upon complete payment.
              </p>

              <h4 className="font-bold text-white text-base">4. Data Security</h4>
              <p>
                ScaleX enforces high-grade administrative and technological controls. Client communication on WhatsApp is protected by end-to-end encryption. Hosted payments are processed exclusively through PCI-DSS Level 1 compliant gateways.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-white text-base">1. Agreement to Terms</h4>
              <p>
                By engaging ScaleX for digital growth consulting, website design, AI workflow automation, or advertising campaign deployment, you agree to comply with our commercial terms and project governance policies.
              </p>

              <h4 className="font-bold text-white text-base">2. Scope of Services & Milestones</h4>
              <p>
                Each project is governed by a mutually agreed Statement of Work (SOW). Scope additions or modifications requested during development will be evaluated and agreed upon via formal change order.
              </p>

              <h4 className="font-bold text-white text-base">3. Payment & Billing</h4>
              <p>
                Payment for agency services is executed in milestones via verified hosted checkout (Stripe, PayPal, or SWIFT/SEPA corporate wire transfer). ScaleX does not store raw credit card numbers.
              </p>

              <h4 className="font-bold text-white text-base">4. Advertising & Platform Compliance</h4>
              <p>
                Client advertising budgets on platforms such as Meta and Google are paid directly to the respective ad networks. ScaleX ensures technical compliance with network policies and industry best practices.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
