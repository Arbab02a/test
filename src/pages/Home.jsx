import React from 'react';
import ClipOne from "../components/ClipOne.jsx";
import Hero from "../components/Hero.jsx";
import OurServices from "../components/OurServices.jsx";
import Stats from "../components/Stats.jsx";
import TestimonialSlider from "../components/TestimonialSlider.jsx";
import TeamSection from "../components/TeamSection.jsx";

const Home = () => {
  return (
    <div>
      <ClipOne />
      <Hero />
      <OurServices />
      <Stats />
      <TestimonialSlider />
      <TeamSection />
    </div>
  );
};

export default Home;