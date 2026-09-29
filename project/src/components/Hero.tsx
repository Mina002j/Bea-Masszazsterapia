import { Sparkles } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

export function Hero() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fdf6f4] via-[#faf7f5] to-[#f9ebeb]"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[#f5d3cd]/30 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#fbe9e6]/40 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#fdf6f4]/50 blur-3xl" />
      </div>

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d27b6d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#eeb8af]/40 mb-8">
          <Sparkles className="w-4 h-4 text-[#d27b6d]" />
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#d27b6d]">
            Érd • {t.hero.subtitle.split('•')[0].trim()}
          </span>
        </div>

        <h1 className="animate-fade-in-up delay-200 font-serif text-5xl md:text-7xl lg:text-8xl text-[#2a2320] mb-4 tracking-wide">
          {t.hero.title.split(' ')[0]}{' '}
          <span className="text-[#d27b6d] italic">
            {t.hero.title.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        <p className="animate-fade-in-up delay-400 text-sm md:text-base font-sans tracking-[0.15em] text-[#2a2320]/70 mb-6 uppercase">
          {t.hero.subtitle}
        </p>

        <div className="animate-fade-in-up delay-600 mb-12">
          <p className="font-serif text-2xl md:text-3xl italic text-[#2a2320]/80 max-w-2xl mx-auto leading-relaxed">
            {t.hero.slogan}
          </p>
        </div>

        <div className="animate-fade-in-up delay-800 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('booking')}
            className="px-10 py-4 text-sm font-sans font-medium tracking-wide text-white bg-[#d27b6d] rounded-full hover:bg-[#c47e7e] transition-all duration-300 shadow-[0_8px_24px_rgba(210,123,109,0.3)] hover:shadow-[0_12px_32px_rgba(210,123,109,0.4)] hover:-translate-y-1"
          >
            {t.hero.bookBtn}
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="px-10 py-4 text-sm font-sans font-medium tracking-wide text-[#2a2320] bg-white/70 backdrop-blur-sm rounded-full border border-[#eeb8af]/50 hover:bg-white hover:border-[#d27b6d] transition-all duration-300 hover:-translate-y-1"
          >
            {t.hero.servicesBtn}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-800">
        <div className="w-6 h-10 rounded-full border-2 border-[#d27b6d]/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#d27b6d]/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
