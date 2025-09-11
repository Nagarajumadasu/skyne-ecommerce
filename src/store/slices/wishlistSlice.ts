import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/models";

interface WishlistState {
  items: Product[]; // now storing full product objects
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find((p) => p.id === action.payload.id);
      if (exists) {
        // Remove if already exists
        state.items = state.items.filter((p) => p.id !== action.payload.id);
      } else {
        // Add full product object
        state.items.push(action.payload);
      }
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
