import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Selecting the Stone',
    subtitle: 'Quarry Inspection & Acoustic Testing',
    description:
      'Every masterpiece begins at the quarry. Our master sthapathis inspect raw monolithic blocks of black granite, basalt, and golden sandstone—testing grain density, structural resonance (Nada), and mineral purity before extraction.',
    image: '/images/shiva-lingam.jpg',
    detail: 'High-Density Krishnashila & Sandstone Selection',
  },
  {
    number: '02',
    title: 'Concept and Design',
    subtitle: 'Talamana Sacred Geometry & Sketching',
    description:
      'Guided by ancient Shilpa Shastra canons, precise iconographic grids and Talamana proportional measurements are drawn directly onto the dressed stone block to establish posture, mudra, and architectural harmony.',
    image: '/images/temple-architecture.jpg',
    detail: 'Traditional Shilpa Shastra Proportional Grids',
  },
  {
    number: '03',
    title: 'Traditional Hand Carving',
    subtitle: 'Rough Blocking & Form Awakening',
    description:
      'Using forged steel points and heavy mallets, artisans remove excess quarry mass to reveal the primary silhouette—establishing the volumetric depth of pillars, deities, and structural reliefs.',
    image: '/images/workshop.jpg',
    detail: 'Monolithic Chiseling & Primary Silhouette',
  },
  {
    number: '04',
    title: 'Fine Detailing',
    subtitle: 'Ornaments, Drapery & Facial Expression',
    description:
      'With fine-tempered chisels, master sculptors carve intricate crowns (Kiritamukuta), floral garlands, celestial expressions, and delicate undercuts that bring spiritual vitality to cold stone.',
    image: '/images/carving-process.jpg',
    detail: 'Micro-Relief Ornamentation & Iconography',
  },
  {
    number: '05',
    title: 'Final Finishing',
    subtitle: 'Natural Honing & Sanctum Readiness',
    description:
      'Each sculpture undergoes multi-stage hand honing using natural abrasives, river stones, and traditional oil treatments—achieving either a rich satin sheen or raw sandstone texture built to weather centuries.',
    image: '/images/decorative-sculpture.jpg',
    detail: 'Satin Granite Polish & Weatherproof Sealing',
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (progressLineRef.current) {
        gsap.fromTo(
          progressLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom 70%',
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
      id="process"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#F6F2EA] border-b border-[#1C1917]/15 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Section Index */}
        <div className="flex items-center justify-between border-b border-[#1C1917]/15 pb-5 mb-14">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A85338]">
              04 / Methodology
            </span>
            <span className="w-8 h-[1px] bg-[#1C1917]/30" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5C544B]">
              The Art of Creation
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs uppercase tracking-[0.25em] text-[#8E785F]">
            From Raw Quarry to Sacred Form
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="font-serif text-4xl sm:text-5xl xl:text-6xl text-[#1C1917] font-normal leading-[1.08] mb-6"
          >
            Five Stages of{' '}
            <span className="italic font-light text-[#A85338]">
              Monolithic Transformation.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="text-[#5C544B] text-base sm:text-lg font-light leading-relaxed"
          >
            Unchanged for centuries, our process honors the rhythm of hand tools, patient observation,
            and uncompromising architectural standards.
          </motion.p>
        </div>

        {/* Timeline Steps Container */}
        <div className="relative">
          {/* Vertical Scroll-Triggered Progress Line on Desktop */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#1C1917]/15 -translate-x-1/2"
            aria-hidden="true"
          >
            <div
              ref={progressLineRef}
              className="w-full h-full bg-[#A85338] origin-top"
            />
          </div>

          <div className="space-y-20 lg:space-y-28">
            {steps.map((step, index) => {
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative"
                >
                  {/* Step Image Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className={`lg:col-span-5 ${
                      isReversed ? 'lg:order-2 lg:col-start-8' : 'lg:order-1 lg:col-start-1'
                    }`}
                  >
                    <div className="aspect-[16/11] overflow-hidden bg-[#1C1917] border border-[#1C1917]/15 group">
                      <img
                        src={step.image}
                        alt={`${step.number} - ${step.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-2.5 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#8E785F]">
                      <span>Stage {step.number}</span>
                      <span>{step.detail}</span>
                    </div>
                  </motion.div>

                  {/* Center Node Marker (Desktop) */}
                  <div
                    className="hidden lg:flex lg:col-span-2 lg:col-start-6 items-center justify-center z-10"
                    aria-hidden="true"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#F6F2EA] border border-[#A85338] flex items-center justify-center shadow-sm">
                      <span className="font-serif text-lg font-semibold text-[#A85338]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Narrative Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className={`lg:col-span-5 ${
                      isReversed
                        ? 'lg:order-1 lg:col-start-1 lg:text-right'
                        : 'lg:order-2 lg:col-start-8'
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 mb-3 ${
                        isReversed ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="font-serif text-4xl sm:text-5xl text-[#A85338]/30 font-light">
                        {step.number}
                      </span>
                      <span className="text-xs uppercase tracking-[0.24em] text-[#A85338] font-medium">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal mb-4">
                      {step.title}
                    </h3>

                    <p className="text-[#5C544B] text-base font-light leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
