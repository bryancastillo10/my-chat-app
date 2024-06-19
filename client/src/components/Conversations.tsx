import UserChat from "./UserChat";

const Conversations = () => {
  return (
    <div className="flex flex-col overflow-auto py-2">
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
    </div>
  );
};

export default Conversations;
