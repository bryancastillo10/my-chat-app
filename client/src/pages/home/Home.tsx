import ProfileHeading from "./ProfileHeading";
import Sidebar from "./Sidebar";
import MainWindow from "./MainWindow";
import UpdateProfilePicModal from "../modal/UpdateProfilePicModal";
import ViewProfileModal from "../modal/ViewProfileModal";

const Home = () => {
  return (
    <div className="flex flex-col sm:h-[450px]  md:h-[600px] border-2 glassmorphism">
      <div className="relative md:flex flex-col">
        <ProfileHeading />
        <UpdateProfilePicModal />
        <ViewProfileModal />
      </div>
      <div className="flex overflow-y-auto">
        <Sidebar />
        <MainWindow />
      </div>
    </div>
  );
};

export default Home;
