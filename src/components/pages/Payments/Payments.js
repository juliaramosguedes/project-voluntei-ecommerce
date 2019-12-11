import React from 'react';
import { Navigation, Footer, PayPal, Reblocks } from '../../molecules';
import './Payments.css';

export default function Payments({ history }) {
  return (
    <div>
      <Navigation />
      <PayPal />
      <Reblocks history={history} />
      <Footer />
    </div>
  );
}
