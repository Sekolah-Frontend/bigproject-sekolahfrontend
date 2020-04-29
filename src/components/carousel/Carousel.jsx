import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const CarouselCilsy = () => {
  return (
    <>
      <Carousel centered infinite arrows dots slidesPerPage={1} offset={1}>
        <img src='/image/carousel/Artboard4@3x.png' />
        <img src='/image/carousel/Artboard5@3x.png' />
        <img src='/image/carousel/Artboard5@3x.png' />
      </Carousel>
    </>
  );
};

export default CarouselCilsy;
