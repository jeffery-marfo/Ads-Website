// import React from "react";

// const VendorAds = () => {
//   return <div></div>;
// };

// export default VendorAds;

import React, { useState } from "react";
import { Trash2, Edit2, Eye } from "lucide-react";

// Initial ads data based on the reference image
const initialAds = [
  {
    id: 1,
    title: "iPhone 13 Pro",
    category: "Electronics",
    description: "Slightly used, great condition",
    price: 899,
    imageUrl: "/api/placeholder/300/200", // Replace with actual image
    details: "2021 model, 16GB RAM",
  },
  {
    id: 2,
    title: "Mountain Bike",
    category: "Sports",
    description: "Trek mountain bike, barely used",
    price: 450,
    imageUrl: "/api/placeholder/300/200", // Replace with actual image
    details: "Trek mountain bike",
  },
  {
    id: 3,
    title: "Leather Sofa",
    category: "Furniture",
    description: "Brown leather sofa, 3 years old",
    price: 750,
    imageUrl: "/api/placeholder/300/200", // Replace with actual image
    details: "Brown leather sofa",
  },
  {
    id: 4,
    title: "MacBook Pro",
    category: "Electronics",
    description: "2021 model, 16GB RAM",
    price: 1200,
    imageUrl: "/api/placeholder/300/200", // Replace with actual image
    details: "2021 model, 16GB RAM",
  },
  {
    id: 5,
    title: "Designer Watch",
    category: "Fashion",
    description: "Luxury watch, worn twice",
    price: 299,
    imageUrl: "/api/placeholder/300/200", // Replace with actual image
    details: "Luxury watch",
  },
  {
    id: 6,
    title: "Coffee Table",
    category: "Furniture",
    description: "Wooden coffee table",
    price: 120,
    imageUrl: "/api/placeholder/300/200", // Replace with actual image
    details: "Wooden coffee table",
  },
];

const VendorAds = () => {
  const [ads, setAds] = useState(initialAds);
  const [selectedAd, setSelectedAd] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Delete ad handler
  const handleDeleteAd = (adId) => {
    setAds(ads.filter((ad) => ad.id !== adId));
  };

  // Edit ad handler
  const handleEditAd = (ad) => {
    setSelectedAd(ad);
    setIsEditing(true);
  };

  // View ad details handler
  const handleViewDetails = (ad) => {
    setSelectedAd(ad);
    setIsEditing(false);
  };

  // Save edited ad
  const handleSaveAd = (updatedAd) => {
    setAds(ads.map((ad) => (ad.id === updatedAd.id ? updatedAd : ad)));
    setSelectedAd(null);
    setIsEditing(false);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setSelectedAd(null);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Advertisements</h1>
        <div className="text-gray-600">Total Ads: {ads.length}</div>
      </div>

      {/* Ads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map((ad) => (
          <div
            key={ad.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden"
          >
            {/* Ad Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={ad.imageUrl}
                alt={ad.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ad Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{ad.title}</h2>
              <p className="text-gray-600 mb-2">{ad.description}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-green-600 font-bold text-lg">
                  ${ad.price}
                </span>
                <span className="text-gray-500 text-sm">{ad.category}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleViewDetails(ad)}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-600"
                >
                  <Eye className="mr-2" size={18} />
                  View Details
                </button>
                <button
                  onClick={() => handleEditAd(ad)}
                  className="bg-green-300 text-white p-2 rounded-lg hover:bg-green-600"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDeleteAd(ad.id)}
                  className="bg-red-300 text-white p-2 rounded-lg hover:bg-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details/Edit Modal */}
      {selectedAd && (
        <AdDetailsModal
          ad={selectedAd}
          isEditing={isEditing}
          onSave={handleSaveAd}
          onCancel={handleCancelEdit}
        />
      )}

      {/* Empty State */}
      {ads.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No advertisements found. Create your first ad!
        </div>
      )}
    </div>
  );
};

// Details/Edit Modal Component
const AdDetailsModal = ({ ad, isEditing, onSave, onCancel }) => {
  const [editedAd, setEditedAd] = useState({ ...ad });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAd((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedAd);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[500px] max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">
            {isEditing ? "Edit Advertisement" : "Advertisement Details"}
          </h2>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={editedAd.title}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={editedAd.category}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Description</label>
                  <textarea
                    name="description"
                    value={editedAd.description}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={editedAd.price}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Details</label>
                  <input
                    type="text"
                    name="details"
                    value={editedAd.details}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <strong>Title:</strong> {ad.title}
              </div>

              <div>
                <strong>Description:</strong> {ad.description}
              </div>
              <div>
                <strong>Price:</strong> ${ad.price}
              </div>
              <div>
                <strong>Category:</strong> {ad.category}
              </div>
              {/* <div>
                <strong>Details:</strong> {ad.details}
              </div> */}
              <div className="flex justify-end">
                <button
                  onClick={onCancel}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorAds;
