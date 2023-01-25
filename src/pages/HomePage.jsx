import React from 'react';
import AllCategoriesCarosuel from '../components/AllCategoriesCarosuel/AllCategoriesCarosuel';
import AllProducts from '../components/AllProducts/AllProducts';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const HomePage = () => (
  <>
    <AllCategoriesCarosuel />
    <HeroBanner />
    <AllProducts />
    <NewsLetter />
  </>
);

export default HomePage;
