import { useState } from "react";
import { useAuthContext } from "../auth/useAuthContext";
import useUpdateProfileModal from "../../store/useUpdateProfileModal";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../utils/api";

const useUpdateProfileInfo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { profileInfo, setProfileInfo } = useUpdateProfileModal();
  const { authUser } = useAuthContext();
  const profileInfoId = authUser?.profileInfo;

  const updateProfileInfo = async () => {
    setLoading(true);
    try {
      if (!profileInfoId) {
        toast.error("Profile Info ID not Found");
        setLoading(false);
        return;
      }
      const res = await fetch(`${API_BASE_URL}/api/profileinfo/update/${profileInfoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileInfo),
      });
      if (!res.ok) {
        toast.error("Failed to update profile information");
        setLoading(false);
        return;
      }
      const data = await res.json();

      setProfileInfo(data.updatedProfile);
      localStorage.setItem("profile-info", JSON.stringify(data.updatedProfile));
      toast.success("Updated successfully");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error has occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateProfileInfo };
};

export default useUpdateProfileInfo;
