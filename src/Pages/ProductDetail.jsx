import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Cart from "./Cart";
import { toast } from "react-toastify";


// Import assets
import squid_t_01 from "../assets/squid_t_01.png";
import squid_t_02 from "../assets/squid_t_02.png";
import squid_t_03 from "../assets/squid_t_03.png";
import squid_t_04 from "../assets/squid_t_04.png";
import squid_t_11 from "../assets/squid_t_11.png";
import squid_t_22 from "../assets/squid_t_22.png";
import squid_t_33 from "../assets/squid_t_33.png";
import squid_t_44 from "../assets/squid_t_44.png";

// Product data
const productData = [
  {
    id: 1,
    name: "Squid Game Graffiti Guard Oversized Tee",
    images: [squid_t_01, squid_t_11],
    originalPrice: 799,
    discountedPrice: 549,
    color: "Black",
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "Bold and iconic, this oversized tee features the elite guard design from Squid Game in a stunning pink splatter effect.",
  },
  {
    id: 2,
    name: "Squid Game Elite Guard Splatter Oversized Tee",
    images: [squid_t_02, squid_t_22],
    originalPrice: 749,
    discountedPrice: 499,
    color: "Black",
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "A minimal tee showing the iconic pink circle-guard. Simple, stylish, and memorable.",
  },
  {
    id: 3,
    name: "Squid Game Front Man Geometric Oversized T-Shirt",
    images: [squid_t_03, squid_t_33],
    originalPrice: 849,
    discountedPrice: 599,
    color: "Black",
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "Designed with the mysterious square-masked guard. A perfect blend of fear and fashion.",
  },
  {
    id: 4,
    name: "Squid Game Triple Mask Graphic Tee",
    images: [squid_t_04, squid_t_44],
    originalPrice: 849,
    discountedPrice: 599,
    color: "Black",
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "A graphic blend of all three iconic Squid Game guards – triangle, circle, and square.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === Number(id));

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [isCartOpen, setCartOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);

  if (!product) {
    return <div className="text-center mt-20">Product not found</div>;
  }

  const handleDec = () => setQty((q) => (q > 1 ? q - 1 : 1));
  const handleInc = () => setQty((q) => q + 1);
  const savings = product.originalPrice - product.discountedPrice;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    
    addToCart({
      id: product.id,
      title: product.name,
      image: selectedImage,
      color: product.color,
      size: selectedSize,
      price: product.discountedPrice,
      quantity: qty,
    });

    setCartOpen(true);
  };

  const handleAddToWishlist = () => {
  addToWishlist({
    id: product.id,
    title: product.name,
    image: selectedImage,
    color: product.color,
    price: product.discountedPrice,
  });

  toast.success("Added to Wishlist ❤️");
};

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Images */}
        <div>
          <div className="relative w-full h-[560px] bg-white rounded-lg overflow-hidden shadow group">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(product.images[0])}
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-90 transition duration-300 ${
                selectedImage === product.images[0] ? "bg-gray-600" : ""
              }`}
              disabled={selectedImage === product.images[0]}
              title="Show Left"
            >
              ←
            </button>
            <button
              onClick={() => setSelectedImage(product.images[1])}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-90 transition duration-300 ${
                selectedImage === product.images[1] ? "bg-gray-600" : ""
              }`}
              disabled={selectedImage === product.images[1]}
              title="Show Right"
            >
              →
            </button>
          </div>

          <div className="flex gap-3 mt-4">
            {product.images.map((thumb, i) => {
              const isActive = thumb === selectedImage;
              return (
                <button
                  key={i}
                  onClick={() => setSelectedImage(thumb)}
                  className={`rounded border overflow-hidden ${
                    isActive
                      ? "ring-2 ring-black border-black"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`thumb-${i + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 leading-snug">
            {product.name}
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold text-black">
              ₹{product.discountedPrice}.00
            </span>
            <span className="line-through text-gray-400">
              ₹{product.originalPrice}.00
            </span>
            <span className="bg-red-600 text-white text-sm px-3 py-1 rounded">
              Save ₹{savings}.00
            </span>
          </div>

          {/* Size Selection */}
          <div>
            <h4 className="font-semibold mb-1">Size:</h4>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => {
                const active = size === selectedSize;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border text-sm transition ${
                      active
                        ? "bg-black text-white border-black"
                        : "border-gray-400 hover:bg-black hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color */}
          <div>
            <h4 className="font-semibold mb-1">Color:</h4>
            <div
              className="w-8 h-8 rounded-full border-2 border-black bg-black"
              title={product.color}
            />
          </div>

          {/* Quantity & Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded px-3 py-1">
              <button onClick={handleDec} className="text-xl px-2 leading-none">
                -
              </button>
              <span className="px-3 select-none">{qty}</span>
              <button onClick={handleInc} className="text-xl px-2 leading-none">
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Add to cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="text-black hover:text-red-500"
                                      >
              ♡ Add to wishlist
              </button>

          </div>

          {/* Metadata */}
          <div className="border-t pt-6 mt-6 text-sm text-gray-600">
            <p className="mb-2">
              <strong>SKU:</strong> SQD-{product.id}
            </p>
            <p className="mb-2">
              <strong>Category:</strong> Squid Game Collection
            </p>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Cart Slide-in */}
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default ProductDetail;
