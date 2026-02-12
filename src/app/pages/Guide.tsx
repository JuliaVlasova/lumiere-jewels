import { Link } from "react-router";
import { Heart, Gift, Sparkles, Calendar } from "lucide-react";

export default function Guide() {
  const occasions = [
    {
      title: "На помолвку",
      description:
        "Классическое кольцо с бриллиантом или муассанитом. Символ вечной любви.",
      icon: Heart,
      recommendations: [
        "Кольцо из белого золота или платины",
        "Центральный камень от 0.5 карата",
        "Классическая оправа",
      ],
      image: "/public/images/category-1.jpg",
    },
    {
      title: "На свадьбу",
      description:
        "Обручальные кольца — символ единства. Выбирайте комплектом.",
      icon: Heart,
      recommendations: [
        "Идентичный металл для обоих колец",
        "Классический дизайн без крупных камней",
        "Гравировка внутри кольца",
      ],
      image: "/public/images/category-2.jpg",
    },
    {
      title: "На юбилей",
      description:
        "Эксклюзивное украшение с вашим камнем или камнем партнера.",
      icon: Gift,
      recommendations: [
        "Серьги или подвеска с особым камнем",
        "Возможность гравировки даты",
        "Премиум материалы",
      ],
      image: "/public/images/category-3.jpg",
    },
    {
      title: "На день рождения",
      description:
        "Украшение с камнем-талисманом месяца рождения.",
      icon: Calendar,
      recommendations: [
        "Камень месяца рождения",
        "Современный или классический дизайн",
        "Упаковка в подарочной коробке",
      ],
      image: "/public/images/category-4.jpg",
    },
  ];

  const birthstones = [
    { month: "Январь", stone: "Гранат", color: "Темно-красный" },
    { month: "Февраль", stone: "Аметист", color: "Фиолетовый" },
    { month: "Март", stone: "Аквамарин", color: "Голубой" },
    { month: "Апрель", stone: "Бриллиант", color: "Прозрачный" },
    { month: "Май", stone: "Изумруд", color: "Зеленый" },
    { month: "Июнь", stone: "Жемчуг", color: "Белый" },
    { month: "Июль", stone: "Рубин", color: "Красный" },
    { month: "Август", stone: "Перидот", color: "Зеленый" },
    { month: "Сентябрь", stone: "Сапфир", color: "Синий" },
    { month: "Октябрь", stone: "Опал", color: "Переливающийся" },
    { month: "Ноябрь", stone: "Топаз", color: "Золотистый" },
    { month: "Декабрь", stone: "Бирюза", color: "Бирюзовый" },
  ];

  const styles = [
    {
      name: "Минимализм",
      description:
        "Чистые линии, простота форм, акцент на качестве материалов.",
      characteristics: [
        "Отсутствие лишних деталей",
        "Геометричные формы",
        "Монохромность",
      ],
      image: "/public/images/category-4.jpg",
    },
    {
      name: "Классика",
      description:
        "Вечная элегантность, проверенная временем. Сдержанная роскошь.",
      characteristics: [
        "Симметрия",
        "Драгоценные камни",
        "Традиционные формы",
      ],
      image: "/public/images/category-3.jpg",
    },
    {
      name: "Авангард",
      description:
        "Смелые формы, необычные сочетания, эксперименты с материалами.",
      characteristics: [
        "Асимметрия",
        "Необычные формы",
        "Современные техники",
      ],
      image: "/public/images/category-2.jpg",
    },
    {
      name: "Винтаж",
      description:
        "Романтика прошлых эпох, богатство деталей, ручная работа.",
      characteristics: [
        "Филигрань",
        "Орнаменты",
        "Состаренный вид",
      ],
      image: "/public/images/category-1.jpg",
    },
  ];

  const sizingGuide = [
    {
      question: "Как узнать размер кольца?",
      answer:
        "Измерьте диаметр кольца, которое вам подходит, или обхват пальца ниткой. Приложите нитку к линейке. Диаметр 15.7 мм = размер 15, 16.5 мм = размер 16 и т.д.",
    },
    {
      question: "Что делать, если размер между двумя?",
      answer:
        "Если размер между двумя значениями, выбирайте больший. Кольцо должно проходить через сустав, но не болтаться на пальце.",
    },
    {
      question: "Меняется ли размер пальца?",
      answer:
        "Да, размер пальца может меняться в течение дня из-за температуры и отеков. Лучше мерить вечером, когда пальцы чуть больше.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-amber-600" />
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            Гид по выбору украшений
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Поможем выбрать идеальное украшение для любого случая и стиля
          </p>
        </div>
      </div>

      {/* Occasions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-4 tracking-wide">
            Выбор по случаю
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Каждое событие требует особого подхода к выбору украшения
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {occasions.map((occasion, index) => {
              const Icon = occasion.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={occasion.image}
                      alt={occasion.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-amber-600" />
                      <h3 className="text-xl font-light">{occasion.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {occasion.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-700 tracking-wider">
                        РЕКОМЕНДАЦИИ:
                      </p>
                      {occasion.recommendations.map((rec, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Birthstones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-4 tracking-wide">
            Камни-талисманы по месяцам рождения
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Традиционно каждому месяцу соответствует свой камень-талисман
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {birthstones.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  {item.month}
                </p>
                <p className="font-light mb-1">{item.stone}</p>
                <p className="text-xs text-gray-600">{item.color}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-4 tracking-wide">
            Выбор по стилю
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Найдите стиль, который отражает вашу индивидуальность
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style, index) => (
              <div key={index} className="group">
                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-light mb-2">{style.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {style.description}
                </p>
                <div className="space-y-1">
                  {style.characteristics.map((char, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{char}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing Guide */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 tracking-wide">
            Как определить размер
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {sizingGuide.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-light mb-3 text-lg">{item.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Все еще сомневаетесь? Мы всегда готовы помочь!
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors tracking-wider text-sm"
            >
              СВЯЗАТЬСЯ С НАМИ
            </Link>
          </div>
        </div>
      </section>

      {/* Gift Certificate */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg p-12 text-white text-center">
            <Gift className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-light mb-4 tracking-wide">
              Подарочный сертификат
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Не можете решить? Подарите возможность выбора. Подарочный
              сертификат Lumiere Jewels — это элегантное решение для любого
              случая.
            </p>
            <button className="px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors tracking-wider text-sm">
              ОФОРМИТЬ СЕРТИФИКАТ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
