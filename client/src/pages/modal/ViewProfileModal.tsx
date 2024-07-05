import Modal from "./Modal";
import useViewProfileModal from "../../store/useViewProfileModal";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import useUpdateNames from "../../hooks/user/useUpdateNames";
import { ProfileBody } from "../../components";
import useSubModal from "../../store/useSubModal";

const ViewProfileModal = () => {
  const { authUser } = useAuthContext();
  const { isOpen, onClose } = useViewProfileModal();
  const { onOpen: onOpenSubModal } = useSubModal();
  const { loading, updateNames } = useUpdateNames();
  if (authUser === null) return "No User";

  const secondaryButtonClicked = () => {
    onClose();
    onOpenSubModal();
  };

  const body = (
    <ProfileBody
      fullName={authUser.fullName}
      username={authUser.username}
      loading={loading}
      profilePic={authUser.profilePic}
      onClose={onClose}
      updateAction={updateNames}
    />
  );
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="View Profile"
        subtitle="Your SpaceChat Profile"
        body={body}
        action={onClose}
        actionLabel="Okay"
        secondaryAction={secondaryButtonClicked}
        secondaryActionLabel="Delete Account"
      />
    </>
  );
};

export default ViewProfileModal;
