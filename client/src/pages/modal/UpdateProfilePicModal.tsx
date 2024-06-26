import Modal from "./Modal";
import useUpdateProfilePic from "../../store/useUpdateProfilePic";

const UpdateProfilePicModal = () => {
  const updateProfilePic = useUpdateProfilePic();

  return (
    <Modal
      isOpen={updateProfilePic.isOpen}
      onClose={updateProfilePic.onClose}
    />
  );
};

export default UpdateProfilePicModal;
