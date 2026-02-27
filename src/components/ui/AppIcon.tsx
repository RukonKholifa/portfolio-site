import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface AppIconProps {
  name: keyof typeof LucideIcons;
  className?: string;
  size?: number;
}

export const AppIcon: React.FC<AppIconProps> = ({ name, className, size = 24 }) => {
  const Icon = LucideIcons[name] as React.ElementType;
  if (!Icon) return null;
  return <Icon className={cn("text-gold", className)} size={size} />;
};
