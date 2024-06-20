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
      <div className='left-sie'>
      <Header onSearch={handleSearch} />
      <ProductCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ProductList addToCart={addToCart} selectedCategory={selectedCategory} searchQuery={searchQuery} />
      </div>
      <div className="content">
        <CartSummary cartItems={cartItems} />
      </div>
    </div>  
  );
}

export default App;
