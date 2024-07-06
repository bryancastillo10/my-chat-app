import { useEffect, useState } from "react";
import { useAuthContext } from "../auth/useAuthContext";
import toast from "react-hot-toast";
import useUpdateProfileModal from "../../store/useUpdateProfileModal";
import { API_BASE_URL } from "../../utils/api";

const useGetProfileInfo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { profileInfo, setProfileInfo } = useUpdateProfileModal();
  const { authUser } = useAuthContext();

  const profInfoId = authUser?.profileInfo;

  useEffect(() => {
    const getProfileInfo = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/api/profileinfo/view/${profInfoId}`);
        if (!res.ok) {
          toast.error("Failed to fetch the profile information");
          return;
        }
        const data = await res.json();
        setProfileInfo(data);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error("An unknown error occured");
        }
      } finally {
        setLoading(false);
      }
    };
    if (profInfoId) {
      getProfileInfo();
    }
  }, [profInfoId, setProfileInfo]);
  return { loading, profileInfo };
};

export default useGetProfileInfo;
