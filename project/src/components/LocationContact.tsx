import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

export function LocationContact() {
  const { t } = useI18n();
  const sectionRef = useReveal<HTMLDivElement>();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-gradient-to-b from-[#fdf9f8] to-[#fdf6f4]">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs font-sans tracking-[0.25em] uppercase text-[#d27b6d] mb-4">
            {t.location.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2a2320] mb-2">
            {t.location.title}
          </h2>
          <div className="w-16 h-px bg-[#d27b6d]/40 mx-auto mt-6" />
        </div>

        {/* Location card */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_24px_rgba(210,123,109,0.06)] border border-[#f5d3cd]/30 text-center">
            <div className="w-16 h-16 rounded-full bg-[#fdf6f4] flex items-center justify-center mx-auto mb-6 border border-[#f5d3cd]/40">
              <MapPin className="w-7 h-7 text-[#d27b6d]" />
            </div>
            <p className="font-serif text-2xl text-[#2a2320] mb-2">{t.location.address}</p>
            <p className="text-sm font-sans text-[#2a2320]/50">Érd, Magyarország</p>
          </div>
        </div>

        {/* Contact section */}
        <div id="contact" className="scroll-mt-20">
          <div className="text-center mb-12">
            <p className="text-xs font-sans tracking-[0.25em] uppercase text-[#d27b6d] mb-4">
              {t.contact.subtitle}
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-[#2a2320]">
              {t.contact.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Phone card */}
            <div className="bg-white rounded-2xl p-8 border border-[#f5d3cd]/30 shadow-[0_2px_16px_rgba(210,123,109,0.04)] hover:shadow-[0_8px_28px_rgba(210,123,109,0.08)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-[#fdf6f4] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#d27b6d]" />
                </div>
                <h4 className="font-serif text-xl text-[#2a2320]">{t.contact.phone}</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-sans text-[#2a2320]/40 mb-1">{t.contact.phoneMassage}</p>
                  <a href="tel:+36203611099" className="text-sm font-sans text-[#d27b6d] hover:text-[#c47e7e] transition-colors">
                    +36 20 361 1099
                  </a>
                </div>
              </div>
            </div>

            {/* Email card */}
            <div className="bg-white rounded-2xl p-8 border border-[#f5d3cd]/30 shadow-[0_2px_16px_rgba(210,123,109,0.04)] hover:shadow-[0_8px_28px_rgba(210,123,109,0.08)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-[#fdf6f4] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#d27b6d]" />
                </div>
                <h4 className="font-serif text-xl text-[#2a2320]">{t.contact.email}</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-sans text-[#2a2320]/40 mb-1">{t.contact.emailMassage}</p>
                  <a href="mailto:telepobea@gmail.com" className="text-sm font-sans text-[#d27b6d] hover:text-[#c47e7e] transition-colors break-all">
                    telepobea@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://www.facebook.com/share/1Byj1uuQY7/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/60 border border-[#f5d3cd]/30 hover:bg-white hover:border-[#d27b6d]/40 transition-all duration-300"
            >
              <Facebook className="w-5 h-5 text-[#d27b6d]" />
              <span className="text-sm font-sans text-[#2a2320]/70 hover:text-[#d27b6d] transition-colors">Facebook</span>
            </a>
          </div>

          {/* Book now CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => scrollTo('booking')}
              className="px-10 py-4 text-sm font-sans font-medium tracking-wide text-white bg-[#d27b6d] rounded-full hover:bg-[#c47e7e] transition-all duration-300 shadow-[0_8px_24px_rgba(210,123,109,0.25)] hover:shadow-[0_12px_32px_rgba(210,123,109,0.35)] hover:-translate-y-1"
            >
              {t.nav.bookButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
