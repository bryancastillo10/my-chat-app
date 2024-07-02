import { useState } from "react";
import { useAuthContext } from "../auth/useAuthContext";
import toast from "react-hot-toast";
import useProfilePicModal from "../../store/useProfilePicModal";

const useUpdateProfilePic = () => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const { selectedProfPic } = useProfilePicModal();
  const { authUser, updateAuthUser } = useAuthContext();
  const currentUserId = authUser?._id;

  const updateProfilePicture = async () => {
    setIsUpdating(true);
    if (!currentUserId) return;
    try {
      const res = await fetch(`/api/users/update/profilepicture/${currentUserId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profilePicChoice: selectedProfPic }),
      });

      if (!res.ok) {
        throw new Error("Failed to update your profile picture");
      }
      const data = await res.json();
      updateAuthUser({ ...data, profilePic: selectedProfPic });

      toast.success("Profile picture successfully changed");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error has occured");
      }
    } finally {
      setIsUpdating(false);
    }
  };
  return { isUpdating, updateProfilePicture };
};

export default useUpdateProfilePic;
