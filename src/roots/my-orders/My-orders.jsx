import { Typography, Divider } from '@mui/material';
import OrdersList from '../../components/orders-list/Orders-list';

const MyOrders = () => {
  return (
    <div className="universal-padding">
      <Typography variant="h5">My orders</Typography>
      <Divider />
      <OrdersList />
    </div>
  );
};

export default MyOrders;
