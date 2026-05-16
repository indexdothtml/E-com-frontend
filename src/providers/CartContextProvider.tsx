import { type PropsWithChildren, useState } from "react";

import { CartContext } from "../contexts/cart-context";
import type { CartDetails } from "../types/products";

function CartContextProvider({ children }: PropsWithChildren) {
  const initialValue: CartDetails = {
    totalItems: 0,
    items: [],
    totalPrice: 0,
    shippingCharge: 10,
    totalWithShippingCharge: 0,
  };

  const [cartDetail, setCartDetail] = useState<CartDetails>(initialValue);

  return (
    <CartContext.Provider value={{ cartDetail, setCartDetail }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
