import React from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer, InterBusinessHero } from "../components";

const CaseStudiesLayout = ({
  heroText,
  heroImage,
  title,
  backLink,
  backText,
  studies,
  basePath, // e.g. "/international-business/case-studies"
}) => {
  const navigate = useNavigate();

  return (
    <section className="font-roboto bg-white min-h-screen pt-[7rem]">
      <Header />

      <InterBusinessHero text={heroText} image={heroImage} />

      <main className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

          <button
            onClick={() => navigate(backLink)}
            className="bg-gray-100 text-sm hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-xl font-medium transition"
          >
            ← {backText}
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studies.map((study) => (
            <div
              key={study.id}
              onClick={() => navigate(`${basePath}/${study.id}`)}
              className="group rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={study.image || heroImage}
                  alt={study.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`${basePath}/${study.id}`);
                  }}
                  className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 bg-[#71bf4f] text-white text-sm font-medium py-2 transition-all duration-500 w-full"
                >
                  View More
                </button>
              </div>

              {/* Text Section */}
              <div className="bg-white p-5 text-left">
                <h3 className="text-green-700 font-semibold text-lg mb-1">
                  {study.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{study.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </section>
  );
};

export default CaseStudiesLayout;
