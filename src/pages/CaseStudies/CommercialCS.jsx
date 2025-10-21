import React from "react";
// import FacilityCaseImg from "../assets/facility.jpg";
import { CaseStudiesLayout } from "../../components";
import commercial from "../../assets/commercial.jpg";  
import { commercialCaseStudies } from "../../constants/data";

const CommercialCS = () => {
  return (
    <CaseStudiesLayout
      heroText="Commercial Facility Management Case Studies"
      heroImage={commercial}
      title="Commercial Facility Management Case Studies"
      backLink="/facility/commercial"
      backText="Back to Commercial Facilities Management"
      studies={commercialCaseStudies}
      basePath="/commercial/case-studies"
    />
  );
};

export default CommercialCS;
