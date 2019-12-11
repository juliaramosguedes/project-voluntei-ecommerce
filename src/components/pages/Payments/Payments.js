import React from 'react';
import { Navigation, Footer, PayPal } from '../../molecules';
import './Payments.css';

export default function Payments() {
  return (
    <div>
      <Navigation />
      <PayPal />
      <Footer />
    </div>
  );
}
