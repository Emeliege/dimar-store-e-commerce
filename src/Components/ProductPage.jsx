import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product data: ", error);
        });
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-8 w-auto dark:text-[#1bc8d3]">
      <button
        onClick={() => navigate(-1)}
        className="mb-3 ml-4 text-sm px-2 py-1 lg:text-xl xl:text-2xl 2xl:px-4 2xl:py-2 bg-black text-white rounded dark:text-black dark:bg-white"
      >
        Back
      </button>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-[6rem] h-[6rem] mb-5 2xl:w-[19rem] 2xl:h-[19rem] xl:w-[16rem] xl:h-[16rem] lg:w-[13rem] lg:h-[13rem] md:w-[8rem] md:h-[8rem]"
      />
      <h1 className="text-sm mb-4 md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.8rem]  font-bold">{product.title}</h1>
      <p className="mb-4 text-[10px] 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm text-gray-700 w-[70%]">{product.description}</p>
      <div className="flex text-[12px] 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm">
        <p>Price: ${product.price}</p>
        <p className="ml-8 md:ml-16 lg:ml-[9rem] xl:ml-[19rem] 2xl:ml-[25rem]">Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductPage;