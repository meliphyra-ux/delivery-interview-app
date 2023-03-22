import { Box, Divider, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { id } = useParams();
  return (
    <Box className="universal-padding">
      <Typography variant='h5'>Order №{id}</Typography>
      <Divider />
      
    </Box>
  );
};

export default OrderDetails;
