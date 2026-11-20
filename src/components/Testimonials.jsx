import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const sampleTestimonials = [
  {
    id: 1,
    quote:
      'The monolithic black granite Ganesha and sanctum pillars crafted for our temple courtyard exceeded every expectation. The depth of the relief carving and the serene expression reflect true traditional mastery.',
    author: 'Temple Trust Patron (Sample Review)',
    role: 'Heritage Sanctum Commission',
    commission: 'Black Granite Deity & Mandapa Pillars',
  },
  {
    id: 2,
    quote:
      'As an architectural studio, finding artisans who understand classical Talamana proportions and deliver exact structural tolerances is rare. Their sandstone Buddha and decorative panels became the soul of our project.',
    author: 'Principal Architect (Sample Review)',
    role: 'Luxury Estate & Courtyard Project',
    commission: 'Custom Sandstone Buddha & Relief Panels',
  },
  {
    id: 3,
    quote:
      'From selecting the raw stone block to the final satin-honed finish on our Shiva Lingam, the craftsmanship and reverence shown by the sculptors were extraordinary.',
    author: 'Private Collector & Devotee (Sample Review)',
    role: 'Sacred Sanctum Installation',
    commission: 'Traditional Monolithic Shiva Lingam',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sampleTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sampleTestimonials.length - 1 ? 0 : prev + 1));
  };

  const active = sampleTestimonials[currentIndex];

  return (
    <section className="py-24 md:py-36 bg-[#F6F2EA] border-b border-[#1C1917]/15">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Section Index */}
        <div className="flex items-center justify-between border-b border-[#1C1917]/15 pb-5 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A85338]">
              07 / Reflections
            </span>
            <span className="w-8 h-[1px] bg-[#1C1917]/30" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5C544B]">
              Patron Impressions
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.22em] px-3 py-1 bg-[#EBE4D6] text-[#8E785F] border border-[#1C1917]/10">
            Sample Editorial Testimonials
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Label & Controls (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] text-[#A85338] block mb-4 font-medium">
                Voices of Devotion &amp; Design
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1917] font-normal leading-[1.08] mb-6">
                Enduring Trust Built in{' '}
                <span className="italic font-light text-[#A85338]">Sacred Stone.</span>
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8E785F] leading-relaxed">
                Representative patron impressions illustrating our commission experience while
                verified client archive reviews are curated.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 border border-[#1C1917]/25 flex items-center justify-center text-[#1C1917] hover:bg-[#1C1917] hover:text-[#F6F2EA] transition-colors cursor-pointer"
              >
                <FiArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-12 h-12 border border-[#1C1917]/25 flex items-center justify-center text-[#1C1917] hover:bg-[#1C1917] hover:text-[#F6F2EA] transition-colors cursor-pointer"
              >
                <FiArrowRight className="w-5 h-5" />
              </button>
              <span className="ml-4 font-mono text-xs tracking-[0.25em] text-[#5C544B]">
                0{currentIndex + 1} / 0{sampleTestimonials.length}
              </span>
            </div>
          </div>

          {/* Right Quote Display (8 Cols) */}
          <div className="lg:col-span-8 lg:pl-12 border-l-0 lg:border-l border-[#1C1917]/15 min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className="font-serif text-6xl text-[#A85338]/30 leading-none block mb-4"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1C1917] font-normal leading-[1.3] mb-10">
                  {active.quote}
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#1C1917]/15">
                  <div>
                    <p className="font-serif text-xl text-[#1C1917] font-medium">
                      {active.author}
                    </p>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#5C544B] mt-0.5">
                      {active.role}
                    </p>
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#A85338] font-medium">
                    {active.commission}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
