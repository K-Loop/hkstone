import { FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';

export default function AboutCompany() {
  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-[#161311] border-t border-white/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Compact Visual Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0D0B0A] border border-white/10">
              <img
                src="/images/temple-architecture.jpg"
                alt="Traditional stone carving by Hari Krishnan Stone Sculptures"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <img
                  src="/images/hk-logo.jpg"
                  alt="HK Stone Sculpture"
                  className="w-11 h-11 rounded-full object-cover object-top border border-[#D48C46]"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#D48C46] block">
                    Established Atelier
                  </span>
                  <p className="font-serif text-base text-[#F5F2EB]">
                    Hari Krishnan Stone Sculptures
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Minimalist Studio Story & Contact (7 Cols) */}
          <div id="contact" className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#D48C46] text-sm">&#10024;</span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#D48C46] font-medium">
                THE ATELIER &bull; PERAMBALUR, TAMIL NADU
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB] font-normal mb-4 leading-snug">
              Shaped by Hand. Guided by Tradition.
            </h2>

            <p className="text-sm sm:text-base text-[#9E9589] font-light leading-relaxed mb-8 max-w-2xl">
              Based in Senjeri, Perambalur, <strong className="text-[#F5F2EB] font-medium">HK Stone Sculpture (Hari Krishnan Stone Sculptures)</strong> specializes in hand-carved black granite deities, sacred Shiva Lingams, traditional temple mandapa pillars, and bespoke stone reliefs rooted in classical South Indian Shilpa Shastra craftsmanship.
            </p>

            {/* Compact Studio Info Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#0D0B0A] border border-white/10 flex items-start gap-3.5">
                <FiMapPin className="w-4 h-4 text-[#D48C46] shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E9589] block mb-0.5">
                    Workshop Address
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5F2EB] leading-relaxed">
                    Dhanalakshmi College Opp, Thuraiyur Main Road, Senjeri, Perambalur &ndash; 621 212
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0D0B0A] border border-white/10 flex items-start gap-3.5">
                <FiPhone className="w-4 h-4 text-[#D48C46] shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E9589] block mb-0.5">
                    Direct Contact
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5F2EB] leading-relaxed">
                    <a href="tel:+918940705654" className="hover:text-[#D48C46]">
                      +91 89407 05654
                    </a>
                    <br />
                    <a href="tel:+918610713565" className="hover:text-[#D48C46]">
                      +91 86107 13565
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="https://wa.me/918940705654?text=Hello%20HK%20Stone%20Sculpture%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20sculpture."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D48C46] text-[#0D0B0A] font-semibold text-xs uppercase tracking-[0.16em] hover:bg-[#e39c56] transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href="https://www.youtube.com/@hkstonesculptures2504"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/15 bg-[#0D0B0A] text-[#F5F2EB] text-xs uppercase tracking-[0.16em] hover:border-[#D48C46] hover:text-[#D48C46] transition-colors"
              >
                <FaYoutube className="w-4 h-4 text-[#D48C46]" />
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
