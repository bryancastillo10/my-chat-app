import { useSocketContext } from "../hooks/messages/useSocketContext";
import useConversation from "../store/useConversation";
import { userData } from "../store/useConversation";
import useFriendProfileModal from "../store/useFriendProfileModal";
import { profileInfoData } from "../store/useUpdateProfileModal";

interface UserChatProps {
  conversation: userData;
  emoji: string;
  lastIndex: boolean;
  profileInfo: profileInfoData | undefined;
}

const UserChat = ({ conversation, profileInfo, emoji, lastIndex }: UserChatProps) => {
  const { selectedChat, setSelectedChat } = useConversation();
  const { onOpen } = useFriendProfileModal();
  
  const isChatSelected = selectedChat?._id === conversation?._id;
  const { onlineUsers } = useSocketContext();
  if (!conversation || !profileInfo) {
    return null;
  }

  // For Chat
  const isOnline = onlineUsers.includes(conversation?._id ?? '');

  // For Friend Profile
    const handleProfileClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent triggering the parent onClick
    onOpen(profileInfo,conversation);
  };
  return (
    <>
      <div
        key={conversation?._id}
        className={`flex items-center rounded-sm px-2 py-1 gap-2 hover:bg-emerald-500/80 cursor-pointer
          ${isChatSelected ? "bg-emerald-500/80" : ""}
        `}
        onClick={() => setSelectedChat(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : "" }`}>
          <div
            onClick={handleProfileClick }
            className="w-12 rounded-full cursor-pointer hover:scale-110">
            <img src={conversation?.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">{conversation?.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default UserChat;
