import { useParams } from 'react-router-dom';

import OrderDetailsContent from '../../components/order-details-content/Order-details-content';

import { Divider, Typography, Box } from '@mui/material';

const OrderDetails = () => {
  const { id } = useParams();
  return (
    <Box className="universal-padding">
      <Typography variant="h5">Order №{id}</Typography>
      <Divider />
      <OrderDetailsContent id={id} />
    </Box>
  );
};

export default OrderDetails;
