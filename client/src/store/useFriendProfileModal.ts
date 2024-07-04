import { create } from 'zustand';
import { profileInfoData } from './useUpdateProfileModal';
import { userData } from './useConversation';

interface FriendProfileModalStore {
  isOpen: boolean;
  selectedFriend: {
    profileInfo: profileInfoData | null;
    conversation: userData | null;
  };
  onOpen: (profileInfo: profileInfoData, conversation: userData) => void;
  onClose: () => void;
}

const useFriendProfileModal = create<FriendProfileModalStore>((set) => ({
  // State for friend selection
  selectedFriend: {
    profileInfo: null,
    conversation: null
  },

  // State for the Modal
  isOpen: false,
  onOpen: (profileInfo, conversation) => set({ 
    isOpen: true, 
    selectedFriend: { profileInfo, conversation } 
  }),
  onClose: () => set({ 
    isOpen: false, 
    selectedFriend: { profileInfo: null, conversation: null } 
  }),
}));

export default useFriendProfileModal;