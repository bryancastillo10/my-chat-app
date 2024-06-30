import { createContext, useState, useCallback } from "react";
import { AuthContextProps, AuthUser, ContextProviderProps } from "./type";

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({ children }: ContextProviderProps) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(() => {
    const userStored = localStorage.getItem("app-user");
    return userStored ? JSON.parse(userStored) : null;
  });

  const updateAuthUser = useCallback((updates: Partial<AuthUser>) => {
      setAuthUser((prevUser) => {
      if (!prevUser) return null;

      const updatedUser: AuthUser = {
        _id: updates._id ?? prevUser._id,
        fullName: updates.fullName ?? prevUser.fullName,
        profilePic: updates.profilePic ?? prevUser.profilePic,
        username: updates.username ?? prevUser.username,
      };

      localStorage.setItem("app-user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  }, []);

  const contextValues: AuthContextProps = {
    authUser,
    setAuthUser,
    updateAuthUser,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
