import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "ORI GIMBER 700ml", price: 24.95, category: "Ice Coffee" },
  { id: 2, name: "GIMBER N°2 700 ml", price: 25.85, category: "Ice Coffee" },
  { id: 3, name: "SML GIMBER 500ml", price: 20.45, category: "Hot Coffee" },
  { id: 4, name: "ORI GIMBER 700ml", price: 24.95, category: "Ice Coffee" },
  { id: 5, name: "GIMBER N°2 700 ml", price: 25.85, category: "Ice Coffee" },
  { id: 6, name: "SML GIMBER 500ml", price: 20.45, category: "Hot Coffee" },
  { id: 7, name: "ORI GIMBER 700ml", price: 24.95, category: "Ice Coffee" },
  { id: 8, name: "GIMBER N°2 700 ml", price: 25.85, category: "Beverage" },
  { id: 9, name: "SML GIMBER 500ml", price: 20.45, category: "Hot Coffee" },
  { id: 10, name: "ORI GIMBER 700ml", price: 24.95, category: "Ice Mojito" },
  { id: 11, name: "GIMBER N°2 700 ml", price: 25.85, category: "Ice Mojito" },
  { id: 12, name: "SML GIMBER 500ml", price: 20.45, category: "Beverage" },
  { id: 13, name: "SML GIMBER 500ml", price: 20.45, category: "Artisan Tea" },
  { id: 14, name: "ORI GIMBER 700ml", price: 24.95, category: "Artisan Tea" },
  { id: 15, name: "GIMBER N°2 700 ml", price: 25.85, category: "Beverage" },
  { id: 16, name: "SML GIMBER 500ml", price: 20.45, category: "Ice Mojito" },
  { id: 17, name: "ORI GIMBER 700ml", price: 24.95, category: "Artisan Tea" },
  { id: 18, name: "GIMBER N°2 700 ml", price: 25.85, category: "Beverage" },
  { id: 19, name: "SML GIMBER 500ml", price: 20.45, category: "Artisan Tea" }, // Add more products with appropriate categories
];

const ProductList = ({ addToCart, selectedCategory, searchQuery }) => {
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
