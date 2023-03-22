import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const OrderBox = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const Order = ({ orderParams }) => {
  const { id, time, totalPrice } = orderParams;
  console.log();
  return (
    <OrderBox>
      <Typography variant='body1'>{id}</Typography>
      <div>
        <Typography variant='body1'>{totalPrice}$</Typography>
        <Typography variant='body1'>{time.toDate().toDateString()}</Typography>
      </div>
    </OrderBox>
  );
};

export default Order;
