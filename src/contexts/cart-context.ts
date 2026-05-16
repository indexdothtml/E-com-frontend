import { createContext, type Dispatch, type SetStateAction } from "react";
import type { CartDetails } from "../types/products";

type CartContextType = {
  cartDetail: CartDetails;
  setCartDetail: Dispatch<SetStateAction<CartDetails>>;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
