import { Link } from "react-router-dom";

const BookCard = ({ id, title, image, price }) => {
  return (
    <div className="border w-[4.4rem] p-1 h-[6.3rem] rounded 2xl:w-[15.3rem] 2xl:h-[15.8rem] xl:h-[15.5rem] xl:w-[12rem] lg:h-[15rem] lg:w-[9.5rem] md:w-[7.1rem] md:p-1 md:h-[11rem] sm:w-[9.2rem] sm:h-[12rem]">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full mb-3 h-9 2xl:w-[13rem] xl:w-[10rem] lg:h-[7rem] lg:w-[9rem] lg:p-[1px] object-cover md:h-[5rem] md:mt-3 md:w-[5.7rem] sm:h-[5rem] sm:w-[7.5rem]"
        />
        <h2 className="font-bold w-13 text-[8px] 2xl:text-[18px] xl:text-[17px] xl:ml-7 lg:text-[16px] lg:ml-5 md:text-[12px] sm:text-[13px] sm:w-[7rem]">{title}</h2>
        <p className="text-[8px] 2xl:text-[18px] xl:text-[17px] xl:ml-7 lg:ml-5 lg:text-[16px] md:text-[11px] sm:text-[13px]">${price}</p>
      </Link>
    </div>
  );
};

export default BookCard;