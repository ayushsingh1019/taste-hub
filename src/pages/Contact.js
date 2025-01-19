import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-red-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Contact <span className="text-yellow-400">TasteHub</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl max-w-3xl mx-auto">
            Have questions, feedback, or need assistance? Get in touch with us!
            We’re here to help and would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-700 text-center">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-700 text-lg text-center max-w-3xl mx-auto">
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
          <form className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                rows="5"
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-red-800 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-700">
            Reach Us
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
            You can also contact us through the following methods.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-red-600">Phone</h3>
              <p className="mt-4 text-gray-600 font-semibold">+91 7275826582</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-red-600">Email</h3>
              <p className="mt-4 text-gray-600 font-semibold">ayush@tastehub.com</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-red-600">Address</h3>
              <p className="mt-4 text-gray-600 font-semibold">
                Indrapuram , Ghaziabad , 201014 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-700 text-white py-12">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Let’s Stay Connected!
          </h2>
          <p className="mt-4 text-lg lg:text-xl">
            Follow us on social media to stay updated on the latest offers and news.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#"
              className="bg-white text-red-700 p-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="bg-white text-red-700 p-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="bg-white text-red-700 p-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
