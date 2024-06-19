const MessageSent = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://picsum.photos/200/300/" alt="user-avatar-bubble" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-sky-500`}>
        Hi! how are you?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
        13:04
      </div>
    </div>
  );
};

export default MessageSent;
