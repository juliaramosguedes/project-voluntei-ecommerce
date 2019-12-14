import React from 'react'
import './PayPal.css';

import { PayPalButton } from "react-paypal-button-v2";

export default function PayPal({ totalPrice, successPayPal }) {

  return (
    <div className="paypal-button-style">
      <PayPalButton
        amount={totalPrice}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          // alert("Transaction completed by " + details.payer.name.given_name);
          successPayPal(data);
          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: 'AbCCmM95R0EjIpL2_WvNOTL-mfLrcviuIU4-4eXa7fSoQP-t5AUTAkeLK1-brsz-n9xgp3IlOyYdQpO6',
          currency: 'BRL',
        }}
      />

    </div>
  )
};