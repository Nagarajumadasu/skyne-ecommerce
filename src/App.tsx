import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import Checkout from "./Pages/Checkout";
import Wishlist from "./Pages/Wishlist.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Lazy load components for better performance
const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs.jsx"));
const Products = lazy(() => import("./Pages/Product.jsx"));
const ProductDetail = lazy(() => import("./Pages/ProductDetail.jsx"));
const ContactUs = lazy(() => import("./Pages/ContactUs.jsx"));
const Cart = lazy(() => import("./Pages/Cart.jsx")); 

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400"></div>
  </div>
);

// 404 Not Found component
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
    <p className="text-xl text-gray-600 mb-8">Page not found</p>
    <a
      href="/"
      className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
    >
      Go Home
    </a>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Navbar />
        <ToastContainer position="top-center" autoClose={1500} />

        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}
