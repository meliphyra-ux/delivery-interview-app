import { useAuth0 } from '@auth0/auth0-react';

import CartContent from '../../components/cart-content/Cart-content';
import AuthButton from '../../components/auth-button/Auth-button';

import { Box, Typography } from '@mui/material';
import { StyledUniversalContainer } from '../../components/building-blocks/building-blocks';

const Cart = () => {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {user ? (
        <CartContent />
      ) : (
        <StyledUniversalContainer className="flex items-center flex-col justify-center min-h-[calc(100vh-200px)]">
          <Typography variant="h4">Hey, you haven't login yet.</Typography>
          <Typography variant="h5">You can do it right now</Typography>
          <Box className="sketchy px-4">
            <AuthButton />
          </Box>
        </StyledUniversalContainer>
      )}
    </>
  );
};

export default Cart;
