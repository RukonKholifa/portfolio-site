import React from 'react';
import { cn } from '@/src/lib/utils';

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'video' | 'square' | 'portrait';
}

export const AppImage: React.FC<AppImageProps> = ({ 
  src, 
  alt, 
  className, 
  aspectRatio = 'video',
  ...props 
}) => {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  };

  return (
    <div className={cn("overflow-hidden rounded-xl bg-white/5", aspectClasses[aspectRatio], className)}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};
