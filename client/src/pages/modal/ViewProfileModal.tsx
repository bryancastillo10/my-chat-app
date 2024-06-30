import Modal from "./Modal";
import useViewProfileModal from "../../store/useViewProfileModal";
import { useAuthContext } from "../../hooks/useAuthContext";
import { ProfileInfo } from "../../components";
import useUpdateNames from "../../hooks/useUpdateNames";
import MoreProfileInfo from "./MoreProfileInfo";
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
    <div className="max-w-[80%] mx-auto">
    <div className="flex justify-center items-center gap-4">
      <div className="">
        <img
          className="size-28 rounded-full"
          src={authUser.profilePic}
          alt={authUser.profilePic}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <ProfileInfo
          label="Full Name"
          loading={loading}
          field="fullName"
          value={authUser.fullName}
          updateAction={updateNames}
        />
        <ProfileInfo
          label="Username"
          loading={loading}
          field="username"
          value={authUser.username}
          updateAction={updateNames}
        />
      </div>
      </div>
      <MoreProfileInfo/>
    </div>
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
