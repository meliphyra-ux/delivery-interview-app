import { getPizzas } from "../../firebase/app";

const initialState = [];

const pizzasSlice = (state = initialState, action) => {
  switch (action.type) {
    case 'pizzas/PIZZAS_FETCHED':
      return action.payload
    default:
      return state;
  }
};

export default pizzasSlice;

export const fetchPizzas = async (dispatch) => {
  const response = await getPizzas()
  dispatch({ type: 'pizzas/PIZZAS_FETCHED', payload: response })
}
