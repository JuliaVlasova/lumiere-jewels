import { Link } from "react-router";
import { Sparkles } from "lucide-react";

export default function Stones() {
  const naturalStones = [
    {
      name: "Бриллианты",
      description:
        "Самый твердый минерал на Земле. Символ вечной любви и непоколебимости.",
      properties: "Твердость 10 по шкале Мооса",
      image: "/public/images/category-4.jpg",
    },
    {
      name: "Сапфиры",
      description:
        "Благородный корунд синего цвета. Символизирует мудрость и верность.",
      properties: "Твердость 9 по шкале Мооса",
      image: "/public/images/category-3.jpg",
    },
    {
      name: "Изумруды",
      description:
        "Зеленый берилл высшего качества. Камень гармонии и природной силы.",
      properties: "Твердость 7.5-8 по шкале Мооса",
      image: "/public/images/category-2.jpg",
    },
    {
      name: "Рубины",
      description:
        "Красный корунд, символ страсти и энергии. Один из самых ценных камней.",
      properties: "Твердость 9 по шкале Мооса",
      image: "/public/images/category-1.jpg",
    },
    {
      name: "Жемчуг",
      description:
        "Органический драгоценный камень, рожденный в раковинах моллюсков.",
      properties: "Твердость 2.5-4.5 по шкале Мооса",
      image: "/public/images/category-4.jpg",
    },
  ];

  const syntheticStones = [
    {
      name: "Фианиты",
      description:
        "Кубический диоксид циркония. Доступная альтернатива бриллиантам с отличными оптическими свойствами.",
      advantages: [
        "Идеальная чистота",
        "Доступная цена",
        "Высокая износостойкость",
      ],
    },
    {
      name: "Муассаниты",
      description:
        "Карбид кремния. Превосходит бриллианты по блеску и огню, экологичная альтернатива.",
      advantages: [
        "Больше блеска, чем у бриллианта",
        "Этичное производство",
        "Долговечность",
      ],
    },
    {
      name: "Искусственные сапфиры",
      description:
        "Выращенные в лаборатории корунды. Идентичны натуральным по составу и свойствам.",
      advantages: [
        "Идеальная чистота",
        "Контролируемый цвет",
        "Экологичность",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('/public/images/article-1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
              О драгоценных камнях
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Мини-энциклопедия натуральных и искусственных камней
            </p>
          </div>
        </div>
      </div>

      {/* Natural Stones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-4 tracking-wide">
            Натуральные камни
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Драгоценность от природы. Каждый камень уникален, с собственной
            историей длиной в миллионы лет. Мы гарантируем этичное
            происхождение всех наших камней.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {naturalStones.map((stone, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={stone.image}
                    alt={stone.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-3">{stone.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {stone.description}
                  </p>
                  <div className="bg-gray-50 rounded px-3 py-2">
                    <p className="text-xs text-gray-700">{stone.properties}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Synthetic Stones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-4 tracking-wide">
            Искусственные камни
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Современная, этичная и доступная альтернатива. Выращенные в
            лаборатории камни обладают идеальной чистотой и не уступают
            натуральным по красоте.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {syntheticStones.map((stone, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-light mb-4">{stone.name}</h3>
                <p className="text-gray-600 text-sm mb-6">
                  {stone.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-700 mb-2 tracking-wider">
                    ПРЕИМУЩЕСТВА:
                  </p>
                  {stone.advantages.map((advantage, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-8 tracking-wide">
              Наша позиция
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                В Lumiere Jewels мы верим, что красота не должна требовать
                жертв. Мы тщательно отслеживаем происхождение всех натуральных
                камней, работая только с сертифицированными поставщиками,
                которые соблюдают этические нормы добычи.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Одновременно мы гордимся нашей коллекцией искусственных камней.
                Технологии позволяют создавать камни, которые по красоте и
                качеству не уступают природным, но при этом доступны каждому и
                не наносят вреда окружающей среде.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Выбор между натуральным и искусственным — это ваш личный выбор
                ценностей. Мы предлагаем полную информацию о каждом изделии,
                чтобы вы могли сделать осознанное решение.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 tracking-wide">
            Найдите свой идеальный камень
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Изучите наш каталог и выберите украшение, которое отражает вашу
            индивидуальность
          </p>
          <Link
            to="/catalog"
            className="inline-block px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors tracking-wider text-sm"
          >
            СМОТРЕТЬ КАТАЛОГ
          </Link>
        </div>
      </section>
    </div>
  );
}
