import { ORDERS_ACTIONS } from "./ordersActions"

const initialValue = {}

export const ordersSlice = (state = initialValue, action) => {
  if(action.type === ORDERS_ACTIONS.LOAD_ORDERS){
    return {...state, [action.payload.id]: action.payload}
  }
  return state
}