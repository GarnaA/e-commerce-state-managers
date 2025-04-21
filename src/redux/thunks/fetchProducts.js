import { setProducts } from "../actions/ProductActions";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(setProducts(data));
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};
