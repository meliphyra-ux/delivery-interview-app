import { useAuth0 } from '@auth0/auth0-react';

import { StyledButton } from '../building-blocks/building-blocks'


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
      isLoggedIn={Boolean(user)}
      onClick={handleAuth}
    >
      {user ? 'Logout' : 'Login '}
    </StyledButton>
  );
};

export default AuthButton;
