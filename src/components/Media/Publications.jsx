import React from "react";
import { BookOpen } from "lucide-react";

const Publications = () => {
  return (
    <section className="font-roboto flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-10 max-w-lg shadow-sm">
        <BookOpen size={48} className="mx-auto mb-6 text-green-600" />
        <h2 className="text-3xl font-light text-gray-800 mb-4">
          Publications Coming Soon
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Our research papers, whitepapers, and corporate publications will be available here soon. <br /> 
          Stay connected for valuable insights into the real estate and facilities management industry.
        </p>
      </div>
    </section>
  );
};

export default Publications;
