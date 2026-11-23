import { useState } from 'react';

const journeySteps = [
  {
    number: '01',
    title: 'Understanding the Vision',
    caption: 'Sanctum Iconography & Spatial Dialogue',
    image: '/images/hero-ganesha.jpg',
  },
  {
    number: '02',
    title: 'Selecting the Stone',
    caption: 'Raw Monolithic Granite & Sandstone Selection',
    image: '/images/heritage-sanctum.jpg',
  },
  {
    number: '03',
    title: 'Traditional Design & Planning',
    caption: 'Shilpa Shastra Sacred Proportions',
    image: '/images/mandapa-pillars.jpg',
  },
  {
    number: '04',
    title: 'Hand Carving & Sculpting',
    caption: 'Awakening the Primary Form from Rock',
    image: '/images/workshop.jpg',
  },
  {
    number: '05',
    title: 'Intricate Detailing',
    caption: 'Fine Chisel Ornaments & Sacred Expressions',
    image: '/images/carving-process.jpg',
  },
  {
    number: '06',
    title: 'Final Masterpiece',
    caption: 'Satin-Honed Permanence for Generations',
    image: '/images/shiva-lingam.jpg',
  },
];

export default function ProcessJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const current = journeySteps[activeStep];

  return (
    <section
      id="process"
      className="py-28 md:py-40 bg-[#141210] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[11px] uppercase tracking-[0.34em] text-[#D4AF37] block mb-4">
            04 &mdash; From Raw Stone to Masterpiece
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl xl:text-7xl text-[#F4EFE6] font-light leading-[1.02]">
            The Six Stages of{' '}
            <span className="italic text-[#D4AF37]">Creation.</span>
          </h2>
        </div>

        {/* Minimal Horizontal Stage Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-y border-white/10 mb-12">
          {journeySteps.map((step, idx) => {
            const active = activeStep === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-5 text-left transition-all duration-300 cursor-pointer border-b-2 ${
                  active
                    ? 'border-[#D4AF37] bg-white/[0.04]'
                    : 'border-transparent hover:bg-white/[0.02]'
                }`}
              >
                <span
                  className={`font-mono text-xs tracking-[0.28em] block mb-1.5 ${
                    active ? 'text-[#D4AF37]' : 'text-[#9A8C7E]'
                  }`}
                >
                  {step.number}
                </span>
                <p
                  className={`font-serif text-lg leading-snug ${
                    active ? 'text-[#F4EFE6]' : 'text-[#9A8C7E]'
                  }`}
                >
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Large Visual Canvas for Active Stage */}
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-[#0B0A09] border border-white/10">
          <img
            key={current.image}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover object-center brightness-[0.8] transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#D4AF37] block mb-2">
                Stage {current.number} / 06
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-[#F4EFE6] font-light mb-1">
                {current.title}
              </h3>
              <p className="font-serif text-lg sm:text-xl italic text-[#9A8C7E]">
                {current.caption}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveStep((prev) => (prev === 0 ? journeySteps.length - 1 : prev - 1))
                }
                className="px-5 py-2.5 border border-white/25 text-xs uppercase tracking-[0.22em] text-[#F4EFE6] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveStep((prev) => (prev === journeySteps.length - 1 ? 0 : prev + 1))
                }
                className="px-5 py-2.5 bg-[#D4AF37] text-[#0B0A09] font-medium text-xs uppercase tracking-[0.22em] hover:bg-[#F4EFE6] transition-colors cursor-pointer"
              >
                Next Stage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
