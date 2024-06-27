import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "./useAuthContext";

const useProfilePicChoices = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [profPicChoices, setProfPicChoices] = useState<string[]>([]);
  const { authUser } = useAuthContext();
  const userId = authUser?._id;

  useEffect(() => {
    if (!userId) return;

    const getProfilePicChoices = async (userId: string) => {
      setLoading(true);
      try {
        const res = await fetch(`/api/users/profile-pictures`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
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

    getProfilePicChoices(userId);
  }, [userId]);

  return { loading, profPicChoices };
};

export default useProfilePicChoices;
