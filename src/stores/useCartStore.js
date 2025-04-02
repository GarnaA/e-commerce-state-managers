import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useCart = create(
  devtools(
    persist(
      (set) => ({
        cart: [],
        itemAmount: 0,
        total: 0,
        setCart: (cart) => set({ cart }),
        addToCart: (product) => set((state) => {
          const newCart = [];
          let found = false;

          for (let i = 0; i < state.cart.length; i++) {
            const item = state.cart[i];

            if (item.id === product.id) {
              found = true;
              newCart.push({ ...item, amount: item.amount + 1 });
            } else {
              newCart.push(item);
            }
          }

          if (!found) {
            newCart.push({ ...product, amount: 1 });
          }

          return { cart: newCart };
        }),
        removeFromCart: (id) => set((state) => {
          let newCart = [];

          for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].id !== id) {
              newCart.push(state.cart[i]);
            }
          }

          return { cart: newCart };
        }),
        clearCart: () => set({ cart: [] }),
        increaseAmount: (id) => set((state) => {
          let newCart = [];

          for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].id === id) {
              newCart.push({ ...state.cart[i], amount: state.cart[i].amount + 1 });
            } else {
              newCart.push(state.cart[i]);
            }
          }

          return { cart: newCart };
        }),
        decreaseAmount: (id) => set((state) => {
          let newCart = [];

          for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].id === id) {
              if (state.cart[i].amount > 1) {
                newCart.push({ ...state.cart[i], amount: state.cart[i].amount - 1 });
              }
            } else {
              newCart.push(state.cart[i]);
            }
          }

          return { cart: newCart };
        }),
        setItemAmount: (amount) => set({ itemAmount: amount }),
        setTotal: (val) => set({ total: val }),
      }),
      {
        name: "cart-storage",
        getStorage: () => localStorage,
      }
    ),
    { name: "CartStore" }
  )
);

export default useCart;
