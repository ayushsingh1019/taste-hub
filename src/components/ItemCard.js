import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="relative flex gap-6 items-center bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, {
            icon: "👋",
            style: {
              background: "#f44336",
              color: "#fff",
            },
          });
        }}
        className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-red-500 transition-all duration-300"
      />
      
      <img src={img} alt={name} className="w-[80px] h-[80px] object-cover rounded-md shadow-md" />
      
      <div className="flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-green-600">₹{price}</span>
          
          <div className="flex items-center gap-4">
            <AiOutlineMinus
              onClick={() => qty > 1 && dispatch(decrementQty({ id }))}
              className="cursor-pointer text-gray-600 border-2 border-gray-600 hover:bg-green-500 hover:text-white rounded-md p-2 text-2xl transition-all duration-200 ease-in-out"
            />
            <span className="text-lg font-medium text-gray-700">{qty}</span>
            <AiOutlinePlus
              onClick={() => qty >= 1 && dispatch(incrementQty({ id }))}
              className="cursor-pointer text-gray-600 border-2 border-gray-600 hover:bg-green-500 hover:text-white rounded-md p-2 text-2xl transition-all duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
