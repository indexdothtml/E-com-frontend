import { useEffect, useState } from "react";

import ItemCard from "./ItemCard";
import { getProductsByCategory, getAllProducts } from "../services/products";
import type { Product } from "../types/products";

interface ItemGridProps {
  filter: boolean;
  selectedCategory?: string;
}

function ItemGrid({ filter, selectedCategory = "" }: ItemGridProps) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (filter) {
      getProductsByCategory(selectedCategory)
        .then((data) => {
          if (!data?.success) {
            setProducts(data);
          } else {
            setProducts([]);
          }
        })
        .finally(() => setLoading(false));
    } else {
      getAllProducts()
        .then((data) => {
          if (!data?.success) {
            setProducts(data);
          } else {
            setProducts([]);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [filter, selectedCategory]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {products.length !== 0 ? (
        products.map((product: Product) => (
          <ItemCard
            key={product.id}
            imageURL={product.images[0]}
            heading={product.title}
            description={product.description}
            price={product.price}
          />
        ))
      ) : (
        <p>Products are not available with this category.</p>
      )}
    </div>
  );
}

export default ItemGrid;
