import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto pr-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center mt-8">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex items-start gap-4 py-4">
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
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button
                      variant="link"
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="ml-auto text-sm text-red-500"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 space-y-4">
          <Separator />
          <div className="flex justify-between font-medium">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <Button
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            Check out
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;