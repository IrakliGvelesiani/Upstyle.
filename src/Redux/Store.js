import { configureStore } from "@reduxjs/toolkit";
import ProductModalSlice from "./ProductModal/ProductModalSlice";

import CartItemsSlide from "./ShoppingCart/CartItemsSlide";

export const Store = configureStore({
  reducer: {
    productModal: ProductModalSlice,
    cartItems: CartItemsSlide,
  },
});
