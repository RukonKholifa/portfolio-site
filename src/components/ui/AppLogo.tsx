import React from 'react';
import { cn } from '@/src/lib/utils';

interface AppLogoProps {
  className?: string;
}

export const AppLogo: React.FC<AppLogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2 font-serif", className)}>
      <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-deep-bg font-bold text-xl">
        RK
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight">RUKON KHOLIFA</span>
        <span className="text-[10px] tracking-[0.3em] text-gold font-medium">EDITZ</span>
      </div>
    </div>
  );
};
