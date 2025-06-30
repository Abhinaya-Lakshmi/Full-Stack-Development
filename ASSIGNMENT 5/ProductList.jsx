import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './index.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error('API Error:', err));
  }, []);

  return (
    <main className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default ProductList;
