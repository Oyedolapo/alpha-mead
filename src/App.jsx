import React from "react";
import { AboutUs, AltPower, Amrep, BFM, BuyProperty, Call2Fix, CaseStudyDetail, Cmms, CommercialCS, CommercialDetail, CommercialFM, ContactUs, Eaas, ElectricalSystems, EyeOnSite, FacilityManagement, FFM, FMP, Health, Home, IndustrialFM, InstitutionalFM, InterBusiness, InterBusinessCaseStudies, LeadershipDetails, MediaEvents, OurServices, PFM, PowerCS, PowerDetail, PowerSolutions, PropTech, RealEstate, RealEstateCS, RealEstateDetail, ResidentialCS, ResidentialDetail, ResidentialFM, Security, TrainingCS, TrainingDetail, TrainingServices, UtilityBilling } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import About from "./components/AMREP/About";
import Contact from "./components/AMREP/Contact";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/leadership/:id" element={<LeadershipDetails />} />
        <Route path="/international-business" element={<InterBusiness />}/>
        <Route path="/international-business/case-studies" element={<InterBusinessCaseStudies />} />
        <Route path="/international-business/case-studies/:id" element={<CaseStudyDetail />} />
        <Route path="/our-services" element={<OurServices />}/>
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
        <Route path="/training-services/case-studies" element={<TrainingCS />}/>
        <Route path="/training-services/case-studies/:id" element={<TrainingDetail />}/>
        <Route path="/training/ffm" element={<FFM />}/>
        <Route path="/training/pfm" element={<PFM />}/>
        <Route path="/training/bfm" element={<BFM />}/>
        <Route path="/training/fmp" element={<FMP />}/>
        <Route path="/services/real-estate" element={<RealEstate />}/>
        <Route path="/real-estate/case-studies" element={<RealEstateCS />}/>
        <Route path="/real-estate/case-studies/:id" element={<RealEstateDetail />}/>
        <Route path="/services/power-solutions" element={<PowerSolutions />}/>
        <Route path="/power-solutions/case-studies" element={<PowerCS />}/>
        <Route path="/power-solutions/case-studies/:id" element={<PowerDetail />}/>
        <Route path="/power-solutions/eaas" element={<Eaas />}/>
        <Route path="/power-solutions/utility-billing" element={<UtilityBilling />}/>
        <Route path="/power-solutions/alternative-power" element={<AltPower />}/>
        <Route path="/power-solutions/electrical-systems-and-services" element={<ElectricalSystems />}/>
        <Route path="/services/property-technology" element={<PropTech />}/>
        <Route path="/prop-tech/eye-on-site" element={<EyeOnSite />}/>
        <Route path="/prop-tech/call2fix" element={<Call2Fix />}/>
        <Route path="/prop-tech/alpha-cmms" element={<Cmms />}/>
        <Route path="/prop-tech/security-management-system" element={<Security />}/>
        <Route path="/services/healthcare-management" element={<Health />}/>
        <Route path="/services/alphamead-real-estate-partners" element={<Amrep />}/>
        <Route path="/amrep/about" element={<About />}/>
        <Route path="/amrep/contact" element={<Contact />}/>
        <Route path="/amrep/"/>
        <Route path="/buy-property" element={<BuyProperty />}/>
        <Route path="/media-and-events" element={<MediaEvents />}/>
        <Route path="contact-us" element={<ContactUs />}/>
      </Routes>
    </Router>
  )
};

export default App;
