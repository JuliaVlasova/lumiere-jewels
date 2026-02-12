import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Sparkles, Award, Shield } from "lucide-react";

// Custom arrow components
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
  >
    <ChevronRight className="w-6 h-6 text-gray-900" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
  >
    <ChevronLeft className="w-6 h-6 text-gray-900" />
  </button>
);

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      image: "/public/images/slider-1.jpg",
      title: "Вечная классика в деталях",
      subtitle: "Кольца с натуральными сапфирами",
      link: "/catalog/sapphires",
    },
    {
      image: "/public/images/slider-2.jpg",
      title: "Создай свой стиль",
      subtitle: "Серебро 925 с искусственными камнями",
      link: "/catalog/silver",
    },
    {
      image: "/public/images/slider-3.jpg",
      title: "Чистота платины. Сила чувств",
      subtitle: "Эксклюзивная коллекция из платины",
      link: "/catalog/platinum",
    },
  ];

  const categories = [
    {
      title: "Натуральные камни",
      description: "Драгоценность от природы",
      image: "/public/images/category-1.jpg",
      link: "/stones",
    },
    {
      title: "Искусственные камни",
      description: "Совершенство технологий",
      image: "/public/images/category-2.jpg",
      link: "/stones",
    },
    {
      title: "Драгоценные металлы",
      description: "Золото, серебро, платина",
      image: "/public/images/category-3.jpg",
      link: "/metals",
    },
    {
      title: "Подбор по случаю",
      description: "Для каждого момента",
      image: "/public/images/category-4.jpg",
      link: "/guide",
    },
  ];

  const blogPosts = [
    {
      title: "Как отличить фианит от бриллианта?",
      excerpt: "Подробный гид по различиям между натуральными и искусственными камнями.",
      image: "/public/images/article-1.jpg",
      link: "/blog",
    },
    {
      title: "Как выбрать размер кольца?",
      excerpt: "Простые способы определить свой размер кольца в домашних условиях.",
      image: "/public/images/article-2.jpg",
      link: "/blog",
    },
    {
      title: "Уход за ювелирными изделиями",
      excerpt: "Советы по правильному хранению и очистке драгоценностей.",
      image: "/public/images/article-3.jpg",
      link: "/blog",
    },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-wide">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">
                      {slide.subtitle}
                    </p>
                    <Link
                      to={slide.link}
                      className="inline-block px-8 py-3 bg-white text-gray-900 hover:bg-amber-600 hover:text-white transition-all duration-300 tracking-wider text-sm"
                    >
                      СМОТРЕТЬ КОЛЛЕКЦИЮ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Features */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Sparkles className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-light mb-2">Прозрачность</h3>
              <p className="text-sm text-gray-600">
                Полная информация о происхождении и составе
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-light mb-2">Качество</h3>
              <p className="text-sm text-gray-600">
                Сертифицированные материалы и мастерство
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-light mb-2">Гарантия</h3>
              <p className="text-sm text-gray-600">
                Пожизненная гарантия на все изделия
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
            Популярные категории
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden aspect-[3/4] rounded-lg"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-light mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            Искусство, застывшее в драгоценностях
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Мы верим, что красота бывает разной — как в уникальных природных камнях,
            так и в безупречных лабораторных творениях
          </p>
          <Link
            to="/catalog"
            className="inline-block px-10 py-4 bg-amber-600 text-white hover:bg-amber-700 transition-colors tracking-wider text-sm"
          >
            СМОТРЕТЬ КАТАЛОГ
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
            Истории и знания
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={post.link}
                className="group"
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-light mb-2 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
