import React, { useState, useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './CartProduct.css';

export default function CartProduct({ product, addToCart, deleteProduct }) {
  let { image, name, quantity, price, stock, status } = product;
  const [qtyAvailable, setQtyAvailable] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [totalPrice, setTotalPrice] = useState(price);
  const [selectedQty, setSelectedQty] = useState(quantity);

  useEffect(() => {
    for (let i = 1; i <= stock; i += 1) {
      qtyAvailable.push(i);
    }

    setQtyAvailable(qtyAvailable);
    setLoaded(true);
  }, []);

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [selectedQty]);

  const maxQty = () => {
    return qtyAvailable.map((qty, idx) => (
      <option value={qty} key={idx}>
        {qty}
      </option>
    ));
  };

  const changeQty = e => {
    setSelectedQty(e.target.value);
    product.quantity = Number(e.target.value);
    addToCart(product);
  };

  return (
    <div className="cart-product-container shadow-sm">
      {loaded ? (
        // <div>
        <CardGroup>
          <Card className="cart-product-left">
            <img className="cart-product-image" src={image} />
          </Card>
          <Card className="cart-product-right">
            <h2>{name}</h2>
            <p>Unitário: R$ {price.toFixed(2).replace('.', ',')}</p>
            {status ? (
              <div>
                <div className="cart-product-right-quantity">
                  <p>Quantidade:</p>
                  <select name="select" onChange={e => changeQty(e)}>
                    <option value={selectedQty} selected>
                      {selectedQty}
                    </option>
                    <option disabled value></option>
                    {maxQty()}
                  </select>
                </div>
                <p>Total: R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
              </div>
            ) : (
              <p>Sem estoque</p>
            )}
            <button onClick={() => deleteProduct(product)}>Excluir</button>
          </Card>
        </CardGroup>
      ) : (
        // </div>
        <h1>Carregando...</h1>
      )}
    </div>
  );
}
