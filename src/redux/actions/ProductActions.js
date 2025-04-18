import { SET_PRODUCTS } from "../constants/ProductConstants";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
