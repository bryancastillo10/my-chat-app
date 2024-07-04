import Messages from "../../components/Messages";
import { Rocket } from "lucide-react";
import useConversation from "../../store/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import { InputMessage } from "../../components";

const MainWindow = () => {
  const { authUser } = useAuthContext();
  const { selectedChat, setSelectedChat } = useConversation();

  // Unmount cleaning up the selectedChat state when logout
  useEffect(() => {
    return () => setSelectedChat(null);
  }, [setSelectedChat]);

  const messageBox = (
    <>
      <div className="flex px-4 mt-2">
        <p className="label-text text-[#F4F3F2]">
          To:
          <span className="text-amber-500 font-bold">
            &nbsp; {selectedChat?.fullName}
          </span>
        </p>
      </div>
      <Messages />
      <InputMessage type="text" placeholder="Send a message..." />
    </>
  );

  const defaultHome = (
    <>
      <div className="flex justify-center items-center w-full min-h-[60vh]">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold">
          <Rocket color="#fff" size="64" />
          <p>
            Welcome{" "}
            <span className="text-2xl font-bold text-indigo-400">
              {authUser?.fullName}
            </span>{" "}
            !🧑‍🚀
          </p>
          <p>Start messaging by selecting your friends</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {selectedChat ? messageBox : defaultHome}
    </div>
  );
};

export default MainWindow;
