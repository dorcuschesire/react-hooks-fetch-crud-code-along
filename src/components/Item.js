// src/components/Item.js

import React from 'react';

const Item = ({ item, onAddToCart }) => {
  // Define the function to handle adding the item to the cart
  const handleAddToCartClick = () => {
    onAddToCart(item.id);
  };

  return (
    <div className="item">
      <h2>{item.name}</h2>
      <p>Category: {item.category}</p>
      <button onClick={handleAddToCartClick}>Add to Cart</button>
    </div>
  );
};

export default Item;
