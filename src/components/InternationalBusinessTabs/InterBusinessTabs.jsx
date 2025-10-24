import React, { useState } from "react";
import Sidebar from "./Sidebar";
import CountryContent from "./CountryContent";
import {
  beninData, botswanaData, cameroonData, coteData, ethiopiaData,
  ghanaData, guineaData, kenyaData, rwandaData, senegalData,
  southAfricaData, tanzaniaData, uaeData
} from "../../constants/data";
import InternationalBus from "../InternationalBus";

const InterBusinessTabs = () => {
  const [activeCountry, setActiveCountry] = useState(null);
  const [activeSubTab, setActiveSubTab] = useState("about");

  const regions = [
    {
      title: "West Africa",
      countries: [
        { title: "Ghana", data: ghanaData[0] },
        { title: "Cameroon", data: cameroonData[0] },
        { title: "Senegal", data: senegalData[0] },
        { title: "Côte d'Ivoire", data: coteData[0] },
        { title: "Benin Republic", data: beninData[0] },
        { title: "Guinea Conakry", data: guineaData[0] },
      ],
    },
    {
      title: "East Africa",
      countries: [
        { title: "Kenya", data: kenyaData[0] },
        { title: "Rwanda", data: rwandaData[0] },
        { title: "Ethiopia", data: ethiopiaData[0] },
        { title: "Tanzania", data: tanzaniaData[0] },
      ],
    },
    {
      title: "Southern Africa",
      countries: [
        { title: "South Africa", data: southAfricaData[0] },
        { title: "Botswana", data: botswanaData[0] },
      ],
    },
    {
      title: "Others",
      countries: [{ title: "UAE", data: uaeData[0] }],
    },
  ];

  const activeCountryData = regions
    .flatMap((r) => r.countries)
    .find((c) => c.title === activeCountry)?.data;

  return (
    <section className="py-16 bg-white font-roboto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-8">
        <Sidebar
          regions={regions}
          activeCountry={activeCountry}
          setActiveCountry={setActiveCountry}
          activeSubTab={activeSubTab}
          setActiveSubTab={setActiveSubTab}
        />

        <div className="lg:w-3/4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          {!activeCountry ? (
            <InternationalBus />
          ) : (
            <CountryContent
              activeCountry={activeCountry}
              activeSubTab={activeSubTab}
              data={activeCountryData}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default InterBusinessTabs;
