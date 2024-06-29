import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";


const useUpdateFullname = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { authUser, updateAuthUser } = useAuthContext();
    const currentUserId = authUser?._id;

    const updateFullName = async (newFullName: string) => {
        if (!currentUserId) {
            toast.error("Current User ID not Found");
        }
        setLoading(true);
        try {
            const res = await fetch(`/api/users/update/username/${currentUserId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ fullName: newFullName })
                }
            );
            if (!res.ok) {
                throw new Error("Failed to update your full name");
            }
            const data = await res.json();
            updateAuthUser({ ...data });

        }
        catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            } else {
                toast.error("An unkown error has occured");
            }
        } finally {
            setLoading(false);
        }
    };
    return { loading, updateFullName };
}

export default useUpdateFullname;
