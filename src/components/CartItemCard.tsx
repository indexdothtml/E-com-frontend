import type { Dispatch, SetStateAction } from "react";
import { X, Trash } from "lucide-react";

import { useCart } from "../hook/useCart";
import type { Product, ItemsAndCount } from "../types/products";
import Button from "./Button";

interface CartItemCardProps {
  product: Product;
  count: number;
  setItems: Dispatch<SetStateAction<ItemsAndCount[]>>;
}

function CartItemCard({ product, count, setItems }: CartItemCardProps) {
  const { removeItemFromCart } = useCart();

  const handleRemove = () => {
    removeItemFromCart(product.id, count);
    setItems((prev) => prev.filter((item) => item.item.id !== product.id));
  };

  return (
    <div className="shadow-lg lg:w-3xl rounded-xl flex lg:gap-0 gap-3 p-4 items-center justify-between">
      <img src={product.images[0]} alt="Product card" className="w-14" />
      <div className="flex items-center gap-2">
        <h1 className="text-sm font-semibold lg:block hidden">
          {product.title}
        </h1>
        <span className="flex items-center">
          <X className="w-3" /> {count}
        </span>
      </div>
      <Button onclick={handleRemove} className="bg-red-500 hover:bg-red-600">
        <Trash className="w-5 lg:hidden" />{" "}
        <span className="lg:block hidden">Remove</span>
      </Button>
    </div>
  );
}

export default CartItemCard;
