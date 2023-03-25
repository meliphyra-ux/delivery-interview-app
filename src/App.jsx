import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { createUserFromAuth0, getOrders } from './firebase/app';

import Navigation from './roots/navigation/Navigation';

const Home = lazy(() => import('./roots/home/Home'));
const MyOrders = lazy(() => import('./roots/my-orders/My-orders'));
const Cart = lazy(() => import('./roots/cart/Cart'));

import './App.scss';
import ModalWindow from './components/modal-window/Modal-window';
import OrderDetails from './roots/order-details/Order-details';
import { useDispatch } from 'react-redux';
import { loadOrders } from './store/orders/ordersActions';

const App = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.email) {
      Promise.allSettled([
        getOrders(user.email),
        createUserFromAuth0(user),
      ]).then(([orders]) => {
        orders.value.forEach((order) => {
          dispatch(
            loadOrders({
              id: order.id,
              ...order.data(),
            })
          );
        });
      });
    }
  }, [user]);
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="/my-orders/:id" element={<OrderDetails />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Suspense>
      <ModalWindow />
    </BrowserRouter>
  );
};

export default App;
