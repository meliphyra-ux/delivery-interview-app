import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import AuthButton from '../../components/auth-button/Auth-button';
import CartIcon from '../../components/cart-icon/Cart-icon';
import DashboardMenu from '../../components/user-menu/Dashboard-menu';

import { Typography, Divider } from '@mui/material';
import {
  Header,
  HeaderLink,
  HeaderUserButtons,
} from '../../components/building-blocks/building-blocks';
import { AccountBox } from '@mui/icons-material';

const Navigation = () => {
  const { user } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Header component="header">
        <HeaderLink href="tel:+380992395067" component="h3" variant="h6">
          +38(099)2395067
        </HeaderLink>
        <HeaderLink to="/">
          <Typography component="h1" variant="h4">
            Mike's pizza
          </Typography>
        </HeaderLink>
        <HeaderUserButtons component="nav">
          {!user ? (
            <AuthButton />
          ) : (
            <AccountBox onClick={handleOpen} sx={{
              cursor: 'pointer'
            }} fontSize="large" />
          )}
          <DashboardMenu
            open={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
          />
          <CartIcon />
        </HeaderUserButtons>
      </Header>
      <Divider />
    </>
  );
};

export default Navigation;
