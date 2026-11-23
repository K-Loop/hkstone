import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const bgImgRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgImgRef.current,
        { scale: 1.15 },
        {
          scale: 1.0,
          duration: 2.2,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        '.hero-fade',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      gsap.to(bgImgRef.current, {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[#0B0A09] flex items-end"
    >
      {/* FULL-SCREEN MONUMENTAL SCULPTURE PHOTOGRAPH */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImgRef}
          src="/images/hero-ganesha.jpg"
          alt="Monumental hand-carved Indian stone sculpture of Lord Ganesha"
          className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.12]"
        />
        {/* Dramatic Chiaroscuro Gallery Spotlight & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/40 to-[#0B0A09]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09]/85 via-[#0B0A09]/25 to-transparent" />
      </div>

      {/* HERO FOREGROUND EXHIBITION CONTENT */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 pb-16 md:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Oversized Poetic Headline (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="hero-fade flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[#D4AF37]" />
              <span className="text-[11px] uppercase tracking-[0.34em] text-[#D4AF37]">
                Perambalur, Tamil Nadu &bull; Handcrafted Stone Art
              </span>
            </div>

            <h1 className="hero-fade font-serif text-5xl sm:text-7xl lg:text-[5.8rem] xl:text-[6.8rem] leading-[0.98] tracking-[-0.02em] text-[#F4EFE6] font-light">
              From the Silence of Stone, <br />
              <span className="italic text-[#D4AF37]">A Legacy Takes Shape.</span>
            </h1>
          </div>

          {/* Minimal Intro & Dual Actions (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <p className="hero-fade text-base sm:text-lg text-[#F4EFE6]/80 font-light leading-relaxed mb-8 max-w-md lg:text-right">
              Handcrafted sacred sculptures and architectural masterpieces shaped with patience,
              precision, and devotion.
            </p>

            <div className="hero-fade flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#creations"
                onClick={(e) => scrollTo(e, '#creations')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0B0A09] font-medium text-xs uppercase tracking-[0.22em] transition-all duration-300 hover:bg-[#F4EFE6] w-full sm:w-auto"
              >
                <span>Explore Our Creations</span>
                <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#about"
                onClick={(e) => scrollTo(e, '#about')}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 border border-white/25 bg-white/5 backdrop-blur-sm text-[#F4EFE6] text-xs uppercase tracking-[0.22em] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 w-full sm:w-auto"
              >
                <span>Discover Our Craft</span>
                <FiArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
