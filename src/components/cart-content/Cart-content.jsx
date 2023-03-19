import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { selectCart } from '../../store/cart/cartSelectors';

import CartItem from '../cart-item/Cart-item';
import { Box, Button, Divider, Typography } from '@mui/material';
import { submitOrder } from '../../firebase/app';
import { toggleModal } from '../../store/modal/modalActions';

const CartContent = () => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const cart = useSelector(selectCart);
  const [phoneNumber, setPhoneNumber] = useState('');
  const cartCost = useMemo(() => {
    return cart.reduce(
      (accumulator, currentValue) =>
        accumulator +
        parseInt(currentValue.selectedVariant.price) * currentValue.counter,
      0
    );
  }, [cart]);

  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const onSumbit = async () => {
    let message;
    try {
      if (phoneNumber.length === 0 || !phoneNumber.startsWith('+380')) {
        message = 'Enter valid Ukrainian phone number (starts with +380)';
      } else if (cart.length === 0) {
        message = 'Fill up your cart with items';
      } else {
        submitOrder(cart, phoneNumber, user.email);
        message = 'Order submited successfully';
      }
      dispatch(toggleModal(message));
    } catch (err) {
      dispatch(toggleModal('Order can\'t be submited'))
    }
  };

  return (
    <div className="universal-padding">
      <Typography variant="h5">Cart</Typography>
      <Divider />
      <Box className="mt-4 overflow-y-auto h-[65vh]">
        {cart.length > 0 ? (
          cart.map((pizza) => <CartItem key={pizza.id} pizza={pizza} />)
        ) : (
          <Typography variant="h6">You have no items in cart 🍕</Typography>
        )}
      </Box>
      <Box className="flex items-center justify-between mt-4">
        <Typography variant="h6">Total price: {cartCost}$</Typography>
        <input
          className="sketchy px-4 pt-3 pb-2"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="+38(0**)*******"
          required
        />
        <Button
          onClick={onSumbit}
          className="sketchy"
          sx={{
            color: 'black',
            padding: '12px 8px 8px',
          }}
        >
          Submit order
        </Button>
      </Box>
    </div>
  );
};

export default CartContent;
