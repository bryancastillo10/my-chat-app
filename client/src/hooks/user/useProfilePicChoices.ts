import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../auth/useAuthContext";
import { API_BASE_URL } from "../../utils/api";

const useProfilePicChoices = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [profPicChoices, setProfPicChoices] = useState<string[]>([]);
  const { authUser } = useAuthContext();
  const currentUserId = authUser?._id;

  useEffect(() => {
    if (!currentUserId) return;

    const getProfilePicChoices = async (currentUserId: string) => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/api/users/profile-pictures`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ currentUserId }),
        });
        if (!res.ok) {
          throw new Error("Failed to fetch the data");
        }

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setProfPicChoices(data.choices);
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

    getProfilePicChoices(currentUserId);
  }, [currentUserId]);

  return { loading, profPicChoices };
};

export default useProfilePicChoices;
