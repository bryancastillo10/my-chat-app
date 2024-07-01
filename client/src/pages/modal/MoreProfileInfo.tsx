import { useState } from "react";
import { ProfileInfo } from "../../components";
import { Button, FieldInput } from "../../components";

const MoreProfileInfo = () => {
  const [showProfile, setShowProfile] = useState<boolean>(true);
  // const notYetAdded = true;

  return (
    <div className="block max-w-[90%] h-[150px] mx-auto">
      {showProfile ? (
        <div className="relative flex flex-col items-center">
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
        <div className="absolute z-10 modal-glassmorphism rounded-xl pt-4">
          <h1>Share more information about you</h1>
          <form className="flex flex-col gap-2">
            <div className="flex gap-4">
              <FieldInput
                textLabel="Birthday"
                id="birthday"
                value="birthday"
                type="date"
                onChange={() => {}}
              />
              <FieldInput
                textLabel="Motto"
                id="motto"
                value=" "
                type="text"
                onChange={() => {}}
              />
            </div>
            <FieldInput
              textLabel="Hobbies"
              id="hobbies"
              value="hobbies"
              type="text"
              onChange={() => {}}
            />
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
