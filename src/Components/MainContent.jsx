import { useEffect, useState } from "react";
import axios from "axios";
import { useFilter } from "../Contexts/FilterContext";
import BookCard from "./BookCard";
import { Tally3 } from "lucide-react";

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [currentPage, keyword]);

  const getFilteredProducts = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice
      );
    }

    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (filter) {
      case "expensive":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "cheap":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "popular":
        return filteredProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filteredProducts;
    }
  };

  const filteredProducts = getFilteredProducts();

  const totalProducts = 100;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationButtons = () => {
    const buttons = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (2 - (currentPage - 1)));
    }
    if (currentPage + 2 > totalPages) {
      startPage = Math.max(1, startPage - (2 - (totalPages - currentPage)));
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  return (
    <section className=" p-6 xl:w-[60rem] lg:w-[55rem] sm:w-[40rem] xl:p-0 xs:w-[20rem] dark:text-[#1bc8d3]">
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative mb-5 mr-10">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border text-[12px] mr-[10rem] px-2 py-1 rounded-full flex items-center xl:ml-[2rem] xl:text-[20px] xl:mt-5 lg:text-[18px] lg:px-5 md:text-[13px] md:p-2 sm:text-[13px] sm:px-[4px] sm:p-2 dark:text-neutral-300"
            >
              <Tally3 className="mr-0 h-4 lg:mr-1 xl:h-[21px] lg:h-[19px] md:mr-[-5px] md:h-[16px] sm:h-[16px]" />
              {filter === "all"
                ? "Filter"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white border border-gray-300 rounded mt-2 w-full">
                <button
                  onClick={() => setFilter("cheap")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  Cheap
                </button>
                <button
                  onClick={() => setFilter("expensive")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  Expensive
                </button>
                <button
                  onClick={() => setFilter("popular")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  Popular
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 mr-[5.4rem] sm:grid-cols-3 md:grid-cols-4 gap-5 xl:mr-[6.7rem] xl:mt-[-1.2rem] 2xl:w-[65rem] lg:mr-[12.8rem] md:p-0 md:mr-[7.3rem] sm:p-1 sm:mr-[10.2rem] h-full xl:p-5">
          {filteredProducts.map((product) => (
            <BookCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
            />
          ))}
        </div>

        <div className="flex flex-col mt-2 text-[12px] justify-between xl:text-2xl xl:mx-20 lg:text-lg lg:mx-16 md:mx-11 md:text-sm sm:flex-row sm:mx-9 sm:text-sm items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border px-2 py-1 rounded-full"
          >
            Previous
          </button>

          <div className="flex flex-wrap justify-center">
            {getPaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`border px-3 py-1 my-2 rounded-full ${
                  page === currentPage ? "bg-black text-white" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border px-2 py-1 rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainContent;