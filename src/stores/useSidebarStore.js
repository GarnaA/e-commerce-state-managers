import { create } from 'zustand'
import createSelectors from './createSelectors';

const useSidebar = createSelectors(
  create((set) => ({
   isOpen: false,
   setIsOpen: (val) => set({ isOpen: val }),
   handleClose: () => set((state) => ({ isOpen: !state.isOpen }))
  }))
)

export default useSidebar;
