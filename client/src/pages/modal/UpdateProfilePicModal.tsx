import Modal from "./Modal";
import useUpdateProfilePic from "../../store/useUpdateProfilePic";

const UpdateProfilePicModal = () => {
  const updateProfilePic = useUpdateProfilePic();

  return (
    <Modal
      isOpen={updateProfilePic.isOpen}
      onClose={updateProfilePic.onClose}
      title="Update Profile Picture"
      subtitle="Choose from the following profile picture"
      actionLabel="Update Profile Picture"
      action={() => {}}
      secondaryAction={updateProfilePic.onClose}
      secondaryActionLabel="Cancel"
    />
  );
};

export default UpdateProfilePicModal;
