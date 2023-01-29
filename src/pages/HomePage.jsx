import React from 'react';
import AllCategoriesCarosuel from '../components/AllCategoriesCarosuel/AllCategoriesCarosuel';
import ExploreProducts from '../components/ExploreProducts/ExploreProducts';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const HomePage = () => (
  <>
    <HeroBanner />
    <AllCategoriesCarosuel />
    <ExploreProducts />
    <NewsLetter />
  </>
);

export default HomePage;
