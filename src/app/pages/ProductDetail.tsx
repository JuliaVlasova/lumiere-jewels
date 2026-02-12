import { useState } from "react";
import { useParams, Link } from "react-router";
import { Heart, ShoppingCart, Share2, Star, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: 1,
    name: 'Кольцо "Лунная соната"',
    shortDescription: "Для тех, кто ценит ясность линий и холодное сияние",
    description:
      "Это кольцо для тех, кто ценит ясность линий и холодное сияние лунного света, застывшего в камне. Минималистичный дизайн подчеркивает красоту фианита, который играет всеми гранями при любом освещении.",
    price: 15900,
    images: [
      "/public/images/category-4.jpg",
      "/public/images/category-3.jpg",
      "/public/images/category-2.jpg",
    ],
    specifications: {
      metal: "Серебро 925 пробы",
      metalWeight: "3.2 г",
      stone: "Фианит (искусственный)",
      stoneCount: "1 шт",
      stoneCut: "Круглая",
      stoneSize: "6 мм",
      sizes: ["15", "16", "17", "18", "19"],
      country: "Россия",
    },
    care: [
      "Храните украшение отдельно от других изделий",
      "Избегайте контакта с химическими веществами",
      "Снимайте перед водными процедурами",
      "Периодически протирайте мягкой тканью",
    ],
    reviews: [
      {
        name: "Анна К.",
        rating: 5,
        date: "15 января 2026",
        text: "Прекрасное кольцо! Камень действительно играет на свету, как настоящий бриллиант. Очень довольна покупкой.",
      },
      {
        name: "Мария С.",
        rating: 5,
        date: "8 января 2026",
        text: "Элегантное и изящное украшение. Качество на высоте, серебро не темнеет.",
      },
    ],
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Серьги в комплект",
      price: 18900,
      image: "/public/images/category-4.jpg",
    },
    {
      id: 3,
      name: "Подвеска в комплект",
      price: 12900,
      image: "/public/images/category-3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-amber-600">
              Главная
            </Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-amber-600">
              Каталог
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div>
            <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() =>
                  setSelectedImage(
                    selectedImage === 0
                      ? product.images.length - 1
                      : selectedImage - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setSelectedImage((selectedImage + 1) % product.images.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-amber-600"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-light mb-4 tracking-wide">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.reviews.length} отзыва
              </span>
            </div>

            <p className="text-3xl font-light mb-6">
              {product.price.toLocaleString("ru-RU")} ₽
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3 tracking-wider">
                РАЗМЕР
              </h3>
              <div className="flex gap-2">
                {product.specifications.sizes.map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 border border-gray-300 rounded hover:border-amber-600 hover:text-amber-600 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link
                to="/guide"
                className="text-sm text-amber-600 hover:text-amber-700 mt-2 inline-block"
              >
                Как определить размер?
              </Link>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-amber-600 text-white py-4 rounded hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>В корзину</span>
              </button>
              <button className="w-14 h-14 border border-gray-300 rounded hover:border-amber-600 hover:text-amber-600 transition-colors flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-14 h-14 border border-gray-300 rounded hover:border-amber-600 hover:text-amber-600 transition-colors flex items-center justify-center">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-gray-100">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-sm font-light">Бесплатная доставка</p>
                  <p className="text-xs text-gray-600">от 50 000 ₽</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-sm font-light">Гарантия</p>
                  <p className="text-xs text-gray-600">Пожизненная</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-sm font-light">Возврат</p>
                  <p className="text-xs text-gray-600">30 дней</p>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-8">
              <h3 className="text-lg font-light mb-4 tracking-wide">
                Технические характеристики
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Металл</span>
                  <span>{product.specifications.metal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Вес металла</span>
                  <span>{product.specifications.metalWeight}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Вставка</span>
                  <span>{product.specifications.stone}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Количество камней</span>
                  <span>{product.specifications.stoneCount}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Огранка</span>
                  <span>{product.specifications.stoneCut}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Размер камня</span>
                  <span>{product.specifications.stoneSize}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Страна производства</span>
                  <span>{product.specifications.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Care Instructions */}
        <div className="mb-20">
          <h2 className="text-2xl font-light mb-6 tracking-wide">
            Советы по уходу
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <ul className="space-y-3">
              {product.care.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-20">
          <h2 className="text-2xl font-light mb-6 tracking-wide">Отзывы</h2>
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-light mb-1">{review.name}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-light mb-6 tracking-wide">
            Идеально сочетается с
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group"
              >
                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-light mb-2 group-hover:text-amber-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-lg font-light">
                  {item.price.toLocaleString("ru-RU")} ₽
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
