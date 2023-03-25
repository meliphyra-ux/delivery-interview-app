import { Typography, Divider, Box } from '@mui/material';
import OrdersList from '../../components/orders-list/Orders-list';

const MyOrders = () => {
  return (
    <Box className="universal-padding">
      <Typography variant="h5">My orders</Typography>
      <Divider />
      <OrdersList />
    </Box>
  );
};

export default MyOrders;
