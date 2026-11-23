import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0B0A] text-[#F5F2EB] py-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          className="flex items-center gap-3"
        >
          <img
            src="/images/hk-logo.jpg"
            alt="HK Stone Sculpture"
            className="w-9 h-9 rounded-full object-cover object-top border border-[#D48C46]"
          />
          <div>
            <span className="font-display text-sm tracking-[0.14em] uppercase text-[#F5F2EB] block leading-none">
              HK Stone Sculpture
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#9E9589] mt-1 block">
              Hari Krishnan Stone Sculptures &bull; Perambalur
            </span>
          </div>
        </a>

        <p className="text-xs text-[#9E9589]">
          &copy; {new Date().getFullYear()} HK Stone Sculpture. Handcrafted in Perambalur, Tamil Nadu.
        </p>

        <div className="flex items-center gap-2.5">
          <a
            href="https://www.youtube.com/@hkstonesculptures2504"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#F5F2EB] hover:border-[#D48C46] hover:text-[#D48C46] transition-colors"
          >
            <FaYoutube className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://wa.me/918940705654"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#F5F2EB] hover:border-[#D48C46] hover:text-[#D48C46] transition-colors"
          >
            <FaWhatsapp className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#F5F2EB] hover:border-[#D48C46] hover:text-[#D48C46] transition-colors"
          >
            <FaInstagram className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
