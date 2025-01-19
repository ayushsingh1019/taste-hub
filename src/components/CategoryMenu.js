import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6 mb-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Find the Best Food
      </h3>
      <div className="my-5 flex gap-4 overflow-x-auto lg:overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-6 py-2 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out ${
            selectedCategory === "All" ? "bg-green-500 text-white" : ""
          }`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-6 py-2 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out ${
              selectedCategory === category ? "bg-green-500 text-white" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
