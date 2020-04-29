import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const CarouselCilsy = () => {
  return (
    <>
      <Carousel centered infinite arrows dots slidesPerPage={2}>
        <img src='https://ecs7.tokopedia.net/img/banner/2020/4/27/85531617/85531617_2662a536-c03e-48fc-b8b0-7af2d075995b.jpg' />
        <img src={`${process.env.PUBLIC_URL}/images/carousel/Artboard-5@3x.png`} />
        <img src={`${process.env.PUBLIC_URL}/images/carousel/Artboard-5@3x.png`} />
      </Carousel>
    </>
  );
};

export default CarouselCilsy;
