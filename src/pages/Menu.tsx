import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ height: '4em' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BookingRes
          </Typography>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Button color="inherit">Restaurants</Button>
          </Link>
          <Link to="/cancel" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Button color="inherit">Cancelar reservación</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
