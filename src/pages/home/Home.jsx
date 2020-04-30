import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import CategoriesPopular from '../../components/categories/CategoriesPopular';

const Home = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <Carousel />
      </div>
      <div className='container'>
        <h3 className='categories-font'>Popular Categories</h3>
      </div>

      <div className='container columns'>
        <CategoriesPopular categorie='Self Development' line='/image/Line1.png' />
        <CategoriesPopular categorie='Engineering' line='/image/Line2.png' />
        <CategoriesPopular categorie='Novel' line='/image/Line3.png' />
        <CategoriesPopular categorie='Computer Science' line='/image/Line4.png' />
      </div>

      <div className='container'>
        <h3 className='categories-font'>Best Selling Novel Books</h3>
      </div>
      <div className='container columns'></div>
      <div className='container'>
        <h3 className='categories-font'>Best Selling Food and Drinks Books</h3>
      </div>
      <div className='container columns'></div>
    </React.Fragment>
  );
};

export default Home;
