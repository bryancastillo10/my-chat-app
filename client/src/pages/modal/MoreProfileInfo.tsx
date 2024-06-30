import { ProfileInfo } from "../../components";

const MoreProfileInfo = () => {
  return (
    <div className="max-w-[70%] mx-auto">
        <ProfileInfo
          label="Birthday"
          field="birthday"
          value="Birthday"
          updateAction={()=>{}}
        />
        <ProfileInfo
          label="Hobbies"
          field="hobbies"
          value="Hobbies"
          updateAction={()=>{}}
        />
        <ProfileInfo
          label="Motto"
          field="motto"
          value="Motto"
          updateAction={()=>{}}
        />
      </div>
  )
}

export default MoreProfileInfo;
