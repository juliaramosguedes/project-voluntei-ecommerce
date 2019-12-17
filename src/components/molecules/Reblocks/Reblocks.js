import React, { useState } from 'react';
import { ReblocksPayment } from 'reblocks';

export default function Reblocks({ totalPrice, successPayment }) {
  const [price, setPrice] = useState(1)
  
  const onSuccess = (data) => {
    successPayment(data);
  };

  const changePrice = () => {
    setPrice(totalPrice);
  };
  
  return (
    <>
      <ReblocksPayment
        accountId="xrb_3fb6yqcer7z9rmq3349mh31wr8jjj6y8nwm9kn4nrc7hu3pwmi84a596hj1c"
        amount={price}
        onPaymentSuccess={onSuccess}
        onClick={() => changePrice()}
      />
    </>
  );
};
