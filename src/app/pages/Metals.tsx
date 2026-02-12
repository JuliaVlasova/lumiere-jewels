import { Link } from "react-router";

export default function Metals() {
  const metals = [
    {
      name: "Золото",
      description:
        "Благородный металл, символ роскоши и вечности. Не окисляется, сохраняет блеск веками.",
      types: [
        {
          name: "Золото 585 пробы",
          composition: "58.5% золота, 41.5% лигатуры",
          properties:
            "Оптимальное соотношение цены и качества. Достаточно прочное для ежедневного ношения.",
        },
        {
          name: "Золото 750 пробы",
          composition: "75% золота, 25% лигатуры",
          properties:
            "Высокое содержание золота, благородный цвет, подходит для эксклюзивных изделий.",
        },
      ],
      colors: [
        { name: "Желтое золото", description: "Классический теплый оттенок" },
        { name: "Белое золото", description: "Современная элегантность" },
        { name: "Красное золото", description: "Романтичный розовый оттенок" },
      ],
      care: [
        "Протирайте мягкой тканью после ношения",
        "Храните отдельно от других металлов",
        "Периодически очищайте в теплой мыльной воде",
        "Избегайте контакта с хлором и агрессивными химикатами",
      ],
      image: "/public/images/category-1.jpg",
    },
    {
      name: "Серебро",
      description:
        "Демократичный благородный металл с характерным холодным блеском. Идеально для современных дизайнов.",
      types: [
        {
          name: "Серебро 925 пробы (стерлинговое)",
          composition: "92.5% серебра, 7.5% меди",
          properties:
            "Стандарт ювелирной промышленности. Прочное, но достаточно мягкое для обработки.",
        },
      ],
      colors: [
        { name: "Натуральное серебро", description: "Холодный белый блеск" },
        {
          name: "Черненое серебро",
          description: "Матовая винтажная отделка",
        },
        { name: "Родированное", description: "Защищенное от потускнения" },
      ],
      care: [
        "Храните в герметичных пакетах или шкатулках",
        "Регулярно полируйте специальными салфетками",
        "Снимайте при контакте с водой и косметикой",
        "Для очистки используйте специальные средства для серебра",
      ],
      image: "/public/images/category-2.jpg",
    },
    {
      name: "Платина",
      description:
        "Редкий и престижный металл, символ статуса. Гипоаллергенный, невероятно прочный и долговечный.",
      types: [
        {
          name: "Платина 950 пробы",
          composition: "95% платины, 5% лигатуры",
          properties:
            "Высший стандарт роскоши. Не теряет объем со временем, гипоаллергенна.",
        },
      ],
      colors: [
        {
          name: "Натуральная платина",
          description: "Благородный серо-белый оттенок",
        },
      ],
      care: [
        "Практически не требует ухода",
        "Протирайте мягкой тканью для сохранения блеска",
        "Можно носить постоянно, не боясь повреждений",
        "Периодически полируйте у ювелира",
      ],
      image: "/public/images/category-3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            О драгоценных металлах
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Золото, серебро, платина — основа любого ювелирного украшения.
            Узнайте больше о свойствах, пробах и правилах ухода.
          </p>
        </div>
      </div>

      {/* Metals */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-24">
          {metals.map((metal, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-2" : ""
                } rounded-lg overflow-hidden`}
              >
                <img
                  src={metal.image}
                  alt={metal.name}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl font-light mb-4 tracking-wide">
                  {metal.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {metal.description}
                </p>

                {/* Types */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold mb-4 tracking-wider text-gray-700">
                    ПРОБЫ
                  </h3>
                  <div className="space-y-4">
                    {metal.types.map((type, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <h4 className="font-light mb-2">{type.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {type.composition}
                        </p>
                        <p className="text-sm text-gray-700">
                          {type.properties}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold mb-4 tracking-wider text-gray-700">
                    ОТТЕНКИ
                  </h3>
                  <div className="space-y-2">
                    {metal.colors.map((color, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-light">{color.name}</p>
                          <p className="text-xs text-gray-600">
                            {color.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Care */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 tracking-wider text-gray-700">
                    УХОД
                  </h3>
                  <ul className="space-y-2">
                    {metal.care.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 tracking-wide">
            Сравнение металлов
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Характеристика
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Золото
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Серебро
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Платина
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Долговечность
                  </td>
                  <td className="px-6 py-4 text-sm">Высокая</td>
                  <td className="px-6 py-4 text-sm">Средняя</td>
                  <td className="px-6 py-4 text-sm">Очень высокая</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Гипоаллергенность
                  </td>
                  <td className="px-6 py-4 text-sm">Средняя</td>
                  <td className="px-6 py-4 text-sm">Низкая</td>
                  <td className="px-6 py-4 text-sm">Высокая</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Требования к уходу
                  </td>
                  <td className="px-6 py-4 text-sm">Минимальные</td>
                  <td className="px-6 py-4 text-sm">Регулярная чистка</td>
                  <td className="px-6 py-4 text-sm">Минимальные</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Ценовая категория
                  </td>
                  <td className="px-6 py-4 text-sm">Средняя-высокая</td>
                  <td className="px-6 py-4 text-sm">Доступная</td>
                  <td className="px-6 py-4 text-sm">Премиум</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Стиль
                  </td>
                  <td className="px-6 py-4 text-sm">Классика</td>
                  <td className="px-6 py-4 text-sm">Современный</td>
                  <td className="px-6 py-4 text-sm">Роскошь</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Combination Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-8 tracking-wide">
              Советы по комбинированию
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 space-y-6">
              <div>
                <h3 className="font-light mb-3">Можно ли сочетать разные металлы?</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Да! Современная мода позволяет смешивать металлы. Особенно
                  гармонично смотрятся сочетания желтого и белого золота,
                  серебра с золотом. Главное — соблюдать баланс и единство
                  стиля.
                </p>
              </div>
              <div>
                <h3 className="font-light mb-3">Как выбрать металл под цвет кожи?</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Теплые оттенки кожи гармонируют с желтым и красным золотом.
                  Холодные — с белым золотом, серебром и платиной. Но это не
                  строгое правило — носите то, что вам нравится!
                </p>
              </div>
              <div>
                <h3 className="font-light mb-3">Какой металл лучше для помолвочного кольца?</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Платина и белое золото 750 пробы — классический выбор для
                  помолвочных колец с бриллиантами. Они подчеркивают блеск
                  камня и не требуют частого ухода.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 tracking-wide">
            Найдите свой идеальный металл
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Изучите наш каталог украшений из золота, серебра и платины
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
