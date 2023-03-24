import { createStore, combineReducers, applyMiddleware } from 'redux';

import pizzasSlice from './pizza/pizzasSlice';
import cartSlice from './cart/cartSlice';
import modalSlice from './modal/modalSlice';

import thunk from 'redux-thunk';
import { ordersSlice } from './orders/ordersSlice';

const rootReducer = combineReducers({
  pizzas: pizzasSlice,
  cart: cartSlice,
  modal: modalSlice,
  orders: ordersSlice
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
