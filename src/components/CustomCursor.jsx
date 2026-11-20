import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const label = interactive.getAttribute('data-cursor') || '';
        setCursorLabel(label);
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
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden lg:flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: cursorLabel ? 84 : isHovered ? 44 : 12,
          height: cursorLabel ? 84 : isHovered ? 44 : 12,
          backgroundColor: cursorLabel
            ? 'rgba(168, 83, 56, 0.92)'
            : isHovered
            ? 'rgba(168, 83, 56, 0.15)'
            : 'rgba(168, 83, 56, 0.85)',
          borderColor: isHovered ? 'rgba(168, 83, 56, 0.7)' : 'rgba(168, 83, 56, 0)',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="rounded-full border flex items-center justify-center backdrop-blur-[2px]"
      >
        {cursorLabel && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#F6F2EA] font-medium">
            {cursorLabel}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
