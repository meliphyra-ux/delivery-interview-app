import { useEffect, useState } from 'react';
import photoData from '../../firebase/bannerData.json';
import CarouselItem from '../carousel-item/Carousel-item';
import { Button } from '@mui/material';

const BannerCarousel = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter < photoData.length - 1 ? counter + 1 : 0)
  }

  useEffect(() => {
    let timer = setInterval(() => incrementCounter(), 5000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleCount = (type) => {
    if(type === 'increment'){
      incrementCounter()
    }
    else{
      setCounter(counter !== 0 ? counter - 1 : photoData.length - 1)
    }
  }
  
  return (
    <div className="flex flex-row justify-center aspect-video w-full relative items-center sm:block">
      <Button sx={{
        fontSize: '48px',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        color: 'white',
        height: '100%'
      }} onClick={() => handleCount('decrement')}>{'<'}</Button>
      <div className="flex flex-none w-full justify-start overflow-hidden">
        {photoData.map(({src}, id) => (
          <CarouselItem key={id} counter={counter} src={src} /> 
        ))}
      </div>
      <Button sx={{
        fontSize: '48px',
        position: 'absolute',
        top: 0,
        right: 0, 
        zIndex: 100,
        color: 'white',
        height: '100%'
      }}
      onClick={() => handleCount('increment')}
      >{'>'}</Button>
    </div>
  );
};

export default BannerCarousel;
