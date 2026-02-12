import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            Свяжитесь с нами
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы всегда рады ответить на ваши вопросы и помочь с выбором
            украшения
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light mb-6 tracking-wide">
              Напишите нам
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2 tracking-wider"
                >
                  ИМЯ
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2 tracking-wider"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2 tracking-wider"
                >
                  ТЕЛЕФОН
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2 tracking-wider"
                >
                  ТЕМА
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600 bg-white"
                >
                  <option>Вопрос о товаре</option>
                  <option>Заказ на изготовление</option>
                  <option>Доставка</option>
                  <option>Возврат</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2 tracking-wider"
                >
                  СООБЩЕНИЕ
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600 resize-none"
                  placeholder="Расскажите подробнее..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-amber-600 text-white hover:bg-amber-700 transition-colors tracking-wider text-sm"
              >
                ОТПРАВИТЬ СООБЩЕНИЕ
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-light mb-6 tracking-wide">
              Контактная информация
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-light mb-1">Адрес</h3>
                  <p className="text-sm text-gray-600">
                    г. Москва, ул. Петровка, д. 15
                    <br />
                    ТЦ "Петровский пассаж", 2 этаж
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-light mb-1">Телефон</h3>
                  <p className="text-sm text-gray-600">
                    +7 (495) 123-45-67
                    <br />
                    +7 (495) 123-45-68
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-light mb-1">Email</h3>
                  <p className="text-sm text-gray-600">
                    info@lumierejewels.ru
                    <br />
                    support@lumierejewels.ru
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-light mb-1">Часы работы</h3>
                  <p className="text-sm text-gray-600">
                    Понедельник - Воскресенье
                    <br />
                    10:00 - 22:00
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wider text-gray-700">
                СОЦИАЛЬНЫЕ СЕТИ
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-gray-100 h-96">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <p className="text-gray-500">Здесь будет карта с местоположением</p>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 tracking-wide">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-light mb-2">Как я могу оформить заказ?</h3>
                <p className="text-sm text-gray-600">
                  Вы можете оформить заказ онлайн на нашем сайте, по телефону
                  или посетив наш салон. Мы принимаем все основные способы
                  оплаты.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-light mb-2">Сколько времени занимает доставка?</h3>
                <p className="text-sm text-gray-600">
                  По Москве доставка осуществляется в течение 1-2 рабочих дней.
                  По России — 3-7 рабочих дней в зависимости от региона.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-light mb-2">
                  Могу ли я вернуть украшение?
                </h3>
                <p className="text-sm text-gray-600">
                  Да, у вас есть 30 дней с момента покупки для возврата или
                  обмена украшения. Изделие должно быть в оригинальном
                  состоянии.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-light mb-2">
                  Предоставляете ли вы сертификаты на камни?
                </h3>
                <p className="text-sm text-gray-600">
                  Да, все украшения с драгоценными камнями от 0.3 карата
                  сопровождаются сертификатом независимой геммологической
                  лаборатории.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
