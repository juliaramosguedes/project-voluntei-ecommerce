import React from 'react';
import { ReblocksPayment } from 'reblocks';

export default function Reblocks({ totalPrice, successPayPal }) {
  const onSuccess = (data) => {
    successPayPal(data);
  };

  return (
    <>
      <ReblocksPayment
        accountId="xrb_3fb6yqcer7z9rmq3349mh31wr8jjj6y8nwm9kn4nrc7hu3pwmi84a596hj1c"
        amount="1"
        onPaymentSuccess={onSuccess}
      />
    </>
  );
};
