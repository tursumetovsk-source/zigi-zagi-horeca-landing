export type RegionKey = 'almaty' | 'center' | 'south' | 'west' | 'north' | 'east';

export interface CityItem {
  id: string;
  nameRu: string;
  nameKz: string;
  region: RegionKey;
  addressRu: string;
  addressKz: string;
  phone: string;
}

export const CITIES_DATA: CityItem[] = [
  // Алматы и область
  {
    id: 'almaty',
    nameRu: 'Алматы',
    nameKz: 'Алматы',
    region: 'almaty',
    addressRu: 'Центральный склад: пр. Райымбека 212A',
    addressKz: 'Орталық қойма: Райымбек даңғылы 212A',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'kaskelen',
    nameRu: 'Каскелен / Талгар',
    nameKz: 'Қаскелең / Талғар',
    region: 'almaty',
    addressRu: 'Представительство по Алматинской области',
    addressKz: 'Алматы облысы бойынша өкілдік',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'konaev',
    nameRu: 'Конаев',
    nameKz: 'Қонаев',
    region: 'almaty',
    addressRu: 'Склад логистики: ул. Индустриальная 4',
    addressKz: 'Логистика қоймасы: Индустриальная көш. 4',
    phone: '+7 (700) 800-90-90',
  },

  // Центр
  {
    id: 'astana',
    nameRu: 'Астана',
    nameKz: 'Астана',
    region: 'center',
    addressRu: 'Региональный хаб: шоссе Алаш 18',
    addressKz: 'Аймақтық хаб: Алаш тас жолы 18',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'karaganda',
    nameRu: 'Караганда',
    nameKz: 'Қарағанды',
    region: 'center',
    addressRu: 'Склад дистрибуции: учетный квартал 134',
    addressKz: 'Дистрибуция қоймасы: 134-ші есептік орам',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'temirtau',
    nameRu: 'Темиртау',
    nameKz: 'Темиртау',
    region: 'center',
    addressRu: 'Пункт выдачи: пр. Металлургов 28',
    addressKz: 'Беру пункті: Металлургтар даңғылы 28',
    phone: '+7 (700) 800-90-90',
  },

  // Юг
  {
    id: 'shymkent',
    nameRu: 'Шымкент',
    nameKz: 'Шымкент',
    region: 'south',
    addressRu: 'Дистрибьюторский центр: ул. Капал батыра 54',
    addressKz: 'Дистрибьюторлық орталық: Қапал батыр көш. 54',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'taraz',
    nameRu: 'Тараз',
    nameKz: 'Тараз',
    region: 'south',
    addressRu: 'Склад HoReCa: ул. Ниеткалиева 12',
    addressKz: 'HoReCa қоймасы: Ниетқалиев көш. 12',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'kyzylorda',
    nameRu: 'Кызылорда',
    nameKz: 'Қызылорда',
    region: 'south',
    addressRu: 'Логистический комплекс: промзона 8',
    addressKz: 'Логистикалық кешен: өнеркәсіп аймағы 8',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'turkestan',
    nameRu: 'Туркестан',
    nameKz: 'Түркістан',
    region: 'south',
    addressRu: 'Представительство: ул. Б. Саттарханова 88',
    addressKz: 'Өкілдік: Б. Саттарханов көш. 88',
    phone: '+7 (700) 800-90-90',
  },

  // Запад
  {
    id: 'aktau',
    nameRu: 'Актау',
    nameKz: 'Ақтау',
    region: 'west',
    addressRu: 'Склад: 29-й микрорайон, стр. 40',
    addressKz: 'Қойма: 29-шы шағын аудан, 40 ғимарат',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'atyrau',
    nameRu: 'Атырау',
    nameKz: 'Атырау',
    region: 'west',
    addressRu: 'Оптовый терминал: пр. Абулхайыр хана 39',
    addressKz: 'Көтерме терминал: Әбілқайыр хан даңғылы 39',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'aktobe',
    nameRu: 'Актобе',
    nameKz: 'Ақтөбе',
    region: 'west',
    addressRu: 'Складской комплекс: ул. 40 лет Победы 21',
    addressKz: 'Қойма кешені: Жеңіске 40 жыл көш. 21',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'uralsk',
    nameRu: 'Уральск',
    nameKz: 'Орал',
    region: 'west',
    addressRu: 'Представительство: ул. Шолохова 15/1',
    addressKz: 'Өкілдік: Шолохов көш. 15/1',
    phone: '+7 (700) 800-90-90',
  },

  // Север
  {
    id: 'pavlodar',
    nameRu: 'Павлодар',
    nameKz: 'Павлодар',
    region: 'north',
    addressRu: 'Логистический центр: ул. Торговая 5',
    addressKz: 'Логистикалық орталық: Торговая көш. 5',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'kostanay',
    nameRu: 'Костанай',
    nameKz: 'Қостанай',
    region: 'north',
    addressRu: 'Склад: ул. Складская 10',
    addressKz: 'Қойма: Складская көш. 10',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'petropavlovsk',
    nameRu: 'Петропавловск',
    nameKz: 'Петропавл',
    region: 'north',
    addressRu: 'Представительство: ул. Ярослава Гашека 24',
    addressKz: 'Өкілдік: Ярослав Гашек көш. 24',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'kokshetaou',
    nameRu: 'Кокшетау',
    nameKz: 'Көкшетау',
    region: 'north',
    addressRu: 'Склад: Северная промзона 12',
    addressKz: 'Қойма: Солтүстік өнеркәсіп аймағы 12',
    phone: '+7 (700) 800-90-90',
  },

  // Восток
  {
    id: 'ust-kamenogorsk',
    nameRu: 'Усть-Каменогорск',
    nameKz: 'Өскемен',
    region: 'east',
    addressRu: 'Склад HoReCa: ул. Абая 156',
    addressKz: 'HoReCa қоймасы: Абай көш. 156',
    phone: '+7 (700) 800-90-90',
  },
  {
    id: 'semey',
    nameRu: 'Семей',
    nameKz: 'Семей',
    region: 'east',
    addressRu: 'Пункт выдачи: ул. Кабылбаева 42',
    addressKz: 'Беру пункті: Қабылбаев көш. 42',
    phone: '+7 (700) 800-90-90',
  },
];
