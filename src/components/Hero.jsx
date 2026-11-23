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
        { scale: 1.12 },
        { scale: 1.0, duration: 2.0, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-fade',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.14,
          ease: 'power3.out',
          delay: 0.15,
        }
      );

      gsap.to(bgImgRef.current, {
        yPercent: 12,
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
      className="relative h-[88vh] min-h-[640px] w-full overflow-hidden bg-[#0D0B0A] flex items-end border-b border-white/10"
    >
      {/* FULL-SCREEN MONUMENTAL SCULPTURE PHOTOGRAPH */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImgRef}
          src="/images/hero-ganesha.jpg"
          alt="Monumental hand-carved Indian stone sculpture of Lord Ganesha"
          className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/35 to-[#0D0B0A]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B0A]/85 via-[#0D0B0A]/25 to-transparent" />
      </div>

      {/* HERO FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 pb-16 md:pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="hero-fade flex items-center gap-2.5 mb-4">
              <span className="text-[#D48C46] text-sm">&#10022;</span>
              <span className="text-[11px] uppercase tracking-[0.26em] text-[#D48C46] font-medium">
                Hari Krishnan Stone Sculptures &bull; Perambalur, Tamil Nadu
              </span>
            </div>

            <h1 className="hero-fade font-serif text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.06] tracking-[-0.01em] text-[#F5F2EB] font-normal">
              From the Silence of Stone, <br />
              <span className="italic text-[#D48C46]">A Legacy Takes Shape.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <p className="hero-fade text-sm sm:text-base text-[#F5F2EB]/75 font-light leading-relaxed mb-6 max-w-md lg:text-right">
              Handcrafted stone sculptures and temple architectural works shaped with patience,
              precision, and devotion.
            </p>

            <div className="hero-fade flex flex-wrap items-center gap-3.5">
              <a
                href="#creations"
                onClick={(e) => scrollTo(e, '#creations')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D48C46] text-[#0D0B0A] font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300 hover:bg-[#e39c56]"
              >
                <span>Explore Works</span>
                <FiArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                onClick={(e) => scrollTo(e, '#about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[#F5F2EB] text-xs uppercase tracking-[0.16em] hover:border-[#D48C46] hover:text-[#D48C46] transition-all duration-300"
              >
                <span>About Studio</span>
                <FiArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
