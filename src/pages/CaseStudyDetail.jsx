import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header, Footer, InterBusinessHero } from "../components";
import CaseStudiesImg from "../assets/caseStudies.jpg";
import CaseDetailLayout from "../components/CaseDetailLayout";
import { caseStudyDetails } from "../constants/data";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudyDetails[id];

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
        backPath="/international-business/case-studies"
        navigate={navigate}
      />
      <Footer />
    </section>
  );
};

export default CaseStudyDetail;
