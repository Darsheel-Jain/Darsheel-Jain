import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { ScaleXLogo } from './ScaleXLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenSettings?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenSettings }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070E]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/50 py-3'
          : 'bg-[#05070E]/70 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: ScaleX Brand Wordmark & Icon */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg"
          >
            <ScaleXLogo size="md" variant="dark" />
          </a>

          {/* Zone 2: 5 Clean Single-Line Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-cyan-400 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-cyan-400 cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-cyan-400 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-cyan-400 cursor-pointer"
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-cyan-400 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                title="Agency Business Settings"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors focus-visible:outline-none cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </button>
            )}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white rounded-xl shadow-scalex-glow transition-all duration-200 overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 hover:shadow-scalex-hover active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer border border-white/20"
            >
              <span>Let's Scale Your Business</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-200" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-200 hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F19]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-semibold text-slate-200">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left py-2 hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 hover:text-cyan-400 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 hover:text-cyan-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-left py-2 hover:text-cyan-400 transition-colors"
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 px-4 text-center font-bold text-white rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-scalex-glow border border-white/20"
              >
                Let's Scale Your Business
              </button>
              {onOpenSettings && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenSettings();
                  }}
                  className="w-full py-2 text-xs text-slate-400 hover:text-cyan-400 text-center"
                >
                  Configure Agency Details & Numbers
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
