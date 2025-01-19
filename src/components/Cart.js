import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-6 bg-white shadow-lg ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 rounded-l-lg`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="text-gray-600 font-bold p-2 text-4xl rounded-md hover:text-red-500 cursor-pointer transition-all duration-300"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-lg font-semibold text-gray-600">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-10 left-0 w-full px-4">
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between mb-3">
            <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
            <h3 className="font-semibold text-gray-800">Total: ₹{totalPrice}</h3>
          </div>
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg w-full transition-all duration-300 hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      </div>

      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-lg text-6xl p-4 fixed bottom-6 right-6 transition-all duration-300 ${
          totalQty > 0 ? "animate-bounce" : ""
        }`}
      />
    </>
  );
};

export default Cart;
