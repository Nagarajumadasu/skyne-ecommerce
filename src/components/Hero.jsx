import hoodie1 from '../assets/hoodie1.png';
import hoodie2 from '../assets/hoodie2.png';

function Hero() {
  return (
    <section className="flex justify-center items-center flex-wrap p-12 md:p-8 w-full min-h-[80vh] bg-white">
      <div className="flex gap-8 flex-wrap justify-center flex-1">
        <img src={hoodie1} alt="Pink Hoodie 1" className="max-w-[180px] h-auto object-contain" />
        <img src={hoodie2} alt="Pink Hoodie 2" className="max-w-[180px] h-auto object-contain" />
      </div>
      <div className="flex-1 p-4 text-left max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Skyne</h1>
        <p className="text-base leading-relaxed mb-6">
          Discover the perfect fusion of streetwear and minimalism. Our hoodies are designed for comfort, style, and expression.
        </p>
        <button className="bg-black text-white border-none px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-gray-900 transition">Pre-Order Now</button>
      </div>
    </section>
  );
}

export default Hero;