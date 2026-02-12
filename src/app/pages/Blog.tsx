import { Link } from "react-router";
import { Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Как отличить фианит от бриллианта?",
      excerpt:
        "Подробный гид по различиям между натуральными и искусственными камнями. Узнайте, на что обратить внимание при выборе.",
      content:
        "Фианит и бриллиант могут выглядеть очень похоже, но есть несколько ключевых различий...",
      author: "Анна Петрова",
      date: "8 февраля 2026",
      category: "Экспертиза",
      image: "/public/images/article-1.jpg",
    },
    {
      title: "Как выбрать размер кольца?",
      excerpt:
        "Простые способы определить свой размер кольца в домашних условиях. Избегайте ошибок при покупке.",
      content:
        "Правильный размер кольца — залог комфорта. Измерить его можно несколькими способами...",
      author: "Мария Соколова",
      date: "5 февраля 2026",
      category: "Советы",
      image: "/public/images/article-2.jpg",
    },
    {
      title: "Уход за ювелирными изделиями",
      excerpt:
        "Советы по правильному хранению и очистке драгоценностей. Продлите жизнь вашим любимым украшениям.",
      content:
        "Правильный уход за украшениями поможет сохранить их красоту на долгие годы...",
      author: "Дмитрий Иванов",
      date: "1 февраля 2026",
      category: "Уход",
      image: "/public/images/article-3.jpg",
    },
    {
      title: "Тренды в ювелирном мире 2026",
      excerpt:
        "Что будет актуально в этом году? Минимализм, экологичность и новые технологии — разбираем главные тенденции.",
      content:
        "Ювелирная мода постоянно меняется. В 2026 году на первый план выходят...",
      author: "Елена Волкова",
      date: "28 января 2026",
      category: "Тренды",
      image: "/public/images/category-4.jpg",
    },
    {
      title: "История изумрудов: от древности до наших дней",
      excerpt:
        "Изумруды были любимыми камнями Клеопатры. Узнайте больше о богатой истории этого драгоценного камня.",
      content:
        "Изумруды — одни из самых древних драгоценных камней, известных человечеству...",
      author: "Анна Петрова",
      date: "25 января 2026",
      category: "История",
      image: "/public/images/category-3.jpg",
    },
    {
      title: "Как выбрать помолвочное кольцо",
      excerpt:
        "Помолвочное кольцо — это символ любви и обязательств. Полный гид по выбору идеального кольца.",
      content:
        "Выбор помолвочного кольца — ответственный шаг. Вот что нужно знать...",
      author: "Мария Соколова",
      date: "20 января 2026",
      category: "Советы",
      image: "/public/images/category-2.jpg",
    },
  ];

  const categories = ["Все", "Советы", "Экспертиза", "Тренды", "История", "Уход"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            Истории и знания
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Экспертные советы, истории создания коллекций и последние тренды
            в мире ювелирного искусства
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-gray-100 sticky top-[73px] bg-white z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 py-4 overflow-x-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`text-sm tracking-wide whitespace-nowrap transition-colors ${
                  index === 0
                    ? "text-amber-600 border-b-2 border-amber-600 pb-4"
                    : "text-gray-600 hover:text-amber-600 pb-4"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs tracking-wider mb-4">
                  РЕКОМЕНДУЕМ
                </span>
                <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
                  {posts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{posts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{posts[0].date}</span>
                  </div>
                </div>
                <Link
                  to="/blog"
                  className="inline-block px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors tracking-wider text-sm"
                >
                  ЧИТАТЬ ДАЛЕЕ
                </Link>
              </div>
              <div className="order-1 lg:order-2 rounded-lg overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <article key={index} className="group">
                <Link to="/blog">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs tracking-wider mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-light mb-3 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-6 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-4 tracking-wide">
              Подпишитесь на рассылку
            </h2>
            <p className="text-gray-600 mb-8">
              Получайте новые статьи, эксклюзивные предложения и новости о
              новых коллекциях
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors tracking-wider text-sm whitespace-nowrap"
              >
                ПОДПИСАТЬСЯ
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
