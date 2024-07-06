
import useUpdateProfileModal, { profileInfoData } from "../../store/useUpdateProfileModal";
import formatDate from "../../utils/formatDate";
import { Edit3 } from "lucide-react";
import { getRandomColor } from "../../utils/badgeColor";

interface MoreProfileInfoProps {
  profileInfo: profileInfoData;
  onClose?: () => void;
}

const MoreProfileInfo = ({ onClose, profileInfo}: MoreProfileInfoProps) => {
  const { onOpen: updateProfileModalOpen } = useUpdateProfileModal();

  const updateProfileClicked = () => {
    if (onClose) {
      onClose();
    }
    updateProfileModalOpen();
  };

  const headerStyle = "font-bold text-amber-500";
  return (
    <div className="block max-w-[80%] h-[200px] mx-auto pt-2">
      <div className="relative grid grid-cols-1 space-y-4 place-items-center">
        {/* Edit Profile Info Icon */}
        {onClose && (
          <div
            onClick={updateProfileClicked}
            className="absolute top-10 right-[-10%] cursor-pointer p-1 hover:bg-amber-500 rounded-md duration-500 ease-out
          grid grid-cols-1 place-items-center"
          >
            <Edit3 size="14" />
          </div>
        )}

        {/* Display Profile Info */}
        <article className="flex justify-center gap-4">
          <div>
            <h1 className={headerStyle}>Birthday</h1>
            <p>{formatDate(profileInfo.birthday) || "No birthday added"}</p>
          </div>
          <div className="text-center">
            <h1 className={headerStyle}>Motto</h1>
            <p className="text-sm italic">
              {profileInfo.motto || "No motto added"}
            </p>
          </div>
        </article>
        <div className="pt-4 text-center">
          <h1 className={`${headerStyle} mb-2`}>Hobbies</h1>
          <ul className="flex flex-wrap justify-center gap-2">
            {profileInfo.hobbies.length === 0 ? (
              // Empty Array
              <li className="text--sm py-0.5 px-3 rounded-2xl bg-zinc-700">
                No hobbies added yet
              </li>
            ) : (
              // With Hobbies
              profileInfo.hobbies.map((hobby, index) => (
                <li
                  key={index}
                  className={`text-sm py-0.5 px-2 rounded-2xl ${getRandomColor()}`}
                >
                  {hobby}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoreProfileInfo;
