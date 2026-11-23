import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeritagePhilosophy() {
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { scale: 1.14, yPercent: -10 },
          {
            scale: 1.0,
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[85vh] min-h-[580px] w-full bg-[#0B0A09] border-t border-white/10 overflow-hidden flex items-center"
    >
      {/* Full-Bleed Monumental Temple Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src="/images/closing-monumental.jpg"
          alt="Monumental ancient Indian rock-cut temple architecture"
          loading="lazy"
          className="w-full h-full object-cover object-center brightness-[0.55] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/40 to-[#0B0A09]/80" />
      </div>

      {/* Centered Poetic Statement */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <span className="text-[11px] uppercase tracking-[0.38em] text-[#D4AF37] block mb-6">
          05 &mdash; Shilpa Shastra Heritage
        </span>
        <h2 className="font-serif text-5xl sm:text-7xl xl:text-[6.2rem] text-[#F4EFE6] font-light leading-[1.02] mb-8">
          Rooted in Tradition. <br />
          <span className="italic text-[#D4AF37]">Created for Eternity.</span>
        </h2>
        <p className="font-serif text-xl sm:text-2xl italic text-[#F4EFE6]/80 max-w-2xl mx-auto leading-relaxed">
          Guided by sacred geometry and centuries of South Indian temple architecture, every
          monolith is carved to endure across generations.
        </p>
      </div>
    </section>
  );
}
