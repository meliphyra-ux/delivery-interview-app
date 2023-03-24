import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Skeleton, Typography } from '@mui/material';
import { StyledBox } from '../building-blocks/building-blocks';
import { selectOrder } from '../../store/orders/ordersSelectors';

const OrderDetailsContent = ({ id }) => {
  const orderDetails = useSelector(selectOrder(id))
  return (
    <StyledBox>
      {orderDetails !== undefined ? (
        Object.keys(orderDetails)
          .filter((key) => key !== 'order' && key !== 'time')
          .map((key) => (
            <Fragment key={key}>
              <StyledBox >
                <Typography variant="h6">
                  {`${key[0].toUpperCase() + key.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')}:`}
                </Typography>
                <Typography variant="body1">{orderDetails[key]}</Typography>
              </StyledBox>
              <Divider />
            </Fragment>
          ))
      ) : (
        <Skeleton></Skeleton>
      )}
    </StyledBox>
  );
};

export default OrderDetailsContent;
