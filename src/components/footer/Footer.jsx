import React from 'react';
import { FooterContainer, FooterListButton } from '../building-blocks/building-blocks';
import { Divider, List, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <FooterContainer
      component="footer"
      variant="h6"
      style={{
        backgroundColor: '#010101',
        marginTop: '16px',
        paddingBottom: '16px',
        color: '#F0F0F0'
      }}
    >
      <Divider />
      <Typography
        variant="h6"
        style={{
          marginTop: '16px',
        }}
      >
        Go to
      </Typography>
      <List
        style={{
          width: '300px',
        }}
      >
        <Link to="/" onClick={handleClick}>
          <FooterListButton>Pizza's</FooterListButton>
        </Link>
        <Link to="/my-orders" onClick={handleClick}>
          <FooterListButton>My orders</FooterListButton>
        </Link>
      </List>
    </FooterContainer>
  );
};

export default Footer;
