import { useI18n } from '@/i18n/I18nContext';
import { Sparkles } from 'lucide-react';

export function Footer() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2a2320] text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#d27b6d]" />
            <span className="font-serif text-2xl text-white">
              Bea <span className="text-[#d27b6d]">Masszázsterápia</span>
            </span>
          </div>

          <p className="font-serif text-lg italic text-white/60 mb-8">
            {t.footer.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {[
              { id: 'services', label: t.nav.services },
              { id: 'pricing', label: t.nav.pricing },
              { id: 'booking', label: t.nav.booking },
              { id: 'faq', label: t.nav.faq },
              { id: 'location', label: t.nav.location },
              { id: 'contact', label: t.nav.contact },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-sans text-white/60 hover:text-[#d27b6d] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="w-16 h-px bg-white/10 mb-8" />

          <p className="text-sm font-sans text-white/40">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
