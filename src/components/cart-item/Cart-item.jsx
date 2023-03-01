import { useCallback } from 'react';
import {
  addPizzaToCart,
  clearPizzaFromCart,
  removePizzaFromCart,
} from '../../store/cart/cartActions';

const CartItem = ({ pizza }) => {
  const { image, name, price, counter, weight } = pizza;

  const handleRemovePizza = useCallback(() => {
    removePizzaFromCart(pizza);
  }, []);
  const handleAddPizza = useCallback(() => {
    addPizzaToCart(pizza);
  }, []);
  const handleClearPizza = useCallback(() => {
    clearPizzaFromCart(pizza);
  }, []);
  return (
    <div className="pizza-information-flex h-32 items-center">
      <img
        className="rounded-[50%] aspect-square"
        width={125}
        src={image}
        alt={name}
      />
      <p className="w-[20%] text-center text-xl">Pizza {name}</p>
      <div className="pizza-information-flex items-center w-1/10">
        <span className="cursor-pointer" onClick={handleRemovePizza}>
          {'<'}
        </span>
        <p className="mx-4">{counter}</p>
        <span className="cursor-pointer" onClick={handleAddPizza}>
          {'>'}
        </span>
      </div>
      <p>{weight}g</p>
      <p>{price}</p>
      <span className="cursor-pointer" onClick={handleClearPizza}>
        x
      </span>
    </div>
  );
};

export default CartItem;
