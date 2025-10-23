import React from "react";
// import FacilityCaseImg from "../assets/facility.jpg";
import { CaseStudiesLayout } from "../../components";
import RealEstateImg from "../../assets/REAL-ESTATE.jpg";  
import { realEstateCaseStudies } from "../../constants/data";

const RealEstateCS = () => {
  return (
    <CaseStudiesLayout
      heroText="Real Estate Development Case Studies"
      heroImage={RealEstateImg}
      title="Real Estate Development Case Studies"
      backLink="/services/real-estate"
      backText="Back to Real Estate Development"
      studies={realEstateCaseStudies}
      basePath="/real-estate/case-studies"
    />
  );
};

export default RealEstateCS;
