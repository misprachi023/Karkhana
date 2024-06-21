import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={product.image} alt={product.name} />
      <Text mt={2} fontWeight="bold">{product.name}</Text>
      <Text mt={2}>${product.price}</Text>
      <Button mt={2} onClick={() => addToCart(product)}>Add to Cart</Button>
    </Box>
  );
};

export default ProductCard;
