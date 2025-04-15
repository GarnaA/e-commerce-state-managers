import { SET_IS_OPEN, HANDLE_CLOSE } from "../constants/SidebarConstants";

export const setIsOpen = (isOpen) => ({
  type: SET_IS_OPEN,
  payload: isOpen,
});

export const handleClose = () => ({
  type: HANDLE_CLOSE,
});
