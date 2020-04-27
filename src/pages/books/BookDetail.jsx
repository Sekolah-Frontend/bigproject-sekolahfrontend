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
          <img className='book-detail-image' src={require('../../assets/images/book-detail/2.png')} alt='' />
        </div>
        <div className='column'>
          <h3 className='is-size-1'>Steal Like an Artist</h3>
          <h3 className='is-size-4'>Austin Kleon</h3>
          <div className='columns'>
            <div className='column'>
              <img src={require('../../assets/images/rating/star.png')} />
              <img src={require('../../assets/images/rating/star.png')} />
              <img src={require('../../assets/images/rating/star.png')} />
              <img src={require('../../assets/images/rating/star.png')} />
              <img src={require('../../assets/images/rating/star-half.png')} /> 4.9 (1.121 ratings by Goodreads)
            </div>
          </div>
          <h3 className='is-size-1 has-text-weight-bold text-orange'>Rp142.000</h3>
        </div>
      </div>
      <h1>Book Detail {match.params.id} </h1>
    </div>
  );
};

export default withRouter(BookDetail);
