import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const SearchModal = ({ onClose }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Search query:", query);
      // Add your redirect or search logic here
    }
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 w-full bg-white z-[999] shadow-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="flex flex-1 max-w-2xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 rounded-r-md hover:bg-green-700 transition"
          >
            Search
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="ml-4 text-gray-600 hover:text-red-600 transition"
          aria-label="Close Search"
        >
          <IoClose size={26} />
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
