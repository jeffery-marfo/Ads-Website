import React, { useState } from "react";

const FAQSection = () => {
  // Sample FAQ data
  const faqItems = [
    {
      id: 1,
      question: "How do I list an item for sale?",
      answer:
        "Listing an item is easy! Simply click the 'Sell' button in the top navigation, fill out the item details form with a description, photos, price, and shipping options, then submit. Your item will be live on our marketplace within minutes.",
    },
    {
      id: 2,
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers in select countries. All transactions are secure and protected by our buyer/seller guarantee.",
    },
    {
      id: 3,
      question: "How does shipping work?",
      answer:
        "Sellers can choose to offer local pickup or various shipping options. When you purchase an item, the shipping cost is included in your total. Sellers are responsible for shipping items within 3 business days, and you'll receive tracking information once the item is shipped.",
    },
    {
      id: 4,
      question: "What if I receive a damaged item?",
      answer:
        "We're sorry to hear that! If you receive a damaged item, please take photos of the damage and contact both the seller and our support team within 48 hours of receiving the item. Our buyer protection program covers eligible purchases, and we'll help facilitate a return, replacement, or refund as appropriate.",
    },
    {
      id: 5,
      question: "Can I sell internationally?",
      answer:
        "Yes! Our platform supports international selling. When creating your listing, you can specify which countries you're willing to ship to. Keep in mind that international shipping may involve customs fees and import taxes, which are typically the buyer's responsibility.",
    },
    {
      id: 6,
      question: "How do I contact customer support?",
      answer:
        "Our customer support team is available 24/7. You can reach us through the 'Help' section in your account, via email at support@example.com, or through our live chat feature. For urgent matters, you can call our support line at 1-800-555-0123.",
    },
  ];

  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(null);

  // Toggle FAQ item
  const toggleItem = (id) => {
    if (openItem === id) {
      setOpenItem(null);
    } else {
      setOpenItem(id);
    }
  };

  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-8">
            Find answers to common questions about our platform
          </p>

          {/* Search box */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
                  aria-expanded={openItem === item.id}
                >
                  <span className="font-medium text-lg text-gray-800">
                    {item.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        openItem === item.id
                          ? "transform rotate-180 text-teal-500"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openItem === item.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 border-t border-gray-200">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="text-gray-500 text-lg">
                No matching questions found
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 text-teal-500 hover:text-teal-700 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Contact support */}
        <div className="mt-12 text-center bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">Our support team is here to help</p>
          <button className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white px-6 py-3 rounded-full font-medium hover:from-teal-500 hover:to-cyan-500 transition-colors duration-300 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
