import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { userData } from "../../store/useConversation";
import { API_BASE_URL } from "../../utils/api";

const useGetConversations = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [conversations, setConversations] = useState<userData[]>([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}api/users/connections`);
        if (!res.ok) {
          throw new Error("Failed to fetch user conversations");
        }

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          throw new Error("An unknown error has occured");
        }
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
