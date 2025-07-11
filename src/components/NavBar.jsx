function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between items-center p-4 md:p-8 flex-wrap">
      <div className="text-2xl font-bold tracking-wide">SKYNE <span className="text-orange-500">⚡</span></div>
      <ul className="list-none flex gap-8 m-0">
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-300">SHOP</li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-300">MY ACCOUNT</li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-300">HOMEPAGE</li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-300">JOURNAL</li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-300">ABOUT US</li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-300">CONTACT</li>
      </ul>
      <div className="font-bold">ACCOUNT</div>
    </nav>
  );
}

export default Navbar;
