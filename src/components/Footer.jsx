import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUpRight, FiMapPin, FiPhone } from 'react-icons/fi';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About the Atelier', href: '#about' },
  { name: 'Signature Creations', href: '#creations' },
  { name: 'Our Craft & Services', href: '#services' },
  { name: 'The Art of Creation', href: '#process' },
  { name: 'Commission & Contact', href: '#contact' },
];

const serviceLinks = [
  { name: 'Hindu God Sculptures', href: '#services' },
  { name: 'Monolithic Shiva Lingam', href: '#services' },
  { name: 'Serene Buddha Statues', href: '#services' },
  { name: 'Temple Architecture & Pillars', href: '#services' },
  { name: 'Decorative Stone Sculptures', href: '#services' },
  { name: 'Custom Stone Carving', href: '#services' },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#131110] text-[#F6F2EA] pt-20 pb-12 border-t border-[#F6F2EA]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-[#F6F2EA]/15">
          {/* Brand Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="#home"
                onClick={(e) => scrollTo(e, '#home')}
                className="inline-flex items-center gap-4 mb-6 group"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#A85338]/70 shrink-0 bg-[#8A1C14] flex items-center justify-center">
                  <img
                    src="/images/hk-logo.jpg"
                    alt="Hari Krishnan Stone Sculptures Official Logo"
                    className="w-full h-full object-cover object-top scale-[1.15]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl tracking-[0.12em] uppercase font-semibold text-[#F6F2EA] leading-tight">
                    HK Stone Sculpture
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#A85338] mt-1 font-medium">
                    Hari Krishnan Stone Sculptures
                  </span>
                </div>
              </a>

              <p className="text-sm text-[#DFD6C5]/75 font-light leading-relaxed max-w-md mb-6">
                Dedicated to preserving India&apos;s sacred stone carving heritage. Handcrafting
                monolithic Hindu deities, Shiva Lingams, serene Buddha statues, and traditional
                temple architecture with devotion and timeless precision.
              </p>

              <div className="space-y-2 text-xs text-[#DFD6C5]/80 mb-8">
                <p className="flex items-start gap-2.5">
                  <FiMapPin className="w-4 h-4 text-[#A85338] shrink-0 mt-0.5" />
                  <span>
                    Dhanalakshmi College Opp, Thuraiyur Main Road, Senjeri, Perambalur &ndash; 621 212
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <FiPhone className="w-4 h-4 text-[#A85338] shrink-0" />
                  <span>+91 89407 05654 / +91 86107 13565</span>
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@hkstonesculptures2504"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HK Stone Sculpture YouTube Channel"
                className="w-11 h-11 border border-[#F6F2EA]/20 flex items-center justify-center text-[#F6F2EA] hover:bg-[#A85338] hover:border-[#A85338] transition-colors"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918940705654"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Enquiry"
                className="w-11 h-11 border border-[#F6F2EA]/20 flex items-center justify-center text-[#F6F2EA] hover:bg-[#A85338] hover:border-[#A85338] transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                aria-label="HK Stone Sculpture Instagram Reference"
                className="w-11 h-11 border border-[#F6F2EA]/20 flex items-center justify-center text-[#F6F2EA] hover:bg-[#A85338] hover:border-[#A85338] transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.26em] text-[#A85338] font-medium mb-6">
              Navigation
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm text-[#DFD6C5]/80 hover:text-[#F6F2EA] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{link.name}</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A85338]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (4 Cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.26em] text-[#A85338] font-medium mb-6">
              Sacred Craft &amp; Services
            </h3>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm text-[#DFD6C5]/80 hover:text-[#F6F2EA] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{link.name}</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A85338]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8E785F]">
          <p>
            &copy; {new Date().getFullYear()} Hari Krishnan Stone Sculptures (HK Stone Sculpture).
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/@hkstonesculptures2504"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F6F2EA] transition-colors uppercase tracking-[0.2em]"
            >
              YouTube: @hkstonesculptures2504
            </a>
            <span className="uppercase tracking-[0.2em]">Senjeri, Perambalur</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
