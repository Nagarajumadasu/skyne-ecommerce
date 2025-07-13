import logo2 from '../assets/logo2.png';

function Navbar() {
  return (
    <nav className="w-full bg-black text-white h-16 shadow-sm font-[Outfit]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">

        {/* Logo only (no text) */}
        <div className="flex items-center justify-start w-1/2">
          <img
            src={logo2}
            alt="Skyne Logo"
            className="h-35 w-auto object-contain" // Updated size
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <li className="cursor-pointer hover:text-yellow-400 transition">Home</li>
          <li className="cursor-pointer hover:text-yellow-400 transition">Shop</li>
          <li className="cursor-pointer hover:text-yellow-400 transition">Journal</li>
          <li className="cursor-pointer hover:text-yellow-400 transition">About</li>
          <li className="cursor-pointer hover:text-yellow-400 transition">Contact</li>
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-yellow-400 text-black px-5 py-1.5 rounded-full font-semibold text-sm hover:bg-yellow-300 transition">
            Sign In
          </button>
          <span className="text-white font-medium text-sm cursor-pointer hover:text-yellow-400 transition">
            Buy Now
          </span>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white text-2xl">
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
