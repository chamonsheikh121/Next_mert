"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createFlashSale = async (data: {
  discountPercentage: number;
  product: string[];
}) => {
  console.log("===============", data);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("before");
    revalidateTag("PRODUCT", "max");
    console.log("after");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getFlashSales = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
