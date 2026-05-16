import { useContext } from "react";

import { CartContext } from "../contexts/cart-context";
import type { CartDetails, Product } from "../types/products";

export function useCart() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Cart context must be used within Cart Context Provider");
  }

  const { cartDetail, setCartDetail } = cartContext;

  const getCartDetails = (): CartDetails => {
    const cart = localStorage.getItem("cart");

    if (!cart) {
      return cartDetail;
    } else {
      const parsedCart = JSON.parse(cart);
      return parsedCart;
    }
  };

  const addItemToCart = (product: Product, itemCount: number) => {
    const cartDetail = getCartDetails();
    const items = cartDetail.items.concat({ item: product, count: itemCount });
    const totalItems = items.length;
    const totalPrice = cartDetail.totalPrice + product.price * itemCount;

    const cart = {
      items,
      shippingCharge: cartDetail.shippingCharge,
      totalItems,
      totalPrice,
      totalWithShippingCharge: totalPrice + cartDetail.shippingCharge,
    };

    setCartDetail(cart);

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeItemFromCart = (productId: number, itemCount: number) => {
    const cartDetail = getCartDetails();
    const deletedItem = cartDetail.items.find(
      (item) => item.item.id === productId,
    );

    if (!deletedItem) {
      throw new Error("Missing item");
    }

    const items = cartDetail.items.filter((item) => item.item.id !== productId);

    const totalItems = items.reduce((sum, item) => sum + item.count, 0);

    const finalPrice =
      cartDetail.totalPrice - deletedItem.item.price * itemCount;

    const totalPrice = items.length === 0 ? 0 : finalPrice;

    const cart = {
      items,
      shippingCharge: cartDetail.shippingCharge,
      totalItems,
      totalPrice,
      totalWithShippingCharge:
        totalPrice === 0 ? 0 : totalPrice + cartDetail.shippingCharge,
    };

    setCartDetail(cart);

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return {
    getCartDetails,
    addItemToCart,
    removeItemFromCart,
  };
}
