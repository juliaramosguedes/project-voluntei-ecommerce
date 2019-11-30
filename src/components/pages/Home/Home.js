import React, { Fragment } from 'react';
import useStyles from './Home.styles.js';
import { Header, CardA } from '../../Layouts';
import { Cards } from '../../organisms';

const cards = [<CardA />, <CardA />, <CardA />, <CardA />];

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div>{/* <Header /> */}</div>
      <div className={classes.cardsContainer}>
        <Cards cards={cards} />
      </div>
    </>
  );
};
export default Home;
