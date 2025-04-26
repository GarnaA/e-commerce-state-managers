import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: any[],
  total: number,
  itemAmount: number,
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemAmount: 0,
};

const calculateTotals = (items: any[]) => {
  const itemAmount = items.reduce((acc, item) => acc + item.amount, 0);
  const total = items.reduce((acc, item) => acc + item.price * item.amount, 0);
  return { itemAmount, total };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }
      Object.assign(state, calculateTotals(state.items));
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
      Object.assign(state, calculateTotals(state.items));
    },

    increaseAmount(state, action: PayloadAction<number>) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.amount += 1;
        Object.assign(state, calculateTotals(state.items));
      }
    },

    decreaseAmount(state, action: PayloadAction<number>) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.amount > 1) {
        item.amount -= 1;
      } else {
        state.items = state.items.filter(i => i.id !== action.payload);
      }
      Object.assign(state, calculateTotals(state.items));
    },

    setItemAmount(state, action: PayloadAction<{ id: number; amount: number }>) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.amount = action.payload.amount;
        Object.assign(state, calculateTotals(state.items));
      }
    },

    setCart(state, action: PayloadAction<any[]>) {
      state.items = action.payload;
      Object.assign(state, calculateTotals(action.payload));
    },

    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },

    clearCart(state) {
      state.items = [];
      state.itemAmount = 0;
      state.total = 0;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  setItemAmount,
  setCart,
  setTotal,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
