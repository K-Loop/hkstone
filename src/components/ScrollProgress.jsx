import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setProgress(pct);
      setShowTopBtn(scrollTop > 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-[70] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#D4AF37] origin-left transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-8 right-6 md:right-10 z-50 w-12 h-12 rounded-full bg-[#141210]/90 backdrop-blur-md text-[#F4EFE6] border border-[#D4AF37]/40 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B0A09] transition-all duration-300 cursor-pointer ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <FiArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
