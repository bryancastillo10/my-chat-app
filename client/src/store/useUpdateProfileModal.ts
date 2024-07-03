import { create } from "zustand";

export interface profileInfoData {
  birthday: string;
  hobbies: string[];
  motto: string;
}

type UpdateProfileModalStore = {
  profileInfo: profileInfoData;
  setProfileInfo: (profileInfo: profileInfoData) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useUpdateProfileModal = create<UpdateProfileModalStore>()((set) => ({
  // state for additional profile info
  profileInfo: { birthday: "", hobbies: [], motto: "" },
  setProfileInfo: (profileInfo) => set({ profileInfo }),

  // state for opening and closing the submodal
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUpdateProfileModal;
