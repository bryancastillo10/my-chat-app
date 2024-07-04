import UserChat from "./UserChat";
// import ShowProfileInfo from "./ShowProfileInfo";
import useGetConversations from "../hooks/messages/useGetConversations";
// import useGetAllProfileInfo from "../hooks/user/useGetAllProfileInfo";
import { getRandomEmoji } from "../utils/emoji";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  // const { allProfileInfo } = useGetAllProfileInfo();

  return (
    <div className="relative flex flex-col overflow-y-scroll py-2">
      <div>
        {conversations.map((convo, i) => (
          <UserChat
            key={i}
            conversation={convo}
            emoji={getRandomEmoji()}
            lastIndex={i === conversations.length - 1}
          />
        ))}
      </div>
      {/* <div className="absolute left-0">
        {allProfileInfo.map((info, i) => (
          <ShowProfileInfo
            key={i}
            information={info}
            lastIndex={i === allProfileInfo.length - 1}
          />
        ))}
      </div> */}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
