import { useEffect, useState } from 'react';

import bannerData from '../../firebase/bannerData.json';

import CarouselItem from '../carousel-item/Carousel-item';

import {
  ArrowButton,
  BannerCarouselBox,
  BannerImagesContainer,
} from '../building-blocks/building-blocks';

const BannerCarousel = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter < bannerData.length - 1 ? counter + 1 : 0);
  };

  const handleCount = (type) => {
    if (type === 'increment') {
      incrementCounter();
    } else {
      setCounter(counter !== 0 ? counter - 1 : bannerData.length - 1);
    }
  };

  const handleIncrement = () => handleCount('increment');
  const handleDecrement = () => handleCount('decrement');

  useEffect(() => {
    let timer = setInterval(() => incrementCounter(), 7000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <BannerCarouselBox>
      <ArrowButton position="left" onClick={handleDecrement}>
        {'<'}
      </ArrowButton>
      <BannerImagesContainer>
        {bannerData.map((banner, id) => (
          <CarouselItem key={id} id={id} counter={counter} banner={banner} />
        ))}
      </BannerImagesContainer>
      <ArrowButton onClick={handleIncrement}>{'>'}</ArrowButton>
    </BannerCarouselBox>
  );
};

export default BannerCarousel;
