import { Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

import AuthButton from '../auth-button/Auth-button';

const DashboardMenu = ({ open, anchorEl, handleClose }) => {
  return (
    <Menu
      className="ml-4 lg:ml-0"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
    >
      <Link to="/dashboard">
        <MenuItem
          sx={{
            fontSize: '18px',
          }}
        >
          Your profile
        </MenuItem>
      </Link>
      <AuthButton />
    </Menu>
  );
};

export default DashboardMenu;
