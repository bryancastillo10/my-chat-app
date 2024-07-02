import { useState } from "react";
import { useAuthContext } from "../auth/useAuthContext";
import toast from "react-hot-toast";

export interface UpdateNameParams{
    fullName?: string;
    username?: string;
}


const useUpdateNames = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { authUser, updateAuthUser } = useAuthContext();
    const currentUserId = authUser?._id;

    const updateNames = async ({fullName, username}:UpdateNameParams) => {
        if (!currentUserId) {
            toast.error("Current User ID not Found");
        } 
        
        if (!fullName && !username) {
            toast.error("No username or full name provided");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`/api/users/update/profile/${currentUserId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ fullName, username })
                }
            );
            if (!res.ok) {
                throw new Error("Failed to update your name");
            }

            const data = await res.json();

            updateAuthUser({
                ...data.updatedName
            });
            toast.success("Updated successfully");
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
    return { loading, updateNames };
}

export default useUpdateNames;

