import { getPizzas } from "../../firebase/app";
import { createAction } from "../actionCreator";

const PIZZAS_ACTIONS = {
  PIZZAS_FETCHED: 'pizzas/PIZZAS_FETCHED',
}

const initialState = [];

const pizzasSlice = (state = initialState, action) => {
  switch (action.type) {
    case PIZZAS_ACTIONS.PIZZAS_FETCHED:
      return action.payload
    default:
      return state;
  }
};

export default pizzasSlice;

export const fetchPizzas = () => async (dispatch) => {
  const response = await getPizzas()
  dispatch(createAction(PIZZAS_ACTIONS.PIZZAS_FETCHED, response)) 
}
