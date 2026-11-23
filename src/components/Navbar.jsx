import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Our Creations', href: '#creations' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0A09]/90 backdrop-blur-xl border-b border-white/10 py-3.5'
          : 'bg-gradient-to-b from-[#0B0A09]/90 via-[#0B0A09]/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 flex items-center justify-between gap-4">
        {/* LEFT: Official Logo + Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3.5 shrink-0 focus:outline-none"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#D4AF37]/70 bg-[#141210] shrink-0 p-[1px] transition-transform duration-500 group-hover:scale-105">
            <img
              src="/images/hk-logo.jpg"
              alt="HK Stone Sculpture Official Logo"
              className="w-full h-full rounded-full object-cover object-top scale-[1.12]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl tracking-[0.16em] uppercase font-medium text-[#F4EFE6] leading-none whitespace-nowrap">
              HK Stone Sculpture
            </span>
            <span className="text-[9.5px] uppercase tracking-[0.24em] text-[#D4AF37] mt-1.5 whitespace-nowrap">
              Hari Krishnan Stone Sculptures
            </span>
          </div>
        </a>

        {/* CENTER: Minimal Gallery Navigation */}
        <nav
          className="hidden lg:flex items-center justify-center gap-8 xl:gap-10"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-[11px] uppercase tracking-[0.24em] py-1.5 whitespace-nowrap transition-colors duration-300 ${
                  isActive
                    ? 'text-[#D4AF37] font-medium'
                    : 'text-[#F4EFE6]/70 hover:text-[#F4EFE6]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-[#D4AF37] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Gold-Trimmed WhatsApp CTA */}
        <div className="hidden lg:flex items-center shrink-0">
          <a
            href="https://wa.me/918940705654?text=Hello%20HK%20Stone%20Sculpture%2C%20I%20would%20like%20to%20enquire%20about%20a%20sculpture."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3 border border-[#D4AF37]/60 bg-[#D4AF37]/10 text-[#F4EFE6] text-[11px] uppercase tracking-[0.22em] whitespace-nowrap transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0A09]"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-[#0B0A09] transition-colors shrink-0" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden w-11 h-11 border border-white/20 flex items-center justify-center text-[#F4EFE6] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer shrink-0"
        >
          {mobileOpen ? <HiOutlineX className="w-5 h-5" /> : <HiOutlineMenuAlt4 className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`lg:hidden bg-[#0B0A09]/98 backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-2xl text-[#F4EFE6] hover:text-[#D4AF37] transition-colors border-b border-white/10 pb-3"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/918940705654"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-4 bg-[#D4AF37] text-[#0B0A09] font-medium text-xs uppercase tracking-[0.22em] flex items-center justify-center gap-3"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </header>
  );
}
