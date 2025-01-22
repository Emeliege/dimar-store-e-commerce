import { useFilter } from "../Contexts/FilterContext";

export const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useFilter();

  return (
    <input
      type="text"
      className="border-2 text-[9px] w-[4rem] px-1 mb-2 sm:text-[11px] sm:h-6 sm:w-[5.7rem] md:text-[13px] md:w-[6.7rem] md:h-8 lg:text-[15px] lg:h-9 lg:w-[7.6rem] xl:text-xl xl:h-12 xl:w-[10rem] rounded w-full"
      placeholder="Search products"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};