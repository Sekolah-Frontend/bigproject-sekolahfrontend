import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel'; // eslint-disable-line
import '@brainhubeu/react-carousel/lib/style.css';

const CarouselCilsy = () => {
  return (
    <>
      <Carousel centered infinite arrows dots slidesPerPage={1} offset={1}>
        <img src='/image/carousel/Artboard4@3x.png' alt='' />
        <img src='/image/carousel/Artboard5@3x.png' alt='' />
        <img src='/image/carousel/Artboard5@3x.png' alt='' />
      </Carousel>
    </>
  );
};

export default CarouselCilsy;
