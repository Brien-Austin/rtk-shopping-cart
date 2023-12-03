import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cartItems: number[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<number>) => {
      state.cartItems.push(action.payload);
    },
    removeSingleItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => item !== action.payload);
    },
    removeEveryItem: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addProduct, removeSingleItem, removeEveryItem } = cartSlice.actions;
export const cartProducts = (state: { cart: CartState }) => state.cart.cartItems;
export default cartSlice.reducer;
