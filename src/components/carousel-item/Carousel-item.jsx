import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CarouselItem = ({ counter, banner: { src, title, description } }) => {
  return (
    <Box className="w-full flex-none relative">
      <Box
        className="flex p-24 flex-col justify-center absolute bg-[rgba(0,0,0,0.5)] z-20 top-0 w-full h-full text-white"
        sx={{
          left: -counter * 100 + '%',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            margin: '20px 0',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            margin: '20px 0',
            fontSize: '24px'
          }}
        >
          {description}
        </Typography>
      </Box>
      <LazyLoadImage
        className="object-cover aspect-video"
        style={{
          display: 'inline-block',
          transition: 'transform 0.3s ease',
          transform: `translateX(-${counter * 100}%)`,
        }}
        width={1600}
        height={900}
        src={src}
        alt={title}
      />
    </Box>
  );
};

export default CarouselItem;
