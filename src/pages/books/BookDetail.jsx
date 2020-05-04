import React from 'react';
import { withRouter } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import BookInfo from '../../../src/components/book-info/BookInfo';

const BookDetail = (props) => {
  console.log(props);
  const { match } = props;
  return (
    <div className='container'>
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
          <hr />
          <div className='columns'>
            <div className='column is-3 has-text-weight-bold'>Quantity</div>
            <div className='column'>
              <input type='number' className='input qty' />6 peace available
            </div>
          </div>
          <div className='columns'>
            <div className='column is-3 has-text-weight-bold'>Shipping Charges</div>
            <div className='column'>
              to
              <div className='select'>
                <select className='has-text-weight-bold'>
                  <option>Jakarta,Cengkareng</option>
                  <option>Jakarta,lenteng agung</option>
                </select>
              </div>
              <br />
              from Surabaya <br />
              Fee Rp 15.000-Rp 24.000
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <button className='button margin-r-20'>
                <span className='icon'>
                  <i className='fas fa-heart'></i>
                </span>
              </button>
              <button className='button margin-r-20 is-outlined'>add to cart</button>
              <button className='button is-primary'>buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <hr />
        <BookInfo />
      </div>
      {/* batas */}
      <div className='container columns'>
        <div className='column'>1</div>
        <div className='column'>2</div>
        <div className='column'>3</div>
        <div className='column'>4</div>
        <div className='column'>5</div>
      </div>
      <h1>Book Detail {match.params.id} </h1>
    </div>
  );
};

export default withRouter(BookDetail);
