import Modal from "./Modal";
import useViewProfileModal from "../../store/useViewProfileModal";

const ViewProfileModal = () => {
  const { isOpen, onClose } = useViewProfileModal();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="View Profile"
      subtitle="Your SpaceChat Profile"
      action={onClose}
      actionLabel="Okay"
    />
  );
};

export default ViewProfileModal;
