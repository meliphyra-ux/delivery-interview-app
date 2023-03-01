import { useAuth0 } from '@auth0/auth0-react';

const AuthButton = () => {
  const { loginWithPopup, user, logout, isLoading } = useAuth0();
  if (isLoading) {
    return <button>...Loading</button>;
  }
  const handleAuth = () => {
    user
      ? logout({ logoutParams: { returnTo: window.location.origin } })
      : loginWithPopup();
  };
  return <button onClick={handleAuth}>{user ? 'Logout' : 'Login '}</button>;
};

export default AuthButton;
