import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-12 px-4 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
          <Button onClick={() => navigate("/products")} className="mt-4">
            Start Shopping
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex items-center gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    Color: {item.color} | Size: {item.size}
                  </p>
                  <p className="text-lg font-semibold mt-1">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id,  item.quantity - 1, item.size)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-red-500"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <h2 className="text-2xl font-bold">Order Summary</h2>
              <div className="flex justify-between font-medium text-lg">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <Button
                onClick={() => navigate("/checkout")}
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;