import React, { Dispatch, ReactNode, createContext, useState } from "react";

interface ContextProviderProps{
    children: ReactNode;
}


type AuthUser = {
    _id: string;
    fullName: string;
    profilePic: string;
    username: string;
}

interface AuthContextProps {
    authUser: AuthUser | null;
    setAuthUser: Dispatch<React.SetStateAction<AuthUser | null>>;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({ children }:ContextProviderProps)=>{
    const [authUser, setAuthUser] = useState<AuthUser | null>(() => {
        const userStored = localStorage.getItem("app-user");
        return userStored ? JSON.parse(userStored) : null;
    });



    const contextValues: AuthContextProps = {authUser,setAuthUser};

    return <AuthContext.Provider
        value={contextValues}
    >
        {children}
    </AuthContext.Provider>
};