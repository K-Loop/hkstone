import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imgRef = useRef(null);
  const secondaryImgRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (imgRef.current && imageWrapRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 1.12, yPercent: -4 },
          {
            scale: 1.0,
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      if (secondaryImgRef.current) {
        gsap.to(secondaryImgRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (e, selector) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen pt-28 pb-20 lg:pt-32 lg:pb-24 flex items-center overflow-hidden border-b border-[#1C1917]/15"
    >
      {/* Subtle Architectural Background Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 xl:px-14 flex justify-between opacity-20"
        aria-hidden="true"
      >
        <div className="w-[1px] h-full bg-[#1C1917]/20" />
        <div className="hidden md:block w-[1px] h-full bg-[#1C1917]/15" />
        <div className="hidden lg:block w-[1px] h-full bg-[#1C1917]/15" />
        <div className="w-[1px] h-full bg-[#1C1917]/20" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 xl:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Editorial Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            {/* Eyebrow Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-10 h-[1px] bg-[#A85338]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#A85338] font-medium">
                Hari Krishnan Stone Sculptures &bull; Perambalur
              </span>
            </motion.div>

            {/* Expressive Serif Headline — Balanced 2-Line Composition */}
            <div className="overflow-hidden mb-7">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.85rem] leading-[1.06] tracking-[-0.015em] text-[#1C1917] font-normal"
              >
                Where Stone Becomes <br className="hidden sm:inline" />
                <span className="italic font-light text-[#A85338]">Timeless Art.</span>
              </motion.h1>
            </div>

            {/* Supporting Editorial Copy */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg xl:text-xl text-[#5C544B] font-light leading-relaxed max-w-xl mb-10 border-l-2 border-[#A85338]/60 pl-6"
            >
              Handcrafted stone sculptures and architectural masterpieces, shaped by tradition,
              devotion and extraordinary craftsmanship.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto"
            >
              <a
                href="#creations"
                onClick={(e) => scrollToSection(e, '#creations')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1C1917] text-[#F6F2EA] text-xs uppercase tracking-[0.22em] whitespace-nowrap transition-all duration-300 hover:bg-[#A85338] w-full sm:w-auto"
              >
                <span>Explore Our Creations</span>
                <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#services"
                onClick={(e) => scrollToSection(e, '#services')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#1C1917]/30 text-[#1C1917] text-xs uppercase tracking-[0.22em] whitespace-nowrap hover:border-[#1C1917] hover:bg-[#EBE4D6]/60 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Discover Our Craft</span>
              </a>
            </motion.div>

            {/* Decorative Location / Heritage Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-[#1C1917]/15 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-2xl"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8E785F] mb-1">
                  Materiality
                </p>
                <p className="font-serif text-lg text-[#1C1917]">
                  Black Granite &amp; Sandstone
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8E785F] mb-1">
                  Lineage
                </p>
                <p className="font-serif text-lg text-[#1C1917]">
                  Master Shilpa Artisans
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8E785F] mb-1">
                  Atelier Location
                </p>
                <p className="font-serif text-lg text-[#1C1917] flex items-center gap-1.5">
                  <FiMapPin className="text-[#A85338] w-4 h-4 shrink-0" />
                  <span>Senjeri, Perambalur</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Monumental Sculpture Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              ref={imageWrapRef}
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.25, delay: 0.15, ease: [0.77, 0, 0.175, 1] }}
              className="relative aspect-[4/5] max-h-[640px] w-full overflow-hidden bg-[#1C1917] border border-[#1C1917]/15 ml-auto"
              data-cursor="Sacred Art"
            >
              <img
                ref={imgRef}
                src="/images/hero-ganesha.jpg"
                alt="Monumental Indian Lord Ganesha stone sculpture in a traditional temple sanctum"
                className="w-full h-full object-cover object-center contrast-[1.06] brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent" />

              {/* Bottom Caption Inside Frame */}
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-[#F6F2EA]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#DFD6C5] block">
                    Featured Monolith &bull; Plate I
                  </span>
                  <p className="font-serif text-xl italic">
                    Sanctum Lord Ganesha in Monolithic Granite
                  </p>
                </div>
                <span className="text-xs font-mono tracking-widest text-[#DFD6C5]/80">
                  01 / 10
                </span>
              </div>
            </motion.div>

            {/* Asymmetrical Overlapping Secondary Detail Card */}
            <motion.div
              ref={secondaryImgRef}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute -bottom-8 -left-8 w-44 md:w-52 bg-[#F6F2EA] p-3 border border-[#1C1917]/20 shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden mb-2 bg-[#1C1917]">
                <img
                  src="/images/ganesha-chola.jpg"
                  alt="Intricate hand-carved Chola style Ganesha stone relief"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#A85338] font-medium">
                High-Relief Detail
              </p>
              <p className="font-serif text-sm text-[#1C1917] leading-snug">
                Classical Chola &amp; Hoysala Chisel Work
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
