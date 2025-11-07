"use server";

import { cookies } from "next/headers";


export const createShop = async (data:FormData) => {
    console.log(process.env.NEXT_PUBLIC_BASE_API);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`, {
    method: "POST",
    headers: {
      Authorization: (await cookies()).get("accessToken")!.value,
    },
    body:data
  });

  return res.json()
};
