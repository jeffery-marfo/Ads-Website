import React, { useState, useEffect } from "react";

const BlogSection = () => {
  // Sample blog post data
  const initialBlogPosts = [
    {
      id: 1,
      title: "Many People Selling Online",
      author: "Mark Spiker",
      date: "Jan 18, 2019",
      category: "News",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Many People Selling Online",
      author: "Mark Spiker",
      date: "Jan 18, 2019",
      category: "News",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Many People Selling Online",
      author: "Mark Spiker",
      date: "Jan 18, 2019",
      category: "News",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Top 10 E-commerce Trends",
      author: "Jennifer Lee",
      date: "Jan 15, 2019",
      category: "Marketing",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      image: "/api/placeholder/400/300",
    },
    {
      id: 5,
      title: "Building Customer Loyalty",
      author: "Sam Johnson",
      date: "Jan 10, 2019",
      category: "Business",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      image: "/api/placeholder/400/300",
    },
    {
      id: 6,
      title: "Social Media Marketing Tips",
      author: "Lisa Chen",
      date: "Jan 5, 2019",
      category: "Marketing",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      image: "/api/placeholder/400/300",
    },
  ];

  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter categories from blog posts
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter posts by category
  useEffect(() => {
    if (activeCategory === "All") {
      setVisiblePosts(3);
    } else {
      const filtered = initialBlogPosts.filter(
        (post) => post.category === activeCategory
      );
      setVisiblePosts(filtered.length);
    }
  }, [activeCategory, initialBlogPosts]);

  // Function to filter posts by category
  const filteredPosts =
    activeCategory === "All"
      ? initialBlogPosts
      : initialBlogPosts.filter((post) => post.category === activeCategory);

  // Function to view all posts
  const handleViewAllPosts = () => {
    setVisiblePosts(blogPosts.length);
  };

  // Function to filter by category
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2">
            Our Blog
          </h2>
          <p className="text-gray-600">See Our Daily News & Updates</p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-4"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? "bg-teal-400 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-teal-500 transition-colors duration-200">
                  <a href="#">{post.title}</a>
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span>by {post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-teal-500">{post.category}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-block text-teal-500 font-medium hover:text-teal-700 transition-colors duration-200"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        {visiblePosts < filteredPosts.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleViewAllPosts}
              className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white px-8 py-3 rounded-md font-medium hover:from-teal-500 hover:to-cyan-500 transition-colors duration-300"
            >
              View All Posts
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
