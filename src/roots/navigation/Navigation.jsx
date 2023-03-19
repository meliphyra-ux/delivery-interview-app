import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Link, Outlet } from 'react-router-dom';

import AuthButton from '../../components/auth-button/Auth-button';
import CartIcon from '../../components/cart-icon/Cart-icon';
import { Box, Typography, Button } from '@mui/material';
import DashboardMenu from '../../components/user-menu/Dashboard-menu';

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
      <Box className="lg:px-[12.5%] md:px-12 px-6 py-7 w-full flex justify-between sticky top-0 left-0 z-[110] bg-[rgba(255,255,255,0.8)]"
      style={{
        backdropFilter: 'blur(2px)'
      }}
      >
        <Link to="/">
          <Typography variant="h4">Mike's pizza</Typography>
        </Link>
        <div
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
                textTransform: 'none'
              }}
            >
              Dashboard
            </Button>
          )}
          <DashboardMenu
            open={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
          />
          <CartIcon />
        </div>
      </Box>
      <Outlet />
    </>
  );
};

export default Navigation;
