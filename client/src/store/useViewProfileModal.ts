import { create } from "zustand";

export interface profileInfoData {
  birthday: string;
  hobbies: string[];
  motto: string;
}

type ViewProfileStore = {
  profileInfo: profileInfoData[];
  setProfileInfo: (profileInfo: profileInfoData[]) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useViewProfileModal = create<ViewProfileStore>()((set) => ({
  // state for additional profile info
  profileInfo: [],
  setProfileInfo: (profileInfo) => set({ profileInfo }),
  // state for opening and closing the modal
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useViewProfileModal;
