import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../thunks/fetchProducts";
import type { PayloadAction } from '@reduxjs/toolkit'

interface ProductState {
  products: any[],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: string | null | undefined,
}

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
