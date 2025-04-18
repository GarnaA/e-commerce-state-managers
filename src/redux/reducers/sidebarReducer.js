import { SET_IS_OPEN, HANDLE_CLOSE } from "../constants/SidebarConstants";

const initialState = {
  isOpen: false,
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };

    case HANDLE_CLOSE:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};
