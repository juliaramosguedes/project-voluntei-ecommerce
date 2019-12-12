import React, { useState, useEffect } from 'react';

export default function CartProduct({ product, addToCart }) {
  const [productState, setProductState] = useState(product);
  const { id, name, quantity, price, stock } = product;

  const maxQty = () => {
    for (let i = 1; i <= stock; i += 1) {
      
    }
  }

  return (
    <div>
      {name}

    </div>
  );
}
