import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiX } from 'react-icons/fi';

const galleryItems = [
  {
    id: '01',
    title: 'Monolithic Sanctum Ganesha',
    category: 'Ganesha Sculptures',
    material: 'Hand-Chiseled Grey & Black Granite',
    dimensions: 'Monumental Temple Scale',
    image: '/images/hero-ganesha.jpg',
    gridClass: 'lg:col-span-7 aspect-[16/11]',
  },
  {
    id: '02',
    title: 'Cosmic Nataraja High-Relief',
    category: 'Shiva Sculptures',
    material: 'Chloritic Schist & Dark Basalt',
    dimensions: 'Classical Hoysala Tradition',
    image: '/images/shiva-sculpture.jpg',
    gridClass: 'lg:col-span-5 aspect-[4/5]',
  },
  {
    id: '03',
    title: 'Dhyana Mudra Seated Buddha',
    category: 'Buddha Sculptures',
    material: 'Aged Golden Sandstone',
    dimensions: 'Sanctuary Courtyard Edition',
    image: '/images/buddha-sculpture.jpg',
    gridClass: 'lg:col-span-4 aspect-[3/4]',
  },
  {
    id: '04',
    title: 'Sacred Sanctum Shiva Lingam',
    category: 'Shiva Lingam',
    material: 'Monolithic River Stone & Yoni Peetham',
    dimensions: 'Agama Sastra Proportions',
    image: '/images/shiva-lingam.jpg',
    gridClass: 'lg:col-span-8 aspect-[16/10]',
  },
  {
    id: '05',
    title: 'Yali & Mythical Lion Mandapa Pillars',
    category: 'Temple Pillars',
    material: 'Carved Pallava Sandstone',
    dimensions: 'Architectural Colonnette Series',
    image: '/images/temple-architecture.jpg',
    gridClass: 'lg:col-span-6 aspect-[16/11]',
  },
  {
    id: '06',
    title: 'Hoysala Frieze & Temple Facade',
    category: 'Custom Stone Creations',
    material: 'Deep Undercut Stone Relief',
    dimensions: 'Bespoke Heritage Commission',
    image: '/images/temple-details.jpg',
    gridClass: 'lg:col-span-6 aspect-[16/11]',
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section
      id="creations"
      className="py-24 md:py-36 bg-[#131110] text-[#F6F2EA] border-b border-[#F6F2EA]/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#F6F2EA]/15 pb-5 mb-14">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A85338]">
              03 / Archive
            </span>
            <span className="w-8 h-[1px] bg-[#F6F2EA]/30" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#DFD6C5]/80">
              Signature Creations
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs uppercase tracking-[0.25em] text-[#8E785F]">
            Curated Exhibition &bull; 01 — 06
          </span>
        </div>

        {/* Heading & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className="font-serif text-4xl sm:text-5xl xl:text-6xl font-normal leading-[1.06] text-[#F6F2EA]"
            >
              Monumental Works in{' '}
              <span className="italic font-light text-[#A85338]">
                Granite &amp; Sandstone.
              </span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="text-sm sm:text-base text-[#DFD6C5]/75 font-light leading-relaxed"
            >
              A curated look into our signature sacred idols, monolithic Lingams, and hand-chiseled
              temple pillars. Click any plate to inspect full sculptural detail.
            </motion.p>
          </div>
        </div>

        {/* Asymmetrical Masonry-Inspired Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.85,
                delay: (idx % 2) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setSelectedItem(item)}
              data-cursor="Inspect"
              className={`${item.gridClass} group relative overflow-hidden bg-[#1C1917] border border-[#F6F2EA]/15 cursor-pointer`}
            >
              <img
                src={item.image}
                alt={`${item.title} - ${item.category}`}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-100"
              />

              {/* Subtle Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131110]/90 via-[#131110]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Top Plate Index */}
              <div className="absolute top-5 left-6 right-6 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.28em] px-3 py-1 bg-[#131110]/70 backdrop-blur-sm border border-[#F6F2EA]/15 text-[#DFD6C5]">
                  Plate {item.id}
                </span>
                <span className="w-10 h-10 bg-[#F6F2EA] text-[#131110] flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <FiArrowUpRight className="w-5 h-5" />
                </span>
              </div>

              {/* Bottom Title & Material Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.26em] text-[#A85338] block mb-1 font-medium">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs text-[#DFD6C5]/75 font-light tracking-wider">
                  {item.material}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Inspecting Sculpture Details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[90] bg-[#131110]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#1C1917] border border-[#F6F2EA]/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close preview"
                className="absolute top-4 right-4 z-10 w-11 h-11 bg-[#131110]/80 text-[#F6F2EA] border border-[#F6F2EA]/20 flex items-center justify-center hover:bg-[#A85338] transition-colors cursor-pointer"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="lg:col-span-8 bg-[#131110] max-h-[75vh] flex items-center justify-center overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>

              <div className="lg:col-span-4 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A85338] block mb-2">
                    Plate {selectedItem.id} &bull; {selectedItem.category}
                  </span>
                  <h3 className="font-serif text-3xl text-[#F6F2EA] mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-[#DFD6C5]/80 font-light leading-relaxed mb-6">
                    Hand-carved according to traditional Shilpa Shastra proportions, showcasing
                    deep high-relief detailing, natural stone density, and timeless sacred presence.
                  </p>

                  <div className="border-t border-[#F6F2EA]/15 pt-4 space-y-3 text-xs">
                    <div className="flex justify-between">
                      <span className="uppercase tracking-[0.2em] text-[#8E785F]">Stone</span>
                      <span className="text-[#F6F2EA]">{selectedItem.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-[0.2em] text-[#8E785F]">Scale</span>
                      <span className="text-[#F6F2EA]">{selectedItem.dimensions}</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="mt-8 w-full py-4 bg-[#A85338] text-[#F6F2EA] text-xs uppercase tracking-[0.22em] text-center hover:bg-[#8A4028] transition-colors block"
                >
                  Enquire About Similar Commission
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
