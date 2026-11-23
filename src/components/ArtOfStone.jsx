import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ArtOfStone() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.art-frame',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.18,
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
      id="about"
      ref={sectionRef}
      className="py-28 md:py-40 bg-[#0B0A09] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
        {/* Minimal Headline + Single-Sentence Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8 art-frame">
            <span className="text-[11px] uppercase tracking-[0.34em] text-[#D4AF37] block mb-4">
              01 &mdash; The Art of Stone
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl xl:text-7xl leading-[1.02] text-[#F4EFE6] font-light">
              More Than Stone. <br />
              <span className="italic text-[#D4AF37]">A Living Expression of Art.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 art-frame">
            <p className="font-serif text-xl sm:text-2xl italic text-[#9A8C7E] leading-relaxed">
              We do not merely carve rock—we awaken the sacred form sleeping inside raw granite and
              sandstone.
            </p>
          </div>
        </div>

        {/* PURE VISUAL TRIPTYCH — Giant Artwork Showcasing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Tall Vertical Sculpture Portrait (5 Cols) */}
          <figure
            data-cursor="Granite"
            className="md:col-span-5 art-frame group relative overflow-hidden bg-[#141210]"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/carving-process.jpg"
                alt="Intricate hand-carved Indian stone sculpture"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-[#9A8C7E]">
              <span>Hand-Chiseled Ornamentation</span>
              <span className="text-[#D4AF37]">Monolithic Stone</span>
            </figcaption>
          </figure>

          {/* Right Offset Dual Art Frames (7 Cols) */}
          <div className="md:col-span-7 flex flex-col gap-10 md:mt-20">
            <figure
              data-cursor="High Relief"
              className="art-frame group relative overflow-hidden bg-[#141210]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/images/ornamental-carving.jpg"
                  alt="Sacred narrative stone relief carving"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-[#9A8C7E]">
                <span>Sacred Temple Frieze</span>
                <span className="text-[#D4AF37]">Deep Undercut Relief</span>
              </figcaption>
            </figure>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center art-frame">
              <figure className="sm:col-span-6 overflow-hidden bg-[#141210] group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/ganesha-chola.jpg"
                    alt="Chola style Ganesha stone sculpture detail"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </figure>
              <div className="sm:col-span-6">
                <p className="font-serif text-2xl sm:text-3xl text-[#F4EFE6] font-light italic leading-snug mb-3">
                  &ldquo;Every carving represents patience, devotion, and generations of human
                  mastery.&rdquo;
                </p>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                  Hari Krishnan Stone Sculptures
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
