import React from 'react';
import { PayPal, Reblocks } from '../../molecules';
import './Payments.css';

export default function Payments({ history }) {
  return (
    <div>
      <PayPal />
      <Reblocks history={history} />
    </div>
  );
}
