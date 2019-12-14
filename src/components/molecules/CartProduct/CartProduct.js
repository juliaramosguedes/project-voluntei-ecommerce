import React, { useState, useEffect } from 'react';
import './CartProduct.css';

export default function CartProduct({ product, addToCart, deleteProduct }) {
  let { name, quantity, price, stock, status } = product;
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
    <div className="cart-product-container">
      {loaded ? (
        <div>
          <h3>{name}</h3>
          {status ? (
            <div>
              <select name="select" onChange={e => changeQty(e)}>
                <option value={selectedQty} selected>
                  {selectedQty}
                </option>
                <option disabled value>
                  {' '}
                  --{' '}
                </option>
                {maxQty()}
              </select>
              <p>R$ {totalPrice}</p>
            </div>
          ) : (
            <p>Sem estoque</p>
          )}
          <button onClick={() => deleteProduct(product)}>Excluir</button>
        </div>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
}
