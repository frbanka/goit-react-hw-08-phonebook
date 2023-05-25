import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Hi, {user.name}</MenuItem>
        <NavLink active={location.pathname === '/' ? 'on' : 'off'} to="/" end>
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </NavLink>
        <NavLink to="/phonebook">
          <MenuItem onClick={handleClose}>Phonebook</MenuItem>
        </NavLink>
        <NavLink to="/">
          <MenuItem onClick={() => dispatch(logOut())}>Log out</MenuItem>
        </NavLink>
      </Menu>
    </div>
  );
};
