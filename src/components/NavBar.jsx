import { Link } from "react-router-dom";
import { Heart, ShoppingCart, User } from "lucide-react"; // Install lucide-react if not already
import logo2 from "../assets/logo2.png";
import { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // change this based on your auth logic

  return (
    <nav className="w-full bg-black text-white h-16 shadow-sm font-[Outfit]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-start w-1/2">
          <Link to="/">
            <img
              src={logo2}
              alt="Skyne Logo"
              className="h-35 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-400 transition">Shop</Link></li>
          <li><Link to="/about-us" className="hover:text-yellow-400 transition">About </Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact </Link></li>
        </ul>

        {/* CTA + Icons */}
        <div className="hidden md:flex items-center gap-5">
          {/* Wishlist */}
          <Link to="/wishlist" className="hover:text-yellow-400 transition">
            <Heart size={22} />
          </Link>

          {/* Cart */}
          <Link to="/cart" className="hover:text-yellow-400 transition">
            <ShoppingCart size={22} />
          </Link>

          {/* Auth Buttons */}
          {isLoggedIn ? (
            <Link to="/profile" className="hover:text-yellow-400 transition">
              <User size={22} />
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-yellow-400 text-black px-5 py-1.5 rounded-full font-semibold text-sm hover:bg-yellow-300 transition">
                  Sign In
                </button>
              </Link>
              <Link to="/products">
                <span className="text-white font-medium text-sm cursor-pointer hover:text-yellow-400 transition">
                  Buy Now
                </span>
              </Link>
            </>
          )}
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden text-white text-2xl">☰</div>
      </div>
    </nav>
  );
}

export default Navbar;
