import { TProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartProduct extends TProduct {
  color: string;
  quantity: number;
}

interface ICartInitialState {
  products: ICartProduct[];
  userOrderDetails: {
    shippingAddress: string;
    paymentMethod: string;
    division: string;
    district: string;
    area: string;
    zip: string;
    coupon: string;
  };
}

const cartInitialState: ICartInitialState = {
  products: [],
  userOrderDetails: {
    shippingAddress: "",
    paymentMethod: "",
    division: "",
    district: "",
    area: "",
    zip: "",
    coupon: "",
  },
};

const cartToOrderSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addProductToCart: (state, action) => {
      const isProductExist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (isProductExist) {
        isProductExist.quantity += 1;
      } else {
        state.products.push({ ...action.payload, color: "", quantity: 1 });
      }
    },
  },
});

export const getAllProductsFromCart = (state: { cart: ICartInitialState }) => {
  return state.cart.products;
};

export const { addProductToCart } = cartToOrderSlice.actions;

export default cartToOrderSlice.reducer;
