import { create } from "zustand";

type UpdateProfilePicStore = {
  selectedProfPic: string | null;
  setSelectedProfPic: (profPic: string) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useProfilePicModal = create<UpdateProfilePicStore>()((set) => ({
  // state for selecting a profile picture
  selectedProfPic: null,
  setSelectedProfPic: (profPic: string) => set({ selectedProfPic: profPic }),

  // state for opening and closing the modals from the avatar
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useProfilePicModal;
