import { useState } from "react";
import useViewProfileModal from "../store/useViewProfileModal";
import toast from "react-hot-toast";

const useAddProfileInfo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { profileInfo, setProfileInfo } = useViewProfileModal();

  const addedProfileInfo = {
    birthday: profileInfo.birthday,
    motto: profileInfo.motto,
    hobbies: Array.isArray(profileInfo.hobbies) ? profileInfo.hobbies : [],
  };

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
      }
      const data = await res.json();
      setProfileInfo(data);

      toast.success("Profile Information added Successfully");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        throw new Error("An unknown error occured");
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, addProfileInfo };
};

export default useAddProfileInfo;
