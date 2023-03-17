import { useAuth0 } from '@auth0/auth0-react';

import styled from '@emotion/styled';

import { Button } from '@mui/material';

const StyledButton = styled(Button)`
  color: #000000;
  textalign: center;
  fontsize: 18px;
  texttransform: none;
`;

const AuthButton = () => {
  const { loginWithPopup, user, logout, isLoading } = useAuth0();
  if (isLoading) {
    return <StyledButton>Loading...</StyledButton>;
  }
  const handleAuth = () => {
    user
      ? logout({ logoutParams: { returnTo: window.location.origin } })
      : loginWithPopup();
  };
  return (
    <StyledButton
      sx={{
        width: user ? '100%' : 'fit-content',
      }}
      onClick={handleAuth}
    >
      {user ? 'Logout' : 'Login '}
    </StyledButton>
  );
};

export default AuthButton;
