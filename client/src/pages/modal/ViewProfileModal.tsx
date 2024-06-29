import Modal from "./Modal";
import useViewProfileModal from "../../store/useViewProfileModal";
import { useAuthContext } from "../../hooks/useAuthContext";
import { ProfileInfo } from "../../components";

const ViewProfileModal = () => {
  const { authUser } = useAuthContext();
  const { isOpen, onClose } = useViewProfileModal();
  if (authUser === null) return "No User";


  const body = (
    <div className="flex justify-center items-center gap-4">
      <div className="">
        <img
          className="size-28 rounded-full"
          src={authUser.profilePic}
          alt={authUser.profilePic}
        />
      </div>
      <div className="flex flex-col justify-between gap-1">
        <ProfileInfo
          label="Full Name"
          value={authUser.fullName}
        />
        <ProfileInfo
          label="Username"
          value={authUser.username}
        />
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="View Profile"
      subtitle="Your SpaceChat Profile"
      body={body}
      action={onClose}
      actionLabel="Okay"
    />
  );
};

export default ViewProfileModal;
