import { useCallback, useState } from "react";
import UserSettings from "./UserSettings";
import { UserRoundCheck, Image, LogOut } from "lucide-react";
import useLogout from "../hooks/useLogout";
import useProfilePicModal from "../store/useProfilePicModal";
import useViewProfileModal from "../store/useViewProfileModal";

interface AvatarProps {
  currentUser: string | undefined;
  profilePic: string | undefined;
}

const Avatar = ({ currentUser, profilePic }: AvatarProps) => {
  const profilePicModal = useProfilePicModal();
  const viewProfileModal = useViewProfileModal();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { loading, logOut } = useLogout();

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  if (currentUser === undefined) {
    return "User";
  }

  if (profilePic === undefined) {
    return "";
  }

  return (
    <div className="relative flex items-center gap-2">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm text-[#F4F3F2] space-y-0 leading-none">
          Logged In
        </p>
        <p className="text-emerald-400 font-bold">{currentUser}</p>
      </div>
      <div
        onClick={handleOpenMenu}
        className="relative cursor-pointer hover:scale-110"
      >
        <img
          className="size-10 rounded-full"
          src={profilePic}
          alt="user-profile-pic"
        />
      </div>
      {openMenu && (
        <div className="absolute z-50 glassmorphism shadow-md w-[240px] md:max-w-3/4  -right-[20px] top-11 text-sm">
          <div className="flex flex-col cursor-pointer">
            <UserSettings
              onClick={profilePicModal.onOpen}
              icon={Image}
              label="Change Profile Picture"
            />
            <UserSettings
              onClick={viewProfileModal.onOpen}
              icon={UserRoundCheck}
              label="View Profile"
            />
            <UserSettings
              onClick={logOut}
              icon={LogOut}
              label="Logout"
              loading={loading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
