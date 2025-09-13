import { Link } from "react-router-dom";
import squid_t_01 from "../assets/squid_t_01.png";
import squid_t_02 from "../assets/squid_t_02.png";
import squid_t_03 from "../assets/squid_t_03.png";
import squid_t_04 from "../assets/squid_t_04.png";
import squid_t_11 from "../assets/squid_t_11.png";
import squid_t_22 from "../assets/squid_t_22.png";
import squid_t_33 from "../assets/squid_t_33.png";
import squid_t_44 from "../assets/squid_t_44.png";

function Product() {
  const products = [
    {
      id: 1,
      name: "Squid Game Graffiti Guard Oversized Tee",
      images: [squid_t_01, squid_t_11],
      originalPrice: 799,
      discountedPrice: 549,
      soldOut: false,
    },
    {
      id: 2,
      name: "Squid Game Elite Guard Splatter Oversized Tee",
      images: [squid_t_02, squid_t_22],
      originalPrice: 749,
      discountedPrice: 499,
      soldOut: false,
    },
    {
      id: 3,
      name: "Squid Game Front Man Geometric Oversized T-Shirt",
      images: [squid_t_03, squid_t_33],
      originalPrice: 849,
      discountedPrice: 599,
      soldOut: false,
    },
    {
      id: 4,
      name: "Squid Game Triple Mask Graphic Tee",
      images: [squid_t_04, squid_t_44],
      originalPrice: 849,
      discountedPrice: 599,
      soldOut: true,
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-black text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-14">Our Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1440px] mx-auto">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="relative bg-white text-black rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-black transition-transform duration-300">
              <div className="relative w-full h-[420px]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
                />
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {product.soldOut && (
                <span className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-sm z-10">
                  SOLD OUT
                </span>
              )}
              <div className="p-4 space-y-2">
                <span className="text-xs text-gray-500 font-semibold">DROP I</span>
                <h3 className="text-base font-medium leading-snug">{product.name}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-black">
                    ₹{product.discountedPrice}.00
                  </span>
                  <span className="line-through text-sm text-gray-400">
                    ₹{product.originalPrice}.00
                  </span>
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
