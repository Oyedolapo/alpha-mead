import React from "react";
// import FacilityCaseImg from "../assets/facility.jpg";
import { CaseStudiesLayout } from "../../components";
import residential from "../../assets/residential.jpg";  
import { residentialCaseStudies } from "../../constants/data";

const ResidentialCS = () => {
  return (
    <CaseStudiesLayout
      heroText="Residential Facility Management Case Studies"
      heroImage={residential}
      title="Residential Facility Management Case Studies"
      backLink="/facility/residential"
      backText="Back to Residential Facilities Management"
      studies={residentialCaseStudies}
      basePath="/residential/case-studies"
    />
  );
};

export default ResidentialCS;
