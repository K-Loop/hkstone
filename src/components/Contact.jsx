import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    sculptureType: 'Hindu God Sculpture',
    dimensions: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-[#EBE4D6] border-b border-[#1C1917]/15 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-14">
        {/* Section Index */}
        <div className="flex items-center justify-between border-b border-[#1C1917]/15 pb-5 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A85338]">
              08 / Commission
            </span>
            <span className="w-8 h-[1px] bg-[#1C1917]/30" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5C544B]">
              Begin a Dialogue
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs uppercase tracking-[0.25em] text-[#8E785F]">
            Hari Krishnan Stone Sculptures
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* Left Editorial Contact Details (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-6"
          >
            <span className="text-xs uppercase tracking-[0.28em] text-[#A85338] block mb-4 font-medium">
              Private &amp; Institutional Enquiries
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl xl:text-6xl text-[#1C1917] font-normal leading-[1.06] mb-6">
              Let&apos;s Create{' '}
              <span className="italic font-light text-[#A85338]">
                Something Timeless.
              </span>
            </h2>

            <p className="text-[#5C544B] text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl">
              Have a sculpture or architectural vision in mind? Let&apos;s bring your ideas to
              life. Connect directly with our workshop in Senjeri, Perambalur for custom deity
              idols, temple pillars, or bespoke stone carvings.
            </p>

            {/* Primary WhatsApp CTA & Official YouTube Reference */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="https://wa.me/918940705654?text=Hello%20HK%20Stone%20Sculpture%2C%20I%20would%20like%20to%20enquire%20about%20commissioning%20a%20stone%20sculpture."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1C1917] text-[#F6F2EA] text-xs uppercase tracking-[0.22em] hover:bg-[#A85338] transition-all duration-300"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
                <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://www.youtube.com/@hkstonesculptures2504"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 border border-[#1C1917]/30 text-[#1C1917] text-xs uppercase tracking-[0.2em] hover:border-[#1C1917] hover:bg-[#F6F2EA] transition-all duration-300"
              >
                <FaYoutube className="w-4 h-4 text-[#A85338]" />
                <span>@hkstonesculptures2504</span>
              </a>
            </div>

            {/* Official Studio Contact Details from Brand Card */}
            <div className="border-t border-[#1C1917]/15 divide-y divide-[#1C1917]/15">
              <div className="py-5 flex items-start gap-4">
                <div className="w-10 h-10 border border-[#1C1917]/20 flex items-center justify-center text-[#A85338] shrink-0 mt-0.5">
                  <FiPhone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#8E785F] block">
                    Direct Telephone &amp; WhatsApp
                  </span>
                  <div className="font-serif text-xl sm:text-2xl text-[#1C1917] flex flex-wrap items-center gap-x-4 gap-y-1 mt-0.5">
                    <a
                      href="tel:+918940705654"
                      className="hover:text-[#A85338] transition-colors"
                    >
                      +91 89407 05654
                    </a>
                    <span className="text-[#8E785F]">&bull;</span>
                    <a
                      href="tel:+918610713565"
                      className="hover:text-[#A85338] transition-colors"
                    >
                      +91 86107 13565
                    </a>
                  </div>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <div className="w-10 h-10 border border-[#1C1917]/20 flex items-center justify-center text-[#A85338] shrink-0 mt-0.5">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#8E785F] block">
                    Workshop &amp; Studio Location
                  </span>
                  <p className="font-serif text-xl text-[#1C1917] mt-0.5 leading-snug">
                    Dhanalakshmi College Opp, Thuraiyur Main Road, <br />
                    Senjeri, Perambalur &ndash; 621 212, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <div className="w-10 h-10 border border-[#1C1917]/20 flex items-center justify-center text-[#A85338] shrink-0 mt-0.5">
                  <FiMail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#8E785F] block">
                    Commission Desk Email
                  </span>
                  <p className="font-serif text-xl text-[#1C1917] mt-0.5">
                    [Email Placeholder &mdash; Enquire Direct via Phone or WhatsApp]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Commission Brief Inquiry Form (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="lg:col-span-6 bg-[#F6F2EA] p-8 sm:p-12 border border-[#1C1917]/15"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1C1917]/10">
              <img
                src="/images/hk-logo.jpg"
                alt="Hari Krishnan Stone Sculptures Logo"
                className="w-14 h-14 rounded-full object-cover object-top border border-[#A85338]/50 shrink-0"
              />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A85338] block mb-1">
                  Commission Brief
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-normal leading-tight">
                  Request a Custom Sculpture Consultation
                </h3>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <FiCheckCircle className="w-12 h-12 text-[#A85338] mx-auto" />
                <h4 className="font-serif text-3xl text-[#1C1917]">
                  Commission Brief Ready
                </h4>
                <p className="text-sm text-[#5C544B] max-w-md mx-auto leading-relaxed">
                  Thank you for outlining your vision for{' '}
                  <strong className="text-[#1C1917]">{formState.sculptureType}</strong>. Click
                  below to send your brief directly to Hari Krishnan Stone Sculptures on WhatsApp.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/918940705654?text=${encodeURIComponent(
                      `Hello Hari Krishnan Stone Sculptures,\nName: ${formState.name}\nCategory: ${formState.sculptureType}\nScale/Stone: ${formState.dimensions}\nDetails: ${formState.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#1C1917] text-[#F6F2EA] text-xs uppercase tracking-[0.2em] hover:bg-[#A85338] transition-colors inline-flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Send via WhatsApp (+91 89407 05654)</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3.5 border border-[#1C1917]/30 text-xs uppercase tracking-[0.2em] text-[#1C1917] hover:bg-[#EBE4D6] transition-colors cursor-pointer"
                  >
                    Edit Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="patron-name"
                    className="block text-[11px] uppercase tracking-[0.22em] text-[#5C544B] mb-2"
                  >
                    Your Name / Temple Trust / Firm
                  </label>
                  <input
                    id="patron-name"
                    type="text"
                    required
                    placeholder="e.g., Sri Kailash Temple Trust / Architect Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1917]/30 py-3 text-[#1C1917] placeholder:text-[#8E785F]/60 focus:border-[#A85338] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="sculpture-category"
                      className="block text-[11px] uppercase tracking-[0.22em] text-[#5C544B] mb-2"
                    >
                      Sculpture Discipline
                    </label>
                    <select
                      id="sculpture-category"
                      value={formState.sculptureType}
                      onChange={(e) =>
                        setFormState({ ...formState, sculptureType: e.target.value })
                      }
                      className="w-full bg-[#F6F2EA] border-b border-[#1C1917]/30 py-3 text-[#1C1917] focus:border-[#A85338] focus:outline-none transition-colors"
                    >
                      <option>Hindu God Sculpture</option>
                      <option>Monolithic Shiva Lingam</option>
                      <option>Buddha Statue</option>
                      <option>Temple Pillars &amp; Architecture</option>
                      <option>Decorative Stone Relief</option>
                      <option>Custom Architectural Carving</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="sculpture-scale"
                      className="block text-[11px] uppercase tracking-[0.22em] text-[#5C544B] mb-2"
                    >
                      Approximate Scale / Stone
                    </label>
                    <input
                      id="sculpture-scale"
                      type="text"
                      placeholder="e.g., 4 ft Black Granite"
                      value={formState.dimensions}
                      onChange={(e) =>
                        setFormState({ ...formState, dimensions: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-[#1C1917]/30 py-3 text-[#1C1917] placeholder:text-[#8E785F]/60 focus:border-[#A85338] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-notes"
                    className="block text-[11px] uppercase tracking-[0.22em] text-[#5C544B] mb-2"
                  >
                    Iconography &amp; Architectural Notes
                  </label>
                  <textarea
                    id="project-notes"
                    rows={3}
                    placeholder="Describe posture, mudra, sanctum dimensions, or architectural context..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1917]/30 py-3 text-[#1C1917] placeholder:text-[#8E785F]/60 focus:border-[#A85338] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1C1917] text-[#F6F2EA] text-xs uppercase tracking-[0.24em] hover:bg-[#A85338] transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Prepare Commission Brief</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
