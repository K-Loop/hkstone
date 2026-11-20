import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const servicesData = [
  {
    id: '01',
    title: 'Hindu God Sculptures',
    subtitle: 'Agama-Compliant Sanctum Deities',
    description:
      'Monumental and domestic Vigrahas of Lord Ganesha, Lord Shiva, Vishnu, and Devi, hand-chiseled from high-density black granite with classical iconographic precision.',
    image: '/images/ganesha-chola.jpg',
    stone: 'Krishnashila & Black Granite',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '02',
    title: 'Shiva Lingam',
    subtitle: 'Sacred Monolithic Sanctum Forms',
    description:
      'Precision-proportioned traditional Banalingas and monumental temple Shiva Lingams with satin-honed Yoni pedestals engineered for lifelong ritual abhishekam.',
    image: '/images/shiva-lingam.jpg',
    stone: 'Honed River & Quarry Granite',
    aspect: 'aspect-[16/11]',
  },
  {
    id: '03',
    title: 'Buddha Statues',
    subtitle: 'Serene Meditative Sculptures',
    description:
      'Tranquil Dhyana and Abhaya Mudra Buddha sculptures crafted in warm sandstone, white marble, and grey basalt for luxury courtyards, sanctuaries, and galleries.',
    image: '/images/buddha-sculpture.jpg',
    stone: 'Sandstone & Pale Basalt',
    aspect: 'aspect-[16/11]',
  },
  {
    id: '04',
    title: 'Temple Architecture',
    subtitle: 'Mandapa Pillars, Gopurams & Sanctums',
    description:
      'End-to-end traditional Indian temple stone construction—featuring yali pillars, ornate prabhavalis, carved lintels, and structural stone masonry.',
    image: '/images/temple-architecture.jpg',
    stone: 'Golden & Pink Sandstone',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '05',
    title: 'Decorative Stone Sculptures',
    subtitle: 'Bespoke Architectural Elements',
    description:
      'High-relief mural panels, guardian temple lions (Simha), carved lotus medallions, and sculptural centerpieces for heritage estates and luxury interiors.',
    image: '/images/decorative-sculpture.jpg',
    stone: 'Hoysala Soapstone & Sandstone',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '06',
    title: 'Custom Stone Carving',
    subtitle: 'Private Commissions & Monumental Art',
    description:
      'Collaborative custom stonework tailored to architects, interior designers, and temple trusts—translating bespoke sketches into enduring monolithic reality.',
    image: '/images/shiva-sculpture.jpg',
    stone: 'Custom Quarried Monoliths',
    aspect: 'aspect-[16/11]',
  },
];

export default function Services() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      className="py-24 md:py-36 bg-[#F6F2EA] border-b border-[#1C1917]/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Eyebrow Bar */}
        <div className="flex items-center justify-between border-b border-[#1C1917]/15 pb-5 mb-14">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A85338]">
              02 / Disciplines
            </span>
            <span className="w-8 h-[1px] bg-[#1C1917]/30" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5C544B]">
              Our Craft &amp; Services
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs uppercase tracking-[0.25em] text-[#8E785F]">
            Six Pillars of Stone Mastery
          </span>
        </div>

        {/* Editorial Heading Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl xl:text-6xl text-[#1C1917] font-normal leading-[1.08]"
            >
              Sacred Iconography &amp;{' '}
              <span className="italic font-light text-[#A85338]">
                Architectural Stonework.
              </span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-[#5C544B] text-base leading-relaxed font-light"
            >
              Each commission is carved from carefully selected raw quarry blocks, combining sacred
              geometric proportions with museum-grade surface finishing.
            </motion.p>
          </div>
        </div>

        {/* Asymmetrical Editorial 2-Column Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-x-12 lg:gap-x-16">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.85,
                  delay: (index % 2) * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`md:col-span-6 flex flex-col ${
                  isEven ? 'md:mt-16' : ''
                } group`}
              >
                {/* Top Metadata Line */}
                <div className="flex items-center justify-between border-t border-[#1C1917]/20 pt-4 mb-4">
                  <span className="font-mono text-xs tracking-[0.25em] text-[#A85338]">
                    /{service.id}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#8E785F]">
                    {service.stone}
                  </span>
                </div>

                {/* Large Image Frame with Hover Zoom & Reveal */}
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  data-cursor="Explore"
                  className={`relative w-full ${service.aspect} overflow-hidden bg-[#1C1917] border border-[#1C1917]/15 mb-6 block`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1C1917]/15 group-hover:bg-[#1C1917]/0 transition-colors duration-500" />

                  {/* Corner Floating Badge on Hover */}
                  <div className="absolute bottom-5 right-5 w-12 h-12 bg-[#F6F2EA] text-[#1C1917] flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <FiArrowUpRight className="w-5 h-5" />
                  </div>
                </a>

                {/* Service Title & Description */}
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#A85338] block mb-1.5">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal mb-3 group-hover:text-[#A85338] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#5C544B] text-sm sm:text-base font-light leading-relaxed mb-6 max-w-xl">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <a
                      href="#contact"
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#1C1917] font-medium border-b border-[#1C1917]/30 pb-1.5 group-hover:border-[#A85338] group-hover:text-[#A85338] transition-colors duration-300"
                    >
                      <span>Commission This Craft</span>
                      <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
