import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';

const navLinks = [
  { name: 'Gallery', href: '#creations' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D0B0A]/95 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-[#0D0B0A]/80 backdrop-blur-sm border-b border-white/5 py-4.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between gap-4">
        {/* LEFT: Minimal Logo & Atelier Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3.5 shrink-0 focus:outline-none"
        >
          <img
            src="/images/hk-logo.jpg"
            alt="HK Stone Sculpture Logo"
            className="w-10 h-10 rounded-full object-cover object-top border border-[#D48C46]/70"
          />
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg tracking-[0.12em] uppercase text-[#F5F2EB] font-medium leading-none">
              HK Stone Sculpture
            </span>
            <span className="text-[9.5px] uppercase tracking-[0.22em] text-[#9E9589] mt-1">
              Stone Sculpture Atelier
            </span>
          </div>
        </a>

        {/* RIGHT: Minimal Nav Links + WhatsApp Pill */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] text-[#F5F2EB]/80 hover:text-[#D48C46] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/918940705654?text=Hello%20HK%20Stone%20Sculpture%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20sculpture."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D48C46] text-[#0D0B0A] font-medium text-[11px] uppercase tracking-[0.14em] hover:bg-[#e09b56] transition-colors"
          >
            <FaWhatsapp className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="md:hidden w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-[#F5F2EB] cursor-pointer"
        >
          {mobileOpen ? <HiOutlineX className="w-5 h-5" /> : <HiOutlineMenuAlt4 className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D0B0A] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-[0.2em] text-[#F5F2EB] py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/918940705654"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 rounded-full bg-[#D48C46] text-[#0D0B0A] font-semibold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      )}
    </header>
  );
}
