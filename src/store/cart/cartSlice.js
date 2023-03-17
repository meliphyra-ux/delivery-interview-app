import { CART_ACTIONS } from './cartActions';

const initialState = {
  cart: [],
  counter: 0,
};

const cartSlice = (state = initialState, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_PIZZA_TO_CART: {
      const findedPizza = state.cart.find(
        (cartPizza) => action.payload.id === cartPizza.id
      );
      if (findedPizza) {
        return {
          ...state,
          cart: state.cart.map((cartPizza) =>
            action.payload.id === cartPizza.id
              ? { ...cartPizza, counter: cartPizza.counter + 1 }
              : cartPizza
          ),
          counter: state.counter + 1,
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
        counter: state.counter + 1,
      };
    }
    case CART_ACTIONS.REMOVE_PIZZA_FROM_CART:
      const findedPizza = state.cart.find(
        (cartPizza) => action.payload.id === cartPizza.id
      );
      if (findedPizza.counter === 1) {
        return {
          ...state,
          counter: state.counter - 1,
          cart: [
            ...state.cart.filter(
              (cartPizza) => cartPizza.id !== action.payload.id
            ),
          ],
        };
      }
      return {
        ...state,
        counter: state.counter - 1,
        cart: [
          ...state.cart.map((cartPizza) =>
            cartPizza.id === action.payload.id
              ? { ...cartPizza, counter: cartPizza.counter - 1 }
              : cartPizza
          ),
        ],
      };
    case CART_ACTIONS.CLEAR_PIZZA_FROM_CART:
      const newState = state.cart.filter(
        (cartPizza) => cartPizza.id !== action.payload.id
      );
      return {
        ...state,
        counter: newState.reduce((prev, current) => prev + current.counter, 0),
        cart: [...newState],
      };
    default:
      return state;
  }
};

export default cartSlice;
