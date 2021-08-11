import React from "react";
import Landing from "../IndividualComponents/LandingPage/Landing";
import Footer from "../Components/Footer";
import Features from "../Components/Features";
import Contact from "../Components/Contact";

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
