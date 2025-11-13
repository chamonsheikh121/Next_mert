"use server";

import { cookies } from "next/headers";

export const createProduct = async (data: FormData) => {
  console.log("getting call");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
    method: "POST",
    headers: {
      Authorization: (await cookies()).get("accessToken")!.value,
    },
    body: data,
  });

  return res.json();
};

export const getAllProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`);
  return res.json();
};

export const getProduct = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${id}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async(data: FormData, id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: data,
      }
    );

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
