import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import RegionDisclosure from "./RegionDisclosure";

const Sidebar = ({
  regions,
  activeCountry,
  setActiveCountry,
  activeSubTab,
  setActiveSubTab,
}) => {
  return (
    <aside className="lg:w-1/4 space-y-4">
      {/* 🌍 Main International Overview */}
      <button
        onClick={() => {
          setActiveCountry(null);
          setActiveSubTab("about");
        }}
        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition ${
          !activeCountry
            ? "bg-green-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        International Business Overview
      </button>

      {/* 🌍 Regions & Countries */}
      {regions.map((region, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="border border-gray-200 rounded-lg">
              <Disclosure.Button className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-sm font-semibold text-gray-700">
                <span>{region.title}</span>
                {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Disclosure.Button>

              <Disclosure.Panel className="px-3 pb-3 mt-2 space-y-2">
                <RegionDisclosure
                  region={region}
                  activeCountry={activeCountry}
                  setActiveCountry={setActiveCountry}
                  activeSubTab={activeSubTab}
                  setActiveSubTab={setActiveSubTab}
                />
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </aside>
  );
};

export default Sidebar;
