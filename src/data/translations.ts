export type Language = 'ru' | 'kz';

export interface TranslationSchema {
  nav: {
    assortment: string;
    cooperation: string;
    benefits: string;
    partners: string;
    cities: string;
    whatsappBtn: string;
  };
  hero: {
    title: string;
    subtitle: string;
    selectCityBtn: string;
    whatsappBtn: string;
    marginBadge: string;
    officialBadge: string;
  };
  assortment: {
    title: string;
    subtitle: string;
    categories: {
      lemonade: string;
      mojito: string;
      cola: string;
      tea: string;
      water: string;
    };
    formatsLabel: string;
    availableFlavors: string;
    getTermsBtn: string;
  };
  cooperation: {
    title: string;
    subtitle: string;
    desc: string;
    list: string[];
    btn: string;
    ticker: string[];
    items: Array<{
      title: string;
      desc: string;
    }>;
    minOrderValue: string;
    minOrderLabel: string;
  };
  benefits: {
    topLabel: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    hugeBadge: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
    ctaBtn: string;
  };
  trust: {
    influencerTitle: string;
    reachStat: string;
    reachLabel: string;
    bloggersLabel: string;
    partnersTitle: string;
    partnersSubtitle: string;
  };
  cities: {
    title: string;
    subtitle: string;
    allRegions: string;
    regions: {
      almaty: string;
      center: string;
      south: string;
      west: string;
      north: string;
      east: string;
    };
    writeWhatsapp: string;
    noCityTitle: string;
    noCityDesc: string;
    noCityCta: string;
  };
  footer: {
    tagline: string;
    companyName: string;
    bin: string;
    address: string;
    phone: string;
    workingHours: string;
    privacyPolicy: string;
    rights: string;
  };
  floatingWhatsapp: {
    label: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  ru: {
    nav: {
      assortment: 'Ассортимент',
      cooperation: 'Условия',
      benefits: 'Выгода',
      partners: 'Партнёры',
      cities: 'Города',
      whatsappBtn: 'Написать в WhatsApp',
    },
    hero: {
      title: 'Напитки Zigi Zagi для ресторанов и кафе!',
      subtitle: 'Газированные напитки, холодный чай, лимонад и вода, которые гости заказывают снова и снова.',
      selectCityBtn: 'Выбрать город',
      whatsappBtn: 'Получить прайс в WhatsApp',
      marginBadge: 'Высокая маржа',
      officialBadge: 'Официальный дистрибьютор',
    },
    assortment: {
      title: 'Ассортимент ZIGI-ZAGI',
      subtitle: 'Широкая линейка вкусов и удобные форматы упаковки для ресторанов, кафе, баров и ритейла.',
      categories: {
        lemonade: 'Лимонады',
        mojito: 'Мохито',
        cola: 'Zigi Cola',
        tea: 'Zigi Чай',
        water: 'Zigi Су',
      },
      formatsLabel: 'Форматы упаковки: баночки 330 мл, ПЭТ 0,5 / 1 / 1,5 л, стеклянные бутылки 475 мл.',
      availableFlavors: 'Вкусы в наличии:',
      getTermsBtn: 'Получить прайс в WhatsApp',
    },
    cooperation: {
      title: 'УСЛОВИЯ СОТРУДНИЧЕСТВА',
      subtitle: 'Выгодные оптовые поставки',
      desc: 'Преимущества прямой работы с производителем ZIGI-ZAGI BEVERAGES:',
      list: [
        'Бесплатная доставка по Алматы и РК',
        'Минимальный заказ от 30 000 ₸',
        'Индивидуальные скидки от объёма',
        'Большой ассортимент всегда в наличии',
        'Быстрая доставка в день заказа',
        'Приём заявок 7 дней в неделю без выходных',
        'Прозрачная официальная работа по договору',
      ],
      btn: 'ОФОРМИТЬ ЗАКАЗ',
      ticker: [
        'БЕСПЛАТНАЯ ДОСТАВКА',
        'ОТ 30 000 ₸',
        'СКИДКИ ОТ ОБЪЁМА',
        'В НАЛИЧИИ НА СКЛАДЕ',
        'ДОСТАВКА В ДЕНЬ ЗАКАЗА',
        'БЕЗ ВЫХОДНЫХ',
        'РАБОТА ПО ДОГОВОРУ',
      ],
      items: [
        { title: 'Бесплатная доставка', desc: 'Оперативная доставка по Алматы и ключевым регионам Казахстана' },
        { title: 'Минимальный заказ', desc: 'Доступный старт поставок всего от 30 000 ₸ для любого заведения' },
        { title: 'Объёмные скидки', desc: 'Гибкая шкала дисконта — чем крупнее партии, тем выше ваша маржа' },
        { title: 'Постоянное наличие', desc: 'Всегда полный ассортимент вкусов и форматов на региональных складах' },
        { title: 'Быстрая отгрузка', desc: 'Возможность доставки прямо в день оформления заявки без задержек' },
        { title: 'Работа 7 дней в неделю', desc: 'Принимаем и отгружаем заказы без выходных и праздников' },
        { title: 'Официальный договор', desc: 'Полный комплект закрывающих документов, ЭСФ и прозрачная бухгалтерия' },
      ],
      minOrderValue: '30 000 ₸',
      minOrderLabel: 'Минимальная сумма первого заказа',
    },
    benefits: {
      topLabel: 'Выгода для заведений и HoReCa',
      titleLine1: 'УВЕЛИЧЬТЕ ДОХОД',
      titleLine2: 'С НАПИТКОВ',
      subtitle: 'Почему заведения выбирают ZIGI-ZAGI для пополнения барной карты и витрин',
      hugeBadge: 'БОЛЬШЕ ДОХОДА',
      items: [
        {
          title: 'Спрос уже создан',
          desc: 'Бренд активно продвигается известными блогерами. Гости сами спрашивают ZIGI-ZAGI в меню.',
        },
        {
          title: 'Высокая маржинальность',
          desc: 'Оптимальная оптовая цена позволяет заведению получать до 120-150% наценки на порцию.',
        },
        {
          title: 'Скидки от объема',
          desc: 'Индивидуальные ценовые условия для сетевых проектов и крупных оптовых покупателей.',
        },
        {
          title: 'Яркий дизайн упаковки',
          desc: 'Сочный визуал банок отлично смотрится на витрине и стимулирует импульсивные покупки.',
        },
      ],
      ctaBtn: 'Узнать цену в вашем городе',
    },
    trust: {
      influencerTitle: 'МЕДИА & ЗВЁЗДЫ',
      reachStat: '7,5 МЛН+',
      reachLabel: 'суммарный охват медиа-кампаний',
      bloggersLabel: 'Лица бренда ZIGI-ZAGI:',
      partnersTitle: 'НАМ ДОВЕРЯЮТ',
      partnersSubtitle: 'Поставляем напитки в ведущие отели, супермаркеты, авиакомпании и ресторанные сети.',
    },
    cities: {
      title: 'Свяжитесь с представителем в вашем городе',
      subtitle: 'Выберите ваш город, чтобы получить актуальный прайс-лист и персональные условия поставки.',
      allRegions: 'Все регионы',
      regions: {
        almaty: 'Алматы и область',
        center: 'Центральный Казахстан',
        south: 'Южный Казахстан',
        west: 'Западный Казахстан',
        north: 'Северный Казахстан',
        east: 'Восточный Казахстан',
      },
      writeWhatsapp: 'Написать в WhatsApp',
      noCityTitle: 'Вашего города нет в списке?',
      noCityDesc: 'Свяжитесь с отделом оптовых продаж — мы оперативно организуем логистику в любой населенный пункт.',
      noCityCta: 'Связаться с менеджером',
    },
    footer: {
      tagline: 'Премиальные напитки для HoReCa & Ритейла',
      companyName: 'ТОО «ZIGI-ZAGI BEVERAGES»',
      bin: 'БИН: 230440012984',
      address: 'Республика Казахстан, г. Алматы, пр. Райымбека 212A',
      phone: '+7 (700) 800-90-90',
      workingHours: 'График работы: Пн-Вс 09:00 - 20:00 (без выходных)',
      privacyPolicy: 'Политика конфиденциальности',
      rights: '© 2026 ZIGI-ZAGI. Все права защищены.',
    },
    floatingWhatsapp: {
      label: 'Прайстi алу',
    },
  },
  kz: {
    nav: {
      assortment: 'Ассортимент',
      cooperation: 'Шарттар',
      benefits: 'Пайдасы',
      partners: 'Серіктестер',
      cities: 'Қалалар',
      whatsappBtn: 'WhatsApp-қа жазу',
    },
    hero: {
      title: 'Ресторандар мен кафелерге арналған Zigi Zagi сусындары!',
      subtitle: 'Қонақтар қайта-қайта тапсырыс беретін газдалған сусындар, мұздатылған шай, лимонад және су.',
      selectCityBtn: 'Қаланы таңдау',
      whatsappBtn: 'WhatsApp-қа жазу',
      marginBadge: 'Жоғары маржа',
      officialBadge: 'Ресми дистрибьютор',
    },
    assortment: {
      title: 'АССОРТИМЕНТ',
      subtitle: 'Ресторандар, кафелер, барлар мен ритейл үшін дәмдердің кең желісі мен ыңғайлы қаптама форматтары.',
      categories: {
        lemonade: 'Лимонадтар',
        mojito: 'Мохито',
        cola: 'Zigi Cola',
        tea: 'Zigi Шай',
        water: 'Zigi Су',
      },
      formatsLabel: 'Пішімдері: құты, ПЭТ 0,5 / 1 / 1,5 л, бөтелке 475 мл.',
      availableFlavors: 'Қолжетімді дәмдер:',
      getTermsBtn: 'WhatsApp-қа жазу',
    },
    cooperation: {
      title: 'СЕРІКТЕСТІК ШАРТТАРЫ',
      subtitle: 'Тиімді көтерме жеткізілімдер',
      desc: 'ZIGI-ZAGI BEVERAGES өндірушісімен тікелей жұмыс істеудің артықшылықтары:',
      list: [
        'Тегін жеткізу [Алматы]',
        'Ең төменгі тапсырыс 30 000 ₸',
        'Тапсырыс көлеміне қарай жеңілдіктер',
        'Қоймада ассортимент көп',
        'Тапсырыс берген күні жеткізу',
        'Демалыссыз',
        'Келісімшарт бойынша жұмыс',
      ],
      btn: 'ТАПСЫРЫС БЕРУ',
      ticker: [
        'ТЕГІН ЖЕТКІЗУ',
        '30 000 ₸ БАСТАП',
        'КӨЛЕМГЕ ЖЕҢІЛДІКТЕР',
        'ҚОЙМАДА БАР',
        'ТАПСЫРЫС КҮНІ ЖЕТКІЗУ',
        'ДЕМАЛЫССЫЗ',
        'КЕЛІСІМШАРТ БОЙЫНША ЖҰМЫС',
      ],
      items: [
        { title: 'Тегін жеткізу [Алматы]', desc: 'Алматы және Қазақстанның негізгі аймақтары бойынша жедел жеткізу' },
        { title: 'Ең төменгі тапсырыс 30 000 ₸', desc: 'Кез келген мекеме үшін жеткізілімді небәрі 30 000 ₸ бастау мүмкіндігі' },
        { title: 'Тапсырыс көлеміне қарай жеңілдіктер', desc: 'Икемді жеңілдік шкаласы — топтама неғұрлым үлкен болса, соғұрлым маржаңыз жоғары' },
        { title: 'Қоймада ассортимент көп', desc: 'Аймақтық қоймаларда дәмдер мен форматтардың толық ассортименті әрқашан бар' },
        { title: 'Тапсырыс берген күні жеткізу', desc: 'Тапсырыс берілген күні кідіріссіз тікелей жеткізу мүмкіндігі' },
        { title: 'Демалыссыз', desc: 'Тапсырыстарды демалыссыз және мерекесіз қабылдаймыз әрі тиейміз' },
        { title: 'Келісімшарт бойынша жұмыс', desc: 'Жабатын құжаттардың толық жиынтығы, ЭСФ және ашық бухгалтерия' },
      ],
      minOrderValue: '30 000 ₸',
      minOrderLabel: 'Бірінші тапсырыстың минималды сомасы',
    },
    benefits: {
      topLabel: 'Мекемелер мен HoReCa үшін пайдасы',
      titleLine1: 'СУСЫНДАРДАН',
      titleLine2: 'ПАЙДА АЛЫҢЫЗ',
      subtitle: 'Клиенттер бұл брендті жақсы біледі, қонақтар өздері сұрайды — Көлемге байланысты жеңілдіктер',
      hugeBadge: 'СІЗДІҢ ПАЙДАНЫЗ',
      items: [
        {
          title: 'Сұраныс қалыптасқан',
          desc: 'Брендті танымал блогерлер белсенді түрде насихаттайды. Қонақтар ZIGI-ZAGI өнімдерін өздері сұрайды.',
        },
        {
          title: 'Жоғары маржиналдылық',
          desc: 'Оңтайлы көтерме баға мекемеге бір сыбағаға 120-150% дейін үстеме баға алуға мүмкіндік береді.',
        },
        {
          title: 'Көлемге байланысты жеңілдіктер',
          desc: 'Желілік жобалар мен ірі көтерме сатып алушылар үшін жеке баға шарттары.',
        },
        {
          title: 'Қаптаманың жарқын дизайны',
          desc: 'Құтылардың қанық визуалы витринада тамаша көрінеді және импульсивті сатып алуды ынталандырады.',
        },
      ],
      ctaBtn: 'Қалаңыздағы бағаны білу',
    },
    trust: {
      influencerTitle: 'МЕДИА ЖӘНЕ ЖҰЛДЫЗДАР',
      reachStat: '7,5 МЛН+',
      reachLabel: 'аудитория көлемі бар блогерлер',
      bloggersLabel: 'ZIGI-ZAGI брендінің жүздері:',
      partnersTitle: 'БІЗДІҢ СЕРІКТЕСТЕР',
      partnersSubtitle: 'Rixos Water World, Magnum, FlyArystan, Galmart, Small т.б.',
    },
    cities: {
      title: 'ҚАЛАНЫ ТАҢДАУ',
      subtitle: 'Қалаңыздағы өкілмен хабарласыңыз',
      allRegions: 'Барлық аймақтар',
      regions: {
        almaty: 'Алматы және облыс',
        center: 'Орталық',
        south: 'Оңтүстік',
        west: 'Батыс',
        north: 'Солтүстік',
        east: 'Шығыс',
      },
      writeWhatsapp: 'WhatsApp-қа жазу',
      noCityTitle: 'Қалаңыз жоқ па? Бізге жазыңыз',
      noCityDesc: 'Көтерме сату бөліміне хабарласыңыз — біз кез келген елді мекенге логистиканы жедел ұйымдастырамыз.',
      noCityCta: 'Бізге жазыңыз',
    },
    footer: {
      tagline: 'HoReCa & Ритейл үшін премиум сусындар',
      companyName: '«ZIGI-ZAGI BEVERAGES» ЖШС',
      bin: 'БСН: 230440012984',
      address: 'Қазақстан Республикасы, Алматы қ., Райымбек даңғылы 212A',
      phone: '+7 (700) 800-90-90',
      workingHours: 'Жұмыс кестесі: Дүйсенбі-Жексенбі 09:00 - 20:00 (демалыссыз)',
      privacyPolicy: 'Құпиялылық саясаты',
      rights: '© 2026 ZIGI ZAGI HORECA. Барлық құқықтар қорғалған.',
    },
    floatingWhatsapp: {
      label: 'Прайсты алу',
    },
  },
};
