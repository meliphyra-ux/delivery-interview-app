import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { createUserFromAuth0 } from './firebase/app';
import './App.scss';
import Navigation from './roots/navigation/Navigation';
import { useDispatch } from 'react-redux';
const Home = lazy(() => import('./roots/home/Home'));
const Dashboard = lazy(() => import('./roots/dashboard/Dashboard'));
const Cart = lazy(() => import('./roots/cart/Cart'));

function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch()
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
