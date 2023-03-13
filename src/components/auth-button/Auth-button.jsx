import { useAuth0 } from '@auth0/auth0-react';

import { Button } from '@mui/material';

const AuthButton = () => {
  const { loginWithPopup, user, logout, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <Button
        sx={{
          color: 'black',
          textAlign: 'center',
          fontSize: '18px',
          textTransform: 'none ',
        }}
      >
        Loading...
      </Button>
    );
  }
  const handleAuth = () => {
    user
      ? logout({ logoutParams: { returnTo: window.location.origin } })
      : loginWithPopup();
  };
  return (
    <Button
      sx={{
        color: 'black',
        textAlign: 'center',
        fontSize: '18px',
        textTransform: 'none',
        width: user ? '100%' : 'fit-content'
      }}
      onClick={handleAuth}
    >
      {user ? 'Logout' : 'Login '}
    </Button>
  );
};

export default AuthButton;
