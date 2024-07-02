import { ProfileInfo } from "../../components";
import MoreProfileInfoForm from "./MoreProfileInfoForm";
import useViewProfileModal from "../../store/useViewProfileModal";

const MoreProfileInfo = () => {
  const { profileInfo } = useViewProfileModal();
  const withProfileInfo = false;

  return (
    <div className="block max-w-[90%] h-[200px] mx-auto">
      {withProfileInfo ? (
        <div className="relative grid grid-cols-1 place-items-center">
          <div className="flex">
            <ProfileInfo
              label="Birthday"
              field="birthday"
              value={profileInfo.birthday}
              updateAction={() => {}}
            />
            <ProfileInfo
              label="Motto"
              field="motto"
              value={profileInfo.motto}
              updateAction={() => {}}
            />
          </div>
          <ProfileInfo
            label="Hobbies"
            field="hobbies"
            value={profileInfo.hobbies.join(", ")}
            updateAction={() => {}}
          />
        </div>
      ) : (
        <MoreProfileInfoForm />
      )}
    </div>
  );
};

export default MoreProfileInfo;
