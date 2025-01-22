import { useFilter } from "../Contexts/FilterContext";

const KEYWORDS = ["apple", "watch", "Fashion", "trend", "shoes", "shirt"];

export const Keywords = () => {
  const { setKeyword } = useFilter();

  return (
    <div className="mb-5 dark:text-neutral-300">
      <h2 className="font-serif font-semibold mt-5 mb-2 sm:text-lg sm:mb-4 sm:mt-7 md:text-xl lg:text-2xl xl:text-[1.5rem] text-[#1bc8d3] dark:text-neutral-300">Popular</h2>
      <div>
        {KEYWORDS.map((keyword, index) => (
          <button
            key={index}
            onClick={() => setKeyword(keyword)}
            className="block mb-2 px-2 py-1 md:mb-2 border rounded md:my-1 hover:bg-gray-200"
          >
            {keyword.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};