import React from "react";
import { AboutUs, ContactUs, Home, LeadershipDetails } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/leadership/:id" element={<LeadershipDetails />} />
        <Route path="contact-us" element={<ContactUs />}/>
      </Routes>
    </Router>
  )
};

export default App;
