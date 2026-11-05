import React from 'react';

interface ScaleXLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  variant?: 'light' | 'dark';
}

export const ScaleXLogo: React.FC<ScaleXLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  variant = 'dark',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }[size];

  const textSize = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic Ribbon Arrow Icon inspired directly by the ScaleX Logo */}
      <div className={`relative ${iconDimensions} rounded-xl overflow-hidden shadow-scalex-glow shrink-0 flex items-center justify-center p-0.5 group`}>
        {/* Actual uploaded logo representation */}
        <img
          src="/assets/aistudio/scalex_d4beeebd.jpeg"
          alt="ScaleX Emblem"
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>

      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight leading-none ${textSize} ${variant === 'light' ? 'text-slate-900' : 'text-white'}`}>
          Scale<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">X</span>
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1">
            AUTOMATE · GROW · DOMINATE
          </span>
        )}
      </div>
    </div>
  );
};
