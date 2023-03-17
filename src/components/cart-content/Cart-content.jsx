import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectCart } from '../../store/cart/cartSelectors';

import CartItem from '../cart-item/Cart-item';
import { Box, Divider, Typography } from '@mui/material';

const CartContent = () => {
  const cart = useSelector(selectCart);
  const cartCost = useMemo(() => {
    return cart.reduce(
      (accumulator, currentValue) =>
        accumulator + parseInt(currentValue.selectedVariant.price) * currentValue.counter,
      0
    );
  }, [cart]);
  return (
    <div className="universal-padding">
      <Typography variant='h5'>Cart</Typography>
      <Divider />
      <Box className="mt-4 overflow-y-auto h-[65vh]">
        {cart.length > 0 ? (
          cart.map((pizza) => <CartItem key={pizza.id} pizza={pizza} />)
        ) : (
          <Typography variant='body1'>You have no items in cart : )</Typography>
        )}
      </Box>
      <Box className="flex justify-between mt-4">
        <h2>Total price: {cartCost}$</h2>
        <button className="sketchy px-4 py-2">Sumbit order</button>
      </Box>
    </div>
  );
};

export default CartContent;
