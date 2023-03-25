import { useSelector } from 'react-redux';

import { selectCounter } from '../../store/cart/cartSelectors';

import { Link } from 'react-router-dom';

import { Badge } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';

const CartIcon = () => {
  const counter = useSelector(selectCounter);
  return (
    <Link className="ml-4 mb-[10px] lg:ml-0 relative" to="/cart">
      <Badge badgeContent={counter} color="secondary">
        <ShoppingBag fontSize="large" />
      </Badge>
    </Link>
  );
};

export default CartIcon;
