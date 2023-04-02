import { Box, Button, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledBox = styled(Box)`
  margin: 10px 0;
`;
export const OrderItemBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 8rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  button {
    font-size: 1.25rem;
    text-transform: none;
    color: black;
    padding: 0;
    min-width: 0;
    width: 48px;
  }
`;

export const StyledUniversalContainer = styled(Box)`
  padding: 0 1.5rem;
  &:not(&:first-child){
    margin-top: 25px;
  }
  @media (min-width: 768px) {
    padding: 0 3rem;
  }
  @media (min-width: 1024px) {
    padding: 0 12.5%;
  }
`;

export const StyledButton = styled(Button)`
  color: #000000;
  text-align: center;
  font-size: 18px;
  text-transform: none;
`;

export const ArrowButton = styled(Button)`
  font-size: 48px;
  position: absolute;
  top: 0;
  z-index: 100;
  color: #f2f2f2;
  height: 100%;
  ${props => props.position === 'left' ? 'left: 0' : 'right: 0'}
`;

export const BannerCarouselBox = styled(Box)`
  display: flex;
  position: relative;
`;
export const BannerImagesContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  max-height: 600px;
`;

export const BannerImageContainer = styled(Box)`
  width: 100%;
  flex: none;
  position: relative;
  transition: transform 0.2s ease-in-out;
  transform: translateX(-${props => props.counter * 100}%);
`;
export const BannerInfoContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8%;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.6);
`;

export const BannerTypography = styled(Typography)`
  margin: 20px;
`;

export const BannerImage = styled(LazyLoadImage)`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
`;

export const Header = styled(StyledUniversalContainer)`
  gap: 3rem;
  padding-top: 25px !important;
  padding-bottom: 25px !important;
  position: sticky;
  top: 0;
  z-index: 25;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255,255,255, 0.6);
  backdrop-filter: blur(5px);
`

export const HeaderLink = styled(Link)`
  flex: 1 1 33%;
  &:nth-child(2){
    text-align: center;
  }
`

export const HeaderUserButtons = styled(Box)`
  flex: 1 1 33%;
  display: flex;
  justify-content: flex-end;
  gap: 25%;
  align-items: center;
`