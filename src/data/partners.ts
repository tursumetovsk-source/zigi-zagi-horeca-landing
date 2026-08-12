export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  categoryRu: string;
  categoryKz: string;
}

export const PARTNERS_DATA: PartnerItem[] = [
  {
    id: 'rixos',
    name: 'RIXOS HOTELS',
    logo: '/assets/trust/logos/rixos.svg',
    categoryRu: 'Премиум отели & курорты',
    categoryKz: 'Премиум отельдер мен курорттар',
  },
  {
    id: 'magnum',
    name: 'MAGNUM CASH & CARRY',
    logo: '/assets/trust/logos/magnum.svg',
    categoryRu: 'Крупнейшая торговая сеть РК',
    categoryKz: 'ҚР ең ірі сауда желісі',
  },
  {
    id: 'flyarystan',
    name: 'FLYARYSTAN',
    logo: '/assets/trust/logos/flyarystan.png',
    categoryRu: 'Авиакомпания',
    categoryKz: 'Әуе компаниясы',
  },
  {
    id: 'galmart',
    name: 'GALMART',
    logo: '/assets/trust/logos/galmart.svg',
    categoryRu: 'Сеть премиальных супермаркетов',
    categoryKz: 'Премиум супермаркеттер желісі',
  },
  {
    id: 'small',
    name: 'SMALL & SPARK',
    logo: '/assets/trust/logos/small.svg',
    categoryRu: 'Сеть супермаркетов',
    categoryKz: 'Супермаркеттер желісі',
  },
];
