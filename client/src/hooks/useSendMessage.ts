import { useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";


const useSendMessage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { messages, setMessages, selectedChat } = useConversation();

    const sendMessage = async (message:string) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send/${selectedChat?._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            })

            const data = await res.json();
            if (!data) {
                throw new Error(data.error);
            }
            
            setMessages([...messages, data.message]);

        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error:any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, sendMessage };
};

export default useSendMessage;
