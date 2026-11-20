import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BrandIntro() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (imageRef.current && imageContainerRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -8, scale: 1.08 },
          {
            yPercent: 8,
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
              trigger: imageContainerRef.current,
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
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-[#EBE4D6]/55 border-b border-[#1C1917]/15 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header Index */}
        <div className="flex items-center justify-between border-b border-[#1C1917]/15 pb-5 mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A85338]">
              01 / Philosophy
            </span>
            <span className="w-8 h-[1px] bg-[#1C1917]/30" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5C544B]">
              The Sacred Lineage
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs uppercase tracking-[0.25em] text-[#8E785F]">
            HK Stone Sculpture Atelier
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Artisan Sculpture Photograph (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              ref={imageContainerRef}
              initial={{ clipPath: 'inset(15% 15% 15% 15%)', opacity: 0 }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[3/4] w-full overflow-hidden bg-[#1C1917] border border-[#1C1917]/15"
              data-cursor="Craftsmanship"
            >
              <img
                ref={imageRef}
                src="/images/carving-process.jpg"
                alt="Intricate hand-carved Indian stone sculpture crafted with traditional tools"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Caption Bar Below Image */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#5C544B] border-t border-[#1C1917]/10 pt-3">
              <span className="uppercase tracking-[0.2em] text-[11px]">
                Fig 02. Classical Shilabalika High-Relief
              </span>
              <span className="font-serif italic text-sm text-[#1C1917]">
                Hand-Chiseled Monolith
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Narrative (7 Cols) */}
          <div className="lg:col-span-7 lg:pl-8 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-xs uppercase tracking-[0.28em] text-[#A85338] mb-5 font-medium">
                Sacred Heritage &amp; Architectural Permanence
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl xl:text-6xl leading-[1.08] text-[#1C1917] font-normal mb-10">
                Crafted Through Generations.{' '}
                <span className="italic font-light text-[#A85338]">
                  Created to Last Forever.
                </span>
              </h2>
            </motion.div>

            {/* Two-column editorial body text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#5C544B] text-base leading-relaxed font-light mb-14"
            >
              <p>
                At <strong className="font-medium text-[#1C1917]">HK Stone Sculpture</strong>, every
                block of raw granite and sandstone holds an eternal presence waiting to be awakened.
                Rooted in the ancient canons of Indian{' '}
                <em className="font-serif text-lg text-[#1C1917]">Shilpa Shastra</em>, our master
                artisans approach stone carving not merely as construction, but as sacred devotion.
              </p>
              <p>
                From sanctum deity idols and monolithic Shiva Lingams to intricately fluted temple
                mandapa pillars and bespoke architectural facades, our studio preserves centuries-old
                hand-carving techniques. We create heirlooms of spiritual and architectural beauty
                that endure across generations.
              </p>
            </motion.div>

            {/* Secondary Horizontal Workshop Preview & Architectural Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[#1C1917]/15 pt-10 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center"
            >
              <div className="sm:col-span-5 aspect-[16/10] overflow-hidden border border-[#1C1917]/15 bg-[#1C1917]">
                <img
                  src="/images/workshop.jpg"
                  alt="Traditional Indian stone carving relief detail at the workshop"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="sm:col-span-7 flex flex-col justify-center">
                <p className="font-serif text-2xl md:text-3xl italic text-[#1C1917] leading-snug mb-3">
                  &ldquo;True stone mastery lies in the quiet dialogue between the chisel, the grain,
                  and timeless devotion.&rdquo;
                </p>
                <span className="text-xs uppercase tracking-[0.24em] text-[#8E785F]">
                  — Master Sculptors of HK Stone Sculpture
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
