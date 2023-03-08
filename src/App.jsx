import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { createUserFromAuth0 } from './firebase/app';

import Navigation from './roots/navigation/Navigation';

const Home = lazy(() => import('./roots/home/Home'));
const Dashboard = lazy(() => import('./roots/dashboard/Dashboard'));
const Cart = lazy(() => import('./roots/cart/Cart'));

import './App.scss';

const App = () => {
  const { user } = useAuth0();
  useEffect(() => {
    createUserFromAuth0(user)
  }, [user]);
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
