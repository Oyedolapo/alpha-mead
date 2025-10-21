import React from "react";
import { AboutUs, BuyProperty, CaseStudyDetail, CommercialCS, CommercialDetail, CommercialFM, ContactUs, FacilityManagement, Home, IndustrialFM, InstitutionalFM, InterBusiness, InterBusinessCaseStudies, LeadershipDetails, ResidentialCS, ResidentialDetail, ResidentialFM, TrainingServices } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/leadership/:id" element={<LeadershipDetails />} />
        <Route path="/international-business" element={<InterBusiness />}/>
        <Route path="/international-business/case-studies" element={<InterBusinessCaseStudies />} />
        <Route path="/international-business/case-studies/:id" element={<CaseStudyDetail />} />
        <Route path="/services/facilities-management" element={<FacilityManagement />}/>
        <Route path="/facility/residential" element={<ResidentialFM />}/>
        <Route path="/residential/case-studies" element={<ResidentialCS />} />
        <Route path="/residential/case-studies/:id" element={<ResidentialDetail />} />
        <Route path="/facility/commercial" element={<CommercialFM />}/>
        <Route path="/commercial/case-studies" element={<CommercialCS />} />
        <Route path="/commercial/case-studies/:id" element={<CommercialDetail />} />
        <Route path="/facility/institutional" element={<InstitutionalFM />}/>
        <Route path="/facility/industrial" element={<IndustrialFM />}/>
        <Route path="/services/training-services" element={<TrainingServices />}/>
        <Route path="/buy-property" element={<BuyProperty />}/>
        <Route path="contact-us" element={<ContactUs />}/>
      </Routes>
    </Router>
  )
};

export default App;
