import { Outlet, Link, useLocation } from "react-router";
import { Gem, Menu, X, ShoppingBag, Heart, User, Search } from "lucide-react";
import { useState } from "react";
import { useRef, useEffect } from "react";

export default function Root() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const catalogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const target = event.target as Node;

      if (
        catalogRef.current &&
        triggerRef.current &&
        !(catalogRef.current as HTMLElement).contains(target as Node) &&
        !(triggerRef.current as HTMLElement).contains(target as Node)
      ) {
        setIsCatalogOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="py-2 text-center text-sm text-gray-600 border-b border-gray-50">
            <p>✨ Бесплатная доставка при заказе от 50 000 ₽</p>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Gem className="w-8 h-8 text-amber-600" />
              <div className="flex flex-col">
                <span className="text-2xl font-light tracking-wider text-gray-900 cursor-pointer">
                  LUMIERE
                </span>
                <span className="text-xs tracking-widest text-gray-500">
                  J E W E L S
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <div
                className="relative group"
                ref={triggerRef}
                onClick={() => setIsCatalogOpen((prev) => !prev)}
              >
                <button className="text-sm tracking-wide text-gray-700 hover:text-amber-600 transition-colors py-2 cursor-pointer">
                  КАТАЛОГ
                </button>

                {isCatalogOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white shadow-xl border border-gray-100 rounded-lg p-6"
                    ref={catalogRef}
                  >
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3 tracking-wider">
                          ПО МЕТАЛЛУ
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/catalog/gold"
                              className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              Золото
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/catalog/silver"
                              className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              Серебро
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/catalog/platinum"
                              className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              Платина
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3 tracking-wider">
                          ПО ТИПУ
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/catalog/rings"
                              className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              Кольца
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/catalog/earrings"
                              className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              Серьги
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/catalog/pendants"
                              className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              Подвески
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/catalog/bracelets"
                              className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              Браслеты
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3 tracking-wider">
                          ПО КАМНЯМ
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/catalog/diamonds"
                              className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              Бриллианты
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/catalog/sapphires"
                              className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              Сапфиры
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/catalog/emeralds"
                              className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              Изумруды
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/stones"
                className={`text-sm tracking-wide transition-colors ${
                  isActive("/stones")
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                О КАМНЯХ
              </Link>
              <Link
                to="/metals"
                className={`text-sm tracking-wide transition-colors ${
                  isActive("/metals")
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                О МЕТАЛЛАХ
              </Link>
              <Link
                to="/guide"
                className={`text-sm tracking-wide transition-colors ${
                  isActive("/guide")
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                ГИД ПО ВЫБОРУ
              </Link>
              <Link
                to="/blog"
                className={`text-sm tracking-wide transition-colors ${
                  isActive("/blog")
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                БЛОГ
              </Link>
              <Link
                to="/about"
                className={`text-sm tracking-wide transition-colors ${
                  isActive("/about")
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                О НАС
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer">
                <Heart className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer">
                <User className="w-5 h-5" />
              </button>
              <button className="relative text-gray-700 hover:text-amber-600 transition-colors cursor-pointer">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button
                className="lg:hidden text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                to="/catalog"
                className="block text-sm tracking-wide text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                КАТАЛОГ
              </Link>
              <Link
                to="/stones"
                className="block text-sm tracking-wide text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О КАМНЯХ
              </Link>
              <Link
                to="/metals"
                className="block text-sm tracking-wide text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О МЕТАЛЛАХ
              </Link>
              <Link
                to="/guide"
                className="block text-sm tracking-wide text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ГИД ПО ВЫБОРУ
              </Link>
              <Link
                to="/blog"
                className="block text-sm tracking-wide text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                БЛОГ
              </Link>
              <Link
                to="/about"
                className="block text-sm tracking-wide text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О НАС
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Gem className="w-6 h-6 text-amber-500" />
                <span className="text-xl font-light tracking-wider">
                  LUMIERE JEWELS
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Искусство, застывшее в драгоценностях. Настоящее и доступное.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wider">
                НАВИГАЦИЯ
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    to="/catalog"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Каталог
                  </Link>
                </li>
                <li>
                  <Link
                    to="/stones"
                    className="hover:text-amber-500 transition-colors"
                  >
                    О камнях
                  </Link>
                </li>
                <li>
                  <Link
                    to="/guide"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Гид по выбору
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Блог
                  </Link>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wider">
                ИНФОРМАЦИЯ
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Доставка и оплата</li>
                <li>Гарантии и возврат</li>
                <li>Размерная сетка</li>
                <li>Уход за украшениями</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wider">
                КОНТАКТЫ
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@lumierejewels.ru</li>
                <li>Ежедневно, 10:00 - 22:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 Lumiere Jewels. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
