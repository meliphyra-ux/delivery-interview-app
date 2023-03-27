import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import pizzasSlice from './pizza/pizzasSlice';
import cartSlice from './cart/cartSlice';
import modalSlice from './modal/modalSlice';

import thunk from 'redux-thunk';
import { ordersSlice } from './orders/ordersSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}


const rootReducer = combineReducers({
  pizzas: pizzasSlice,
  cart: cartSlice,
  modal: modalSlice,
  orders: ordersSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor =  persistStore(store)

