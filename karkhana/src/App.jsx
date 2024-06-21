import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
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
    <Box p={4}>
      <Header onSearch={handleSearch} />
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box flex="1">
          <ProductCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <ProductList addToCart={addToCart} selectedCategory={selectedCategory} searchQuery={searchQuery} />
        </Box>
        <Box flex={{ base: '1', md: '0.3' }} mt={{ base: 4, md: 0 }}>
          <CartSummary cartItems={cartItems} />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
