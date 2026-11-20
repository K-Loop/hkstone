import { motion } from 'framer-motion';
import {
  FiAward,
  FiCompass,
  FiLayers,
  FiPenTool,
  FiUsers,
  FiShield,
} from 'react-icons/fi';

const pillars = [
  {
    index: '01',
    title: 'Traditional Craftsmanship',
    description:
      'Authentic hand-carving methods passed down through generations of master shilpis, strictly honoring classical Shilpa Shastra proportions and sacred iconography.',
    icon: FiCompass,
  },
  {
    index: '02',
    title: 'Attention to Detail',
    description:
      'From delicate finger mudras and serene facial expressions to deep undercut floral scrollwork, every millimeter is finished with museum-grade precision.',
    icon: FiAward,
  },
  {
    index: '03',
    title: 'Premium Stone Quality',
    description:
      'We source only architectural-grade, high-density black granite (Krishnashila), golden sandstone, and fine-grained basalt tested for structural integrity and weather resistance.',
    icon: FiLayers,
  },
  {
    index: '04',
    title: 'Custom Designs',
    description:
      'Bespoke dimensions, postures, and architectural elements tailored to your temple sanctum, private residence, landscape courtyard, or cultural institution.',
    icon: FiPenTool,
  },
  {
    index: '05',
    title: 'Dedicated Artisans',
    description:
      'A committed guild of traditional sculptors and architectural stonemasons who treat every commission with spiritual reverence and artistic discipline.',
    icon: FiUsers,
  },
  {
    index: '06',
    title: 'Reliable Delivery',
    description:
      'Custom timber crating, shock-absorbent bracing, and transparent milestone updates ensure safe transportation of monumental stone works across India and worldwide.',
    icon: FiShield,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-36 bg-[#EBE4D6]/60 border-b border-[#1C1917]/15">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Section Index */}
        <div className="flex items-center justify-between border-b border-[#1C1917]/15 pb-5 mb-14">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A85338]">
              06 / Distinction
            </span>
            <span className="w-8 h-[1px] bg-[#1C1917]/30" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5C544B]">
              Why Choose Us
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs uppercase tracking-[0.25em] text-[#8E785F]">
            The HK Stone Standard
          </span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Editorial Intro (4 Cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.28em] text-[#A85338] block mb-4 font-medium"
            >
              Uncompromising Integrity
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl text-[#1C1917] font-normal leading-[1.08] mb-6"
            >
              Enduring Quality Carved into{' '}
              <span className="italic font-light text-[#A85338]">Every Detail.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[#5C544B] text-base font-light leading-relaxed"
            >
              Stone does not forgive haste. We reject mass-manufactured shortcuts in favor of
              authentic quarry selection and master hand-finishing.
            </motion.p>
          </div>

          {/* Right Editorial Divider Ledger (8 Cols) */}
          <div className="lg:col-span-8 border-t border-[#1C1917]/20">
            {pillars.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: idx * 0.07 }}
                  className="group py-8 sm:py-10 border-b border-[#1C1917]/15 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start hover:bg-[#F6F2EA]/70 transition-colors duration-300 px-4 -mx-4"
                >
                  <div className="sm:col-span-2 flex items-center gap-3">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#A85338]">
                      /{item.index}
                    </span>
                    <IconComponent className="w-4 h-4 text-[#8E785F] group-hover:text-[#A85338] transition-colors" />
                  </div>

                  <div className="sm:col-span-4">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-normal group-hover:text-[#A85338] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="sm:col-span-6">
                    <p className="text-[#5C544B] text-sm sm:text-base font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
