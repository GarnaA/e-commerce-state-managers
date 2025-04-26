import { RootState } from "../../store";

export const selectProducts = (state: RootState) => state.product.products;
export const selectProductStatus = (state: RootState) => state.product.status;
