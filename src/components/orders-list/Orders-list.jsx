import { Fragment } from 'react';
import Order from '../order/Order';
import { Divider } from '@mui/material';

import { MemoizedOrderListLoader } from '../order-list-loader/Order-list-loader';
import { StyledBox } from '../building-blocks/building-blocks';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../store/orders/ordersSelectors';

const OrdersList = () => {
  const orders = useSelector(selectOrders)
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
