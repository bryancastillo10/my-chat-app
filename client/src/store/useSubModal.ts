import { create } from "zustand";

type SubModalStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useSubModal = create<SubModalStore>()((set) => ({
    // state for opening and closing the submodal
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));


export default useSubModal;