import { createStore, combineReducers, applyMiddleware } from 'redux';

import pizzasSlice from './pizza/pizzasSlice';
import cartSlice from './cart/cartSlice';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({ pizzas: pizzasSlice, cart:  cartSlice });

export const store = createStore(rootReducer, applyMiddleware(thunk));
