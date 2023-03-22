import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { createUserFromAuth0 } from './firebase/app';

import Navigation from './roots/navigation/Navigation';

const Home = lazy(() => import('./roots/home/Home'));
const MyOrders = lazy(() => import('./roots/my-orders/My-orders'));
const Cart = lazy(() => import('./roots/cart/Cart'));

import './App.scss';
import ModalWindow from './components/modal-window/Modal-window';
import OrderDetails from './roots/order-details/Order-details';

const App = () => {
  const { user } = useAuth0();
  useEffect(() => {
    createUserFromAuth0(user);
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
