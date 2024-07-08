import ProfileName from "./ProfileName";
import MoreProfileInfo from "../pages/modal/MoreProfileInfo";
import { UpdateNameParams } from "../hooks/user/useUpdateNames";
import { profileInfoData } from "../store/useUpdateProfileModal";


interface ProfileBodyProps {
  loading?: boolean;
  fullName: string;
  username: string;
  profilePic: string;
  profileInfo: profileInfoData;
  onClose?: () => void;
  updateAction?: (params: UpdateNameParams) => void;
}

const ProfileBody = ({
  loading,
  fullName,
  username,
  profilePic,
  profileInfo,
  onClose,
  updateAction,
}: ProfileBodyProps) => {
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="flex justify-center items-center ">
        <div className="">
          <img
            className="size-28 rounded-full"
            src={profilePic}
            alt={profilePic}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <ProfileName
            label="Full Name"
            loading={loading}
            field="fullName"
            value={fullName}
            updateAction={updateAction}
          />
          <ProfileName
            label="Username"
            loading={loading}
            field="username"
            value={username}
            updateAction={updateAction}
          />
        </div>
      </div>
      <MoreProfileInfo
        profileInfo={profileInfo}
        onClose={onClose} />
    </div>
  );
};

export default ProfileBody;
