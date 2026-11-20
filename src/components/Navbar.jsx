import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
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
          ? 'bg-[#F6F2EA]/95 backdrop-blur-md border-b border-[#1C1917]/10 py-3.5 shadow-[0_4px_30px_rgba(28,25,23,0.04)]'
          : 'bg-[#F6F2EA]/80 backdrop-blur-sm py-5 border-b border-[#1C1917]/10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-14 flex items-center justify-between gap-4">
        {/* Official Brand Logo + Single-Line Title */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3.5 shrink-0 focus:outline-none"
          aria-label="HK Stone Sculpture Home"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#A85338]/60 shadow-sm shrink-0 bg-[#8A1C14] flex items-center justify-center group-hover:border-[#A85338] transition-all duration-300">
            <img
              src="/images/hk-logo.jpg"
              alt="Hari Krishnan Stone Sculptures Official Logo"
              className="w-full h-full object-cover object-top scale-[1.15]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-lg sm:text-xl xl:text-[22px] tracking-[0.1em] uppercase font-semibold text-[#1C1917] leading-tight whitespace-nowrap">
              HK Stone Sculpture
            </span>
            <span className="text-[9.5px] uppercase tracking-[0.22em] text-[#A85338] font-medium whitespace-nowrap">
              Hari Krishnan Stone Sculptures
            </span>
          </div>
        </a>

        {/* Desktop Navigation — Strictly Single-Line (`whitespace-nowrap`) & Centered */}
        <nav
          className="hidden lg:flex items-center justify-center gap-6 xl:gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-[11px] xl:text-xs uppercase tracking-[0.18em] py-1.5 whitespace-nowrap transition-colors duration-300 ${
                  isActive
                    ? 'text-[#A85338] font-semibold'
                    : 'text-[#1C1917]/80 hover:text-[#1C1917]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#A85338] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop WhatsApp CTA — Strictly Single-Line (`whitespace-nowrap`) */}
        <div className="hidden lg:flex items-center shrink-0">
          <a
            href="https://wa.me/918940705654?text=Hello%20HK%20Stone%20Sculpture%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20sculpture."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 px-5 xl:px-6 py-3 border border-[#1C1917] bg-[#1C1917] text-[#F6F2EA] text-[11px] uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 hover:bg-[#A85338] hover:border-[#A85338]"
          >
            <FaWhatsapp className="w-4 h-4 text-[#F6F2EA] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          className="lg:hidden w-11 h-11 border border-[#1C1917]/20 flex items-center justify-center text-[#1C1917] hover:border-[#A85338] hover:text-[#A85338] transition-colors cursor-pointer shrink-0"
        >
          {mobileOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenuAlt4 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#F6F2EA] border-b border-[#1C1917]/15 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-serif text-2xl text-[#1C1917] hover:text-[#A85338] transition-colors border-b border-[#1C1917]/10 pb-3 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#8E785F]">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}

              <a
                href="https://wa.me/918940705654?text=Hello%20HK%20Stone%20Sculpture%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20sculpture."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-4 bg-[#1C1917] text-[#F6F2EA] text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#A85338] transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
