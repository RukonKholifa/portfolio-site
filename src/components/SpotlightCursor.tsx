import React, { useEffect, useRef } from 'react';

/**
 * A subtle gold spotlight that follows the cursor.
 * Hidden on touch devices and when the user prefers reduced motion.
 */
export const SpotlightCursor: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (reduced || isTouch) return;

    let raf = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${curX - 250}px, ${curY - 250}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[500px] w-[500px] rounded-full opacity-60 mix-blend-screen"
      style={{
        background:
          'radial-gradient(circle, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.06) 35%, transparent 70%)',
        filter: 'blur(20px)',
        willChange: 'transform',
      }}
    />
  );
};
