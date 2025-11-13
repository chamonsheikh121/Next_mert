"use server"
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
export const createBrand = async (data: FormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
    method: "POST",
    headers: {
      Authorization: (await cookies()).get("accessToken")!.value,
    },
    body: data,
  });

  return res.json();
};

export const getAllBrands = async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`)
  return res.json()
}


export const deleteBrand = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/brand/${id}`,
    {
      method: "DELETE",
      headers:{
        Authorization: (await cookies()).get("accessToken")!.value
      }
    }
  );


  return res.json();
};