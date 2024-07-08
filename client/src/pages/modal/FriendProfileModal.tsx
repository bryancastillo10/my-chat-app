import Modal from "./Modal";
import { ProfileBody } from "../../components";
import useFriendProfileModal from "../../store/useFriendProfileModal";

const FriendProfileModal = () => {
  const { isOpen, onClose, selectedFriend } = useFriendProfileModal();
  const { profileInfo, conversation } = selectedFriend;

  const body = (
    <div className="max-w-[90%] mx-auto">
      <div className="flex flex-col items-center">
        {profileInfo && conversation && (
          <>
            <ProfileBody
              fullName={conversation.fullName}
              username={conversation.username}
              profilePic={conversation.profilePic}
              profileInfo={profileInfo}
            />
          </>
        )}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Friend Profile"
      subtitle="SpaceChat Connects"
      body={body}
      action={onClose}
      actionLabel="Got It"
    />
  );
};

export default FriendProfileModal;
