export type Language = 'hu' | 'en';

export interface Translation {
  nav: {
    home: string;
    services: string;
    pricing: string;
    booking: string;
    faq: string;
    location: string;
    contact: string;
    bookButton: string;
  };
  hero: {
    title: string;
    subtitle: string;
    slogan: string;
    bookBtn: string;
    servicesBtn: string;
  };
  services: {
    title: string;
    subtitle: string;
    shr: {
      name: string;
      desc: string;
    };
    massage: {
      name: string;
      desc: string;
      items: { name: string; desc: string }[];
      specialItems: { name: string; desc: string }[];
    };
    bone: {
      name: string;
      desc: string;
      items: { name: string; desc: string }[];
    };
    specialLabel: string;
    bookBtn: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    shrTitle: string;
    massageTitle: string;
    spineTitle: string;
    comingSoon: string;
    perSession: string;
    categories: {
      face: string;
      body: string;
      intimate: string;
      arms: string;
      legs: string;
      classic: string;
      special: string;
      spine: string;
      bone: string;
    };
    fromPrice: string;
  };
  booking: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    contact: string;
    contactPlaceholder: string;
    service: string;
    servicePlaceholder: string;
    date: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    services: {
      shr: string;
      massage: string;
      bone: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  location: {
    title: string;
    subtitle: string;
    address: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    facebook: string;
    phoneMassage: string;
    phoneShr: string;
    emailMassage: string;
    emailShr: string;
    comingSoon: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

export const translations: Record<Language, Translation> = {
  hu: {
    nav: {
      home: 'Főoldal',
      services: 'Szolgáltatások',
      pricing: 'Árak',
      booking: 'Időpont',
      faq: 'GYIK',
      location: 'Helyszín',
      contact: 'Kapcsolat',
      bookButton: 'Időpontot kérek',
    },
    hero: {
      title: 'Bea Masszázsterápia',
      subtitle: 'Masszázs • Gerincterápia • SHR tartós szőrtelenítés',
      slogan: '„Érezd jól magad a bőrödben."',
      bookBtn: 'Időpontot kérek',
      servicesBtn: 'Szolgáltatások',
    },
    services: {
      title: 'Szolgáltatások',
      subtitle: 'Fedezd fel a kínálatunkat',
      shr: {
        name: 'SHR tartós szőrtelenítés',
        desc: 'Kíméletes, modern szőrtelenítési eljárás, amely a szőrszálak növekedésének fokozatos csökkentését célozza. Segít a simább, ápoltabb bőr elérésében, miközben a kezelések során a bőr komfortjára is figyelmet fordítunk.',
      },
      massage: {
        name: 'Masszázs',
        desc: 'Pihentető és ellazító masszázs, amely segít a mindennapi feszültség levezetésében. Egyéni igényekre szabott fogásokkal hozzájárul a testi és lelki jólléthez.',
        items: [
          {
            name: 'Svéd-, gyógy-, sport- és relaxáló masszázs',
            desc: 'Ellazítja az izmokat, csökkenti a fájdalmat és a stresszt, javítja a közérzetet.',
          },
          {
            name: 'Talpmasszázs',
            desc: 'Frissít, ellazít és támogatja a szervezet öngyógyító folyamatait.',
          },
          {
            name: 'Fej- és arcmasszázs',
            desc: 'Enyhíti a fejfájást, oldja a feszültséget és feltölt energiával.',
          },
          {
            name: 'Nyirokmasszázs',
            desc: 'Támogatja a nyirokkeringést és a folyadékpangás csökkentését.',
          },
        ],
        specialItems: [
          {
            name: 'Speciális zsírödéma masszázs',
            desc: 'Célzott kezelés a duzzanat, feszülés és kellemetlen érzés csökkentésére, a nyirokkeringés támogatására.',
          },
          {
            name: 'Body wrapping / cellulit kezelés',
            desc: 'Feszesítő és alakformáló kezelés a bőr állapotának javítására és a cellulit csökkentésének támogatására.',
          },
        ],
      },
      bone: {
        name: 'Gerincterápia és mozgásszervi kezelések',
        desc: 'Célzott kezelések gerinceredetű panaszok, mozgásbeszűkülés és izomfeszülések esetén.',
        items: [
          {
            name: 'Gerincterápia',
            desc: 'Célzott kezelés nyak-, hát-, derékfájdalmak, gerinceredetű panaszok és mozgásbeszűkülés esetén.',
          },
          {
            name: 'Nyak — váll — hát kezelés',
            desc: 'Célzott kezelés a nyak, váll és hát feszültségének csökkentésére.',
          },
          {
            name: 'Triggerpont kezelés',
            desc: 'Célzott kezelés az izomcsomók oldására és a kisugárzó fájdalmak csökkentésére.',
          },
          {
            name: 'Köpölyözés',
            desc: 'A vérkeringés fokozását és az izomfeszülések oldását támogató kezelés.',
          },
          {
            name: 'Csontkovácsolás / lágy csontkovácsolás / manuálterápia',
            desc: 'A mozgásszervi problémák célzott kezelése a helyes mozgásfunkció helyreállítására.',
          },
          {
            name: 'Kinesio tape',
            desc: 'Izom- és ízülettámogatás, fájdalomcsillapítás és regeneráció elősegítése.',
          },
        ],
      },
      specialLabel: 'Speciális kezelések',
      bookBtn: 'Időpontot kérek',
    },
    pricing: {
      title: 'Árlista',
      subtitle: 'Átlátható árak, minden ár egy alkalomra vonatkozik',
      shrTitle: 'SHR tartós szőrtelenítés',
      massageTitle: 'Masszázs',
      spineTitle: 'Gerincterápia és mozgásszervi kezelések',
      comingSoon: 'Hamarosan',
      perSession: '/ alkalom',
      categories: {
        face: 'Fej',
        body: 'Test',
        intimate: 'Intim',
        arms: 'Karok',
        legs: 'Lábak',
        classic: 'Klasszikus masszázsok',
        special: 'Speciális kezelések',
        spine: 'Gerincterápia és mozgásszervi kezelések',
        bone: 'Csontkovácsolás és manuálterápia',
      },
      fromPrice: ' Ft-tól',
    },
    booking: {
      title: 'Időpontot kérek',
      subtitle: 'Töltsd ki az űrlapot, és felvesszük veled a kapcsolatot',
      name: 'Név',
      namePlaceholder: 'A te neved',
      contact: 'Telefonszám vagy e-mail',
      contactPlaceholder: 'Pl. +36 20 123 4567 vagy te@email.hu',
      service: 'Választott szolgáltatás',
      servicePlaceholder: 'Válassz szolgáltatást',
      date: 'Preferált időpont',
      notes: 'Megjegyzés',
      notesPlaceholder: 'Bármi, amit fontosnak tartasz...',
      submit: 'Küldés',
      submitting: 'Küldés folyamatban...',
      success: 'Köszönjük! Foglalásod megérkezett, hamarosan jelentkezünk.',
      error: 'Valami hiba történt. Kérjük, próbáld újra, vagy hívj minket telefonon.',
      services: {
        shr: 'SHR tartós szőrtelenítés',
        massage: 'Masszázs',
        bone: 'Gerincterápia és mozgásszervi kezelések',
      },
    },
    faq: {
      title: 'Gyakran ismételt kérdések',
      subtitle: 'Minden, amit tudnod kell',
      items: [
        {
          q: 'Hogyan tudok időpontot kérni?',
          a: 'Az időpontkérést a weboldalon található űrlapon keresztül, telefonon vagy e-mailen keresztül kezdeményezheted. A űrlap kitöltése után felvesszük veled a kapcsolatot a pontos időpont egyeztetésére.',
        },
        {
          q: 'Milyen szolgáltatások érhetők el?',
          a: 'SHR tartós szőrtelenítés, masszázs és csontkovácsolás szolgáltatásokat kínáljuk. A részleteket a Szolgáltatások és Árak szekciókban találod.',
        },
        {
          q: 'Szükséges előre időpontot foglalni?',
          a: 'Igen, minden szolgáltatásra előzetes időpontfoglalás szükséges. Így biztosíthatjuk, hogy megfelelő időt és figyelmet fordíthassunk rád.',
        },
        {
          q: 'Hol található a szalon?',
          a: 'A szalon Érden található: 2030, Érd, Riminyáki út 56.',
        },
        {
          q: 'Hogyan zajlik az SHR kezelés előtti egyeztetés?',
          a: 'Minden SHR kezelés előtt egy rövid egyeztetés történik, ahol megbeszéljük a bőrtípusodat, a kezelendő területet és az elvárásokat. Ez segít a személyre szabott kezelés megtervezésében.',
        },
      ],
    },
    location: {
      title: 'Helyszín',
      subtitle: 'Hol találod a stúdiót',
      address: '2030, Érd, Riminyáki út 56',
    },
    contact: {
      title: 'Kapcsolat',
      subtitle: 'Vedd fel velünk a kapcsolatot',
      phone: 'Telefonszám',
      email: 'E-mail',
      facebook: 'Facebook',
      phoneMassage: 'Masszázs / Gerincterápia / SHR',
      phoneShr: 'SHR',
      emailMassage: 'Masszázs / Gerincterápia / SHR',
      emailShr: 'SHR',
      comingSoon: 'Hamarosan',
    },
    footer: {
      copyright: '© 2026 Bea Masszázsterápia',
      tagline: 'Érezd jól magad a bőrödben.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'Pricing',
      booking: 'Booking',
      faq: 'FAQ',
      location: 'Location',
      contact: 'Contact',
      bookButton: 'Book Now',
    },
    hero: {
      title: 'Bea Masszázsterápia',
      subtitle: 'Massage • Spine Therapy • SHR Permanent Hair Removal',
      slogan: '“Feel good in your own skin.”',
      bookBtn: 'Book Now',
      servicesBtn: 'Services',
    },
    services: {
      title: 'Services',
      subtitle: 'Discover what we offer',
      shr: {
        name: 'SHR Permanent Hair Removal',
        desc: 'A gentle, modern hair removal method that aims to gradually reduce hair growth. It helps achieve smoother, well-cared-for skin while keeping the skin comfortable throughout the treatments.',
      },
      massage: {
        name: 'Massage',
        desc: 'A relaxing and soothing massage that helps release everyday tension. With strokes tailored to your individual needs, it supports both physical and mental well-being.',
        items: [
          {
            name: 'Swedish, therapeutic, sports & relaxing massage',
            desc: 'Relaxes the muscles, reduces pain and stress, and improves overall well-being.',
          },
          {
            name: 'Foot massage',
            desc: 'Refreshes, relaxes, and supports the body\'s natural healing processes.',
          },
          {
            name: 'Head & face massage',
            desc: 'Relieves headaches, releases tension, and recharges with energy.',
          },
          {
            name: 'Lymphatic drainage massage',
            desc: 'Supports lymphatic circulation and helps reduce fluid retention.',
          },
        ],
        specialItems: [
          {
            name: 'Special lipedema massage',
            desc: 'Targeted treatment to reduce swelling, tension, and discomfort, while supporting lymphatic circulation.',
          },
          {
            name: 'Body wrapping / cellulite treatment',
            desc: 'Firming and body-shaping treatment to improve skin condition and support cellulite reduction.',
          },
        ],
      },
      bone: {
        name: 'Spine Therapy & Musculoskeletal Treatments',
        desc: 'Targeted treatments for spine-related complaints, restricted movement, and muscle tension.',
        items: [
          {
            name: 'Spine therapy',
            desc: 'Targeted treatment for neck, back, and lower back pain, spine-related complaints, and restricted movement.',
          },
          {
            name: 'Neck — shoulder — back treatment',
            desc: 'Targeted treatment to reduce tension in the neck, shoulders, and back.',
          },
          {
            name: 'Trigger point treatment',
            desc: 'Targeted treatment to release muscle knots and reduce radiating pain.',
          },
          {
            name: 'Cupping',
            desc: 'A treatment that supports blood circulation and the release of muscle tension.',
          },
          {
            name: 'Bone alignment / gentle bone alignment / manual therapy',
            desc: 'Targeted treatment of musculoskeletal problems to restore proper movement function.',
          },
          {
            name: 'Kinesio tape',
            desc: 'Muscle and joint support, pain relief, and promotion of recovery.',
          },
        ],
      },
      specialLabel: 'Special Treatments',
      bookBtn: 'Book Now',
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Transparent prices — all prices are per session',
      shrTitle: 'SHR Permanent Hair Removal',
      massageTitle: 'Massage',
      spineTitle: 'Spine Therapy & Musculoskeletal Treatments',
      comingSoon: 'Coming Soon',
      perSession: '/ session',
      categories: {
        face: 'Face',
        body: 'Body',
        intimate: 'Intimate',
        arms: 'Arms',
        legs: 'Legs',
        classic: 'Classic Massages',
        special: 'Special Treatments',
        spine: 'Spine Therapy & Musculoskeletal Treatments',
        bone: 'Bone Alignment & Manual Therapy',
      },
      fromPrice: ' Ft+',
    },
    booking: {
      title: 'Book Now',
      subtitle: 'Fill out the form and we will get in touch',
      name: 'Name',
      namePlaceholder: 'Your name',
      contact: 'Phone number or email',
      contactPlaceholder: 'e.g. +36 20 123 4567 or you@email.com',
      service: 'Selected service',
      servicePlaceholder: 'Choose a service',
      date: 'Preferred date & time',
      notes: 'Notes',
      notesPlaceholder: 'Anything you think is important...',
      submit: 'Send',
      submitting: 'Sending...',
      success: 'Thank you! Your booking has been received, we will contact you soon.',
      error: 'Something went wrong. Please try again or call us.',
      services: {
        shr: 'SHR Permanent Hair Removal',
        massage: 'Massage',
        bone: 'Spine Therapy & Musculoskeletal Treatments',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know',
      items: [
        {
          q: 'How can I book an appointment?',
          a: 'You can request an appointment through the form on this website, by phone, or by email. After submitting the form, we will contact you to arrange the exact time.',
        },
        {
          q: 'What services are available?',
          a: 'We offer SHR permanent hair removal, massage, and bone alignment. You can find details in the Services and Pricing sections.',
        },
        {
          q: 'Do I need to book in advance?',
          a: 'Yes, all services require an appointment in advance. This ensures we can dedicate the right time and attention to you.',
        },
        {
          q: 'Where is the studio located?',
          a: 'The studio is in Érd: 2030, Érd, Riminyáki út 56.',
        },
        {
          q: 'How does the SHR pre-treatment consultation work?',
          a: 'Before every SHR session, a short consultation takes place where we discuss your skin type, the area to be treated, and your expectations. This helps us plan a personalized treatment.',
        },
      ],
    },
    location: {
      title: 'Location',
      subtitle: 'Where to find the studio',
      address: '2030, Érd, Riminyáki út 56',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with us',
      phone: 'Phone',
      email: 'Email',
      facebook: 'Facebook',
      phoneMassage: 'Massage / Spine Therapy / SHR',
      phoneShr: 'SHR',
      emailMassage: 'Massage / Spine Therapy / SHR',
      emailShr: 'SHR',
      comingSoon: 'Coming Soon',
    },
    footer: {
      copyright: '© 2026 Bea Masszázsterápia',
      tagline: 'Feel good in your own skin.',
    },
  },
};
