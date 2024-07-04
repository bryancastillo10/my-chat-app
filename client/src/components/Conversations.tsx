import UserChat from "./UserChat";
import useGetConversations from "../hooks/messages/useGetConversations";
import { getRandomEmoji } from "../utils/emoji";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

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
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
