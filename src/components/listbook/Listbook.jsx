import React from 'react';

const Listbook = (props) => {
  return (
    <>
      <div className='column'>
        <a href='http://localhost:3000/books/1'>
          <img src={props.imgurl} alt={props.title} />
        </a>

        <h5>{props.title}</h5>
        <p>{props.writer}</p>
        <br />
        <h5>{props.price}</h5>
        <div>
          <img src='/image/rating-gold/star.png' alt='' />
          <img src='/image/rating-gold/star.png' alt='' />
          <img src='/image/rating-gold/star.png' alt='' />
          <img src='/image/rating-gold/star.png' alt='' />
          <img src='/image/rating-gold/star.png' alt='' />
          <span>(24.039)</span>
        </div>
      </div>
    </>
  );
};

export default Listbook;
