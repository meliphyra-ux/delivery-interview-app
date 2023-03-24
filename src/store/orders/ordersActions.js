import { createAction } from "../actionCreator"

export const ORDERS_ACTIONS = {
  LOAD_ORDERS: 'orders/LOAD_ORDERS'
}

export const loadOrders = (order) => createAction(ORDERS_ACTIONS.LOAD_ORDERS, order)