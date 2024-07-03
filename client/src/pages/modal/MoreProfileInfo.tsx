import useUpdateProfileModal from "../../store/useUpdateProfileModal";
import { Edit3 } from "lucide-react";

interface MoreProfileInfoProps {
  onClose: () => void;
}

const MoreProfileInfo = ({ onClose }: MoreProfileInfoProps) => {
  const { onOpen: updateProfileModalOpen } = useUpdateProfileModal();
  const updateProfileClicked = () => {
    onClose();
    updateProfileModalOpen();
  };

  return (
    <div className="block max-w-[80%] h-[200px] mx-auto pt-2">
      <div className="relative grid grid-cols-1 space-y-4 place-items-center">
        {/* Edit Profile Info Icon */}
        <div
          onClick={updateProfileClicked}
          className="absolute top-10 right-[-10%] cursor-pointer p-1 hover:bg-amber-500 rounded-md duration-500 ease-out
          grid grid-cols-1 place-items-center"
        >
          <Edit3 size="14" />
        </div>

        {/* Display Profile Info */}
        <article className="flex justify-center">
          <div className="">
            <h1 className="font-bold text-amber-500">Birthday</h1>
            <p>1996-10-10</p>
          </div>
          <div className=" text-center">
            <h1 className="font-bold text-amber-500">Motto</h1>
            <p className="text-sm italic">
              Don't wait for a perfect moment take the moment and make it
              perfect
            </p>
          </div>
        </article>
        <div className="pt-4 text-center">
          <h1 className="font-bold text-amber-500 mb-2">Hobbies</h1>
          <ul className="flex items-center gap-2">
            <li className="text-sm bg-amber-500 py-0.5 px-2 rounded-2xl">
              Coding
            </li>
            <li className="text-sm bg-sky-500 py-0.5 px-2 rounded-2xl">
              Traveling
            </li>
            <li className="text-sm bg-emerald-700 py-0.5 px-2 rounded-2xl">
              Photography
            </li>
            <li className="text-sm bg-indigo-600 py-0.5 px-2 rounded-2xl">
              Sports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoreProfileInfo;
