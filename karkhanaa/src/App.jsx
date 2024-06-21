import React, { useState } from 'react';
import Header from './components/Header';
import ProductCategory from './components/ProductCategory';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <ProductCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="content">
        <ProductList addToCart={addToCart} selectedCategory={selectedCategory} searchQuery={searchQuery} />
        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
