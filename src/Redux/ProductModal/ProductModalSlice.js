import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const ProductModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    remove: (state) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, remove } = ProductModalSlice.actions;

export default ProductModalSlice.reducer;
