import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import CategoriesPopular from '../../components/categories/CategoriesPopular';
import Listbook from '../../components/listbook/Listbook';
import dummyResponse from '../../dummy-data/item-product';
import dummyCategories from '../../dummy-data/category-popular';

const Home = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='is-clearfix'>
          <Carousel />
        </div>
        <div className='columns'>
          <div className='column'>
            <h3 className='categories-font'>Popular Categories</h3>
          </div>
        </div>

        <div className='columns'>
          {dummyCategories.map((val) => (
            <>
              <CategoriesPopular category={val.category} line={val.line} />
            </>
          ))}
        </div>
        <div className='columns'>
          <div className='column'>
            <h3 className='categories-font '>Best Selling Novel Books</h3>
          </div>
        </div>
        <div className='columns'>
          {dummyResponse.map((val) => {
            return (
              <>
                <Listbook imgurl={val.imgurl} title={val.title} writer={val.writer} price={val.price} />
              </>
            );
          })}
        </div>
        <div className='columns'>
          <div className='column'>
            <h3 className='categories-font'>Best Selling Food and Drinks Books</h3>
          </div>
        </div>
        <div className='columns'>
          {dummyResponse.map((val) => {
            return (
              <>
                <Listbook imgurl={val.imgurl} title={val.title} writer={val.writer} price={val.price} />
              </>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
