import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import '../App.css'


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="home">
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
