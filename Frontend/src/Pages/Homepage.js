import React, { useEffect, useState } from "react";
import Landing from "../IndividualComponents/LandingPage/Landing";
import Footer from "../Components/Homepage/Footer";
import Features from "../Components/Homepage/Features";
import Contact from "../Components/Homepage/Contact";
import FAQ from "../Components/Homepage/FAQ";
import Feedback from "../Components/Homepage/Feedback";
const Homepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("Page Loading Changed..! ");
  }, [isLoaded]);

  return (
    <div>
      {isLoaded ? (
        <div>
          <Landing />
          <Features />
          <Contact />
          <FAQ />
          <Feedback />
          <Footer />
        </div>
      ) : (
        <div className="homepage-loader">
          <div
            className="spinner-border text-white"
            style={{ width: `3rem`, height: `3rem` }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
