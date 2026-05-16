import { DollarSign } from "lucide-react";
import { Link } from "react-router";

import Button from "./Button";
import { useCart } from "../hook/useCart";
import type { Product } from "../types/products";

function ItemCard(product: Product) {
  const { addItemToCart, getCartDetails } = useCart();

  const { items } = getCartDetails();

  const alreadyAddedItem = items.find(
    (item) => item.item.id === Number(product.id),
  );

  return (
    <div className="w-[20rem] rounded-lg shadow-lg hover:shadow-xl">
      <div>
        <Link key={product.id} to={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            alt="Product image"
            className="w-full h-auto rounded-lg"
          />
        </Link>
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold truncate">{product.title}</h1>
        <h2 className="text-sm text-black/80 font-semibold truncate">
          {product.description}
        </h2>
        <div className="mt-2 flex justify-between items-center">
          <div className="font-bold flex">
            <DollarSign className="w-3.5" /> <span>{product.price}</span>
          </div>
          <Button
            disable={alreadyAddedItem !== undefined}
            onclick={() => addItemToCart(product, 1)}
            className={`${alreadyAddedItem !== undefined ? "hover:bg-gray-500 bg-gray-500" : ""}`}
          >
            {alreadyAddedItem !== undefined ? "Added to cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
