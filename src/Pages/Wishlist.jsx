import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Trash, ShoppingCart } from "lucide-react";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item) => {
    addToCart(item); // You may want to customize for size/color/etc
    removeFromWishlist(item.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

        {wishlistItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your wishlist is empty.</p>
        ) : (
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    ₹{item.price}
                  </p>
                  {item.size && (
                    <p className="text-xs text-gray-500">
                      Size: {item.size} | Color: {item.color}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="flex items-center px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800"
                  >
                    <ShoppingCart size={16} className="mr-1" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
