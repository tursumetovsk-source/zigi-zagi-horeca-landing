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
    title: string;
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
      formatsLabel: 'Форматы упаковки:',
      availableFlavors: 'Вкусы в наличии:',
      getTermsBtn: 'Запросить спеццена для категории',
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
      btn: 'УЗНАТЬ УСЛОВИЯ',
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
      title: 'Увеличьте доход с напитков',
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
      influencerTitle: 'Бренд, который знают ваши гости',
      reachStat: '7,5 МЛН+',
      reachLabel: 'суммарный охват медиа-кампаний',
      bloggersLabel: 'Лица бренда ZIGI-ZAGI:',
      partnersTitle: 'Нам доверяют заведения и сети',
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
      label: 'Прайсты алу',
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
      subtitle: 'Қонақтар қайта-қайта тапсырыс беретін газдалған сусындар, салқын шай, лимонад және су.',
      selectCityBtn: 'Қаланы таңдау',
      whatsappBtn: 'WhatsApp-та прайсты алу',
      marginBadge: 'Жоғары маржа',
      officialBadge: 'Ресми дистрибьютор',
    },
    assortment: {
      title: 'ZIGI-ZAGI Ассортименті',
      subtitle: 'Ресторандар, кафелер, барлар мен ритейл үшін дәмдердің кең желісі мен ыңғайлы қаптама форматтары.',
      categories: {
        lemonade: 'Лимонадтар',
        mojito: 'Мохито',
        cola: 'Zigi Cola',
        tea: 'Zigi Шай',
        water: 'Zigi Су',
      },
      formatsLabel: 'Қаптама форматтары:',
      availableFlavors: 'Қолжетімді дәмдер:',
      getTermsBtn: 'Санат бойынша арнайы бағаны сұрау',
    },
    cooperation: {
      title: 'ЫНТЫМАҚТАСТЫҚ ШАРТТАРЫ',
      subtitle: 'Тиімді көтерме жеткізілімдер',
      desc: 'ZIGI-ZAGI BEVERAGES өндірушісімен тікелей жұмыс істеудің артықшылықтары:',
      list: [
        'Алматы және ҚР бойынша тегін жеткізу',
        'Минималды тапсырыс 30 000 ₸ бастап',
        'Тапсырыс көлеміне жеке жеңілдіктер',
        'Үлкен ассортимент әрқашан қоймада бар',
        'Тапсырыс берілген күні жылдам жеткізу',
        'Демалыссыз аптасына 7 күн тапсырыс қабылдау',
        'Шарт бойынша ресми әрі ашық жұмыс',
      ],
      btn: 'ШАРТТАРДЫ БІЛУ',
      ticker: [
        'ТЕГІН ЖЕТКІЗУ',
        '30 000 ₸ ВАСТАП',
        'КӨЛЕМГЕ ЖЕҢІЛДІКТЕР',
        'ҚОЙМАДА БАР',
        'ТАПСЫРЫС КҮНІ ЖЕТКІЗУ',
        'ДЕМАЛЫССЫЗ',
        'ШАРТ БОЙЫНША ЖҰМЫС',
      ],
      items: [
        { title: 'Тегін жеткізу', desc: 'Алматы және Қазақстанның негізгі аймақтары бойынша жедел жеткізу' },
        { title: 'Минималды тапсырыс', desc: 'Кез келген мекеме үшін жеткізілімді небәрі 30 000 ₸ бастау мүмкіндігі' },
        { title: 'Көлемдік жеңілдіктер', desc: 'Икемді жеңілдік шкаласы — топтама неғұрлым үлкен болса, соғұрлым маржаңыз жоғары' },
        { title: 'Тұрақты болуы', desc: 'Аймақтық қоймаларда дәмдер мен форматтардың толық ассортименті әрқашан бар' },
        { title: 'Жылдам тиеу', desc: 'Тапсырыс берілген күні кідіріссіз тікелей жеткізу мүмкіндігі' },
        { title: 'Аптасына 7 күн жұмыс', desc: 'Тапсырыстарды демалыссыз және мерекесіз қабылдаймыз әрі тиейміз' },
        { title: 'Ресми шарт', desc: 'Жабатын құжаттардың толық жиынтығы, ЭСФ және ашық бухгалтерия' },
      ],
      minOrderValue: '30 000 ₸',
      minOrderLabel: 'Бірінші тапсырыстың минималды сомасы',
    },
    benefits: {
      title: 'Сусындардан түсетін табысты арттырыңыз',
      subtitle: 'Неліктен мекемелер бар картасы мен витринаны толтыру үшін ZIGI-ZAGI таңдайды',
      hugeBadge: 'КӨБІРЕК ТАБЫС',
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
          title: 'Көлемге жеңілдіктер',
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
      influencerTitle: 'Қонақтарыңыз білетін бренд',
      reachStat: '7,5 МЛН+',
      reachLabel: 'медиа-кампаниялардың жалпы қамтуы',
      bloggersLabel: 'ZIGI-ZAGI брендінің жүздері:',
      partnersTitle: 'Бізге мекемелер мен желілер сенеді',
      partnersSubtitle: 'Сусындарды жетекші отельдерге, супермаркеттерге, әуе компанияларына және мейрамхана желілеріне жеткіземіз.',
    },
    cities: {
      title: 'Қалаңыздағы өкілмен хабарласыңыз',
      subtitle: 'Өзекті прайс-парақты және жеке жеткізу шарттарын алу үшін қалаңызды таңдаңыз.',
      allRegions: 'Барлық аймақтар',
      regions: {
        almaty: 'Алматы және облысы',
        center: 'Орталық Қазақстан',
        south: 'Оңтүстік Қазақстан',
        west: 'Батыс Қазақстан',
        north: 'Солтүстік Қазақстан',
        east: 'Шығыс Қазақстан',
      },
      writeWhatsapp: 'WhatsApp-қа жазу',
      noCityTitle: 'Сіздің қалаңыз тізімде жоқ па?',
      noCityDesc: 'Көтерме сату бөліміне хабарласыңыз — біз кез келген елді мекенге логистиканы жедел ұйымдастырамыз.',
      noCityCta: 'Менеджермен хабарласу',
    },
    footer: {
      tagline: 'HoReCa & Ритейл үшін премиум сусындар',
      companyName: '«ZIGI-ZAGI BEVERAGES» ЖШС',
      bin: 'БСН: 230440012984',
      address: 'Қазақстан Республикасы, Алматы қ., Райымбек даңғылы 212A',
      phone: '+7 (700) 800-90-90',
      workingHours: 'Жұмыс кестесі: Дүйсенбі-Жексенбі 09:00 - 20:00 (демалыссыз)',
      privacyPolicy: 'Құпиялылық саясаты',
      rights: '© 2026 ZIGI-ZAGI. Барлық құқықтар қорғалған.',
    },
    floatingWhatsapp: {
      label: 'Прайсты алу',
    },
  },
};
