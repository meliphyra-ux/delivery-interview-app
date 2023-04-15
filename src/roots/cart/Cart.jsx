import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

import CartContent from '../../components/cart-content/Cart-content';
import { useEffect } from 'react';

const Cart = () => {
  const { user, isLoading } = useAuth0();
  const navigate = useNavigate()
  if (isLoading) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    if(!isLoading && !user){
      console.log('redirect')
      navigate('/login')
    }
  }, [isLoading, user])
  return <CartContent />;
};

export default Cart;
