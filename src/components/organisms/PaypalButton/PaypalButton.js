import React from 'react';

import { PayPalButton } from "react-paypal-button-v2";

export default function PaypalButton() {

  return (
    <PayPalButton
      amount="0.01"
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);

        // OPTIONAL: Call your server to save the transaction
        return fetch("/paypal-transaction-complete", {
          method: "post",
          body: JSON.stringify({
            orderId: data.orderID
          })
        });
      }}
      options={{
        clientId: "AQD1T8RFi12wcQgPhXQP6UVNuNfFcvvz9MgaUHPd5sAZozx3ehZgrHS5g7v58UWGlGqwPLC-Q-4q-vSL"
      }}

    />


  );
}