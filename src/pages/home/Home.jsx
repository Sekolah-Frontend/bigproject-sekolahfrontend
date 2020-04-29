import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import CategoriesPopular from '../../components/categories/CategoriesPopular';

const Home = () => {
  return (
    <>
      <div className='container'>
        <Carousel />
      </div>
      <CategoriesPopular />
    </>
  );
};

export default Home;
