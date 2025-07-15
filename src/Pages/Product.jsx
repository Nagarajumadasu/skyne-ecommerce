import { Link } from "react-router-dom";
import hoodie1 from "../assets/hoodie1.png";
import hoodie2 from "../assets/hoodie2.png";
import model1 from "../assets/model1.png";

function Product() {
  const products = [
    {
      id: 1,
      name: "Skyne Bold Stylish Hoodie",
      image: hoodie1,
      originalPrice: 1649,
      discountedPrice: 949,
      soldOut: false,
    },
    {
      id: 2,
      name: "Ancient Greek Art White T-shirt",
      image: model1,
      originalPrice: 1549,
      discountedPrice: 849,
      soldOut: false,
    },
    {
      id: 3,
      name: "Skyne Bold Stylish Hoodie",
      image: hoodie2,
      originalPrice: 1549,
      discountedPrice: 849,
      soldOut: true,
    },
    {
      id: 4,
      name: "Ancient Greek Art Stylish Hoodie",
      image: hoodie1,
      originalPrice: 1549,
      discountedPrice: 849,
      soldOut: false,
    },
    {
      id: 5,
      name: "Skyne Bold White T-shirt",
      image: model1,
      originalPrice: 1549,
      discountedPrice: 849,
      soldOut: false,
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-14">Our Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-[1440px] mx-auto">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-white text-black rounded-lg overflow-hidden shadow-md relative hover:shadow-xl hover:-translate-y-2 hover:border hover:border-black transition-transform duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[260px] object-cover"
              />
              {product.soldOut && (
                <span className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-sm">
                  SOLD OUT
                </span>
              )}
              <div className="p-4 space-y-2">
                <span className="text-xs text-gray-500 font-semibold">DROP I</span>
                <h3 className="text-base font-medium leading-snug">{product.name}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-black">₹{product.discountedPrice}.00</span>
                  <span className="line-through text-sm text-gray-400">₹{product.originalPrice}.00</span>
                  <span className="text-xs text-red-700 bg-red-100 border border-red-400 font-semibold px-2 py-0.5 rounded-md">
                    Save ₹{product.originalPrice - product.discountedPrice}.00
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Product;
