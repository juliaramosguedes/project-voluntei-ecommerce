import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import useStyles from './Navbar.styles';

const FullWidthGrid = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={4}>
          A
        </Grid>
        <Grid item xs={4}>
          B
        </Grid>
        <Grid item xs={4}>
          <SearchIcon />
          <PersonOutlineIcon />
          <a href="/">
            <ShoppingCartIcon fontSize="large" />
          </a>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FullWidthGrid;
