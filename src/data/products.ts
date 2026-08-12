export interface ProductItem {
  id: string;
  categoryId: 'lemonade' | 'mojito' | 'cola' | 'tea' | 'water';
  nameRu: string;
  nameKz: string;
  flavorRu: string;
  flavorKz: string;
  bgGradient: string;
  bgHex: string;
  accentHex: string;
  textColor: string;
  image: string;
  fallbackSvgType: 'pear' | 'pomegranate' | 'tarkhun' | 'apple' | 'kiwi' | 'strawberry' | 'lime' | 'cola' | 'peach' | 'mango' | 'water';
  formats: string[];
  descriptionRu: string;
  descriptionKz: string;
}

export interface ProductCategory {
  id: 'lemonade' | 'mojito' | 'cola' | 'tea' | 'water';
  titleRu: string;
  titleKz: string;
  subtitleRu: string;
  subtitleKz: string;
  bgHex: string;
  accentHex: string;
  products: ProductItem[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'lemonade',
    titleRu: 'ЛИМОНАДЫ',
    titleKz: 'ЛИМОНАДТАР',
    subtitleRu: 'Классические и фруктовые лимонады с насыщенным вкусом натуральных ингредиентов',
    subtitleKz: 'Табиғи ингредиенттердің қанық дәмі бар классикалық және жемісті лимонадтар',
    bgHex: '#0d2818',
    accentHex: '#2ec4b6',
    products: [
      {
        id: 'pear',
        categoryId: 'lemonade',
        nameRu: 'Zigi Дюшес (Груша)',
        nameKz: 'Zigi Дюшес (Алмұрт)',
        flavorRu: 'Дюшес / Груша',
        flavorKz: 'Дюшес / Алмұрт',
        bgGradient: 'linear-gradient(135deg, #3d2f06 0%, #6e550c 50%, #a88314 100%)',
        bgHex: '#523f09',
        accentHex: '#f1c40f',
        textColor: '#fffce8',
        image: '/assets/products/zigi-lemonade-pear.png',
        fallbackSvgType: 'pear',
        formats: ['Банка 330 мл', 'ПЭТ 0,5 л', 'ПЭТ 1,0 л', 'ПЭТ 1,5 л', 'Бутылка 475 мл'],
        descriptionRu: 'Ароматная десертная груша со сладким карамельным послевкусием.',
        descriptionKz: 'Тәтті карамель дәмі бар хош иісті десерт алмұрты.',
      },
      {
        id: 'pomegranate',
        categoryId: 'lemonade',
        nameRu: 'Zigi Гранат',
        nameKz: 'Zigi Анаp',
        flavorRu: 'Гранат',
        flavorKz: 'Анаp',
        bgGradient: 'linear-gradient(135deg, #36050b 0%, #610915 50%, #990f23 100%)',
        bgHex: '#480710',
        accentHex: '#ff334b',
        textColor: '#ffe6e9',
        image: '/assets/products/zigi-pomegranate.png',
        fallbackSvgType: 'pomegranate',
        formats: ['Банка 330 мл', 'ПЭТ 0,5 л', 'ПЭТ 1,0 л'],
        descriptionRu: 'Терпкий благородный гранатовый сок с изысканной кислинкой.',
        descriptionKz: 'Нәзік қышқылдығы бар тербелмелі гранат шырыны.',
      },
      {
        id: 'tarkhun',
        categoryId: 'lemonade',
        nameRu: 'Zigi Тархун',
        nameKz: 'Zigi Тархун',
        flavorRu: 'Тархун',
        flavorKz: 'Тархун',
        bgGradient: 'linear-gradient(135deg, #052912 0%, #0d4e27 50%, #15793c 100%)',
        bgHex: '#08381b',
        accentHex: '#39e75f',
        textColor: '#e6ffe9',
        image: '/assets/products/zigi-hero-can.png',
        fallbackSvgType: 'tarkhun',
        formats: ['Банка 330 мл', 'ПЭТ 0,5 л', 'ПЭТ 1,0 л', 'ПЭТ 1,5 л'],
        descriptionRu: 'Освежающий травянистый лимонад с пряным эстрагоновым ароматом.',
        descriptionKz: 'Хош иісті эстрагон дәмі бар сергітетін шөп лимонады.',
      },
      {
        id: 'green-apple',
        categoryId: 'lemonade',
        nameRu: 'Zigi Зелёное яблоко',
        nameKz: 'Zigi Жасыл алма',
        flavorRu: 'Зелёное яблоко',
        flavorKz: 'Жасыл алма',
        bgGradient: 'linear-gradient(135deg, #183307 0%, #2f5d0e 50%, #4b9217 100%)',
        bgHex: '#254b0b',
        accentHex: '#76e11b',
        textColor: '#f1ffe3',
        image: '/assets/products/zigi-hero-can.png',
        fallbackSvgType: 'apple',
        formats: ['Банка 330 мл', 'ПЭТ 0,5 л', 'ПЭТ 1,0 л'],
        descriptionRu: 'Яркая кислинка спелого сочного зелёного яблока.',
        descriptionKz: 'Піскен шырынды жасыл алманың жарқын қышқылдығы.',
      },
    ],
  },
  {
    id: 'mojito',
    titleRu: 'МОХИТО',
    titleKz: 'МОХИТО',
    subtitleRu: 'Кубинская свежесть мяты и цитрусов в трех популярнейших вкусах',
    subtitleKz: 'Кубалық жалбыз бен цитрус сергектігі ең танымал үш дәмде',
    bgHex: '#08332d',
    accentHex: '#00f5d4',
    products: [
      {
        id: 'mojito-lime',
        categoryId: 'mojito',
        nameRu: 'Zigi Мохито Лайм',
        nameKz: 'Zigi Мохито Лайм',
        flavorRu: 'Классический Лайм-Мята',
        flavorKz: 'Классикалық Лайм-Жалбыз',
        bgGradient: 'linear-gradient(135deg, #032b26 0%, #075249 50%, #0b8072 100%)',
        bgHex: '#053e37',
        accentHex: '#00f5d4',
        textColor: '#e6ffff',
        image: '/assets/products/zigi-duo-cans.png',
        fallbackSvgType: 'lime',
        formats: ['Банка 330 мл', 'ПЭТ 0,5 л', 'Бутылка 475 мл'],
        descriptionRu: 'Ледяной лайм и перечная мята — идеальный утолитель жажды.',
        descriptionKz: 'Мұзды лайм мен бұрышты жалбыз — шөлді басатын тамаша сусын.',
      },
      {
        id: 'mojito-strawberry',
        categoryId: 'mojito',
        nameRu: 'Zigi Клубничный Мохито',
        nameKz: 'Zigi Құлпынай Мохито',
        flavorRu: 'Клубника-Мята',
        flavorKz: 'Құлпынай-Жалбыз',
        bgGradient: 'linear-gradient(135deg, #3d051c 0%, #6e0932 50%, #a80f4d 100%)',
        bgHex: '#520726',
        accentHex: '#ff2a70',
        textColor: '#ffeef4',
        image: '/assets/products/zigi-pomegranate.png',
        fallbackSvgType: 'strawberry',
        formats: ['Банка 330 мл', 'ПЭТ 0,5 л'],
        descriptionRu: 'Спелая садовая клубника в сочетании со свежестью кубинской мяты.',
        descriptionKz: 'Кубалық жалбыздың сергектігімен піскен бақша құлпынайы.',
      },
    ],
  },
  {
    id: 'cola',
    titleRu: 'ZIGI COLA',
    titleKz: 'ZIGI COLA',
    subtitleRu: 'Легендарная кола с глубоким карамельно-пряным вкусом и мощной газацией',
    subtitleKz: 'Терең карамель-дәмдеуіш дәмі және күшті газдалуы бар аңызға айналған кола',
    bgHex: '#2b0306',
    accentHex: '#ff1e27',
    products: [
      {
        id: 'zigi-cola-classic',
        categoryId: 'cola',
        nameRu: 'Zigi Cola Classic',
        nameKz: 'Zigi Cola Classic',
        flavorRu: 'Классическая Кола',
        flavorKz: 'Классикалық Кола',
        bgGradient: 'linear-gradient(135deg, #240205 0%, #4a040b 50%, #7d0713 100%)',
        bgHex: '#380308',
        accentHex: '#ff2632',
        textColor: '#ffe6e7',
        image: '/assets/products/zigi-hero-can.png',
        fallbackSvgType: 'cola',
        formats: ['Банка 330 мл', 'ПЭТ 0,5 л', 'ПЭТ 1,0 л', 'ПЭТ 1,5 л'],
        descriptionRu: 'Классический богатый вкус колы для баров, ресторанов и фастфуда.',
        descriptionKz: 'Барлар, мейрамханалар мен фастфуд үшін коланың классикалық бай дәмі.',
      },
    ],
  },
  {
    id: 'tea',
    titleRu: 'ZIGI ЧАЙ',
    titleKz: 'ZIGI ШАЙ',
    subtitleRu: 'Натуральные холодные чаи на растительных экстрактах и сочных фруктах',
    subtitleKz: 'Өсімдік сығындылары мен шырынды жемістерден жасалған табиғи салқын шайлар',
    bgHex: '#3d1e03',
    accentHex: '#ff9f1c',
    products: [
      {
        id: 'tea-peach',
        categoryId: 'tea',
        nameRu: 'Zigi Чай Персик',
        nameKz: 'Zigi Шай Шабдалы',
        flavorRu: 'Сочный Персик',
        flavorKz: 'Шырынды Шабдалы',
        bgGradient: 'linear-gradient(135deg, #3d1b03 0%, #6e3206 50%, #a84d09 100%)',
        bgHex: '#522404',
        accentHex: '#ff8811',
        textColor: '#fff4eb',
        image: '/assets/products/zigi-lemonade-pear.png',
        fallbackSvgType: 'peach',
        formats: ['ПЭТ 0,5 л', 'ПЭТ 1,0 л', 'ПЭТ 1,5 л'],
        descriptionRu: 'Нежный черный чай с бархатистым вкусом спелого южного персика.',
        descriptionKz: 'Піскен оңтүстік шабдалысының барқыт дәмі бар нәзік қара шай.',
      },
    ],
  },
  {
    id: 'water',
    titleRu: 'ZIGI СУ',
    titleKz: 'ZIGI СУ',
    subtitleRu: 'Природная горная питьевая вода первой категории чистейшей очистки',
    subtitleKz: 'Таза тазартылған бірінші санаттағы табиғи тау ауыз суы',
    bgHex: '#032030',
    accentHex: '#00b4d8',
    products: [
      {
        id: 'zigi-water-pure',
        categoryId: 'water',
        nameRu: 'Zigi Су Артезианская',
        nameKz: 'Zigi Су Артезиандық',
        flavorRu: 'Природная горная вода',
        flavorKz: 'Табиғи тау суы',
        bgGradient: 'linear-gradient(135deg, #021a28 0%, #053652 50%, #085580 100%)',
        bgHex: '#03293e',
        accentHex: '#48cae4',
        textColor: '#e8f8fe',
        image: '/assets/products/zigi-hero-can.png',
        fallbackSvgType: 'water',
        formats: ['ПЭТ 0,5 л', 'ПЭТ 1,0 л', 'ПЭТ 1,5 л'],
        descriptionRu: 'Идеально сбалансированный минеральный состав для ежедневного использования.',
        descriptionKz: 'Күнделікті пайдалану үшін тамаша теңдестірілген минералды құрам.',
      },
    ],
  },
];
