import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Link, Outlet } from 'react-router-dom';

import AuthButton from '../../components/auth-button/Auth-button';
import CartIcon from '../../components/cart-icon/Cart-icon';
import { Box, Typography, Menu, MenuItem, Button } from '@mui/material';

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
      <Box className="lg:px-[12.5%] md:px-12 px-6 py-7 w-full flex justify-between">
        <Link to="/">
          <Typography variant="h4">Mike's pizza</Typography>
        </Link>
        <Box
          component="nav"
          className="flex justify-between w-1/5 min-w-fit items-center lg:text-2xl"
        >
          {!user ? (
            <AuthButton />
          ) : (
            <Button
              onClick={handleOpen}
              sx={{
                color: 'black',
                textAlign: 'center',
                fontSize: '18px',
              }}
            >
              Dashboard
            </Button>
          )}
          <Menu
            className="ml-4 lg:ml-0"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
          >
            <Link to="/dashboard">
              <MenuItem
                sx={{
                  fontSize: '18px',
                }}
              >
                Your profile
              </MenuItem>
            </Link>
            <MenuItem
              sx={{
                display: 'flex',
                justifyContent: 'center ',
              }}
            >
              <AuthButton />
            </MenuItem>
          </Menu>
          <CartIcon />
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Navigation;
