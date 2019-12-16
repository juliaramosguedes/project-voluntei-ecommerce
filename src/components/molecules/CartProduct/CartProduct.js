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
    <div className="cart-product-container">
      {loaded ? (
        <div>
          <CardGroup>
            <Card className="cart-product-left">
              <Card.Body>
                <img className="cart-product-image" src={image} />
              </Card.Body>
            </Card>
            <Card className="cart-product-right">
              <Card.Body>
                <h3>{name}</h3>
                <h3>Preço unitário:</h3>
                <h3>R$ {price.toFixed(2).replace('.',',')}</h3>
              </Card.Body>
            </Card>          
          <Card className="cart-product-select">
            <Card.Body>
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
                <h3>Subtotal:</h3>
                <p>R$ {totalPrice.toFixed(2).replace('.',',')}</p>
         
        </div>
              
          ) : (
            <p>Sem estoque</p>
          )}
          <button onClick={() => deleteProduct(product)}>Excluir</button>
             </Card.Body>
          </Card>
          </CardGroup>
        </div>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
}
