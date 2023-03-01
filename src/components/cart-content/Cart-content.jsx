import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/cartSelectors';

import CartItem from '../cart-item/Cart-item';

const CartContent = () => {
  const cart = useSelector(selectCart);
  return (
    <div className="universal-padding">
      <h2 className="text-2xl font-semibold my-4 border-b-2">Cart</h2>
      <div>
        {cart.length > 0 ? (
          cart.map((pizza) => <CartItem key={pizza.id} pizza={pizza} />)
        ) : (
          <h2>You have no items in cart : )</h2>
        )}
      </div>
    </div>
  );
};

export default CartContent;
