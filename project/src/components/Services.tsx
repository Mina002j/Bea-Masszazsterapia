import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import { Sparkles, Hand, Bone, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export function Services() {
  const { t } = useI18n();
  const sectionRef = useReveal<HTMLDivElement>();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Hand,
      name: t.services.massage.name,
      desc: t.services.massage.desc,
      groups: [
        { label: null, items: t.services.massage.items },
        { label: t.services.specialLabel, items: t.services.massage.specialItems },
      ],
    },
    {
      icon: Bone,
      name: t.services.bone.name,
      desc: t.services.bone.desc,
      groups: [{ label: null, items: t.services.bone.items }],
    },
    {
      icon: Sparkles,
      name: t.services.shr.name,
      desc: t.services.shr.desc,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#fdf9f8]">
      <div ref={sectionRef} className="reveal-stagger max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs font-sans tracking-[0.25em] uppercase text-[#d27b6d] mb-4">
            {t.services.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2a2320] mb-2">
            {t.services.title}
          </h2>
          <div className="w-16 h-px bg-[#d27b6d]/40 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} onBook={() => scrollTo('booking')} bookLabel={t.services.bookBtn} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceEntry = {
  icon: typeof Sparkles;
  name: string;
  desc: string;
  groups?: { label: string | null; items: { name: string; desc: string }[] }[];
};

function ServiceCard({ service, onBook, bookLabel }: { service: ServiceEntry; onBook: () => void; bookLabel: string }) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const hasGroups = service.groups && service.groups.length > 0;

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(210,123,109,0.06)] hover:shadow-[0_20px_60px_rgba(210,123,109,0.12)] transition-all duration-500 hover:-translate-y-2 border border-[#f5d3cd]/30 flex flex-col">
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-full bg-[#fdf0ee] flex items-center justify-center flex-shrink-0">
            <service.icon className="w-5 h-5 text-[#d27b6d]" />
          </div>
          <h3 className="font-serif text-2xl text-[#2a2320] group-hover:text-[#d27b6d] transition-colors duration-300">
            {service.name}
          </h3>
        </div>
        <p className="text-sm font-sans text-[#2a2320]/65 leading-relaxed mb-4">
          {service.desc}
        </p>

        {hasGroups && (
          <div className="mb-4 border-t border-[#f5d3cd]/30 pt-3 flex-1">
            {service.groups!.map((grp, gi) => (
              <div key={gi}>
                {grp.label && (
                  <p className="text-xs font-sans font-medium tracking-wide uppercase text-[#d27b6d]/70 mt-3 mb-1">
                    {grp.label}
                  </p>
                )}
                {grp.items.map((item, j) => {
                  const key = `${gi}-${j}`;
                  return (
                    <div key={key} className="border-b border-[#f5d3cd]/15 last:border-0">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between py-2.5 text-left"
                      >
                        <span className="text-sm font-sans font-medium text-[#2a2320]/80 pr-2">
                          {item.name}
                        </span>
                        {openItem === key ? (
                          <Minus className="w-4 h-4 text-[#d27b6d] flex-shrink-0" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#d27b6d] flex-shrink-0" />
                        )}
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openItem === key ? 'max-h-32 pb-3' : 'max-h-0'
                        }`}
                      >
                        <p className="text-xs font-sans text-[#2a2320]/55 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onBook}
          className="text-sm font-sans font-medium text-[#d27b6d] hover:text-[#c47e7e] transition-colors duration-300 inline-flex items-center gap-2 group/btn mt-auto"
        >
          {bookLabel}
          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
        </button>
      </div>
    </div>
  );
}
