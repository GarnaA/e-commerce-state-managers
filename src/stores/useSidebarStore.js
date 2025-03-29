import { create } from 'zustand'

const useSidebar = create((set) => ({
   isOpen: false,
   setIsOpen: (val) => set({ isOpen: val }),
   handleClose: () => set((state) => ({ isOpen: !state.isOpen}))
}))

export default useSidebar;