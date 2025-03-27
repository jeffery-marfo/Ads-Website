import React from "react";
import { apiAddAdvert } from "../../services/adverts";

const CreateAds = () => {
  const handleSubmit = async (event) => {
    // prevent default submit behavior
    event.preventDefault();
    // collect form data
    const formData = new FormData(event.target);
    // post data to backend

    try {
      const response = await apiAddAdvert(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className=" bg-gray-100 flex items-center justify-center p-4 m-auto w-full">
        <div className=" ">
          <form
            action=""
            className="p-5  gap-5 flex-wrap space-y-5 bg-white "
            onSubmit={handleSubmit}
          >
            {/* header here */}
            <div className="w-full max-w-4xl mx-auto p-4 bg-green-500 rounded-lg shadow-sm flex justify-between items-center">
              <h1 className="text-lg font-medium  text-white flex-grow">
                Post ad
              </h1>
              <button className="text-white font-medium text-sm underline">
                Clear
              </button>
            </div>
            {/* title here */}
            <div>
              <label htmlFor="title" className="mb-2">
                Title
              </label>
              <input
                name="title"
                type="title"
                required
                placeholder="title"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* description */}
            <div>
              <label
                htmlFor="description"
                className="block text-gray-800 font-medium mb-1"
              >
                Description
              </label>

              <textarea
                id="message"
                name="description"
                rows="3"
                placeholder="description"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            {/* photo upload */}
            <div>
              <div>
                <h1 className="text-base font-medium text-gray-700">
                  Add Photo
                </h1>
                <p className=" text-black mt-1">
                  First picture is the title picture. You can change the order
                  of photos: just grab your photos and drag
                </p>
              </div>
              {/* image here */}
              <div className="flex flex-wrap gap-2 mt-3">
                <label
                  htmlFor="photo upload"
                  className="flex items-center justify-center w-24 h-24 bg-green-50 rounded cursor-pointer hover:bg-green-100"
                ></label>
                <span className="text-green-500 text-3xl">+</span>
                <input
                  name="pictures"
                  type="file"
                  id="photo-upload"
                  accept="image/*"
                  className=""
                  multiple
                />
              </div>
              <p className=" text-black mt-2">
                support formats are *.jpeg *.png
              </p>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                name="price"
                type="price"
                required
                placeholder="price"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* category */}
            <div>
              <label
                htmlFor="category"
                className="block text-gray-800 font-medium mb-1"
              >
                Category
              </label>

              <select
                name="categories"
                id=""
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="" className="text-gray-500">
                  Category*
                </option>

                <option value="Shirt">Shirt</option>
                <option value="Pants">Pants</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            {/* next button */}
            <div>
              <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                post ad
              </button>
            </div>

            <div className="w-[600px] flex items-center justify-center m-auto">
              <p>
                By clicking on <strong>Post Ad</strong>, you accept the
                <a href="#" className="text-blue-500">
                  {" "}
                  Terms of Use
                </a>
                , confirm that you will abide by the
                <a href="#" className="text-blue-500">
                  {" "}
                  Safety Tips
                </a>
                , and declare that this posting does not include any
                <a href="#" className="text-blue-500">
                  {" "}
                  Prohibited Items
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAds;
