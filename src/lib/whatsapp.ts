import { Language } from '@/data/translations';

export interface WhatsAppOptions {
  city?: string;
  phone?: string;
  language?: Language;
  source?: string;
  category?: string;
}

const WHATSAPP_NUMBER = '77008009090';

export function createWhatsAppLink({
  city,
  phone,
  language = 'ru',
  source = 'website',
  category,
}: WhatsAppOptions): string {
  let text = '';

  if (language === 'kz') {
    if (city) {
      text = `Саламатсыз ба! Мен ${city} қаласында HoReCa бойынша ZIGI-ZAGI сусындарын көтерме жеткізу шарттары мен өзекті прайсты білгім келеді. (Дереккөз: ${source})`;
    } else if (category) {
      text = `Саламатсыз ба! Мен ${category} санаты бойынша ZIGI-ZAGI сусындарының көтерме бағасын білгім келеді. (Дереккөз: ${source})`;
    } else {
      text = `Саламатсыз ба! Мен HoReCa (ресторан/кафе/бар) үшін ZIGI-ZAGI сусындарын көтерме жеткізу шарттары мен прайсын білгім келеді. (Дереккөз: ${source})`;
    }
  } else {
    if (city) {
      text = `Здравствуйте! Я хочу узнать условия оптовых поставок ZIGI-ZAGI для HoReCa и получить прайс-лист в городе ${city}. (Источник: ${source})`;
    } else if (category) {
      text = `Здравствуйте! Я хочу узнать оптовые условия на категорию напитков "${category}" ZIGI-ZAGI. (Источник: ${source})`;
    } else {
      text = `Здравствуйте! Я хочу узнать условия оптовых поставок ZIGI-ZAGI для HoReCa (рестораны/кафе/бары) и получить прайс-лист. (Источник: ${source})`;
    }
  }

  const recipient = phone?.replace(/\D/g, '') || WHATSAPP_NUMBER;

  return `https://wa.me/${recipient}?text=${encodeURIComponent(text)}`;
}
