const initialState = {
  cart: [],
  counter: 0,
};

const cartSlice = (state = initialState, action) => {
  switch (action.type) {
    case 'cart/addPizzaToCart':
      return {
        ...state,
        counter: state.counter + 1,
        cart: [...action.payload],
      };
    case 'cart/removePizzaFromCart':
      return {
        ...state,
        counter: state.counter - 1,
        cart: [...action.payload],
      };
    case 'cart/clearPizzaFromCart':
      return {
        ...state,
        counter: action.payload.newCounter,
        cart: [...action.payload.newState]
      }
    default:
      return state;
  }
};

export default cartSlice;

