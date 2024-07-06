import { useEffect, useState } from "react";
import { profileInfoData } from "../../store/useUpdateProfileModal";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../utils/api";

const useGetAllProfileInfo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allProfileInfo, setAllProfileInfo] = useState<profileInfoData[]>([]);

  useEffect(() => {
    const getAllProfileInfo = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/api/profileinfo/allprofileinfo`);

        if (!res.ok) {
          toast.error("Failed to fetch all profile information");
        }
        const data = await res.json();
        setAllProfileInfo(data);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          throw new Error("An unknown error has occured");
        }
      } finally {
        setLoading(false);
      }
    };
    getAllProfileInfo();
  }, []);

  return { loading, allProfileInfo };
};

export default useGetAllProfileInfo;
