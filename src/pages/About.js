import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-red-700 text-white py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            About <span className="text-yellow-400">TasteHub</span>
          </h1>
          <p className="mt-4 text-lg lg:text-xl max-w-3xl">
            Welcome to TasteHub, where we redefine the art of pizza making. Our mission is to bring joy and satisfaction to every bite with fresh ingredients, innovative recipes, and exceptional service.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-700">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-700 text-lg lg:text-xl max-w-4xl mx-auto">
            At TasteHub, our mission is simple: to deliver happiness, one slice at a time. We believe that great pizza starts with great ingredients and ends with a smile. Whether you're dining with family, friends, or on your own, we aim to make your experience unforgettable.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-700">
            Our Values
          </h2>
          <p className="mt-4 text-gray-700 text-lg lg:text-xl max-w-3xl mx-auto">
            Everything we do is guided by these core values that shape our brand.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600">Quality</h3>
              <p className="mt-2 text-gray-600">
                Only the freshest, highest-quality ingredients go into every pizza we make.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600">Innovation</h3>
              <p className="mt-2 text-gray-600">
                We're always experimenting to bring new flavors and experiences to our customers.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600">Community</h3>
              <p className="mt-2 text-gray-600">
                We value the connections we make with our customers and the community we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-700">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-700 text-lg lg:text-xl max-w-3xl mx-auto">
            Our passionate and dedicated team works tirelessly to bring you the best pizza experience.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src=""
                alt="Team Member"
                className="rounded-full mx-auto w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-bold text-red-700">Ayush Singh</h3>
              <p className="text-gray-600">Head Chef</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src=""
                alt="Team Member"
                className="rounded-full mx-auto w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-bold text-red-700">Rakhi Singh</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src=""
                alt="Team Member"
                className="rounded-full mx-auto w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-bold text-red-700">Mohit Singh</h3>
              <p className="text-gray-600">Marketing Specialist</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src=""
                alt="Team Member"
                className="rounded-full mx-auto w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-bold text-red-700">Aashutosh Verma</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-700 text-white py-12">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Taste the Difference?
          </h2>
          <p className="mt-4 text-lg lg:text-xl">
            Join our growing family of pizza lovers today. Place your order now!
          </p>
          <div className="mt-6">
            <Link
              to="/order"
              className="bg-yellow-500 text-red-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
