import { create } from "zustand";

type UpdateProfilePicStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useUpdateProfilePic = create<UpdateProfilePicStore>()((set) => ({
  // state for opening and closing the modals from the avatar
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUpdateProfilePic;
