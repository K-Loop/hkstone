import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowUpRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Architecture() {
  const sectionRef = useRef(null);
  const bgImgRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (bgImgRef.current) {
        gsap.fromTo(
          bgImgRef.current,
          { yPercent: -10, scale: 1.1 },
          {
            yPercent: 10,
            scale: 1.0,
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

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#131110] text-[#F6F2EA] border-b border-[#F6F2EA]/10 overflow-hidden"
    >
      {/* Full-Width Monumental Banner Image with Parallax */}
      <div className="relative h-[70vh] min-h-[520px] max-h-[820px] w-full overflow-hidden">
        <img
          ref={bgImgRef}
          src="/images/closing-monumental.jpg"
          alt="Monumental traditional Indian rock-cut temple architecture and carvings"
          loading="lazy"
          className="w-full h-full object-cover object-center brightness-75 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131110] via-[#131110]/45 to-[#131110]/30" />

        {/* Overlay Editorial Content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-12 md:pb-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono uppercase tracking-[0.28em] text-[#A85338]">
                  05 / Sacred Architecture
                </span>
                <span className="w-10 h-[1px] bg-[#DFD6C5]/40" />
                <span className="text-xs uppercase tracking-[0.28em] text-[#DFD6C5]">
                  Monumental Temple Engineering
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-[#F6F2EA] font-normal leading-[1.06]">
                Preserving Heritage,{' '}
                <span className="italic font-light text-[#DFD6C5]">
                  One Masterpiece at a Time.
                </span>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Architectural Capabilities Split Editorial Details */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-light leading-relaxed">
              Beyond individual deity sculptures, HK Stone Sculpture collaborates with temple
              trusts, heritage architects, and cultural institutions to design and carve structural
              temple elements built to stand for millennia.
            </p>
            <p className="text-base text-[#DFD6C5]/75 font-light leading-relaxed">
              Whether restoring ancient stone mandapas or crafting new Dravidian, Nagara, and
              Hoysala-inspired sanctums, our artisans execute interlocking dry-stone masonry,
              monolithic pillars, ornate prabhavalis, and sanctum doorways without compromising
              traditional Agama geometry.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#F6F2EA]/15">
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#A85338] block mb-1">
                  Columns
                </span>
                <p className="font-serif text-xl text-[#F6F2EA]">Yali &amp; Fluted Pillars</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#A85338] block mb-1">
                  Sanctums
                </span>
                <p className="font-serif text-xl text-[#F6F2EA]">Garbhagriha Portals</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#A85338] block mb-1">
                  Facades
                </span>
                <p className="font-serif text-xl text-[#F6F2EA]">High-Relief Friezes</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#A85338] text-[#F6F2EA] text-xs uppercase tracking-[0.22em] hover:bg-[#8A4028] transition-colors"
              >
                <span>Discuss an Architectural Project</span>
                <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Detailed Temple Pillar & Frieze Composition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="aspect-[4/5] overflow-hidden border border-[#F6F2EA]/15 bg-[#1C1917]">
              <img
                src="/images/temple-architecture.jpg"
                alt="Traditional carved stone temple yali pillars"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden border border-[#F6F2EA]/15 bg-[#1C1917] sm:mt-10">
              <img
                src="/images/temple-details.jpg"
                alt="Intricate Indian temple stone relief carvings"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
