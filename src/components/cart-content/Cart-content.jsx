import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectCart } from '../../store/cart/cartSelectors';

import CartItem from '../cart-item/Cart-item';

const CartContent = () => {
  const cart = useSelector(selectCart);
  const cartCost = useMemo(() => {
    return cart.reduce(
      (accumulator, currentValue) =>
        accumulator + parseInt(currentValue.price) * currentValue.counter,
      0
    );
  }, [cart]);
  return (
    <div className="universal-padding">
      <h2 className="text-2xl font-semibold px-2 my-4 border-b-2">Cart</h2>
      <div className="overflow-y-auto h-[60vh]">
        {cart.length > 0 ? (
          cart.map((pizza) => <CartItem key={pizza.id} pizza={pizza} />)
        ) : (
          <h2>You have no items in cart : )</h2>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <h2>Total price: {cartCost}$</h2>
        <button className="sketchy px-4 py-2">Sumbit order</button>
      </div>
    </div>
  );
};

export default CartContent;
