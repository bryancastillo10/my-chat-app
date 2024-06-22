import useGetMessages from "../hooks/useGetMessages";
import MessageSent from "./MessageSent";
import MessageSkeleton from "./MessageSkeleton";

const Messages = () => {
  const {  loading, messages } = useGetMessages();
  const starterWindow = (
    <div className="flex flex-col items-center justify-center max-w-[90%] min-h-[70vh] mx-auto p-4">
        <h1 className="font-bold text-xl">Empty Inbox 😔</h1>
        <p className="text-center">Send a message to start conversation ✉️</p>
    </div>
  )

  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* If there is chat history */}
      {!loading && messages.length > 0 && (
        messages.map((msg) => (
          <div key={msg?._id}>
            <MessageSent message={msg} />
          </div>
        ))
      )}
      
      {/* Loading State */}
      {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}

      {/* Starter Window */}
      {!loading && messages.length === 0 && (
        starterWindow
      )}
    </div>
  );
};

export default Messages;
