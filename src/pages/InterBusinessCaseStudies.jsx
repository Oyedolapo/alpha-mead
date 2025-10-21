import React from "react";
import CaseStudiesImg from "../assets/caseStudies.jpg";
import { caseStudies } from "../constants/data";
import CaseStudiesLayout from "../components/CaseStudiesLayout";

const InterBusinessCaseStudies = () => {
  return (
    <CaseStudiesLayout
      heroText="International Business Case Studies"
      heroImage={CaseStudiesImg}
      title="International Business Case Studies"
      backLink="/international-business"
      backText="Back to International Business"
      studies={caseStudies}
      basePath="/international-business/case-studies"
    />
  );
};

export default InterBusinessCaseStudies;
