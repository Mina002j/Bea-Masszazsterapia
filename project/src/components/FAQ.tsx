import { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const { t } = useI18n();
  const sectionRef = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#fdf9f8]">
      <div ref={sectionRef} className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs font-sans tracking-[0.25em] uppercase text-[#d27b6d] mb-4">
            {t.faq.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2a2320] mb-2">
            {t.faq.title}
          </h2>
          <div className="w-16 h-px bg-[#d27b6d]/40 mx-auto mt-6" />
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? 'bg-white border-[#d27b6d]/30 shadow-[0_4px_20px_rgba(210,123,109,0.06)]'
                  : 'bg-white/60 border-[#f5d3cd]/30 hover:border-[#d27b6d]/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-serif text-lg text-[#2a2320] pr-4">
                  {item.q}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? 'bg-[#d27b6d] text-white rotate-180' : 'bg-[#fdf6f4] text-[#d27b6d]'
                  }`}
                >
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openIndex === i ? 'max-h-300px' : 'max-h-0'
                }`}
                style={{ maxHeight: openIndex === i ? '300px' : '0px' }}
              >
                <div className="px-6 pb-5">
                  <p className="text-sm font-sans text-[#2a2320]/65 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
