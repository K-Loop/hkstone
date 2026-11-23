import { useState } from 'react';
import { FiX, FiArrowUpRight, FiGrid } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const artworks = [
  {
    id: 1,
    title: 'Sanctum Lord Ganesha in Monolithic Granite',
    category: 'SACRED DEITIES',
    image: '/images/hero-ganesha.jpg',
  },
  {
    id: 2,
    title: 'Cosmic Nataraja High-Relief Stone Carving',
    category: 'SACRED DEITIES',
    image: '/images/shiva-sculpture.jpg',
  },
  {
    id: 3,
    title: 'Consecrated Sanctum Shiva Lingam & Peetham',
    category: 'SHIVA LINGAMS',
    image: '/images/shiva-lingam.jpg',
  },
  {
    id: 4,
    title: 'Yali Guardian Mandapa Stone Pillars',
    category: 'TEMPLE PILLARS',
    image: '/images/temple-architecture.jpg',
  },
  {
    id: 5,
    title: 'Dhyana Mudra Seated Sandstone Buddha',
    category: 'BESPOKE WORKS',
    image: '/images/buddha-sculpture.jpg',
  },
  {
    id: 6,
    title: 'Classical Shilabalika Stone Relief Sculpture',
    category: 'ORNAMENTAL RELIEF',
    image: '/images/carving-process.jpg',
  },
  {
    id: 7,
    title: 'Chola Nritya Ganapati High-Relief Panel',
    category: 'SACRED DEITIES',
    image: '/images/ganesha-chola.jpg',
  },
  {
    id: 8,
    title: 'Airavatesvara Style Carved Mandapa Column',
    category: 'TEMPLE PILLARS',
    image: '/images/mandapa-pillars.jpg',
  },
  {
    id: 9,
    title: 'Hoysala Narrative Deities Stone Frieze',
    category: 'ORNAMENTAL RELIEF',
    image: '/images/ornamental-carving.jpg',
  },
  {
    id: 10,
    title: 'Intricate Temple Wall Celestial Carvings',
    category: 'ORNAMENTAL RELIEF',
    image: '/images/decorative-sculpture.jpg',
  },
  {
    id: 11,
    title: 'Multi-Tiered Sanctum Facade Relief',
    category: 'TEMPLE PILLARS',
    image: '/images/temple-details.jpg',
  },
  {
    id: 12,
    title: 'Hand-Chiseled Naga & Heritage Stone Relief',
    category: 'BESPOKE WORKS',
    image: '/images/workshop.jpg',
  },
];

const filterCategories = [
  { label: 'ALL WORKS', value: 'ALL' },
  { label: 'SACRED DEITIES', value: 'SACRED DEITIES' },
  { label: 'SHIVA LINGAMS', value: 'SHIVA LINGAMS' },
  { label: 'TEMPLE PILLARS', value: 'TEMPLE PILLARS' },
  { label: 'ORNAMENTAL RELIEF', value: 'ORNAMENTAL RELIEF' },
  { label: 'BESPOKE WORKS', value: 'BESPOKE WORKS' },
];

export default function SelectedMasterpieces() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filteredArtworks =
    activeFilter === 'ALL'
      ? artworks
      : artworks.filter((item) => item.category === activeFilter);

  const getCount = (val) =>
    val === 'ALL'
      ? artworks.length
      : artworks.filter((item) => item.category === val).length;

  return (
    <section id="creations" className="py-20 md:py-24 bg-[#0D0B0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* TOP EYEBROW & GALLERY HEADING (Matching Reference UI) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#D48C46] text-sm">&#10024;</span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#D48C46] font-medium">
                HK STONE SCULPTURE &bull; {artworks.length}+ HANDCRAFTED STONE ARTWORKS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F2EB] font-normal tracking-tight">
              Masterworks of Stone Sculpture
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#D48C46]/30 bg-[#161311] text-[#D48C46] text-xs">
            <FiGrid className="w-4 h-4" />
            <span className="uppercase tracking-[0.18em] text-[10px]">4-Column Exhibition</span>
          </div>
        </div>

        {/* FILTER PILLS BAR (Exact Burnished Bronze Pill Style) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-5 mb-8 border-b border-white/10 no-scrollbar">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.value;
            const count = getCount(cat.value);
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveFilter(cat.value)}
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#D48C46] text-[#0D0B0A] font-semibold shadow-sm'
                    : 'bg-transparent text-[#9E9589] hover:text-[#F5F2EB] hover:bg-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    isActive
                      ? 'bg-[#0D0B0A]/20 text-[#0D0B0A]'
                      : 'bg-white/8 text-[#9E9589]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* COMPACT 4-COLUMN ROUNDED ARTWORK CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredArtworks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedArtwork(work)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#161311] border border-white/10 cursor-pointer hover:border-[#D48C46]/60 transition-all duration-300"
            >
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Bottom Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A]/90 via-[#0D0B0A]/20 to-transparent" />

              {/* Top-Left Dark Category Pill */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-[#0D0B0A]/80 backdrop-blur-md text-[10px] uppercase tracking-[0.16em] text-[#F5F2EB]/90 font-medium border border-white/10">
                  {work.category}
                </span>
              </div>

              {/* Bottom-Left Serif Artwork Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-lg sm:text-[19px] text-[#F5F2EB] font-normal leading-snug line-clamp-2 group-hover:text-[#D48C46] transition-colors">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CLEAN LIGHTBOX MODAL */}
      {selectedArtwork && (
        <div
          onClick={() => setSelectedArtwork(null)}
          className="fixed inset-0 z-[90] bg-[#0D0B0A]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedArtwork(null)}
            aria-label="Close"
            className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 text-[#F5F2EB] flex items-center justify-center hover:bg-[#D48C46] hover:text-[#0D0B0A] transition-colors cursor-pointer"
          >
            <FiX className="w-5 h-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#161311] rounded-2xl border border-white/15 overflow-hidden shadow-2xl"
          >
            <div className="bg-[#0D0B0A] max-h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#D48C46] block mb-1">
                  {selectedArtwork.category}
                </span>
                <h3 className="font-serif text-2xl text-[#F5F2EB]">
                  {selectedArtwork.title}
                </h3>
              </div>
              <a
                href={`https://wa.me/918940705654?text=${encodeURIComponent(
                  `Hello HK Stone Sculpture, I would like to enquire about "${selectedArtwork.title}".`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D48C46] text-[#0D0B0A] font-semibold text-xs uppercase tracking-[0.16em] hover:bg-[#e39c56] transition-colors shrink-0"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
                <FiArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
