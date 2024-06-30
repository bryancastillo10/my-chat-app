import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAuthUser } = useAuthContext();

  const logOut = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("Failed to logout your account");
      }

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("app-user");
      setAuthUser(null);
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

  return { loading, logOut };
};

export default useLogout;
