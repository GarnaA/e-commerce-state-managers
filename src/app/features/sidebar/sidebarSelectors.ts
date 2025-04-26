import { RootState } from "../../store";

export const selectSidebarIsOpen = (state: RootState) => state.sidebar.isOpen;
