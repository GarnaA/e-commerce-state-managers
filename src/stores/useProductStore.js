import { create } from "zustand";

const useProduct = create((set) => ({
  products: [],
  setProducts: (products) => set({ products })

}))

export default useProduct;
