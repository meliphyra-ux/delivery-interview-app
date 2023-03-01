import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  useEffect(() => {
    if (user === undefined) {
      navigate('/');
    }
  }, [user]);
  return <div className="universal-padding mt-4">Dashboard!</div>;
};

export default Dashboard;
