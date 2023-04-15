import { Box, Button, ListItemButton, Typography } from '@mui/material';
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
  min-height: calc(100vh - 150px);

  padding: 0 1.5rem;
  margin-top: 25px;

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

  width: ${(props) => (props.isLoggedIn ? '100%' : 'fit-content')};
`;

export const ArrowButton = styled(Button)`
  font-size: 48px;
  color: #f2f2f2;

  position: absolute;
  top: 0;
  z-index: 100;

  height: 100%;
  ${(props) => (props.position === 'left' ? 'left: 0' : 'right: 0')}
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

  transform: translateX(-${(props) => props.counter * 100}%);
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
  min-height: 100px;
  margin-top: 0;
  padding-top: 25px !important;
  padding-bottom: 25px !important;

  position: sticky;
  top: 0;
  z-index: 150;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
`;

export const FooterContainer = styled(StyledUniversalContainer)`
  min-height: 150px;
`;

export const HeaderLink = styled(Link)`
  flex: 1 1 33%;
  &:nth-of-type(2) {
    text-align: center;
  }
`;

export const HeaderUserButtons = styled(Box)`
  flex: 1 1 33%;
  display: flex;
  justify-content: flex-end;
  gap: 25%;
  align-items: center;

  @media (max-width: 600px) {
    gap: 15px;
  }
`;
export const PizzaCategoryContainer = styled(Box)`
  width: 100%;
`;

export const FooterListButton = styled(ListItemButton)`
  padding-left: 0;

  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  margin-top: 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ModalBox = styled(Box)`
  margin: 20px;

  border-radius: 4px;

  background-color: #222222;
  color: #f2f2f2;

  width: clamp(380px, 60vw, 650px);
  height: max-content;
`;

export const OrderBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  
  margin: 10px 0;
`;
