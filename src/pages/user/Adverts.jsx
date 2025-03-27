import { useEffect, useState } from "react";
import { apiGetAllAdverts } from "../../services/adverts";
import { Link } from "react-router";

const AdsPage = () => {
  // Sample data - replace with your actual data source
  const [ads, setAds] = useState([]);
  const imageURL = "https://res.cloudinary.com/dnkydt52r/image/upload/";
  const getAds = async () => {
    try {
      const response = await apiGetAllAdverts();
      setAds(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAds();
  }, []);

  // State for filters and view
  const [viewType, setViewType] = useState("grid"); // 'grid' or 'list'
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [filteredAds, setFilteredAds] = useState(ads);

  // // Get unique categories for filter dropdown
  // const categories = [...new Set(ads.map((ad) => ad.category))];

  // const fetchAds = async () => {
  //   try {
  //     const res = await apiGetAllAdverts();
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchAds();
  // }, []);

  // Apply filters whenever filter states change
  // useEffect(() => {
  //   let results = ads;

  //   // Filter by search term
  //   if (searchTerm) {
  //     results = results.filter(
  //       (ad) =>
  //         ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         ad.description.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }

  //   // Filter by category
  //   if (selectedCategory) {
  //     results = results.filter((ad) => ad.category === selectedCategory);
  //   }

  //   // Filter by price range
  //   results = results.filter(
  //     (ad) => ad.price >= priceRange.min && ad.price <= priceRange.max
  //   );

  //   setFilteredAds(results);
  // }, [searchTerm, selectedCategory, priceRange, ads]);

  return (
    <div className="max-w-6xl mx-auto p-4 pt-32">
      <h1 className="text-3xl font-bold mb-6">Browse Advertisements</h1>

      {/* Search and Filters */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium mb-1">Search</label>
            <input
              type="text"
              placeholder="Search ads..."
              className="w-full p-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          {/* <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              className="w-full p-2 border rounded"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div> */}

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Price Range
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full p-2 border rounded"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: Number(e.target.value) })
                }
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full p-2 border rounded"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: Number(e.target.value) })
                }
              />
            </div>
          </div>

          {/* View Toggle */}
          <div>
            <label className="block text-sm font-medium mb-1">View</label>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 rounded ${
                  viewType === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setViewType("grid")}
              >
                Grid
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  viewType === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setViewType("list")}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">{ads.length} advertisements found</p>
      </div>

      {/* Ads Display */}
      {ads.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-gray-500">
            No advertisements match your search criteria
          </p>
        </div>
      ) : viewType === "grid" ? (
        // Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={`${imageURL}${ad.pictures[0]}`}
                alt={ad.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold">{ad.title}</h2>
                  <span className="font-bold text-green-600">${ad.price}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{ad.category}</p>
                <p className="mt-2 text-gray-700">{ad.description}</p>
                <Link
                  to={`/adverts/${ad.id}`}
                  className="mt-4 px-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List View
        <div className="space-y-4">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{ad.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{ad.category}</p>
                  </div>
                  <span className="font-bold text-green-600 text-xl">
                    ${ad.price}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{ad.description}</p>
                <Link
                  to={`/adverts/${ad.id}`}
                  className="mt-4 px-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdsPage;
