import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

export function Navbar() {
  const { t, lang, toggleLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'booking', label: t.nav.booking },
    { id: 'faq', label: t.nav.faq },
    { id: 'location', label: t.nav.location },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#fdf9f8]/95 backdrop-blur-md shadow-[0_1px_20px_rgba(210,123,109,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="font-serif text-xl md:text-2xl tracking-wide text-[#2a2320] hover:text-[#d27b6d] transition-colors duration-300"
        >
          Bea <span className="text-[#d27b6d]">Masszázsterápia</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-sans text-[#2a2320]/80 hover:text-[#d27b6d] transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d27b6d] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-sans text-[#2a2320]/80 hover:text-[#d27b6d] transition-colors duration-300 px-3 py-1.5 rounded-full border border-[#eeb8af]/60 hover:border-[#d27b6d] hover:bg-[#fdf6f4]"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium">{lang.toUpperCase()}</span>
          </button>

          {/* Book button - desktop */}
          <button
            onClick={() => scrollTo('booking')}
            className="hidden md:block px-6 py-2.5 text-sm font-sans font-medium text-white bg-[#d27b6d] rounded-full hover:bg-[#c47e7e] transition-all duration-300 shadow-[0_4px_14px_rgba(210,123,109,0.25)] hover:shadow-[0_6px_20px_rgba(210,123,109,0.35)] hover:-translate-y-0.5"
          >
            {t.nav.bookButton}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#2a2320] p-1"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 bg-[#fdf9f8]/98 backdrop-blur-md flex flex-col gap-1 border-t border-[#eeb8af]/30 mt-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left py-3 px-4 text-sm font-sans text-[#2a2320]/80 hover:text-[#d27b6d] hover:bg-[#fdf6f4] rounded-lg transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('booking')}
            className="mt-2 px-6 py-3 text-sm font-sans font-medium text-white bg-[#d27b6d] rounded-full hover:bg-[#c47e7e] transition-colors duration-300 text-center"
          >
            {t.nav.bookButton}
          </button>
        </div>
      </div>
    </header>
  );
}
