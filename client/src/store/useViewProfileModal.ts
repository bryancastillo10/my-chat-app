import { create } from "zustand";

type ViewProfileStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useViewProfileModal = create<ViewProfileStore>()((set) => ({
  // state for opening and closing the modal
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useViewProfileModal;
