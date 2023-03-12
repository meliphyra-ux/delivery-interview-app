const CarouselItem = ({ counter, src }) => {
  return (
    <img
      className="object-cover aspect-video"
      style={{
        display: 'inline-block',
        transition: 'transform 0.3s ease',
        transform: `translateX(-${counter * 100}%)`,
      }}
      src={src}
    />
  );
};

export default CarouselItem;
