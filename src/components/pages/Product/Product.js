import React, { useState, useEffect } from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import './Product.css';


export default function Product({ match, products, addToCart }) {
  const { productID } = match.params;
  const [product, setProduct] = useState(products[productID]);
  const [qtyAvailable, setQtyAvailable] = useState([]);
  const [selectedQty, setSelectedQty] = useState(product.quantity);
  const [loaded, setLoaded] = useState(false);

  let {
    name,
    description,
    quantity,
    status,
    image,
    price,
    type,
    size,
    stock
  } = product;

  useEffect(() => {
    for (let i = 1; i <= stock; i += 1) {
      qtyAvailable.push(i);
    }

    setQtyAvailable(qtyAvailable);
    setLoaded(true);
  }, []);
  
  const maxQty = () => {
    return qtyAvailable.map((qty, idx) => <option value={qty} key={idx}>{qty}</option>);
  };

  const changeQty = (e) => {
    setSelectedQty(e.target.value);
  };

  return (
    <>
      <div className="product-page">
        <div className="product-container">
          <CardDeck className="product-card-deck">
            <Card className="product-left">
              <Card.Img
                className="cardB-image"
                variant="top"
                src={image}
              />
            </Card>
            <Card className="product-right">
              <Card.Body className="product-right-body">
                <Card.Text className="product-right-text">
                  <h2>{name}</h2>
                  <p>{description}</p>
                  <p>Preço: R${price.toFixed(2)}</p>
                  {
                    product.status ?
                  <>
                    <label>Quantidade: </label>
                    <select name="select" onChange={(e) => changeQty(e)}>
                      <option value={selectedQty} selected>{selectedQty}</option>
                      <option disabled value> -- </option>
                      {maxQty()}
                    </select>
                  
                    {
                      name === 'Camisa' ?
                      <> 
                        <br/>
                        <label>Selecione o tamanho: </label>
                        <select>
                          <option value="P">P</option>
                          <option value="M">M</option>
                          <option value="G">G</option>
                        </select>
                      </>
                        : <></>
                    }

                  <Button 
                    className="sectionC-card-button col" 
                    variant="dark" 
                    onClick={() => addToCart(product)}
                    
                  >
                    Adicionar ao carrinho
                  </Button>
                  </>
                  :
                  <Button disabled className="col">Produto indisponível</Button>
                  }
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    </>
  );
}
