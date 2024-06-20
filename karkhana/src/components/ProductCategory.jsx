import React from 'react';
import { FaCoffee, FaHotjar, FaLeaf, FaSnowflake, FaCocktail } from 'react-icons/fa';

const categories = [
  { id: 1, name: 'Ice Coffee', icon: <FaSnowflake /> },
  { id: 2, name: 'Hot Coffee', icon: <FaHotjar /> },
  { id: 3, name: 'Artisan Tea', icon: <FaLeaf /> },
  { id: 4, name: 'Ice Mojito', icon: <FaCocktail /> },
  { id: 5, name: 'Beverage', icon: <FaCoffee /> },
];

const ProductCategory = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="product-category">
      {categories.map(category => (
        <button
          key={category.id}
          className={selectedCategory === category.name ? 'active' : ''}
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.icon}
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default ProductCategory;
