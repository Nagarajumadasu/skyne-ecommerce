import React from 'react';
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SKYNE <span className="highlight">⚡</span></div>
      <ul className="nav-links">
        <li>SHOP</li>
        <li>MY ACCOUNT</li>
        <li>HOMEPAGE</li>
        <li>JOURNAL</li>
        <li>ABOUT US</li>
        <li>CONTACT</li>
      </ul>
      <div className="account">ACCOUNT</div>
    </nav>
  );
}

export default Navbar;
