import React from "react";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center bg-gray-50">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button onClick={onClose}>
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4 overflow-y-auto h-[70%]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex items-start gap-4 border-b pb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600">
                  Color: {item.color} | Size: {item.size}
                </p>
                <p className="text-sm font-semibold mt-1">₹{item.price}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    className="px-2 border rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="ml-auto text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="border-t p-4 space-y-2 bg-white">
        <div className="flex justify-between font-medium">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <button
          onClick={() => {
            onClose?.(); // safely close panel if function exists
            navigate("/checkout");
          }}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Check out
        </button>
      </div>
    </div>
  );
};

export default Cart;
