import { useFilter } from "../Contexts/FilterContext";
import { SearchInput } from "./SearchInput";
import { Categories } from "./Categories";
import { Keywords } from "./Keywords";

const Sidebar = () => {
  const {
    setSearchQuery,
    setSelectedCategory,
    setMinPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-[3rem] mt-10 ml-[1px] p-1 sm:p-2 sm:w-[5.5rem] md:w-[6.5rem] lg:w-[11rem] xl:p-3 xl:w-[13rem] h-screen">
      <section className="space-y-3  text-[10px] md:text-[12px] xl:text-[19px] lg:text-[15px] sm:text-[12px]">
        <SearchInput />
        <Categories />
        <Keywords />


        <button
          onClick={handleResetFilters}
          className=" text-[10px] py-0 px-2 bg-black text-white xl:text-2xl lg:text-xl md:text-sm sm:text-sm sm:p-2 rounded dark:text-black dark:bg-white"
        >
          Reset All
        </button>
      </section>
    </div>
  );
};

export default Sidebar;