import React, { useState } from "react";

const DiscoverSection = () => {
  // Initial product data
  const initialProducts = [
    {
      id: 1,
      title: "Charles Tyrwhitt shirts perfect condition",
      price: "£20",
      location: "Bath",
      timeAgo: "13 days ago",
      image: "/api/placeholder/300/300",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Ford, FIESTA, Hatchback, 2005, Manual, 1388",
      price: "£995",
      details: "2005 · 141,274 miles · Petrol",
      location: "Auckley",
      timeAgo: "18 days ago",
      image: "/api/placeholder/300/300",
      isFavorite: false,
    },
    {
      id: 3,
      title: "3 metre NEW scaffold boards [unbanded]",
      price: "£13",
      location: "Rochford",
      timeAgo: "13 hours ago",
      image: "/api/placeholder/300/300",
      isSpotlight: true,
      isFavorite: false,
    },
    {
      id: 4,
      title: "Swings",
      price: "£5",
      location: "Cyncoed",
      timeAgo: "13 days ago",
      image: "/api/placeholder/300/300",
      isFavorite: false,
    },

    {
      id: 5,
      title: "Swings",
      price: "£5",
      location: "Cyncoed",
      timeAgo: "13 days ago",
      image: "/api/placeholder/300/300",
      isFavorite: false,
    },

    {
      id: 6,
      title: "Swings",
      price: "£5",
      location: "Cyncoed",
      timeAgo: "13 days ago",
      image: "/api/placeholder/300/300",
      isFavorite: false,
    },
    {
      id: 7,
      title: "Swings",
      price: "£5",
      location: "Cyncoed",
      timeAgo: "13 days ago",
      image: "/api/placeholder/300/300",
      isFavorite: false,
    },
    {
      id: 8,
      title: "Swings",
      price: "£5",
      location: "Cyncoed",
      timeAgo: "13 days ago",
      image: "/api/placeholder/300/300",
      isFavorite: false,
    },
  ];

  // State for the products
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Toggle favorite status
  const toggleFavorite = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  // Handle clicking on a product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Close the product detail modal
  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="w-full bg-gray-100 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with location */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Discover more Good Finds
          </h2>
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>United Kingdom</span>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              {/* Product image with favorite button and spotlight tag */}
              <div
                className="relative h-48"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.isSpotlight && (
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold py-1 px-2 rounded">
                    SPOTLIGHT
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
                  aria-label={
                    product.isFavorite
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  <svg
                    className={`w-5 h-5 ${
                      product.isFavorite ? "text-red-500" : "text-gray-500"
                    }`}
                    fill={product.isFavorite ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Product details */}
              <div className="p-4" onClick={() => handleProductClick(product)}>
                <h3 className="font-medium text-gray-900 mb-1 truncate">
                  {product.title}
                </h3>
                {product.details && (
                  <p className="text-sm text-gray-500 mb-2">
                    {product.details}
                  </p>
                )}
                <p className="text-lg font-bold text-green-600 mb-2">
                  {product.price}
                </p>

                <div className="flex items-center text-gray-500 text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>{product.location}</span>
                </div>

                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{product.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-full overflow-auto">
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeProductDetail}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                onClick={() => toggleFavorite(selectedProduct.id)}
                className="absolute top-2 left-2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                aria-label={
                  selectedProduct.isFavorite
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >
                <svg
                  className={`w-5 h-5 ${
                    selectedProduct.isFavorite
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                  fill={selectedProduct.isFavorite ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedProduct.title}
              </h2>
              <p className="text-2xl font-bold text-green-600 mb-4">
                {selectedProduct.price}
              </p>

              {selectedProduct.details && (
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    Details
                  </h3>
                  <p className="text-gray-600">{selectedProduct.details}</p>
                </div>
              )}

              <div className="flex items-center text-gray-600 mb-2">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{selectedProduct.location}</span>
              </div>

              <div className="flex items-center text-gray-600 mb-6">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{selectedProduct.timeAgo}</span>
              </div>

              <div className="flex space-x-4">
                <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex-grow">
                  Contact Seller
                </button>
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscoverSection;
