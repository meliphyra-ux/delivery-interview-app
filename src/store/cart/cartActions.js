import { createAction } from '../actionCreator';

// Actions
export const CART_ACTIONS = {
  ADD_PIZZA_TO_CART: 'cart/ADD_PIZZA_TO_CART',
  REMOVE_PIZZA_FROM_CART: 'cart/REMOVE_PIZZA_FROM_CART',
  CLEAR_PIZZA_FROM_CART: 'cart/CLEAR_PIZZA_FROM_CART',
  CLEAR_CART: 'cart/CLEAR_CART'
};

export const clearPizzaFromCart = (pizza) =>
  createAction(CART_ACTIONS.CLEAR_PIZZA_FROM_CART, pizza);

export const addPizzaToCart = (pizza) =>
  createAction(CART_ACTIONS.ADD_PIZZA_TO_CART, pizza);

export const removePizzaFromCart = (pizza) =>
  createAction(CART_ACTIONS.REMOVE_PIZZA_FROM_CART, pizza);

export const clearCart = () => createAction(CART_ACTIONS.CLEAR_CART)