import React from 'react';
import { withRouter } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const BookDetail = (props) => {
  console.log(props);
  const { match } = props;
  return (
    <div class='container is-fullhd'>
      <Breadcrumb />
      <div className='columns'>
        <div className='column'>
          <img className='book-detail-image' src={`${process.env.PUBLIC_URL}/image/listBook/2@2x.png`} alt='' />
        </div>
        <div className='column'>
          <h3 className='is-size-1'>Steal Like an Artist</h3>
          <h3 className='is-size-4'>Austin Kleon</h3>
          <div className='columns'>
            <div className='column'>
              <img src='/image/rating-black/star.png' alt='' />
              <img src={`${process.env.PUBLIC_URL}/image/rating-black/star.png`} alt='' />
              <img src={`${process.env.PUBLIC_URL}/image/rating-black/star.png`} alt='' />
              <img src={`${process.env.PUBLIC_URL}/image/rating-black/star.png`} alt='' />
              <img src={`${process.env.PUBLIC_URL}/image/rating-black/star.png`} alt='' /> 4.9 (1.121 ratings by Goodreads)
            </div>
          </div>
        </div>
      </div>
      <h1>Book Detail {match.params.id} </h1>
    </div>
  );
};

export default withRouter(BookDetail);
