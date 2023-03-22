import { useEffect, useState, Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getOrders } from '../../firebase/app';
import Order from '../order/Order';
import { Box, Divider } from '@mui/material';

import { MemoizedOrderListLoader } from '../order-list-loader/Order-list-loader';

const OrdersList = () => {
  const { user, isLoading } = useAuth0();
  const [orders, setOrders] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const showOrders = async () => {
      const orders = await getOrders(user.email);
      setOrders(orders);
    };
    if (!isLoading) {
      showOrders().finally(() => setLoader(false));
    }
  }, [user, isLoading]);
  return (
    <Box>
      {loader ? (
        <MemoizedOrderListLoader />
      ) : (
        orders.map((order) => (
          <Fragment key={order.id}>
            <Order orderParams={order} />
            <Divider />
          </Fragment>
        ))
      )}
    </Box>
  );
};

export default OrdersList;
