import { Info,  Instagram,  Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import googlepay from '../assets/payments/googlepay.png';
import mastercard from '../assets/payments/mastercard.png';
import paypal from '../assets/payments/paypal.png';
import visa from '../assets/payments/visa.png';
import { Link } from 'react-router';

function Footer() {
  const footerItem = [
    {
      icon: <Info/>,
      name: "About",
      slug: "/about-us",
      target: ""
    },
    {
      icon: <Phone/>,
      name: "Contact Us",
      slug: "/contact-us",
      target: ""
    },
  ];

  return (
    <div className="bg-black text-white py-6 px-4 flex flex-col md:flex-row justify-between items-center">
      <p>© Skyne 2025. All rights reserved.</p>
      <div className="flex flex-wrap justify-center items-center gap-4">
      {footerItem.map((item) => (
        <Link
          to={item.slug}
          target={item.target}
          key={item.name}
          className="flex items-center gap-1 text-sm hover:text-orange-500 transition"
        >
          {item.icon}
          <span className="font-medium">{item.name}</span>
        </Link>
      ))}

      <a
        href="https://www.instagram.com/skyne.clothing/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm hover:text-orange-500 transition"
      >
        <Instagram />
        <span className="font-medium">instagram</span>
      </a>
      </div>
      <div className="flex gap-4 items-center">
        <img src={googlepay} alt="Google Pay" className="h-8 grayscale brightness-100 invert" />
        <img src={mastercard} alt="MasterCard" className="h-8 grayscale brightness-100 invert" />
        <img src={paypal} alt="PayPal" className="h-8 grayscale brightness-100 invert" />
        <img src={visa} alt="Visa" className="h-8 grayscale brightness-100 invert" />
      </div>
    </div>
  );
}

export default Footer;
