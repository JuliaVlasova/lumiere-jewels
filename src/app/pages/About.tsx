import { Award, Heart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router";

export default function About() {
  const values = [
    {
      icon: Sparkles,
      title: "Прозрачность",
      description:
        "Мы предоставляем полную информацию о происхождении каждого камня и металла.",
    },
    {
      icon: Award,
      title: "Качество",
      description:
        "Все наши изделия проходят строгий контроль качества и имеют сертификаты.",
    },
    {
      icon: Heart,
      title: "Этичность",
      description:
        "Мы работаем только с поставщиками, соблюдающими этические нормы добычи.",
    },
    {
      icon: Users,
      title: "Индивидуальность",
      description:
        "Каждое украшение — это способ выразить вашу уникальную личность.",
    },
  ];

  const team = [
    {
      name: "Анна Петрова",
      role: "Главный дизайнер",
      bio: "15 лет опыта в ювелирном дизайне. Выпускница МГХПА им. С.Г. Строганова.",
      image: "/lumiere-jewels/images/slider-1.jpg",
    },
    {
      name: "Дмитрий Иванов",
      role: "Мастер-ювелир",
      bio: "20 лет создания эксклюзивных украшений. Обладатель множества наград.",
      image: "/lumiere-jewels/images/slider-2.jpg",
    },
    {
      name: "Мария Соколова",
      role: "Эксперт по камням",
      bio: "Геммолог с международным сертификатом. Специалист по оценке драгоценных камней.",
      image: "/lumiere-jewels/images/slider-3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/lumiere-jewels/images/slider-1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide">
              О Lumiere Jewels
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Искусство, застывшее в драгоценностях. Настоящее и доступное.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-8 tracking-wide">
              Наша история
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Lumiere Jewels родился из простой идеи: драгоценности должны
                быть доступны каждому, кто ценит красоту и качество. Мы верим,
                что украшение — это не просто аксессуар, а способ выразить свою
                индивидуальность, запечатлеть важный момент или передать чувства.
              </p>
              <p>
                Наша команда состоит из страстных профессионалов: дизайнеров,
                ювелиров и геммологов, которые вкладывают душу в каждое изделие.
                Мы работаем только с проверенными поставщиками, гарантируя
                этичное происхождение всех материалов.
              </p>
              <p>
                Мы гордимся тем, что предлагаем как натуральные драгоценные
                камни, так и их лабораторные аналоги. Современные технологии
                позволяют создавать камни идеальной чистоты, не уступающие по
                красоте природным, но доступные более широкому кругу покупателей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 tracking-wide">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-light mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-light mb-6 tracking-wide">
                Наша мастерская
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                В нашей мастерской рождаются уникальные украшения. Мы сочетаем
                традиционные ювелирные техники с современными технологиями,
                создавая изделия, которые будут радовать вас долгие годы.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Каждое украшение проходит множество этапов: от эскиза до
                финальной полировки. Наши мастера уделяют внимание каждой детали,
                обеспечивая безупречное качество.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Мы также предлагаем услуги по изготовлению украшений на заказ.
                Если у вас есть особая идея или вы хотите воплотить свой дизайн —
                мы будем рады помочь вам создать уникальное изделие.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/lumiere-jewels/images/slider-1.jpg"
                alt="Мастерская"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-4 tracking-wide">
            Наша команда
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Познакомьтесь с людьми, которые создают красоту
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-1">{member.name}</h3>
                  <p className="text-sm text-amber-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 tracking-wide">
              Гарантии и возврат
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-light mb-4">Пожизненная гарантия</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Мы гарантируем качество всех наших изделий. Если в течение
                  гарантийного срока обнаружится заводской брак, мы бесплатно
                  отремонтируем или заменим украшение.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-light mb-4">30 дней на возврат</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Если украшение вам не подошло, вы можете вернуть его в течение
                  30 дней с момента покупки. Мы вернем полную стоимость без
                  вопросов.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-light mb-4">Бесплатная доставка</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  При заказе от 50 000 ₽ мы доставим ваше украшение бесплатно в
                  любую точку России. Доставка осуществляется курьерской службой
                  с возможностью примерки.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-light mb-4">Сертификаты</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Все украшения с драгоценными камнями от 0.3 карата
                  сопровождаются сертификатом независимой геммологической
                  лаборатории.
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
            Станьте частью Lumiere Jewels
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Откройте для себя мир элегантных украшений, созданных с любовью и
            вниманием к деталям
          </p>
          <Link
            to="/lumiere-jewels/catalog"
            className="inline-block px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors tracking-wider text-sm"
          >
            СМОТРЕТЬ КАТАЛОГ
          </Link>
        </div>
      </section>
    </div>
  );
}
