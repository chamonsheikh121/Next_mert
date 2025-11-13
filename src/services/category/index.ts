"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
export const createCategory = async (data: FormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
    method: "POST",
    headers: {
      Authorization: (await cookies()).get("accessToken")!.value,
    },
    body: data,
  });


revalidateTag("CATEGORY","default")

  return res.json();
};

export const getAllCategory = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`,{
    next:{
        tags:["CATEGORY"]
    }
  });
  return res.json();
};

export const deleteCategory = async (id: string) => {
    console.log("from server",`${process.env.NEXT_PUBLIC_BASE_API}/category/${id}`);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/category/${id}`,
    {
      method: "DELETE",
      headers:{
        Authorization: (await cookies()).get("accessToken")!.value
      }
    }
  );

  revalidateTag("CATEGORY","default")

  return res.json();
};
