import React from "react";
// import FacilityCaseImg from "../assets/facility.jpg";
import { CaseStudiesLayout } from "../../components";
import training from "../../assets/Training.jpg";
import { trainingCaseStudies } from "../../constants/data";

const TrainingCS = () => {
  return (
    <CaseStudiesLayout
      heroText="Training Case Study"
      heroImage={training}
      title="Training Case Study"
      backLink="/services/training-services"
      backText="Back to Training Services"
      studies={trainingCaseStudies}
      basePath="/training-services/case-studies"
    />
  );
};

export default TrainingCS;
