import { create } from "zustand";

export interface profileInfoData {
  _id: string;
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
  profileInfo: { _id: "", birthday: "", hobbies: [], motto: "" },
  setProfileInfo: (profileInfo) => set({ profileInfo }),

  // state for opening and closing the submodal
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUpdateProfileModal;
