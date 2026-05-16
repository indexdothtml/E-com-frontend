import { useParams } from "react-router";
import { useEffect, useState, type ChangeEvent } from "react";
import { DollarSign, ShoppingCart } from "lucide-react";

import Button from "../components/Button";
import { getProductById } from "../services/products";
import type { Product } from "../types/products";
import { useCart } from "../hook/useCart";

function ProductDetailsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(1);

  const { addItemToCart, getCartDetails } = useCart();

  const { items } = getCartDetails();

  const alreadyAddedItem = items.find(
    (item) => item.item.id === Number(productId),
  );

  useEffect(() => {
    if (productId) {
      getProductById(productId).then((data) => {
        setProduct(data);
        setLoading(false);
      });
    }
  }, []);

  const handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) <= 0) {
      setItemCount(1);
    } else {
      setItemCount(Number(event.target.value));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="m-4">
      {product ? (
        <div className="flex gap-12">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-80 rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-semibold">{product.title}</h1>
            <h2>{product.description}</h2>
            <div className="pl-8 pr-8 pt-3 pb-3 rounded-full bg-blue-500 text-white text-sm font-semibold w-fit">
              {product.category.name}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-20">
                <div className="flex gap-1 items-center">
                  <DollarSign className="w-5" />{" "}
                  <span className="text-xl font-semibold">{product.price}</span>
                </div>
                <form className="flex gap-1 items-center">
                  <label
                    htmlFor="itemCount-id"
                    className="text-sm font-semibold"
                  >
                    Count
                  </label>
                  <input
                    type="number"
                    name="itemCount"
                    id="itemCount-id"
                    min="1"
                    value={itemCount}
                    className="border border-black pl-4 pr-4 pt-2 pb-2 rounded-lg w-20 h-8"
                    onChange={handleCountChange}
                  />
                </form>
              </div>
              <div className="w-fit">
                <Button
                  disable={alreadyAddedItem !== undefined}
                  onclick={() => addItemToCart(product, itemCount)}
                  className={`flex items-center ${alreadyAddedItem !== undefined ? "hover:bg-gray-500 bg-gray-500" : ""}`}
                >
                  <span>
                    {alreadyAddedItem !== undefined ? "Added to" : "Add to"}
                  </span>{" "}
                  <ShoppingCart />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found!</p>
      )}
    </section>
  );
}

export default ProductDetailsPage;
