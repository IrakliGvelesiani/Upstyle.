import { configureStore } from "@reduxjs/toolkit";
import ProductModalSlice from "./ProductModal/ProductModalSlice";

export const Store = configureStore({
  reducer: {
    productModal: ProductModalSlice,
  },
});
