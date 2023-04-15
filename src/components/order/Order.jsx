import { Link } from 'react-router-dom';
import { OrderBox } from '../building-blocks/building-blocks';
import { Typography } from '@mui/material';


const Order = ({ orderParams }) => {
  const { id, time, totalPrice } = orderParams;
  return (
    <Link className="w-full" to={id}>
      <OrderBox>
        <Typography variant="body1">{id}</Typography>
        <div>
          <Typography variant="body1">{totalPrice}</Typography>
          <Typography variant="body1">
            {time && time.toDate().toDateString()}
          </Typography>
        </div>
      </OrderBox>
    </Link>
  );
};

export default Order;
