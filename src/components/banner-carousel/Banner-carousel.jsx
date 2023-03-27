import { useEffect, useState } from 'react';

import bannerData from '../../firebase/bannerData.json';

import CarouselItem from '../carousel-item/Carousel-item';

import styled from '@emotion/styled';
import { Button } from '@mui/material';

const ArrowButton = styled(Button)`
  font-size: 48px;
  position: absolute;
  top: 0;
  z-index: 100;
  color: #f2f2f2;
  height: 100%;
`;

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

  useEffect(() => {
    let timer = setInterval(() => incrementCounter(), 5000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="hidden flex-row justify-center aspect-video w-full relative items-center sm:flex max-w-[1600px]">
      <ArrowButton
        sx={{
          left: 0,
        }}
        onClick={() => handleCount('decrement')}
      >
        {'<'}
      </ArrowButton>
      <div className="flex flex-none w-full justify-start overflow-hidden">
        {bannerData.map((banner, id) => (
          <CarouselItem key={id} counter={counter} banner={banner} />
        ))}
      </div>
      <ArrowButton
        sx={{
          right: 0,
        }}
        onClick={() => handleCount('increment')}
      >
        {'>'}
      </ArrowButton>
    </div>
  );
};

export default BannerCarousel;
