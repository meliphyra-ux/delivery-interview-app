import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { StyledUniversalContainer } from '../../components/building-blocks/building-blocks';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  useEffect(() => {
    if (user === undefined) {
      navigate('/');
    }
  }, [user]);
  return <StyledUniversalContainer>Dashboard!</StyledUniversalContainer>;
};

export default Dashboard;
