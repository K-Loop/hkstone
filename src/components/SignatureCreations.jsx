import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowUpRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: '01',
    title: 'Divine Sculptures',
    subtitle: 'Sacred Sanctum Deities in Black Granite',
    image: '/images/shiva-sculpture.jpg',
    colSpan: 'lg:col-span-7',
    aspect: 'aspect-[16/11]',
  },
  {
    id: '02',
    title: 'Shiva Lingams',
    subtitle: 'Monolithic Sanctum Forms & Yoni Peethams',
    image: '/images/shiva-lingam.jpg',
    colSpan: 'lg:col-span-5',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '03',
    title: 'Temple Architecture',
    subtitle: 'Monumental Portals, Gopurams & Sanctums',
    image: '/images/temple-architecture.jpg',
    colSpan: 'lg:col-span-12',
    aspect: 'aspect-[16/9] sm:aspect-[21/9]',
  },
  {
    id: '04',
    title: 'Mandapa Pillars',
    subtitle: 'Hand-Carved Yali & Temple Columns',
    image: '/images/mandapa-pillars.jpg',
    colSpan: 'lg:col-span-5',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '05',
    title: 'Ornamental Stone Carvings',
    subtitle: 'High-Relief Friezes & Architectural Motifs',
    image: '/images/decorative-sculpture.jpg',
    colSpan: 'lg:col-span-7',
    aspect: 'aspect-[16/11]',
  },
  {
    id: '06',
    title: 'Bespoke Creations',
    subtitle: 'Custom Meditative & Architectural Commissions',
    image: '/images/buddha-sculpture.jpg',
    colSpan: 'lg:col-span-12',
    aspect: 'aspect-[16/9] sm:aspect-[21/9]',
  },
];

export default function SignatureCreations() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.signature-frame').forEach((frame) => {
        gsap.fromTo(
          frame,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: frame,
              start: 'top 84%',
            },
          }
        );
      });
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
      id="services"
      ref={sectionRef}
      className="py-28 md:py-40 bg-[#141210] border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
        {/* Minimal Gallery Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-[11px] uppercase tracking-[0.34em] text-[#D4AF37] block mb-4">
              02 &mdash; Signature Creations
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl xl:text-7xl text-[#F4EFE6] font-light leading-[1.02]">
              Six Realms of{' '}
              <span className="italic text-[#D4AF37]">Sacred Stone.</span>
            </h2>
          </div>
          <p className="font-serif text-xl italic text-[#9A8C7E] max-w-sm">
            Handcrafted from raw quarry monoliths for temples, sanctuaries, and timeless estates.
          </p>
        </div>

        {/* FULL-BLEED ARTWORK SHOWCASE CARDS (Text Overlaid Inside Canvas — Zero Clutter) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {categories.map((item) => (
            <a
              key={item.id}
              href="#contact"
              onClick={scrollToContact}
              data-cursor="Explore"
              className={`signature-frame ${item.colSpan} ${item.aspect} group relative overflow-hidden bg-[#0B0A09] border border-white/10 block`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.82] group-hover:brightness-95"
              />

              {/* Gallery Spotlight Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/95 via-[#0B0A09]/25 to-transparent" />

              {/* Top Number Badge */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.3em] text-[#D4AF37] px-3.5 py-1.5 bg-[#0B0A09]/70 backdrop-blur-md border border-[#D4AF37]/30">
                  {item.id}
                </span>
                <span className="w-11 h-11 rounded-full bg-[#D4AF37] text-[#0B0A09] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <FiArrowUpRight className="w-5 h-5" />
                </span>
              </div>

              {/* Bottom Artwork Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] mb-1.5">
                    {item.subtitle}
                  </p>
                  <h3 className="font-serif text-3xl sm:text-5xl text-[#F4EFE6] font-light">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#F4EFE6]/70 group-hover:text-[#D4AF37] transition-colors">
                  Commission &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
