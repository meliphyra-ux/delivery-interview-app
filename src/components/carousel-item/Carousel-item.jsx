import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  BannerImageContainer,
  BannerInfoContainer,
  BannerTypography,
  BannerImage
} from '../building-blocks/building-blocks';

const CarouselItem = ({ counter, banner: { src, title, description } }) => {
  return (
    <BannerImageContainer counter={counter}>
      <BannerInfoContainer>
        <BannerTypography variant="h3" component="h2">
          {title}
        </BannerTypography>
        <BannerTypography component="p" variant="h5">
          {description}
        </BannerTypography>
      </BannerInfoContainer>
      <BannerImage
        width={900}
        height={700}
        src={src}
        alt={title}
      />
    </BannerImageContainer>
  );
};

export default CarouselItem;
