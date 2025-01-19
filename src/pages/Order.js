import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
const Order = () => {
  return (
    <>
      <CategoryMenu />
      <FoodItems />
      <Cart />  
    </>
  );
};

export default Order;
