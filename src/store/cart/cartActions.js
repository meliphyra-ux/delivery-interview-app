import { store } from '../store';

const findPizzaInCart = (pizza) => {
  const state = store.getState().cart.cart;
  const findedPizza = state.find((cartPizza) => pizza.id === cartPizza.id);
  return findedPizza;
};

export const clearPizzaFromCart = (pizza) => {
  const state = store.getState().cart.cart;
  const newState = state.filter((cartPizza) => pizza !== cartPizza);
  const newCounter = newState.reduce(
    (accumulator, currentValue) => accumulator + currentValue.counter,
    0
  );
  store.dispatch({
    type: 'cart/clearPizzaFromCart',
    payload: { newState, newCounter },
  });
};

export const addPizzaToCart = (pizza) => {
  const state = store.getState().cart.cart;
  const findedPizza = findPizzaInCart(pizza);
  if (!findedPizza) {
    store.dispatch({ type: 'cart/addPizzaToCart', payload: [...state, pizza] });
  } else {
    const newState = state.map((cartPizza) =>
      pizza.id === cartPizza.id
        ? { ...cartPizza, counter: cartPizza.counter + 1 }
        : cartPizza
    );
    store.dispatch({ type: 'cart/addPizzaToCart', payload: newState });
  }
};

export const removePizzaFromCart = (pizza) => {
  const state = store.getState().cart.cart;
  const findedPizza = findPizzaInCart(pizza);
  if (findedPizza.counter === 1) {
    clearPizzaFromCart(pizza);
  } else {
    const newState = state.map((cartPizza) =>
      findedPizza === cartPizza
        ? {
            ...cartPizza,
            counter: cartPizza.counter - 1,
          }
        : cartPizza
    );
    store.dispatch({ type: 'cart/removePizzaFromCart', payload: newState });
  }
};
