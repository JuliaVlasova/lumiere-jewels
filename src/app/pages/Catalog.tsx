import { useState } from "react";
import { Link, useParams } from "react-router";
import { SlidersHorizontal, Heart, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  metal: string;
  stone: string;
  image: string;
  category: string;
}

export default function Catalog() {
  const { category } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMetal, setSelectedMetal] = useState<string>("all");
  const [selectedStone, setSelectedStone] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const products: Product[] = [
    {
      id: 1,
      name: 'Кольцо "Лунная соната"',
      description: "Серебро 925 с фианитом",
      price: 15900,
      metal: "silver",
      stone: "cubic-zirconia",
      image: "/src/images/category-1.jpg",
      category: "rings",
    },
    {
      id: 2,
      name: 'Серьги "Сапфировая роскошь"',
      description: "Золото 750 с натуральными сапфирами",
      price: 125000,
      metal: "gold",
      stone: "sapphire",
      image: "/src/images/category-2.jpg",
      category: "earrings",
    },
    {
      id: 3,
      name: 'Подвеска "Изумрудная мечта"',
      description: "Платина 950 с натуральным изумрудом",
      price: 285000,
      metal: "platinum",
      stone: "emerald",
      image: "/src/images/category-3.jpg",
      category: "pendants",
    },
    {
      id: 4,
      name: 'Кольцо "Бриллиантовое сияние"',
      description: "Золото 750 с натуральным бриллиантом",
      price: 195000,
      metal: "gold",
      stone: "diamond",
      image: "/src/images/category-4.jpg",
      category: "rings",
    },
    {
      id: 5,
      name: 'Серьги "Рубиновая страсть"',
      description: "Золото 585 с натуральными рубинами",
      price: 89000,
      metal: "gold",
      stone: "ruby",
      image: "/src/images/category-1.jpg",
      category: "earrings",
    },
    {
      id: 6,
      name: 'Браслет "Жемчужная элегантность"',
      description: "Серебро 925 с натуральным жемчугом",
      price: 35000,
      metal: "silver",
      stone: "pearl",
      image: "/src/images/category-2.jpg",
      category: "bracelets",
    },
    {
      id: 7,
      name: 'Кольцо "Платиновая классика"',
      description: "Платина 950 с бриллиантами",
      price: 345000,
      metal: "platinum",
      stone: "diamond",
      image: "/src/images/category-3.jpg",
      category: "rings",
    },
    {
      id: 8,
      name: 'Подвеска "Серебряный минимализм"',
      description: "Серебро 925 с муассанитом",
      price: 22000,
      metal: "silver",
      stone: "moissanite",
      image: "/src/images/category-4.jpg",
      category: "pendants",
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedMetal !== "all" && product.metal !== selectedMetal) return false;
    if (selectedStone !== "all" && product.stone !== selectedStone) return false;
    if (priceRange === "low" && product.price > 50000) return false;
    if (priceRange === "medium" && (product.price < 50000 || product.price > 150000)) return false;
    if (priceRange === "high" && product.price < 150000) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light tracking-wide text-center mb-4">
            {category ? getCategoryTitle(category) : "Каталог украшений"}
          </h1>
          <p className="text-gray-600 text-center">
            {filteredProducts.length} изделий
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`lg:w-64 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-light tracking-wide">Фильтры</h2>
                <button
                  onClick={() => {
                    setSelectedMetal("all");
                    setSelectedStone("all");
                    setPriceRange("all");
                  }}
                  className="text-sm text-amber-600 hover:text-amber-700 cursor-pointer"
                >
                  Сбросить
                </button>
              </div>

              {/* Metal Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 tracking-wider text-gray-700">
                  МЕТАЛЛ
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="metal"
                      value="all"
                      checked={selectedMetal === "all"}
                      onChange={(e) => setSelectedMetal(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">Все</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="metal"
                      value="gold"
                      checked={selectedMetal === "gold"}
                      onChange={(e) => setSelectedMetal(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">Золото</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="metal"
                      value="silver"
                      checked={selectedMetal === "silver"}
                      onChange={(e) => setSelectedMetal(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">Серебро</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="metal"
                      value="platinum"
                      checked={selectedMetal === "platinum"}
                      onChange={(e) => setSelectedMetal(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">Платина</span>
                  </label>
                </div>
              </div>

              {/* Stone Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 tracking-wider text-gray-700">
                  КАМЕНЬ
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stone"
                      value="all"
                      checked={selectedStone === "all"}
                      onChange={(e) => setSelectedStone(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">Все</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stone"
                      value="diamond"
                      checked={selectedStone === "diamond"}
                      onChange={(e) => setSelectedStone(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">Бриллианты</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stone"
                      value="sapphire"
                      checked={selectedStone === "sapphire"}
                      onChange={(e) => setSelectedStone(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">Сапфиры</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stone"
                      value="emerald"
                      checked={selectedStone === "emerald"}
                      onChange={(e) => setSelectedStone(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">Изумруды</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stone"
                      value="ruby"
                      checked={selectedStone === "ruby"}
                      onChange={(e) => setSelectedStone(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">Рубины</span>
                  </label>
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-semibold mb-3 tracking-wider text-gray-700">
                  ЦЕНА
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="all"
                      checked={priceRange === "all"}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">Все</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="low"
                      checked={priceRange === "low"}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">До 50 000 ₽</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="medium"
                      checked={priceRange === "medium"}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">50 000 - 150 000 ₽</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="high"
                      checked={priceRange === "high"}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="text-amber-600"
                    />
                    <span className="text-sm">От 150 000 ₽</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 mb-6 px-4 py-2 border border-gray-300 rounded-lg"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm">Фильтры</span>
            </button>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-square bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-amber-600 hover:text-white transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-amber-600 hover:text-white transition-colors">
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </Link>
                  <h3 className="font-light mb-1 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-light">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </p>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-600">
                  По выбранным фильтрам ничего не найдено
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function getCategoryTitle(category: string): string {
  const titles: { [key: string]: string } = {
    gold: "Золото",
    silver: "Серебро",
    platinum: "Платина",
    rings: "Кольца",
    earrings: "Серьги",
    pendants: "Подвески",
    bracelets: "Браслеты",
    diamonds: "Бриллианты",
    sapphires: "Сапфиры",
    emeralds: "Изумруды",
  };
  return titles[category] || "Каталог";
}
