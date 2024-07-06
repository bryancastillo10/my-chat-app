import { useState } from "react"
import { useAuthContext } from "../auth/useAuthContext";
import useSubModal from "../../store/useSubModal";
import useLogout from "../auth/useLogout";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../utils/api";

const useDeleteAccount = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { authUser } = useAuthContext();
    const { onClose } = useSubModal();
    const { logOut } = useLogout();

    const deleteAccount = async () => {
        try {
            const currentUserId = authUser?._id;
            if (!currentUserId) {
                    toast.error("Current User ID not Found");
            }
            
            setLoading(true);

            const res = await fetch(`${API_BASE_URL}/api/users/delete/account/${currentUserId}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });

            if (!res.ok) {
                throw new Error("Failed to delete your account");
            }
            toast.success("Account successfully deleted");

            await logOut();
            onClose();

        } catch(error){
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
               throw new Error("An unknown error has occured")
            }
        } finally {
            setLoading(false);
        }
    }

    return { loading, deleteAccount };
}

export default useDeleteAccount
