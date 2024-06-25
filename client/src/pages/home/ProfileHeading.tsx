import { Avatar } from "../../components";
import { Sparkles } from "lucide-react";
import { useAuthContext } from "../../hooks/useAuthContext";

const ProfileHeading = () => {
    const { authUser } = useAuthContext();
    return (
    <div className="py-3 border">
        <div className="flex justify-between items-center max-w-[95%] mx-auto">
                <div className="flex items-center gap-2">
                    <Sparkles color="#FFDB58" />
                    <h1 className="font-bold text-lg text-[#F4F3F2]">Space Chat</h1>
                </div>
                <div className="">
                    <div className="">
                        <Avatar currentUser={authUser?.username} profilePic={authUser?.profilePic} /></div>
                </div>
        </div>
    </div>
  )
}

export default ProfileHeading;

