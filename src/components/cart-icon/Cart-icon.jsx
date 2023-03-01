import { useSelector } from 'react-redux';
import { selectCounter } from '../../store/cart/cartSelectors';

import { Link } from 'react-router-dom';

import CartIconSvg from '../../assets/images/shopping-bag.svg';

const CartIcon = () => {
  const counter = useSelector(selectCounter);
  return (
    <Link className="ml-4 lg:ml-0 relative" to="/cart">
      <img width={35} src={CartIconSvg} alt="Cart" />
      {counter !== 0 ? (
        <p className="top-[-8px] text-center right-[-10px] absolute bg-black text-white rounded-full text-lg w-7 h-7">{counter}</p>
      ) : (
        <></>
      )}
    </Link>
  );
};

export default CartIcon;
