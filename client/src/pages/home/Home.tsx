import ProfileHeading from "./ProfileHeading";
import Sidebar from "./Sidebar";
import MainWindow from "./MainWindow";

const Home = () => {
  return (
    <div className="flex flex-col sm:h-[450px] md:h-[550px] border-2 glassmorphism">
      <div className="">
        <ProfileHeading/>
      </div>
      <div className="flex">
        <Sidebar />
        <MainWindow />
      </div>
    </div>
  );
};

export default Home;
