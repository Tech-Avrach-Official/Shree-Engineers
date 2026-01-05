import React from "react";
import PageTitle from "@/layout/PageTitle";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import InvestorContent from "./InvestorContent";
// import local image if you want
// import investorHero from '../../assets/investor-hero.jpg';

const InvestorRelations = () => {
  // Use your image here
  const heroImage = "https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559346/Image-Shree/Home-page/qb0ilogkzbmsfuew3g7l.jpg";
  // Or local image: const heroImage = investorHero;

  return (
    <div className="investor-relations-page">
      <Navbar />
      <PageTitle backgroundImage={heroImage} title="Investor Relations"/>
      <InvestorContent/>
      <Footer/>
    </div>
  );
};

export default InvestorRelations;
