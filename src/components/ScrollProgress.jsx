import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 700);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top thin architectural progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#A85338] origin-left z-[70]"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-8 right-6 md:right-10 z-50 w-12 h-12 bg-[#1C1917] text-[#F6F2EA] border border-[#8E785F]/40 flex items-center justify-center hover:bg-[#A85338] hover:border-[#A85338] transition-colors duration-300 shadow-lg cursor-pointer"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
