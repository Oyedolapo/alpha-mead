// src/components/BuyPropertySection.jsx
import React, { useState } from "react";

// Payment flow components will come next

import lekki from "../assets/lekki (1).jpg";
import greenpark from "../assets/greenPark.jpg";
import StepLocations from "./Steps/StepLocations";
import StepLocationDetails from "./Steps/StepLocationDetail";
import StepPropertyTypes from "./Steps/StepPropertyTypes";
import StepListings from "./Steps/StepListings";
import StepPaymentOptions from "./Steps/StepPaymentOptions";
import StepBookInspection from "./Steps/StepBookInspection";

const locations = [
  {
    id: 1,
    name: "Lekki Pearl Estate",
    image: lekki,
    description:
      "Lekki Pearl is one of Alphamead's flagship estates, located in the heart of Lekki. It offers premium residential spaces with modern infrastructure and top-notch security.",
    propertyTypes: [
      {
        name: "Apartments",
        stock: 5,
        listings: [
          { id: 1, price: 75000000 },
          { id: 2, price: 77000000 },
          { id: 3, price: 76000000 },
        ],
      },
      {
        name: "Terraces",
        stock: 3,
        listings: [
          { id: 1, price: 120000000 },
          { id: 2, price: 118000000 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Green Park Homes",
    image: greenpark,
    description:
      "Green Park Homes is a serene gated community designed for families who value comfort, security, and sustainability.",
    propertyTypes: [
      {
        name: "Terraces",
        stock: 6,
        listings: [
          { id: 1, price: 95000000 },
          { id: 2, price: 97000000 },
        ],
      },
    ],
  },
];

const BuyPropertySection = () => {
  const [step, setStep] = useState("locations");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);

  // 👣 Flow Controller
  if (step === "locations") {
    return (
      <section className="bg-white min-h-screen py-10">
        <StepLocations
          locations={locations}
          onSelect={(loc) => {
            setSelectedLocation(loc);
            setStep("locationDetails");
          }}
        />
      </section>
    );
  }

  if (step === "locationDetails" && selectedLocation) {
    return (
      <section className="bg-white min-h-screen py-10">
        <StepLocationDetails
          location={selectedLocation}
          onBack={() => setStep("locations")}
          onViewPropertyTypes={() => setStep("propertyTypes")}
        />
      </section>
    );
  }

  if (step === "propertyTypes" && selectedLocation) {
    return (
      <section className="bg-white min-h-screen py-10">
        <StepPropertyTypes
          location={selectedLocation}
          onBack={() => setStep("locationDetails")}
          onSelectType={(type) => {
            setSelectedType(type);
            setStep("listings");
          }}
        />
      </section>
    );
  }

  if (step === "listings" && selectedType && selectedLocation) {
    return (
      <section className="bg-white min-h-screen py-10">
        <StepListings
          location={selectedLocation}
          type={selectedType}
          onBack={() => setStep("propertyTypes")}
          onViewDetails={(listing) => {
            setSelectedListing(listing);
            setStep("payment"); // we'll add payment next
          }}
        />
      </section>
    );
  }

  if (step === "payment" && selectedListing && selectedType && selectedLocation) {
  return (
    <section className="bg-white min-h-screen py-10">
      <StepPaymentOptions
        locations={selectedLocation}
        type={selectedType}
        listing={selectedListing}
        onBack={() => setStep("listings")}
        onNext={(paymentData) => {
          console.log("Payment selected:", paymentData);
          setStep("inspection");
        }}
      />
    </section>
  );
}

if (step === "inspection") {
  return (
    <section className="bg-white min-h-screen py-10">
      <StepBookInspection
        onBack={() => setStep("payment")}
        onSubmit={(date) => {
          alert(
            `Thank you. A member of our sales team will contact you shortly.\nInspection date: ${date}`
          );
          // Reset to start
          setSelectedLocation(null);
          setSelectedType(null);
          setSelectedListing(null);
          setStep("locations");
        }}
      />
    </section>
  );
}



  return null;
};

export default BuyPropertySection;
