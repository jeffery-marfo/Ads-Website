import React from "react";
import HeroSection from "../../components/HeroSection";
import DiscoverSection from "../../components/DiscoverSection";
import BlogSection from "../../components/BlogSection";
import FAQSection from "../../components/FAQSection/FAQSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <DiscoverSection />
      <BlogSection />
      <FAQSection />
    </div>
  );
};

export default Landing;
