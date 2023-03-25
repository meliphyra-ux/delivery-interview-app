import { useSelector } from 'react-redux';
import { Fragment } from 'react';

import { selectOrders } from '../../store/orders/ordersSelectors';

import Order from '../order/Order';
import { MemoizedOrderListLoader } from '../order-list-loader/Order-list-loader';

import { Divider } from '@mui/material';
import { StyledBox } from '../building-blocks/building-blocks';

const OrdersList = () => {
  const orders = useSelector(selectOrders);
  return (
    <StyledBox>
      {Object.values(orders).length === 0 ? (
        <MemoizedOrderListLoader />
      ) : (
        Object.values(orders).map((order) => (
          <Fragment key={order.id}>
            <Order orderParams={order} />
            <Divider />
          </Fragment>
        ))
      )}
    </StyledBox>
  );
};

export default OrdersList;
