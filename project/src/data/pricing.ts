export type BilingualName = { hu: string; en: string };

export interface PricingItem {
  name: BilingualName;
  /** Optional duration label, e.g. "30 perc" / "30 min" */
  duration?: BilingualName;
  price: number;
  /** If price starts from, e.g. kinesio tape */
  fromPrice?: boolean;
}

export interface PricingCategoryData {
  category: string;
  items: PricingItem[];
}

export const SHR_PRICING: PricingCategoryData[] = [
  {
    category: 'face',
    items: [
      { name: { hu: 'Teljes arc', en: 'Full face' }, price: 10000 },
      { name: { hu: 'Áll', en: 'Chin' }, price: 3000 },
      { name: { hu: 'Homlok', en: 'Forehead' }, price: 3000 },
      { name: { hu: 'Fül', en: 'Ears' }, price: 3000 },
      { name: { hu: 'Orca', en: 'Cheeks' }, price: 3000 },
      { name: { hu: 'Bajusz', en: 'Upper lip' }, price: 3000 },
      { name: { hu: 'Nyak', en: 'Neck' }, price: 5000 },
      { name: { hu: 'Szemöldök közötti rész', en: 'Between eyebrows' }, price: 3000 },
    ],
  },
  {
    category: 'body',
    items: [
      { name: { hu: 'Teljes test', en: 'Full body' }, price: 60000 },
      { name: { hu: 'Teljes hát', en: 'Full back' }, price: 25000 },
      { name: { hu: 'Mellkas', en: 'Chest' }, price: 15000 },
      { name: { hu: 'Derék', en: 'Waist' }, price: 10000 },
      { name: { hu: 'Has', en: 'Abdomen' }, price: 10000 },
      { name: { hu: 'Farpofák', en: 'Buttocks' }, price: 10000 },
      { name: { hu: 'Hónalj', en: 'Underarms' }, price: 9000 },
      { name: { hu: 'Hascsík', en: 'Abdominal line' }, price: 5000 },
      { name: { hu: 'Mellbimbó körül', en: 'Around nipples' }, price: 3000 },
    ],
  },
  {
    category: 'intimate',
    items: [
      { name: { hu: 'Teljes intim', en: 'Full intimate' }, price: 18000 },
      { name: { hu: 'Bikini vonal', en: 'Bikini line' }, price: 10000 },
    ],
  },
  {
    category: 'arms',
    items: [
      { name: { hu: 'Teljes kar', en: 'Full arm' }, price: 15000 },
      { name: { hu: 'Alkar', en: 'Forearm' }, price: 8000 },
      { name: { hu: 'Felkar', en: 'Upper arm' }, price: 8000 },
    ],
  },
  {
    category: 'legs',
    items: [
      { name: { hu: 'Teljes láb', en: 'Full leg' }, price: 25000 },
      { name: { hu: 'Comb', en: 'Thigh' }, price: 15000 },
      { name: { hu: 'Lábszár', en: 'Lower leg' }, price: 13000 },
    ],
  },
];

export const MASSAGE_PRICING: PricingCategoryData[] = [
  {
    category: 'classic',
    items: [
      {
        name: { hu: 'Svéd-, gyógy-, sport- és relaxáló masszázs', en: 'Swedish, therapeutic, sports & relaxing massage' },
        duration: { hu: '30 perc', en: '30 min' },
        price: 6000,
      },
      {
        name: { hu: 'Svéd-, gyógy-, sport- és relaxáló masszázs', en: 'Swedish, therapeutic, sports & relaxing massage' },
        duration: { hu: '45 perc', en: '45 min' },
        price: 8500,
      },
      {
        name: { hu: 'Svéd-, gyógy-, sport- és relaxáló masszázs', en: 'Swedish, therapeutic, sports & relaxing massage' },
        duration: { hu: '60 perc', en: '60 min' },
        price: 11500,
      },
      {
        name: { hu: 'Talpmasszázs', en: 'Foot massage' },
        duration: { hu: '30 perc', en: '30 min' },
        price: 6000,
      },
      {
        name: { hu: 'Fej- és arcmasszázs', en: 'Head & face massage' },
        duration: { hu: '30 perc', en: '30 min' },
        price: 6000,
      },
      {
        name: { hu: 'Nyirokmasszázs', en: 'Lymphatic drainage massage' },
        duration: { hu: '30 perc', en: '30 min' },
        price: 8000,
      },
    ],
  },
  {
    category: 'special',
    items: [
      {
        name: { hu: 'Speciális zsírödéma masszázs', en: 'Special lipedema massage' },
        duration: { hu: '30 perc', en: '30 min' },
        price: 8000,
      },
      {
        name: { hu: 'Body Wrapping / Cellulit kezelés', en: 'Body Wrapping / Cellulite treatment' },
        duration: { hu: '30 perc', en: '30 min' },
        price: 7000,
      },
    ],
  },
];

export const SPINE_PRICING: PricingCategoryData[] = [
  {
    category: 'spine',
    items: [
      {
        name: { hu: 'Gerincterápia', en: 'Spine therapy' },
        duration: { hu: '30 perc', en: '30 min' },
        price: 6000,
      },
      {
        name: { hu: 'Gerincterápia', en: 'Spine therapy' },
        duration: { hu: '45 perc', en: '45 min' },
        price: 8500,
      },
      {
        name: { hu: 'Gerincterápia', en: 'Spine therapy' },
        duration: { hu: '60 perc', en: '60 min' },
        price: 11500,
      },
      {
        name: { hu: 'Nyak — váll — hát kezelés', en: 'Neck — shoulder — back treatment' },
        duration: { hu: '30 perc', en: '30 min' },
        price: 6000,
      },
      {
        name: { hu: 'Nyak — váll — hát kezelés', en: 'Neck — shoulder — back treatment' },
        duration: { hu: '45 perc', en: '45 min' },
        price: 8500,
      },
      {
        name: { hu: 'Nyak — váll — hát kezelés', en: 'Neck — shoulder — back treatment' },
        duration: { hu: '60 perc', en: '60 min' },
        price: 11500,
      },
      {
        name: { hu: 'Triggerpont kezelés (területenként)', en: 'Trigger point treatment (per area)' },
        duration: { hu: '30 perc', en: '30 min' },
        price: 6000,
      },
      {
        name: { hu: 'Köpölyözés', en: 'Cupping' },
        price: 4500,
      },
    ],
  },
  {
    category: 'bone',
    items: [
      {
        name: { hu: 'Csontkovácsolás / lágy csontkovácsolás / manuálterápia', en: 'Bone alignment / gentle bone alignment / manual therapy' },
        duration: { hu: '45 perc', en: '45 min' },
        price: 9000,
      },
      {
        name: { hu: 'Kinesio tape', en: 'Kinesio tape' },
        price: 4000,
        fromPrice: true,
      },
    ],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('hu-HU').format(price) + ' Ft';
}
