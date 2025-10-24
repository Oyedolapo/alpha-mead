import React from "react";
import { Clock } from "lucide-react";

const Blog = () => {
  return (
    <section className="font-roboto flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-10 max-w-lg shadow-sm">
        <Clock size={48} className="mx-auto mb-6 text-green-600" />
        <h2 className="text-3xl font-light text-gray-800 mb-4">
          Our Blog is Coming Soon
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          We’re curating insightful articles, thought leadership pieces, and
          industry trends to keep you informed. <br /> Stay tuned! Exciting content
          is on the way!
        </p>
      </div>
    </section>
  );
};

export default Blog;
