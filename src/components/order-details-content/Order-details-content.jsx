import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Skeleton, Typography } from '@mui/material';
import { StyledBox } from '../building-blocks/building-blocks';
import { selectOrder } from '../../store/orders/ordersSelectors';
import OrderItem from '../order-item/Order-item';

const OrderDetailsContent = ({ id }) => {
  const orderDetails = useSelector(selectOrder(id));

  if (orderDetails === undefined) {
    return <Skeleton variant="rectangular" height="300px"></Skeleton>;
  }

  return (
    <StyledBox>
      <>
        {Object.keys(orderDetails)
          .filter((key) => key !== 'order' && key !== 'time')
          .map((key) => (
            <Fragment key={key}>
              <StyledBox>
                <Typography variant="h6">
                  {`${
                    key[0].toUpperCase() +
                    key.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')
                  }:`}
                </Typography>
                <Typography variant="body1">{orderDetails[key]}</Typography>
              </StyledBox>
              <Divider />
            </Fragment>
          ))}
        {orderDetails['order'].map((item) => (
          <OrderItem key={item.id} pizza={item} />
        ))}
      </>
    </StyledBox>
  );
};

export default OrderDetailsContent;
