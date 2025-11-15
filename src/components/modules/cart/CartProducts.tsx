"use client";
import { useAppSelector } from "@/redux/utils";
import CartCard from "./CartCard";
import { EmptyCart } from "./EmptyCart";
import { getAllProductsFromCart } from "@/redux/features/cartToOrder/cartToOrderSlice";

const CartProducts = () => {
  const products = useAppSelector(getAllProductsFromCart);
  console.log(products);
  return (
    <div className="lg:col-span-2 space-y-4">
      {products?.length ? (
        products.map((product, idx) => <CartCard product={product} key={idx} />)
      ) : (
        <EmptyCart />
      )}
      
    </div>
  );
};

export default CartProducts;
