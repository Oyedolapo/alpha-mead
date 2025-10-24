import React from "react";
import { Info, Users, Briefcase, FileDown, Mail } from "lucide-react";

const CountrySubNav = ({ country, activeSubTab, setActiveSubTab, setActiveCountry }) => {
  const subTabs = [
    { id: "about", label: "About Us", icon: Info },
    { id: "leadership", label: "Our Leadership Team", icon: Users },
    { id: "services", label: "What We Do", icon: Briefcase },
    { id: "brochure", label: "Download Brochure", icon: FileDown },
    { id: "contact", label: "Contact Details", icon: Mail },
  ];

  return (
    <div className="ml-5 mt-2 space-y-1 border-l border-gray-200 pl-3">
      {subTabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => {
            setActiveCountry(country.title);
            setActiveSubTab(id);
          }}
          className={`flex items-center gap-2 w-full text-left px-2 py-1 rounded-md text-xs transition ${
            activeSubTab === id
              ? "bg-green-100 text-green-700 font-semibold"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Icon size={14} />
          {label}
        </button>
      ))}
    </div>
  );
};

export default CountrySubNav;
