import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 70)}...</p>
      <p className="price">Price: ${product.price}</p>
      <p className="rating">Rating: {product.rating}</p>
    </div>
  );
};

export default ProductCard;
