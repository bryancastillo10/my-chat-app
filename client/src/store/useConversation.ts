import { create } from "zustand";

export type userData = {
  __v: number;
  _id: string;
  createdAt: string;
  fullName: string;
  gender: string;
  profilePic: string;
  updatedAt: string;
  username: string;
} | null;

type ConversationStore = {
  selectedChat: userData;
  setSelectedChat: (selectedChat: userData) => void;
  messages: string[];
  setMessages: (messages: string[]) => void;
};

const useConversation = create<ConversationStore>()((set) => ({
  //   selected chat in sidebar state
  selectedChat: null,
  setSelectedChat: (selectedChat) => set({ selectedChat }),
  //   messages state
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
