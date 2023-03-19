import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getOrders } from '../../firebase/app';
import Order from '../order/Order';

const OrdersList = () => {
  const { user, isLoading } = useAuth0();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const showOrders = async () => {
      const orders = await getOrders(user.email);
      console.log(orders)
      setOrders(orders);
    };
    if (!isLoading) {
      showOrders();
    }
  }, [user, isLoading]);
  return (
    <div>
      {orders.map((order) => (
        <Order key={order.id} orderParams={order} />
      ))}
    </div>
  );
};

export default OrdersList;
