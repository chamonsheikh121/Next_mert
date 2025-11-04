"use client"

import { getCurrentUser } from "@/services/authService";
import { IUser } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type IUserProviderValues = {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setLoading(false);
  };
  useEffect(() => {
    if (!isLoading) return;

    const fetchUser = async () => {
      try {
        await handleUser(); // handleUser should fetch data and update state internally
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser(); // call the async function
  }, [isLoading]);

  const user_info: IUserProviderValues = {
    user,
    setUser,
    isLoading,
    setLoading,
  };

  return (
    <>
      <UserContext.Provider value={user_info}>{children}</UserContext.Provider>
    </>
  );
};


export default UserProvider;
