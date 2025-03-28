import React from "react";
import HeroSection from "../../components/HeroSection";

import BlogSection from "../../components/BlogSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import About from "../../components/About";

const Landing = () => {
  return (
    <div>
      <HeroSection />

      <BlogSection />
      <FAQSection />
    </div>
  );
};

export default Landing;
