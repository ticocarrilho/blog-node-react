import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [openMenuEl, setOpenMenuEl] = useState(null);

  const handleOpen = (event) => {
    setOpenMenuEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenuEl(null);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton className={classes.menuButton} edge='start' color='inherit'>
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant='h6'>
          <Link to='/' className={classes.link}>
            Blog
          </Link>
        </Typography>
        <IconButton color='inherit' onClick={handleOpen}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={openMenuEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={Boolean(openMenuEl)}
          onClose={handleClose}>
          <MenuItem><Link to="/login" className={classes.link}>Login</Link></MenuItem>
          <MenuItem>
            <Link to='/signup' className={classes.link}>
              Sign Up
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
