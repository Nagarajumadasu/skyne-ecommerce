import { useParams } from "react-router-dom";
import hoodie1 from "../assets/hoodie1.png";
import hoodie2 from "../assets/hoodie2.png";
import model1 from "../assets/model1.png";

const productData = [
  {
    id: 1,
    name: "Skyne Bold Stylish Hoodie",
    image: hoodie1,
    originalPrice: 1649,
    discountedPrice: 949,
    description:
      "Elevate your streetwear game with this bold and stylish hoodie made for comfort and statement.",
  },
  {
    id: 2,
    name: "Ancient Greek Art White T-shirt",
    image: model1,
    originalPrice: 1549,
    discountedPrice: 849,
    description:
      "A unique fusion of classical Greek aesthetics and modern fashion for timeless style.",
  },
  {
    id: 3,
    name: "Skyne Bold Stylish Hoodie",
    image: hoodie2,
    originalPrice: 1549,
    discountedPrice: 849,
    description:
      "This bold hoodie blends sleek design with warmth, perfect for an edgy wardrobe.",
  },
  {
    id: 4,
    name: "Ancient Greek Art Stylish Hoodie",
    image: hoodie1,
    originalPrice: 1549,
    discountedPrice: 849,
    description:
      "Inspired by ancient art, this hoodie offers a cultural twist to contemporary fashion.",
  },
  {
    id: 5,
    name: "Skyne Bold White T-shirt",
    image: model1,
    originalPrice: 1549,
    discountedPrice: 849,
    description:
      "Minimal and bold, this white tee is a staple for effortless and stylish daily wear.",
  },
];

function ProductDetail() {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) return <div className="text-center mt-20">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="space-y-4">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg shadow-lg w-full object-contain"
        />
        <div className="flex gap-2">
          <img
            src={product.image}
            alt="thumb"
            className="w-20 h-20 object-cover rounded border"
          />
          <img
            src={product.image}
            alt="thumb"
            className="w-20 h-20 object-cover rounded border"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          {product.name}
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold text-black">
            ₹{product.discountedPrice}.00
          </span>
          <span className="line-through text-gray-400">
            ₹{product.originalPrice}.00
          </span>
          <span className="bg-red-600 text-white text-sm px-3 py-1 rounded">
            Save ₹{product.originalPrice - product.discountedPrice}.00
          </span>
        </div>

        <div>
          <h4 className="font-semibold mb-1">CLOTHING SIZE</h4>
          <div className="flex gap-2">
            {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
              <button
                key={size}
                className="px-3 py-1 border rounded hover:bg-black hover:text-white transition text-sm"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border px-2">
            <button className="text-xl">-</button>
            <span className="px-3">1</span>
            <button className="text-xl">+</button>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            ADD TO CART
          </button>
          <button className="text-black hover:text-red-500">♡ ADD TO WISHLIST</button>
        </div>

        <div className="border-t pt-6 mt-6 text-sm text-gray-600">
          <p className="mb-2">
            <strong>SKU:</strong> SKYNE-{product.id}
          </p>
          <p className="mb-2">
            <strong>Category:</strong> Our Collections
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
