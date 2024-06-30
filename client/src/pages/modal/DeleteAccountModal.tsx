import SubModal from "./SubModal";
import useSubModal from "../../store/useSubModal";

const DeleteAccountModal = () => {
    const { isOpen, onClose } = useSubModal();
  return (
      <SubModal
          isOpen={isOpen}
          onClose={onClose}
      />
  )
}

export default DeleteAccountModal;
