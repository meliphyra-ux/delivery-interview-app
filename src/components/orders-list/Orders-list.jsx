import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getOrders } from '../../firebase/app';
import Order from '../order/Order';
import { Box } from '@mui/material';

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
        <p>Loading...</p>
      ) : (
        orders.map((order) => <Order key={order.id} orderParams={order} />)
      )}
    </Box>
  );
};

export default OrdersList;
