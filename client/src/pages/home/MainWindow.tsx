import InputMessage from "../../components/InputMessage";
import Messages from "../../components/Messages";
import { Rocket } from "lucide-react";

const MainWindow = () => {
  const messageBox = (
    <>
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text">To:</span>
        <span className="text-gray-900 font-bold">John America</span>
      </div>

      <Messages />
      <InputMessage type="text" placeholder="Send a message..." />
    </>
  );

  const defaultHome = (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold ">
          <Rocket color="#fff" size="64" />
          <p>Welcome User! 🧑‍🚀</p>
          <p>Start messaging by selecting users on the sidebar!</p>
        </div>
      </div>
    </>
  );

  const isStartScreen = true;
  return (
    <div className="md:min-w-[450px] flex flex-col border rounded-md">
      {isStartScreen ? defaultHome : messageBox};
    </div>
  );
};

export default MainWindow;
