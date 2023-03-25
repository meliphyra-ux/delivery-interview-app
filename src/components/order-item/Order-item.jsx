import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  addPizzaToCart,
  clearPizzaFromCart,
  removePizzaFromCart,
} from '../../store/cart/cartActions';
import { Box, Typography } from '@mui/material';

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
    <Box className="pizza-information-flex h-32 items-center p-2 my-2">
      <img
        className="w-[20%] max-w-[125px] rounded-[50%] aspect-square"
        src={image}
        alt={name}
      />
      <Typography variant="h6" className="w-[20%] text-center lg:text-xl">
        Pizza {name}
      </Typography>
      <Box className="pizza-information-flex items-center w-1/10">
        {hasControls && <span className="cursor-pointer" onClick={handleRemovePizza}>
          {'<'}
        </span>}
        <Typography variant="h6" className="mx-4">
          {counter}
        </Typography>
        {hasControls && <span className="cursor-pointer" onClick={handleAddPizza}>
          {'>'}
        </span>}
      </Box>
      <Typography variant="h6">{weight}g</Typography>
      <Typography variant="h6">{parseInt(price) * counter}$</Typography>
      {hasControls &&<span className="cursor-pointer" onClick={handleClearPizza}>
        x
      </span>}
    </Box>
  );
};

export default OrderItem;
