import React from 'react';
import { Link } from 'react-router-dom';
import { ActionButton } from './';


function Product({ product }) {
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product._id}`}>Details</Link>
      <ActionButton className="add-to-cart-button">Add to Cart</ActionButton>
    </div>
  );
}

export default Product;
