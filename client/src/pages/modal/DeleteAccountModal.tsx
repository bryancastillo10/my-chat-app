import SubModal from "./SubModal";
import useSubModal from "../../store/useSubModal";
import useDeleteAccount from "../../hooks/user/useDeleteAccount";

const DeleteAccountModal = () => {
    const { isOpen, onClose } = useSubModal();
    const { loading, deleteAccount } = useDeleteAccount();
    return (
      <SubModal
          isOpen={isOpen}
          disabled={loading}
          action={deleteAccount}
          onClose={onClose}
          content="Are you sure you want to delete your SpaceChat account?"
      />
  )
}

export default DeleteAccountModal;
