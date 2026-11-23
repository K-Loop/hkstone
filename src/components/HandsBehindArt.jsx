import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HandsBehindArt() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hands-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-40 bg-[#0B0A09] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
        {/* Minimal Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8 hands-item">
            <span className="text-[11px] uppercase tracking-[0.34em] text-[#D4AF37] block mb-4">
              03 &mdash; The Hands Behind the Art
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl xl:text-7xl text-[#F4EFE6] font-light leading-[1.02]">
              Shaped by Hand. <br />
              <span className="italic text-[#D4AF37]">Guided by Generations.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 hands-item">
            <p className="font-serif text-xl sm:text-2xl italic text-[#9A8C7E] leading-relaxed">
              Every contour is awakened by the patient rhythm of forged iron chisels and master
              artisans in Perambalur.
            </p>
          </div>
        </div>

        {/* DRAMATIC VISUAL DIPTYCH — Pure Photographic Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Dominant Workshop Sculpture Frame (8 Cols) */}
          <div
            data-cursor="The Atelier"
            className="lg:col-span-8 hands-item relative aspect-[16/10] overflow-hidden bg-[#141210] border border-white/10 group"
          >
            <img
              src="/images/workshop.jpg"
              alt="Hand-carved stone sculpture relief at the workshop"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] block mb-1">
                  Master Sthapathis
                </span>
                <p className="font-serif text-2xl sm:text-3xl text-[#F4EFE6] italic font-light">
                  Raw Quarry Stone Transformed by Devotion
                </p>
              </div>
            </div>
          </div>

          {/* Right Vertical Close-Up Detail Frame (4 Cols) */}
          <div
            data-cursor="Precision"
            className="lg:col-span-4 hands-item relative aspect-[4/5] lg:aspect-auto overflow-hidden bg-[#141210] border border-white/10 group"
          >
            <img
              src="/images/temple-details.jpg"
              alt="Intricate hand-chiseled Indian temple stone relief"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] block mb-1">
                Chisel &amp; Grain
              </span>
              <p className="font-serif text-2xl text-[#F4EFE6] italic font-light">
                Micro-Relief Precision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
