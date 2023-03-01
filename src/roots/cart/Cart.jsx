import { useAuth0 } from '@auth0/auth0-react';

import CartContent from '../../components/cart-content/Cart-content';
import AuthButton from '../../components/auth-button/Auth-button';

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
        <div className="universal-padding flex items-center flex-col justify-center min-h-[calc(100vh-200px)]">
          <h2 className="text-2xl">Hey, you haven't login yet.</h2>
          <p className="text-lg">You can do it right now</p>
          <div className="sketchy px-4 py-2">
            <AuthButton />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
