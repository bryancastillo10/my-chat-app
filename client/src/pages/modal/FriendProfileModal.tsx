import Modal from "./Modal";
import useFriendProfileModal from "../../store/useFriendProfileModal";

const FriendProfileModal = () => {
  const { isOpen, onClose, selectedFriend } = useFriendProfileModal();
  const { profileInfo, conversation } = selectedFriend;

  const body = (
    <div className="max-w-[90%] mx-auto">
      <div className="flex flex-col items-center">
        {profileInfo && conversation && (
          <>
            <img src={conversation.profilePic} alt="Friend's profile" className="w-24 h-24 rounded-full" />
            <h2 className="text-xl font-bold mt-4">{conversation.fullName}</h2>
            <p>{profileInfo.motto}</p>
            <p>Birthday: {new Date(profileInfo.birthday).toLocaleDateString()}</p>
            <div>
              <h3 className="font-semibold mt-2">Hobbies:</h3>
              <ul>
                {profileInfo.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
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