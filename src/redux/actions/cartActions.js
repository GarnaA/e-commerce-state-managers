import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_AMOUNT, DECREASE_AMOUNT, CLEAR_CART, SET_CART, SET_ITEM_AMOUNT, SET_TOTAL } from "../constants/Cartconstants";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const increaseAmount = (id) => ({
  type: INCREASE_AMOUNT,
  payload: id
});

export const decreaseAmount = (id) => ({
  type: DECREASE_AMOUNT,
  payload: id
})

export const clearCart = () => ({
  type: CLEAR_CART
})

export const setCart = (items) => ({
  type: SET_CART,
  payload: items
})

export const setItemAmount = (id, amount) => ({
  type: SET_ITEM_AMOUNT,
  payload: {id, amount}
})

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});
