"use client";

import { protectedRoutes } from "@/constants";
import { getCurrentUser, logout } from "@/services/authService";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";
import { userInfo } from "os";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

type IUserProviderValues = {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  logOutFomUserContext:(pathname: string)=>void
};

export const UserContext = createContext<IUserProviderValues | undefined>(
  undefined
);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };
  const logOutFomUserContext = async (pathname:string) => {
   await logout()
        setIsLoading(!isLoading);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }

    toast.success("Logged out successfully");
  };
  useEffect(() => {
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
    setIsLoading,
    logOutFomUserContext
  };

  return (
    <>
      <UserContext.Provider value={user_info}>{children}</UserContext.Provider>
    </>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be use within UserProvider");
  }
  return context;
};

export default UserProvider;
