import googlepay from '../assets/payments/googlepay.png';
import mastercard from '../assets/payments/mastercard.png';
import paypal from '../assets/payments/paypal.png';
import visa from '../assets/payments/visa.png';

function Footer() {
  return (
    <div className="bg-black text-white py-6 px-4 flex justify-between items-center">
      <p>© Skyne 2025. All rights reserved.</p>
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
