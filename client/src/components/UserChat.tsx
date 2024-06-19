const UserChat = () => {
  return (
    <>
      <div className="flex items-center rounded-sm px-2 py-1 gap-2 hover:bg-sky-500/80 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://picsum.photos/200/300/" alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3 ">
            <p className="font-bold text-gray-200">Juan dela Cruz</p>
            <span className="text-xl">🧐</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default UserChat;
