import { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  size?: string;
  color?: string;
}

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
}


const WishlistContext = createContext<WishlistContextType | null>(null);

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    const exists = wishlistItems.some((item) => item.id === product.id);
    if (!exists) {
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (productId: string | number) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};