import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const privacyTitle = 'Политика конфиденциальности — ZIGI-ZAGI HoReCa';
const privacyDescription =
  'Политика конфиденциальности и обработки персональных данных ТОО ZIGI-ZAGI BEVERAGES.';

export const metadata: Metadata = {
  title: privacyTitle,
  description: privacyDescription,
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: privacyTitle,
    description: privacyDescription,
    url: '/privacy',
    siteName: 'ZIGI-ZAGI HORECA',
    locale: 'ru_RU',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: privacyTitle,
    description: privacyDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Вернуться на главную</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-8 h-8 text-emerald-400" />
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Политика конфиденциальности
          </h1>
        </div>

        <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm md:text-base leading-relaxed">
          <p className="text-base md:text-lg font-semibold text-neutral-200">
            Настоящая Политика конфиденциальности персональных данных (далее — Политика конфиденциальности) действует в отношении всей информации, которую ТОО «ZIGI-ZAGI BEVERAGES» может получить о Пользователе во время использования официального сайта zigi-zagi.kz.
          </p>

          <h2 className="text-xl font-extrabold text-white mt-8">1. Общие положения</h2>
          <p>
            1.1. Использование Пользователем сайта означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя согласно Закону Республики Казахстан от 21 мая 2013 года № 94-V «О персональных данных и их защите».
          </p>
          <p>
            1.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта.
          </p>

          <h2 className="text-xl font-extrabold text-white mt-8">2. Предмет политики конфиденциальности</h2>
          <p>
            2.1. Настоящая Политика устанавливает обязательства ТОО «ZIGI-ZAGI BEVERAGES» по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет при заполнении форм обратной связи и клике на кнопки переадресации в мессенджер WhatsApp.
          </p>
          <p>
            2.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики, могут включать в себя: имя, номер телефона, наименование заведения (HoReCa), город нахождения и предпочтительный способ связи.
          </p>

          <h2 className="text-xl font-extrabold text-white mt-8">3. Цели сбора персональной информации</h2>
          <p>
            3.1. Персональные данные Пользователя ТОО «ZIGI-ZAGI BEVERAGES» может использовать в целях:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Идентификации Пользователя для предоставления индивидуальных оптовых условий и прайс-листов;</li>
            <li>Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся поставок продукции ZIGI-ZAGI;</li>
            <li>Определения места нахождения Пользователя для логистики и закрепления регионального менеджера;</li>
            <li>Предоставления Пользователю эффективной клиентской и технической поддержки.</li>
          </ul>

          <h2 className="text-xl font-extrabold text-white mt-8">4. Способы и сроки обработки персональной информации</h2>
          <p>
            4.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.
          </p>
          <p>
            4.2. Персональные данные Пользователя никогда не передаются третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства Республики Казахстан.
          </p>

          <h2 className="text-xl font-extrabold text-white mt-8">5. Реквизиты компании</h2>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
            <p className="font-bold text-white">ТОО «ZIGI-ZAGI BEVERAGES»</p>
            <p>БИН: 230440012984</p>
            <p>Адрес: Республика Казахстан, г. Алматы, пр. Райымбека 212A</p>
            <p>Телефон: +7 (700) 800-90-90</p>
            <p>Email: horeca@zigi-zagi.kz</p>
          </div>
        </div>
      </div>
    </main>
  );
}
