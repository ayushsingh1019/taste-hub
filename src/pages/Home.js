import React from "react";
import banner from "../assets/pizza-img.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-12">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-red-700 leading-tight">
            Your Favorite Pizza, <br /> Delivered Fresh & Hot!
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl">
            Handcrafted with love, fresh ingredients, and a touch of perfection. Explore our wide variety of pizzas today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/order"
              className="bg-yellow-500 text-red-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative rounded-xl p-4 bg-gray-50">
            <img
              src={banner}
              alt="Delicious Pizza"
              className="w-full max-w-lg lg:max-w-xl h-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-700">
            Why Choose TasteHub?
          </h2>
          <p className="mt-4 text-gray-700 text-lg lg:text-xl">
            At TasteHub, we deliver quality, flavor, and satisfaction in every bite. Here's why we're your best choice:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600">Fresh Ingredients</h3>
              <p className="mt-2 text-gray-600">
                Only the freshest ingredients go into every pizza.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600">Fast Delivery</h3>
              <p className="mt-2 text-gray-600">
                Hot and fresh, straight to your door.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600">Variety of Flavors</h3>
              <p className="mt-2 text-gray-600">
                From classic to gourmet, there's a pizza for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
