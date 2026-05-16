import { useState } from "react";
import { DollarSign } from "lucide-react";

import { useCart } from "../hook/useCart";
import CartItemCard from "../components/CartItemCard";
import Button from "../components/Button";

function CartPage() {
  const { getCartDetails } = useCart();

  const cartDetails = getCartDetails();

  const [cartItems, setCartItems] = useState(cartDetails.items);

  return (
    <section className="m-4 flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-1">
        {cartItems.map((item) => (
          <CartItemCard
            key={item.item.id}
            product={item.item}
            count={item.count}
            setItems={setCartItems}
          />
        ))}
      </div>
      <div className="rounded-xl shadow-lg p-2 border border-black/5 lg:w-3xl">
        <h1 className="text-2xl font-semibold mb-4">Order Summary</h1>
        <div className="flex gap-24 items-center">
          <span className="text-sm font-semibold text-black/70">
            Total items:
          </span>
          <div className="text-sm font-semibold">{cartDetails.totalItems}</div>
        </div>
        <div className="flex gap-[3.8rem] items-center">
          <span className="text-sm font-semibold text-black/70">
            Shipping cost:
          </span>
          <span className="text-sm font-semibold flex items-center">
            <DollarSign className="w-3" /> {cartDetails.shippingCharge}
          </span>
        </div>
        <div className="flex gap-24 items-center">
          <span className="text-sm font-semibold text-black/70">Subtotal:</span>{" "}
          <span className="text-sm font-semibold flex items-center">
            <DollarSign className="w-3" /> {cartDetails.totalPrice}
          </span>
        </div>
        <div className="flex gap-[7.43rem] items-center">
          <span className="text-sm font-semibold">Total:</span>{" "}
          <span className="text-sm font-semibold flex items-center">
            <DollarSign className="w-3" />
            {cartDetails.totalWithShippingCharge}
          </span>
        </div>
      </div>
      <Button onclick={() => console.log("Processing..")}>Pay</Button>
    </section>
  );
}

export default CartPage;
