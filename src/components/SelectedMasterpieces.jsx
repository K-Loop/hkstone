import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowUpRight, FiX } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const masterpieces = [
  {
    id: '01',
    title: 'Sanctum Lord Ganesha',
    category: 'Monolithic Granite',
    layout: 'lg:col-span-7 aspect-[16/11]',
    image: '/images/hero-ganesha.jpg',
  },
  {
    id: '02',
    title: 'Cosmic Nataraja',
    category: 'High-Relief Basalt',
    layout: 'lg:col-span-5 aspect-[4/5]',
    image: '/images/shiva-sculpture.jpg',
  },
  {
    id: '03',
    title: 'Dhyana Mudra Buddha',
    category: 'Golden Sandstone',
    layout: 'lg:col-span-4 aspect-[3/4]',
    image: '/images/buddha-sculpture.jpg',
  },
  {
    id: '04',
    title: 'Sacred Shiva Lingam',
    category: 'Satin-Honed Sanctum Stone',
    layout: 'lg:col-span-8 aspect-[16/10]',
    image: '/images/shiva-lingam.jpg',
  },
  {
    id: '05',
    title: 'Yali Mandapa Pillars',
    category: 'Temple Architecture',
    layout: 'lg:col-span-6 aspect-[16/11]',
    image: '/images/temple-architecture.jpg',
  },
  {
    id: '06',
    title: 'Shilabalika High-Relief',
    category: 'Hand-Chiseled Monolith',
    layout: 'lg:col-span-6 aspect-[16/11]',
    image: '/images/carving-process.jpg',
  },
  {
    id: '07',
    title: 'Chola Nritya Ganapati',
    category: 'Classical Relief',
    layout: 'lg:col-span-5 aspect-[4/5]',
    image: '/images/ganesha-chola.jpg',
  },
  {
    id: '08',
    title: 'Hoysala Temple Frieze',
    category: 'Ornamental Carving',
    layout: 'lg:col-span-7 aspect-[16/11]',
    image: '/images/ornamental-carving.jpg',
  },
];

export default function SelectedMasterpieces() {
  const [selectedWork, setSelectedWork] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gallery-artwork').forEach((plate) => {
        gsap.fromTo(
          plate,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: plate,
              start: 'top 86%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="creations"
      ref={sectionRef}
      className="py-28 md:py-40 bg-[#0B0A09] border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
        {/* Minimal Exhibition Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-[11px] uppercase tracking-[0.34em] text-[#D4AF37] block mb-4">
              06 &mdash; Selected Masterpieces
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl xl:text-7xl text-[#F4EFE6] font-light leading-[1.02]">
              The Sculpture{' '}
              <span className="italic text-[#D4AF37]">Exhibition.</span>
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.28em] text-[#9A8C7E]">
            Click any artwork to view full-screen
          </span>
        </div>

        {/* PURE ARTWORK MASONRY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {masterpieces.map((work) => (
            <figure
              key={work.id}
              onClick={() => setSelectedWork(work)}
              data-cursor="View Art"
              className={`gallery-artwork ${work.layout} group relative overflow-hidden bg-[#141210] border border-white/10 cursor-pointer`}
            >
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Hover Expand Icon */}
              <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#D4AF37] text-[#0B0A09] flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <FiArrowUpRight className="w-5 h-5" />
              </div>

              {/* Minimal Museum Placard */}
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] block mb-1">
                    {work.id} &bull; {work.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EFE6] font-light">
                    {work.title}
                  </h3>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN ARTWORK LIGHTBOX */}
      {selectedWork && (
        <div
          onClick={() => setSelectedWork(null)}
          className="fixed inset-0 z-[90] bg-[#0B0A09]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedWork(null)}
            aria-label="Close"
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 text-[#F4EFE6] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B0A09] transition-colors cursor-pointer"
          >
            <FiX className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full flex flex-col items-center"
          >
            <img
              src={selectedWork.image}
              alt={selectedWork.title}
              className="max-h-[75vh] w-auto object-contain border border-white/15 shadow-2xl"
            />
            <div className="mt-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/15 pt-5">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] block">
                  Plate {selectedWork.id} &mdash; {selectedWork.category}
                </span>
                <h3 className="font-serif text-3xl text-[#F4EFE6] font-light">
                  {selectedWork.title}
                </h3>
              </div>
              <a
                href={`https://wa.me/918940705654?text=${encodeURIComponent(
                  `Hello HK Stone Sculpture, I would like to enquire about ${selectedWork.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#D4AF37] text-[#0B0A09] font-medium text-xs uppercase tracking-[0.22em] hover:bg-[#F4EFE6] transition-colors"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
