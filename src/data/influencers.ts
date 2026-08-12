export interface InfluencerItem {
  id: string;
  name: string;
  roleRu: string;
  roleKz: string;
  followers: string;
  image: string;
}

export const INFLUENCERS_DATA: InfluencerItem[] = [
  {
    id: 'erkebulan-toktar',
    name: 'Еркебулан Токтар',
    roleRu: 'Актер, спортсмен, блогер',
    roleKz: 'Актер, спортшы, блогер',
    followers: '2.4M+',
    image: '/assets/trust/bloggers/erkebulan-toktar.jpg',
  },
  {
    id: 'bydastan',
    name: 'ByDastan',
    roleRu: 'Контент-мейкер, трендсеттер',
    roleKz: 'Контент-мейкер, трендсеттер',
    followers: '1.8M+',
    image: '/assets/trust/bloggers/bydastan-original.webp',
  },
  {
    id: 'oljaskhan',
    name: 'Oljaskhan',
    roleRu: 'Инфлюенсер, шоумен',
    roleKz: 'Инфлюенсер, шоумен',
    followers: '1.5M+',
    image: '/assets/trust/bloggers/oljaskhan-original.webp',
  },
  {
    id: 'bota-mia',
    name: 'Bota Mia',
    roleRu: 'LIFESTYLE & BEAUTY БЛОГЕР',
    roleKz: 'LIFESTYLE & BEAUTY БЛОГЕР',
    followers: '1.8M+',
    image: '/assets/trust/bloggers/bota-mia-original.webp',
  },
];
