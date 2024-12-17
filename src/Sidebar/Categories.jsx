import { useState, useEffect } from "react";
import { useFilter } from "../Contexts/FilterContext";

export const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useFilter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map(product => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="dark:text-neutral-300">
      <h2 className="text-[9px] font-semibold mt-3 mb-1 sm:text-lg sm:mb-4 sm:mt-7 md:text-xl lg:text-2xl xl:text-[1.8rem] text-[#1bc8d3] md:mb-4 dark:text-neutral-300">Categories</h2>
      <div>
        {categories.map((category, index) => (
          <label key={index} className="block mb-2 md:mb-3 lg:p-[0.2rem]">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={() => setSelectedCategory(category)}
              checked={selectedCategory === category}
              className="mr-2 w-[6px] md:w-3 md:w-3 xl:h-4 xl:w-4"
            />
            {category.toUpperCase()}
          </label>
        ))}
      </div>
    </div>
  );
};