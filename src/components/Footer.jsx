import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0A09] text-[#F4EFE6] py-14 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          className="flex items-center gap-3.5"
        >
          <img
            src="/images/hk-logo.jpg"
            alt="HK Stone Sculpture"
            className="w-11 h-11 rounded-full object-cover object-top border border-[#D4AF37]"
          />
          <div>
            <span className="font-serif text-lg tracking-[0.16em] uppercase text-[#F4EFE6] block leading-none">
              HK Stone Sculpture
            </span>
            <span className="text-[9.5px] uppercase tracking-[0.24em] text-[#D4AF37] mt-1 block">
              Hari Krishnan Stone Sculptures &bull; Perambalur
            </span>
          </div>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-7 text-[11px] uppercase tracking-[0.22em] text-[#9A8C7E]">
          <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="hover:text-[#D4AF37]">
            Home
          </a>
          <a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hover:text-[#D4AF37]">
            Art of Stone
          </a>
          <a href="#services" onClick={(e) => scrollTo(e, '#services')} className="hover:text-[#D4AF37]">
            Creations
          </a>
          <a href="#process" onClick={(e) => scrollTo(e, '#process')} className="hover:text-[#D4AF37]">
            Process
          </a>
          <a href="#creations" onClick={(e) => scrollTo(e, '#creations')} className="hover:text-[#D4AF37]">
            Gallery
          </a>
          <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="hover:text-[#D4AF37]">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.youtube.com/@hkstonesculptures2504"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#F4EFE6] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          >
            <FaYoutube className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/918940705654"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#F4EFE6] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#F4EFE6] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
