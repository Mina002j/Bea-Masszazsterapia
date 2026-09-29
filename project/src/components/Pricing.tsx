import { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import {
  SHR_PRICING,
  MASSAGE_PRICING,
  SPINE_PRICING,
  formatPrice,
  type PricingCategoryData,
  type PricingItem,
} from '@/data/pricing';
import { Sparkles, Hand, Bone, ChevronDown } from 'lucide-react';
import type { Language } from '@/i18n/translations';

type TabId = 'shr' | 'massage' | 'spine';

export function Pricing() {
  const { t, lang } = useI18n();
  const sectionRef = useReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState<TabId>('shr');

  const tabs: { id: TabId; label: string; icon: typeof Sparkles }[] = [
    { id: 'massage', label: t.pricing.massageTitle, icon: Hand },
    { id: 'spine', label: t.pricing.spineTitle, icon: Bone },
    { id: 'shr', label: t.pricing.shrTitle, icon: Sparkles },
  ];

  const pricingData: Record<TabId, PricingCategoryData[]> = {
    shr: SHR_PRICING,
    massage: MASSAGE_PRICING,
    spine: SPINE_PRICING,
  };

  const tabTitle: Record<TabId, string> = {
    shr: t.pricing.shrTitle,
    massage: t.pricing.massageTitle,
    spine: t.pricing.spineTitle,
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-gradient-to-b from-[#fdf9f8] to-[#fdf6f4]">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-xs font-sans tracking-[0.25em] uppercase text-[#d27b6d] mb-4">
            {t.pricing.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2a2320] mb-2">
            {t.pricing.title}
          </h2>
          <div className="w-16 h-px bg-[#d27b6d]/40 mx-auto mt-6" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#d27b6d] text-white shadow-[0_6px_18px_rgba(210,123,109,0.25)]'
                  : 'bg-white text-[#2a2320]/70 border border-[#f5d3cd]/50 hover:border-[#d27b6d] hover:text-[#d27b6d]'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active pricing */}
        <div key={activeTab} className="animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl text-[#2a2320]">{tabTitle[activeTab]}</h3>
            <p className="text-xs text-[#2a2320]/50 mt-1">{t.pricing.perSession}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingData[activeTab].map((cat) => (
              <PricingCategory key={cat.category} category={cat.category} lang={lang} items={cat.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCategory({
  category,
  lang,
  items,
}: {
  category: string;
  lang: Language;
  items: PricingItem[];
}) {
  const { t } = useI18n();
  const [open, setOpen] = useState(true);

  const categoryLabel = t.pricing.categories[category as keyof typeof t.pricing.categories] ?? category;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#f5d3cd]/30 shadow-[0_2px_12px_rgba(210,123,109,0.04)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#fdf6f4] to-[#fbe9e6] hover:from-[#fbe9e6] hover:to-[#f5d3cd]/40 transition-colors duration-300"
      >
        <h4 className="font-serif text-lg text-[#2a2320] text-left pr-2">{categoryLabel}</h4>
        <ChevronDown
          className={`w-5 h-5 text-[#d27b6d] transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? 'max-h-[800px]' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start justify-between py-3 border-b border-[#f5d3cd]/20 last:border-0 group hover:bg-[#fdf6f4]/50 rounded-lg px-2 -mx-2 transition-colors duration-200 gap-3"
            >
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-sans text-[#2a2320]/75 group-hover:text-[#2a2320] transition-colors leading-snug">
                  {item.name[lang]}
                </span>
                {item.duration && (
                  <span className="text-xs font-sans text-[#2a2320]/40 mt-0.5">
                    {item.duration[lang]}
                  </span>
                )}
              </div>
              <span className="text-sm font-sans font-medium text-[#d27b6d] whitespace-nowrap flex-shrink-0 mt-0.5">
                {item.fromPrice ? `${formatPrice(item.price)}${t.pricing.fromPrice}` : formatPrice(item.price)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
