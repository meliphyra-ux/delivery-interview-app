import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  addPizzaToCart,
  clearPizzaFromCart,
  removePizzaFromCart,
} from '../../store/cart/cartActions';

import { Box, Button, Typography } from '@mui/material';
import { OrderItemBox } from '../building-blocks/building-blocks';

const OrderItem = ({ pizza, hasControls = false }) => {
  const dispatch = useDispatch();
  const { image, name, counter } = pizza;
  const { price, weight } = pizza.selectedVariant;

  const handleRemovePizza = useCallback(() => {
    dispatch(removePizzaFromCart(pizza));
  }, []);

  const handleAddPizza = useCallback(() => {
    dispatch(addPizzaToCart(pizza));
  }, []);

  const handleClearPizza = useCallback(() => {
    dispatch(clearPizzaFromCart(pizza));
  }, []);

  return (
    <OrderItemBox component="data">
      <img
        className="w-[20%] max-w-[125px] rounded-[50%] aspect-square"
        src={image}
        alt={name}
      />
      <Typography variant="h6" className="w-[15%] text-center">
        Pizza {name}
      </Typography>
      <Box className="pizza-information-flex items-center max-w-[25%]">
        {hasControls && (
          <Button className="cursor-pointer" onClick={handleRemovePizza}>
            {'<'}
          </Button>
        )}
        <Typography variant="body1" className="mx-4">
          {counter}
        </Typography>
        {hasControls && (
          <Button className="cursor-pointer" onClick={handleAddPizza}>
            {'>'}
          </Button>
        )}
      </Box>
      <Typography variant="body1" className="w-[10%]">
        {weight}g
      </Typography>
      <Typography variant="body1" className="w-[10%]">
        {parseInt(price) * counter}$
      </Typography>
      {hasControls && (
        <Button className="cursor-pointer" onClick={handleClearPizza}>
          x
        </Button>
      )}
    </OrderItemBox>
  );
};

export default OrderItem;
