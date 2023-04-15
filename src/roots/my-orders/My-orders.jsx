import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

import OrdersList from '../../components/orders-list/Orders-list';

import { Typography, Divider } from '@mui/material';
import { StyledUniversalContainer } from '../../components/building-blocks/building-blocks';

const MyOrders = () => {
  const { user, isLoading } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoading && !user){
      console.log('redirect')
      navigate('/login')
    }
  }, [isLoading, user])

  return (
    <StyledUniversalContainer>
      <Typography component="h3" variant="h5">My orders</Typography>
      <Divider />
      <OrdersList />
    </StyledUniversalContainer>
  );
};

export default MyOrders;
