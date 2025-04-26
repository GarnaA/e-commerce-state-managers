import { RootState } from "../../store";

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemAmount = (state: RootState) => state.cart.itemAmount;
export const selectCartTotal = (state: RootState) => state.cart.total;
