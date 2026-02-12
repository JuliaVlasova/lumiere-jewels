import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-light mb-4 text-gray-900">404</h1>
        <h2 className="text-2xl font-light mb-6 text-gray-700">
          Страница не найдена
        </h2>
        <p className="text-gray-600 mb-8">
          К сожалению, запрашиваемая страница не существует
        </p>
        <Link
          to="/lumiere-jewels/"
          className="inline-block px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors tracking-wider text-sm"
        >
          НА ГЛАВНУЮ
        </Link>
      </div>
    </div>
  );
}
