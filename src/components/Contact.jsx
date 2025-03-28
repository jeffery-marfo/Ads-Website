import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form-handling logic here (e.g., sending the data to an API)
    alert("Form submitted!");
  };

  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-8 pt-32">
      {/* Left Column: Contact Form */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="mb-4 md:mb-0 flex-1">
              <label htmlFor="firstName" className="block font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="hello.adconnector@gmail.com"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your notes or questions here..."
              className="w-full p-2 border border-gray-300 rounded resize-vertical"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Column: Contact Info */}
      <div className="w-full md:w-80 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-700">
            28th February Road,
            <br />
            Accra,Ghana
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-700">
            <a
              href="tel:+12323235324"
              className="text-teal-500 hover:underline"
            >
              +233 232 3235 324
            </a>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Email Address</h3>
          <p className="text-gray-700">
            <a
              href="mailto:hello.adconnector@gmail.com"
              className="text-teal-500 hover:underline"
            >
              hello.adconnector@gmail.com
            </a>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">More Info</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad
            iure porro mollitia architecto hic consequatur? Distinctio nisi
            perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero
            neque sed nulla.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
