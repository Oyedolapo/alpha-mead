import React from "react";
import CountrySubNav from "./CountrySubNav";

const RegionDisclosure = ({
  region,
  activeCountry,
  setActiveCountry,
  activeSubTab,
  setActiveSubTab,
}) => {
  return (
    <>
      {region.countries.map((country, i) => (
        <div key={i}>
          {/* Country Button */}
          <button
            onClick={() =>
              setActiveCountry(
                activeCountry === country.title ? null : country.title
              )
            }
            className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
              activeCountry === country.title
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {country.title}
          </button>

          {/* Sub-navigation */}
          {activeCountry === country.title && (
            <CountrySubNav
              country={country}
              activeSubTab={activeSubTab}
              setActiveSubTab={setActiveSubTab}
              setActiveCountry={setActiveCountry}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default RegionDisclosure;
