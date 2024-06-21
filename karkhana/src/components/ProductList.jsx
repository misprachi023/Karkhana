import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "ORI GIMBER 700ml",
    price: 24.95,
    category: "Ice Coffee",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 2,
    name: "GIMBER N°2 700 ml",
    price: 25.85,
    category: "Ice Coffee",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 3,
    name: "SML GIMBER 500ml",
    price: 20.45,
    category: "Hot Coffee",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 4,
    name: "ORI GIMBER 700ml",
    price: 24.95,
    category: "Ice Coffee",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 5,
    name: "GIMBER N°2 700 ml",
    price: 25.85,
    category: "Ice Coffee",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 6,
    name: "SML GIMBER 500ml",
    price: 20.45,
    category: "Hot Coffee",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 7,
    name: "ORI GIMBER 700ml",
    price: 24.95,
    category: "Ice Coffee",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 8,
    name: "GIMBER N°2 700 ml",
    price: 25.85,
    category: "Beverage",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 9,
    name: "SML GIMBER 500ml",
    price: 20.45,
    category: "Hot Coffee",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 10,
    name: "ORI GIMBER 700ml",
    price: 24.95,
    category: "Ice Mojito",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 11,
    name: "GIMBER N°2 700 ml",
    price: 25.85,
    category: "Ice Mojito",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 12,
    name: "SML GIMBER 500ml",
    price: 20.45,
    category: "Beverage",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 13,
    name: "SML GIMBER 500ml",
    price: 20.45,
    category: "Artisan Tea",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 14,
    name: "ORI GIMBER 700ml",
    price: 24.95,
    category: "Artisan Tea",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 15,
    name: "GIMBER N°2 700 ml",
    price: 25.85,
    category: "Beverage",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 16,
    name: "SML GIMBER 500ml",
    price: 20.45,
    category: "Ice Mojito",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 17,
    name: "ORI GIMBER 700ml",
    price: 24.95,
    category: "Artisan Tea",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 18,
    name: "GIMBER N°2 700 ml",
    price: 25.85,
    category: "Beverage",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 19,
    name: "SML GIMBER 500ml",
    price: 20.45,
    category: "Artisan Tea",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  }, 
  {
    id: 20,
    name: "GIMBER N°2 700 ml",
    price: 25.85,
    category: "Beverage",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 21,
    name: "GIMBER N°2 700 ml",
    price: 25.85,
    category: "Ice Mojito",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
  {
    id: 22,
    name: "GIMBER N°2 700 ml",
    price: 25.85,
    category: "Hot Coffee",
    image:
      "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
  },
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
