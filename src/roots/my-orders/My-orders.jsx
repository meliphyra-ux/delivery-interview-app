import OrdersList from '../../components/orders-list/Orders-list';

import { Typography, Divider, Box } from '@mui/material';
import { StyledUniversalContainer } from '../../components/building-blocks/building-blocks';

const MyOrders = () => {
  return (
    <StyledUniversalContainer>
      <Typography variant="h5">My orders</Typography>
      <Divider />
      <OrdersList />
    </StyledUniversalContainer>
  );
};

export default MyOrders;
