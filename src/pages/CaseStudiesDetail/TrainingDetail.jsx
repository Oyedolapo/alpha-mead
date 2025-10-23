import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { trainingCaseStudyDetails } from "../../constants/data";
import { CaseDetailLayout, Footer, Header, InterBusinessHero } from "../../components";
import CaseStudiesImg from "../../assets/caseStudies.jpg";


const TrainingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = trainingCaseStudyDetails[id];

  if (!study) {
    return (
      <div className="text-center py-20 text-gray-600">
        <p>Case study not found.</p>
      </div>
    );
  }

  return (
    <section className="font-roboto bg-white min-h-screen pt-[7rem]">
      <Header />
      <InterBusinessHero text={study.title} image={CaseStudiesImg} />
      <CaseDetailLayout
        {...study}
        backPath="/training-services/case-studies"
        navigate={navigate}
        scopeText={true}
      />
      <Footer />
    </section>
  );
};

export default TrainingDetail;
