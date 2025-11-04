"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const signUp = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    const cookie = await cookies();
    if (result?.success == true) {
      cookie.set("accessToken", result?.data?.accessToken);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    const cookie = await cookies();

    if (result?.success == true) {
      cookie.set("accessToken", result?.data?.accessToken);
      cookie.set("refreshToken", result?.data?.refreshToken);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  console.log(token);
  let user = null;
  if (token) {
    user = await jwtDecode(token);
  }
  return user;
};
