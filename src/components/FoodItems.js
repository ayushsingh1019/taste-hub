import React, { useMemo } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => toast.success(`Added ${name}`);

  const filteredFood = useMemo(
    () =>
      FoodData.filter((food) => {
        if (category === "All") {
          return food.name.toLowerCase().includes(search.toLowerCase());
        } else {
          return (
            category === food.category &&
            food.name.toLowerCase().includes(search.toLowerCase())
          );
        }
      }),
    [category, search] 
  );

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Explore Our Delicious Menu
        </h2>

        <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
          {filteredFood.length === 0 ? (
            <p className="text-lg text-gray-600">No items found!</p>
          ) : (
            filteredFood.map((food) => (
              <FoodCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                img={food.img}
                handleToast={handleToast}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FoodItems;
