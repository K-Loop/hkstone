import { FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi';

export default function FinalEnquiry() {
  return (
    <section
      id="contact"
      className="py-28 md:py-40 bg-[#141210] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 text-center">
        {/* Official Emblem */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#D4AF37] mx-auto mb-8 p-0.5 bg-[#0B0A09]">
          <img
            src="/images/hk-logo.jpg"
            alt="Hari Krishnan Stone Sculptures"
            className="w-full h-full rounded-full object-cover object-top scale-[1.12]"
          />
        </div>

        <span className="text-[11px] uppercase tracking-[0.36em] text-[#D4AF37] block mb-5">
          07 &mdash; Commission a Masterpiece
        </span>

        <h2 className="font-serif text-5xl sm:text-7xl xl:text-[5.8rem] text-[#F4EFE6] font-light leading-[1.02] mb-6">
          Have a Vision in Stone? <br />
          <span className="italic text-[#D4AF37]">Let&apos;s Bring It to Life.</span>
        </h2>

        <p className="font-serif text-xl sm:text-2xl italic text-[#9A8C7E] max-w-2xl mx-auto mb-12">
          Whether you envision a sacred sculpture, a traditional temple element, or a bespoke
          architectural masterpiece, let&apos;s discuss your creation.
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
          <a
            href="https://wa.me/918940705654?text=Hello%20HK%20Stone%20Sculpture%2C%20I%20would%20like%20to%20discuss%20a%20stone%20sculpture%20commission."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-9 py-4.5 bg-[#D4AF37] text-[#0B0A09] font-medium text-xs uppercase tracking-[0.24em] hover:bg-[#F4EFE6] transition-all duration-300"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Start a WhatsApp Enquiry</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="tel:+918940705654"
            className="inline-flex items-center gap-3 px-8 py-4.5 border border-white/25 text-[#F4EFE6] text-xs uppercase tracking-[0.24em] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
          >
            <FiPhone className="w-4 h-4 text-[#D4AF37]" />
            <span>Contact Our Studio</span>
          </a>
        </div>

        {/* Minimal Studio Provenance Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 text-left">
          <div className="flex items-start gap-4">
            <FiMapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#9A8C7E] block mb-1">
                Atelier Location
              </span>
              <p className="font-serif text-lg text-[#F4EFE6]">
                Dhanalakshmi College Opp, Thuraiyur Main Road, Senjeri, Perambalur &ndash; 621 212,
                Tamil Nadu
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiPhone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#9A8C7E] block mb-1">
                Direct Studio Lines
              </span>
              <p className="font-serif text-xl text-[#F4EFE6]">
                <a href="tel:+918940705654" className="hover:text-[#D4AF37] transition-colors">
                  +91 89407 05654
                </a>
                {' / '}
                <a href="tel:+918610713565" className="hover:text-[#D4AF37] transition-colors">
                  +91 86107 13565
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaYoutube className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#9A8C7E] block mb-1">
                Official Channel
              </span>
              <a
                href="https://www.youtube.com/@hkstonesculptures2504"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-[#F4EFE6] hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5"
              >
                <span>@hkstonesculptures2504</span>
                <FiArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
