import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import CategoriesPopular from '../../components/categories/CategoriesPopular';

const Home = () => {
  return (
    <>
      <div className='container'>
        <Carousel />
      </div>
      <div className='container'>
        <h3 className='categories-font'>Popular Categories</h3>
      </div>

      <div className='container columns'>
        <CategoriesPopular categorie='Self Development'></CategoriesPopular>
        <CategoriesPopular categorie='Engineering'></CategoriesPopular>
        <CategoriesPopular categorie='Novel'></CategoriesPopular>
        <CategoriesPopular categorie='Computer Science'></CategoriesPopular>
      </div>

      <div className='container'>
        <h3 className='categories-font'>Best Selling Novel Books</h3>
      </div>
      <div className='container columns'></div>
      <div className='container'>
        <h3 className='categories-font'>Best Selling Food and Drinks Books</h3>
      </div>
      <div className='container columns'></div>
    </>
  );
};

export default Home;
