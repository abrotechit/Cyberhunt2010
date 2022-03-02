import React from "react";
import {
  Navbar,
  Hero,
  Trusted,
  ProductIntro,
  HrBanner,
  Caution,
  ProductFeatures,
  ProductFeatures2,
  Testimonials,
  DownloadCTA,
  Footer,
} from "../components";

function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <ProductIntro />
      <HrBanner />
      <ProductFeatures />
      <ProductFeatures2 />
      <Testimonials />
      <DownloadCTA />
      <Caution />
      <Footer />
    </div>
  );
}

export default Index;
