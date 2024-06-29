import Modal from "./Modal";
import useViewProfileModal from "../../store/useViewProfileModal";
import { useAuthContext } from "../../hooks/useAuthContext";
import Names from "./Names";

const ViewProfileModal = () => {
  const { authUser } = useAuthContext();
  const { isOpen, onClose } = useViewProfileModal();
  if (authUser === null) return "No User";
  console.log(authUser.fullName);

  const body = (
    <div className="flex justify-center items-center gap-4">
      <div className="">
        <img
          className="size-28 rounded-full"
          src={authUser.profilePic}
          alt={authUser.profilePic}
        />
      </div>
      <div className="mb-4 items-start">
        <Names
          fullName={authUser.fullName}
          userName={authUser.username}
        />
        {/* <article className="flex items-center gap-2">
          <p className="font-bold">Describe Yourself:</p>
          <p>
            <PencilLine size="18" />
          </p>
        </article> */}
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
