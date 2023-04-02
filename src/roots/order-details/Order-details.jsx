import { useParams } from 'react-router-dom';

import OrderDetailsContent from '../../components/order-details-content/Order-details-content';

import { Divider, Typography} from '@mui/material';
import { StyledUniversalContainer } from '../../components/building-blocks/building-blocks';

const OrderDetails = () => {
  const { id } = useParams();
  return (
    <StyledUniversalContainer>
      <Typography variant="h5">Order №{id}</Typography>
      <Divider />
      <OrderDetailsContent id={id} />
    </StyledUniversalContainer>
  );
};

export default OrderDetails;
