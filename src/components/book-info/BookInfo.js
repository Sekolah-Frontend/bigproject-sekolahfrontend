import React, { useState } from 'react';
import clsx from 'clsx';
import ProductDescription from '../ProductDescription';
import ProductDetail from '../ProductDetail';

const BookInfo = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className='column is-full'>
      <div className='tabs'>
        <ul>
          <li onClick={() => setTabIndex(0)} className={clsx({ 'is-active': tabIndex === 0 })}>
            <a href='!#'>Description</a>
          </li>
          <li onClick={() => setTabIndex(1)} className={clsx({ 'is-active': tabIndex === 1 })}>
            <a href='!#'>Detail</a>
          </li>
        </ul>
      </div>
      <br />

      {tabIndex === 0 && (
        <div>
          <ProductDescription />
        </div>
      )}

      {tabIndex === 1 && (
        <div>
          <ProductDetail />
        </div>
      )}
    </div>
  );
};

export default BookInfo;
