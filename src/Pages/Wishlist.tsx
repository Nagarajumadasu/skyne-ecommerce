import { useWishlist } from "../context/WishlistContext";
import { useCart, CartItem } from "../context/CartContext";
import { Trash, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
}

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item: Product) => {
    // 1. Create a new object that conforms to the CartItem type
    const cartItem: CartItem = {
      ...item,
      quantity: 1,
    };

    // 2. Add this new cartItem to the cart
    addToCart(cartItem);

    // 3. Remove the original item from the wishlist
    removeFromWishlist(item.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-[Outfit]">
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">My Wishlist</CardTitle>
        </CardHeader>
        <CardContent>
          {wishlistItems.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your wishlist is empty.</p>
          ) : (
            <div className="space-y-4">
              {wishlistItems.map((item: Product) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-lg font-semibold text-gray-800">
                      ₹{item.price}
                    </p>
                    {item.size && (
                      <p className="text-sm text-gray-500">
                        Size: {item.size} | Color: {item.color}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-4 sm:mt-0">
                    <Button
                      onClick={() => handleMoveToCart(item)}
                      className="flex items-center"
                    >
                      <ShoppingCart size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      onClick={() => removeFromWishlist(item.id)}
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash size={18} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Wishlist;