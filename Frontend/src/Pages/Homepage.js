import React from "react";
import Landing from "../IndividualComponents/LandingPage/Landing";
import Footer from "../Components/Homepage/Footer";
import Features from "../Components/Homepage/Features";
import Contact from "../Components/Homepage/Contact";

const Homepage = () => {
  return (
    <div>
      <Landing />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
