import { Link } from 'react-router-dom';

import AuthButton from '../auth-button/Auth-button';

import { Menu, MenuItem } from '@mui/material';

const DashboardMenu = ({ open, anchorEl, handleClose }) => {
  

  return (
    <Menu
      className="ml-4 lg:ml-0"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
    >
      <Link to="/my-orders">
        <MenuItem
          sx={{
            fontSize: '18px',
          }}
        >
          My orders
        </MenuItem>
      </Link>
      <AuthButton />
    </Menu>
  );
};

export default DashboardMenu;
