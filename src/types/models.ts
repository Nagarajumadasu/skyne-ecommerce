export interface Product {
  id: string; // Firestore doc ID
  title: string;
  description: string;
  price: number;
  discountPrice?: number; // special price drop (optional)
  images: string[];
  stock: number;
  category_id: string;
  tags?: string[]; // e.g., ["bestseller", "new"]
  showcase: boolean; // featured on homepage?
  color?: string;
  size?: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean; // soft delete/archive
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  addresses?: Address[];
  role: 'customer' | 'admin';
  isGuest?: boolean;
  createdAt: string;
}

export interface Address {
  line1: string;
  city: string;
  state: string;
  pinCode: string;
}

export interface Order {
  id: string;
  user_id: string; // Guest or user ID
  items: CartItem[];
  shippingAddress: Address;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  totalAmount: number;
  createdAt: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parent_id?: string;
}

export interface Review {
  id: string;
  user_id: string;
  product_id: string;
  rating: number; // 1 to 5
  comment: string;
  createdAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  value: number;
  expiryDate: string;
  usageLimit?: number;
}

export interface Wishlist {
  id: string;          // wishlist doc ID
  user_id: string;     // Firebase UID
  items: WishlistItem[];
  createdAt: string;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}
