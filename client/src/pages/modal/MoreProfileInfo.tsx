// import { useState } from "react";
import { ProfileInfo } from "../../components";
import  MoreProfileInfoForm  from "./MoreProfileInfoForm";

const MoreProfileInfo = () => {
  // const [showProfile, setShowProfile] = useState<boolean>(false);
  const withProfileInfo = false;

  return (
    <div className="block max-w-[90%] h-[200px] mx-auto">
      {withProfileInfo ? (
        <div className="relative grid grid-cols-1 place-items-center">
          <div className="flex">
          <ProfileInfo
            label="Birthday"
            field="birthday"
            value="Birthday"
            updateAction={() => {}}
          />
          <ProfileInfo
            label="Motto"
            field="motto"
            value="Motto"
            updateAction={() => {}}
          />
          </div>
          <ProfileInfo
            label="Hobbies"
            field="hobbies"
            value="Hobbies"
            updateAction={() => {}}
          />
        </div>
      ) : (
       <MoreProfileInfoForm/>
      )}
    </div>
  );
};

export default MoreProfileInfo;
