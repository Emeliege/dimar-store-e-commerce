import { Link } from "react-router-dom";

const BookCard = ({ id, title, image, price }) => {
  return (
    <div className="border w-[8.6rem] p-1 h-[9.5rem] rounded 2xl:w-[15.3rem] 2xl:h-[15.8rem] xl:h-[15.5rem] xl:w-[12.5rem] lg:h-[15rem] lg:w-[9.9rem] md:w-[9.9rem] md:p-2 md:h-[11.3rem] sm:w-[7.6rem] sm:h-[10.5rem] sm:ml-[-10px]">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-[6rem] mb-1 h-[6rem] 2xl:w-[13rem] xl:w-[10rem] lg:mt-2 lg:h-[7rem] lg:w-[9rem] lg:p-[1px] object-cover md:h-[7rem] md:mt-0 md:w-[8.8rem] sm:h-[5rem] sm:w-[7.5rem]"
        />
        <h2 className="font-bold w-13 text-[10px] 2xl:text-[18px] xl:text-[17px] xl:mt-3 lg:text-[16px] lg:ml-5 md:text-[12px] sm:text-[13px] sm:w-[7rem]">{title}</h2>
        <p className="text-[9px] 2xl:text-[18px] xl:text-[17px] lg:ml-5 lg:text-[16px] md:text-[11px] sm:text-[13px]">${price}</p>
      </Link>
    </div>
  );
};

export default BookCard;