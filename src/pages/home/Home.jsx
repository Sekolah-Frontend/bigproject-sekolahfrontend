import React from 'react';

const Home = () => {
  return (
    <>
      <div className='container'>
        <div>CAROUSEL</div>
        <div>
          <h2>Popular Categories</h2>
          <br />
          <div className='columns'>
            <div className='box column'>
              <h3>Self Development</h3>
            </div>
            <div className='box column'>
              <h3>Engineering</h3>
            </div>
            <div className='box column'>
              <h3>Novel</h3>
            </div>
            <div className='box column'>
              <h3>Computer Science</h3>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
