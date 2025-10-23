import React from "react";
// import FacilityCaseImg from "../assets/facility.jpg";
import { CaseStudiesLayout } from "../../components";
import PowerImg from "../../assets/POWER-SOLUTIONS.jpg";
import { powerCaseStudies } from "../../constants/data";

const PowerCS = () => {
  return (
    <CaseStudiesLayout
      heroText="Power Station Case Study"
      heroImage={PowerImg}
      title="Power Station Case Study"
      backLink="/services/power-solutions"
      backText="Back to Power Solutions"
      studies={powerCaseStudies}
      basePath="/power-solutions/case-studies"
    />
  );
};

export default PowerCS;
