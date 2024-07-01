import { useState } from "react";
import { ProfileInfo } from "../../components";
import { Button, FieldInput } from "../../components";

const MoreProfileInfo = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  // const notYetAdded = true;

  return (
    <div className="block max-w-[70%] h-[150px] mx-auto">
      {showProfile ? (
        <div className="">
          <ProfileInfo
            label="Birthday"
            field="birthday"
            value="Birthday"
            updateAction={() => {}}
          />
          <ProfileInfo
            label="Hobbies"
            field="hobbies"
            value="Hobbies"
            updateAction={() => {}}
          />
          <ProfileInfo
            label="Motto"
            field="motto"
            value="Motto"
            updateAction={() => {}}
          />
        </div>
      ) : (
        <div className="pt-4">
          <h1>Share more information about you</h1>
          <form className="flex flex-col gap-2">
            <FieldInput
              id="birthday"
              value="birthday"
              type="date"
              onChange={() => {}}
            />
            <FieldInput id="motto" value=" " type="text" onChange={() => {}} />
            <Button type="submit" variant="accept">
              Add Profile Info
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MoreProfileInfo;
