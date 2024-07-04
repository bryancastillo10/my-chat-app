import UserChat from "./UserChat";
import useGetConversations from "../hooks/messages/useGetConversations";
import { getRandomEmoji } from "../utils/emoji";
import useGetAllProfileInfo from "../hooks/user/useGetAllProfileInfo";
import { userData } from "../store/useConversation";
import { profileInfoData } from "../store/useUpdateProfileModal";


const Conversations = () => {
  
  const { allProfileInfo } = useGetAllProfileInfo();
  const { loading, conversations } = useGetConversations();

  return (
    <div className="relative flex flex-col overflow-y-scroll py-2">
      <div>
        {conversations.map((convo: userData, i: number) => {
          const profileInfo = allProfileInfo.find(
            (profile: profileInfoData) => profile._id === convo?.profileInfo
          );
          
          return (
            <UserChat
              key={i}
              conversation={convo}
              profileInfo={profileInfo}
              emoji={getRandomEmoji()}
              lastIndex={i === conversations.length - 1}
            />
            );
        })}
      </div>
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
