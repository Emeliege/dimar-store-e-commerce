import { useState, useEffect } from "react";

const TopSellers = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=9");
        const data = await response.json();
        const authorsData = data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));
        setAuthors(authorsData);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchData();
  }, []);

  const handleFollowClick = (index) => {
    setAuthors((prevAuthors) =>
      prevAuthors.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };

  return (
    <div className="invisible sm:visible md:visible lg:visible xl:visible 2xl:visible bg-white w-[5.5rem] text-[7px] mt-[6.4rem] 2xl:w-[18rem] 2xl:h-[49rem] xl:w-[15rem] xl:h-[49rem] xl:mt-[7.5rem] border lg:h-[44rem] lg:w-[13.5rem] md:w-[10rem] md:mr-[-7px] md:p-3 sm:text-[11px] sm:mt-[7.6rem] sm:w-[8rem] sm:p-1 rounded dark:bg-neutral-900 dark:text-neutral-300">
      <h2 className="text-[12px] font-bold 2xl:mb-9 xl:text-2xl md:text-lg sm:text-lg mb-5">
        Top Sellers
      </h2>
      <ul>
        {authors.map((author, index) => (
          <li
            key={index}
            className="flex items-center justify-between 2xl:mb-7 xl:text-lg lg:text-sm lg:mb-7 mb-4"
          >
            <section className="flex justify-center items-center">
              <img
                src={author.image}
                className="w-[25%] h-[25%] justify-center rounded-full md:mr-[2px] ml-2 sm:ml-0"
                alt={author.name}
              />
              <span className="ml-1">{author.name}</span>
            </section>
            <button
              onClick={() => handleFollowClick(index)}
              className={` rounded px-1 py-1 md:px-1 md:py-[3px] sm:py-[2px] ${
                author.isFollowing
                  ? "bg-red-500 text-white"
                  : "bg-blue-700 text-white"
              }`}
            >
              {author.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;
