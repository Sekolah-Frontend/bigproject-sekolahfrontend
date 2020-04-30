import React from 'react';

export default function CategoriesPopular(props) {
  return (
    <>
      <div>
        <div className=' rectangle-85 column'>
          <h3 className='self-Development'>{props.categorie}</h3>

          <br />
          <img className='line' src={props.line} />
        </div>
      </div>
    </>
  );
}
