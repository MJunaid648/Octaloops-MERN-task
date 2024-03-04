// import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Help from "../components/Help";
import Practice from "../components/Practice";
import Community from "../components/Community";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Help />
      <Practice />
      <Community />
    </>
  );
};

export default LandingPage;
