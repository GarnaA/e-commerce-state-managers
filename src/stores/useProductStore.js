import { create } from "zustand";
import createSelectors from "./createSelectors";

const useProduct = createSelectors(
  create((set) => ({
    products: [],
    setProducts: (products) => set({ products })
  }))
)

export default useProduct;
