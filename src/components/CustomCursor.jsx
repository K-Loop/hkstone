import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorLabel, setCursorLabel] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) return;
    setEnabled(true);

    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power3.out',
      });
    };

    const handleMouseOver = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        setCursorLabel(interactive.getAttribute('data-cursor') || '');
      } else {
        setIsHovered(false);
        setCursorLabel('');
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden lg:flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div
        className={`rounded-full border flex items-center justify-center transition-all duration-300 ${
          cursorLabel
            ? 'w-20 h-20 bg-[#D4AF37] border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.35)]'
            : isHovered
            ? 'w-11 h-11 bg-[#D4AF37]/15 border-[#D4AF37]'
            : 'w-2.5 h-2.5 bg-[#D4AF37] border-transparent'
        }`}
      >
        {cursorLabel && (
          <span className="text-[9px] uppercase tracking-[0.22em] text-[#0B0A09] font-semibold text-center px-1">
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
}
