import React from "react";
import AllCategoriesCarosuel from "../components/AllCategoriesCarosuel/AllCategoriesCarosuel";
import AllProducts from "../components/AllProducts/AllProducts";
import FooterComponents from "../components/FooterComponents/FooterComponents";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import MainHeader from "../components/MainHeader/MainHeader";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <AllCategoriesCarosuel />
      <HeroBanner />
      <AllProducts />
      <NewsLetter />
      <FooterComponents />
    </>
  );
};

export default HomePage;
