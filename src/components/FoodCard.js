import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[250px] bg-white p-6 flex flex-col rounded-xl gap-3 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
      <img
        src={img}
        alt={name}
        className="w-full h-[180px] object-cover rounded-lg hover:scale-105 cursor-pointer transition-transform duration-500 ease-in-out"
      />
      
      <div className="text-sm flex justify-between mt-4">
        <h2 className="font-semibold text-gray-800 line-clamp-1">{name}</h2>
        <span className="text-green-500 font-semibold">₹{price}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{desc}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="flex items-center text-yellow-400 text-sm">
          <AiFillStar className="mr-1" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name);
          }}
          className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm transition-all duration-200 ease-in-out"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
