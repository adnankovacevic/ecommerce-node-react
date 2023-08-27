import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ActionButton } from './components/ActionButton';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`).then(response => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <ActionButton>Add to Cart</ActionButton>    </div>
  );
}

export default ProductDetail;
