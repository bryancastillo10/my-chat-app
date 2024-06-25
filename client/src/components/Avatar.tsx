import { useCallback, useState } from "react";
import UserSettings from "./UserSettings";
import { UserRoundCheck, Cog,LogOut } from "lucide-react";
import useLogout from "../hooks/useLogout";
interface AvatarProps{
    currentUser: string | undefined;
    profilePic: string | undefined;
}

const Avatar = ({currentUser,profilePic}:AvatarProps) => {
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
                <p className="text-sm space-y-0 leading-none">Logged In</p>
                <p className="text-emerald-400 font-bold">{currentUser}</p>
            </div>
            <div
                onClick={handleOpenMenu}
                className="relative cursor-pointer hover:scale-110">
                <img
                    className="size-10 rounded-full"
                    src={profilePic}
                    alt="user-profile-pic" />
            </div>
            {openMenu && (
                <div className="absolute glassmorphism shadow-md w-[10vw] md:3/4 overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <UserSettings onClick={() => { }} icon={UserRoundCheck} label="Profile" />
                        <UserSettings onClick={() => { }} icon={Cog} label="Settings" />
                        <UserSettings onClick={logOut} icon={LogOut} label="Logout" />
                        {loading && <span className="loading loading-spinner"></span>}
                    </div>
                </div>
            )}
    </div>
  )
}

export default Avatar;
