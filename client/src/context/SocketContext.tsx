import { createContext, useState, useEffect } from "react";
import { ContextProviderProps, SocketContextType } from "./type";
import { useAuthContext } from "../hooks/useAuthContext";
import { io, Socket } from "socket.io-client";


export const SocketContext = createContext({} as SocketContextType);

export const SocketContextProvider = ({ children }: ContextProviderProps) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socketInstance = io("http://localhost:3000");
            setSocket(socketInstance);

            socketInstance.on("Get Online Users", (users: string[]) => {
                setOnlineUsers(users);
            });
        return () => {
            socketInstance.close();
        };
            } else {
                if (socket) {
                    socket.close();
                    setSocket(null);
            }
            }
  }, [socket,authUser]);

    const contextValues = { socket, onlineUsers };
    
    return (
    <SocketContext.Provider value={contextValues}>
      {children}
    </SocketContext.Provider>
  );
};