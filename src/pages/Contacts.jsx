import React from "react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg flex">
        {/* Contact Form Section */}
        <div className="w-2/3 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Write your notes or questions here..."
              rows="5"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
          </div>

          <button className="w-full bg-teal-400 text-white py-2 rounded-md hover:bg-teal-500 transition duration-300">
            Send Message
          </button>
        </div>

        {/* Contact Information Section */}
        <div className="w-1/3 bg-teal-400 text-white p-8 rounded-r-lg">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>

          <div className="mb-6">
            <h4 className="font-semibold">Address</h4>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold">Phone</h4>
            <p>+1 123 5555 324</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold">Email Address</h4>
            <p>youremail@domain.com</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">More Info</h4>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa ad
              ure porta mollitia architecto hic consequatur.
            </p>

            <button className="bg-white text-teal-400 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
