import React from 'react';
import './Payments.css';
import PaypalButton from '../../organisms/PaypalButton';

export default function Payments() {
  return (
    <div className="container">
      <div className="left">
        <h2>Efetue o pagamento</h2>
          <ul className="list-products">
            <li>
              <img src="https://avatars0.githubusercontent.com/u/50602816?v=4" alt="" />
              <p>Preço: </p>
              <p>Quantidade: </p>
              <p>Produto: </p>
            </li>
          </ul>
      </div>
      <div className="rigth">
        <p>Dados da entrega:</p>
        <label>Preencha o endereço</label>
        <input type="text"/>
        <p>Forma de pagamento via Paypal</p>
        <PaypalButton />
      </div>
    </div>
  );
}
