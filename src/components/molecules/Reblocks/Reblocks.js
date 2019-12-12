import React from 'react';
import { ReblocksPayment } from 'reblocks';

export default function Reblocks({ history }) {
  const onSuccess = (data) => {
    console.log(data.token, data.status)
    history.push('/paymentSuccess');
  };

  return (
    <>
      <ReblocksPayment
        accountId="xrb_3fb6yqcer7z9rmq3349mh31wr8jjj6y8nwm9kn4nrc7hu3pwmi84a596hj1c"
        amount={1000000}
        onPaymentSuccess={onSuccess}
      />
    </>
  );
};
