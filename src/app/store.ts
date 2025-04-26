import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';
import sidebarReducer from './features/sidebar/sidebarSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
