import { useState } from "react";
import useUpdateProfileModal from "../../store/useUpdateProfileModal";
import toast from "react-hot-toast";

const useAddProfileInfo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { profileInfo, setProfileInfo } = useUpdateProfileModal();

  const addedProfileInfo = {
    birthday: profileInfo.birthday,
    motto: profileInfo.motto,
    hobbies: Array.isArray(profileInfo.hobbies) ? profileInfo.hobbies : [],
  };
  // Boolean is returned for the parent UI component conditional rendering
  const addProfileInfo = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/profileinfo/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addedProfileInfo),
      });

      if (!res.ok) {
        toast.error("Failed to add your profile info");
        return false;
      }
      const data = await res.json();
      setProfileInfo(data);
      toast.success("Profile Information added Successfully");
      return true;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        throw new Error("An unknown error occured");
      }
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, addProfileInfo };
};

export default useAddProfileInfo;
