import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Stones from "./pages/Stones";
import Metals from "./pages/Metals";
import Guide from "./pages/Guide";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "catalog", Component: Catalog },
      { path: "catalog/:category", Component: Catalog },
      { path: "product/:id", Component: ProductDetail },
      { path: "stones", Component: Stones },
      { path: "metals", Component: Metals },
      { path: "guide", Component: Guide },
      { path: "blog", Component: Blog },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);