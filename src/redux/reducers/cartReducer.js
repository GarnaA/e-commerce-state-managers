import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  CLEAR_CART,
  SET_CART,
  SET_ITEM_AMOUNT,
  SET_TOTAL,
} from "../constants/Cartconstants";

const initialState = {
  items: [],
  total: 0,
  itemAmount: 0,
};

const calculateTotals = (items) => {
  const itemAmount = items.reduce((acc, item) => acc + item.amount, 0);
  const total = items.reduce((acc, item) => acc + item.price * item.amount, 0);
  return { itemAmount, total };
};

export const cartReducer = (state = initialState, action) => {
  let updatedItems;

  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, amount: 1 }];
      }

      const { itemAmount, total } = calculateTotals(updatedItems);

      return {
        ...state,
        items: updatedItems,
        itemAmount,
        total,
      };
    }

    case REMOVE_FROM_CART:
      updatedItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };

    case INCREASE_AMOUNT:
      updatedItems = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };

    case DECREASE_AMOUNT:
      updatedItems = state.items
        .map((item) =>
          item.id === action.payload && item.amount > 1
            ? { ...item, amount: item.amount - 1 }
            : item
        )
        .filter((item) => item.amount > 0);
      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };

    case SET_ITEM_AMOUNT:
      updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: action.payload.amount }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };

    case SET_CART:
      return {
        ...state,
        items: action.payload,
        ...calculateTotals(action.payload),
      };

    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
        itemAmount: 0,
        total: 0,
      };

    default:
      return state;
  }
};
