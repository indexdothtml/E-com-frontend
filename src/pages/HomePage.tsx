import { useState, type ChangeEvent, useEffect } from "react";
import { SlidersHorizontal, CircleX } from "lucide-react";

import Button from "../components/Button";
import ItemGrid from "../components/ItemsGrid";
import { getCategories } from "../services/products";
import type { Category } from "../types/products";

function HomePage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    getCategories().then((data) => {
      if (!data?.success) {
        setCategories(data);
      }
    });
  }, []);

  return (
    <>
      <section className="m-4 flex gap-10">
        <Button
          onclick={() => setShowFilter((prev) => !prev)}
          className="flex items-center gap-2"
        >
          <span>
            {showFilter ? (
              <CircleX className="w-4" />
            ) : (
              <SlidersHorizontal className="w-4" />
            )}
          </span>
          <span>Filter</span>
        </Button>
        {showFilter && (
          <form className="flex gap-4">
            <input
              type="text"
              placeholder="Search..."
              name="title"
              value={title}
              onChange={handleTitleChange}
              className="border border-black/35 pt-2 pb-2 pl-4 pr-4 text-sm rounded-lg focus:outline-none"
            />
            <select
              value={category}
              onChange={handleCategoryChange}
              className="border border-black/35 pt-2 pb-2 pl-4 pr-4 text-sm rounded-lg focus:outline-none"
            >
              {categories.length !== 0 ? (
                categories.map((category: Category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))
              ) : (
                <option value="">No Categories found</option>
              )}
            </select>
          </form>
        )}
      </section>
      <section className="m-4">
        <ItemGrid filter={showFilter} selectedCategory={category} />
      </section>
    </>
  );
}

export default HomePage;
