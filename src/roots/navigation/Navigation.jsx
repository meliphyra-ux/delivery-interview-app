import { useAuth0 } from '@auth0/auth0-react';

import { Link, Outlet } from 'react-router-dom';

import AuthButton from '../../components/auth-button/Auth-button';
import CartIcon from '../../components/cart-icon/Cart-icon';
import { Box, Typography } from '@mui/material';

const Navigation = () => {
  const { user } = useAuth0();
  
  return (
    <>
      <Box className="lg:px-[12.5%] md:px-12 px-6 py-7 w-full flex justify-between">
        <Link to="/">
          <Typography variant='h4'>Mike's pizza</Typography>
        </Link>
        <nav
          className={`flex justify-between ${
            !user ? 'w-1/5' : 'w-1/3'
          } min-w-fit items-center lg:text-2xl`}
        >
          <AuthButton />
          {user && (
            <Link className="ml-4 lg:ml-0" to="/dashboard">
              Dashboard
            </Link>
          )}
        <CartIcon />
        </nav>
      </Box>
      <Outlet />
    </>
  );
};

export default Navigation;
