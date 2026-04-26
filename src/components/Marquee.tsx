import React from 'react';
import { cn } from '@/src/lib/utils';

interface MarqueeProps {
  items: string[];
  className?: string;
  /** Seconds for one full loop */
  duration?: number;
  reverse?: boolean;
}

/**
 * Pure-CSS infinite marquee. Duplicates content for a seamless loop.
 */
export const Marquee: React.FC<MarqueeProps> = ({
  items,
  className,
  duration = 38,
  reverse = false,
}) => {
  return (
    <div
      className={cn(
        'group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]',
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className="flex shrink-0 items-center gap-16 pr-16"
          style={{
            animation: `marquee ${duration}s linear infinite${reverse ? ' reverse' : ''}`,
          }}
        >
          {items.map((item, idx) => (
            <span
              key={`${i}-${idx}`}
              className="font-serif text-3xl md:text-5xl text-white/20 italic whitespace-nowrap transition-colors duration-500 hover:text-gold"
            >
              {item}
              <span className="ml-16 inline-block h-2 w-2 rounded-full bg-gold/40 align-middle" />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
