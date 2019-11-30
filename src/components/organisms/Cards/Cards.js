import React from 'react';
import { Grid } from '@material-ui/core';

const Cards = ({ cards }) => {
  return (
    <Grid container justify="space-between">
      {cards.map(card => (
        <Grid item>{card}</Grid>
      ))}
    </Grid>
  );
};

export default Cards;
