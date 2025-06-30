import React from 'react';
import ProductList from './ProductList';

const App = () => {
  return (
    <div>
      <header style={{ backgroundColor: '#f4f4f4', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>Product Gallery</h1>
      </header>
      <ProductList />
    </div>
  );
};

export default App;
