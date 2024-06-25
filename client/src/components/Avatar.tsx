

interface AvatarProps{
    currentUser: string | undefined;
    profilePic: string | undefined;
}

// import useLogout from "../../hooks/useLogout";
const Avatar = ({currentUser,profilePic}:AvatarProps) => {
    if (currentUser === undefined) {
        return "User";
    }

    if (profilePic === undefined) {
        return "";
    }
    // const { loading, logOut } = useLogout();
    return (
        <div className="flex items-center gap-2">
            <div className="flex flex-col justify-center items-center">
                <p className="text-sm space-y-0 leading-none">Logged In As</p>
                <p className="text-emerald-400 font-bold">{currentUser}</p>
            </div>
            <div
                className="relative hover:scale-110">
                <img
                    className="size-10 rounded-full"
                    src={profilePic}
                    alt="user-profile-pic" />
            </div>
    </div>
  )
}

export default Avatar;
    //   <Button
    //     label="Logout"
    //     icon={<SquarePower color="#f4f3f2" size="28" />}
    //     loading={loading}
    //     action={logOut}
    //   />