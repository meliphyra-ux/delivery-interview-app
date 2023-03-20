import styled from '@emotion/styled';
import { Box } from '@mui/material';

const OrderBox = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Order = ({ orderParams }) => {
  const { id, time } = orderParams;
  console.log();
  return (
    <OrderBox>
      <span>{id}</span>
      <span>{time.toDate().toDateString()}</span>
    </OrderBox>
  );
};

export default Order;
