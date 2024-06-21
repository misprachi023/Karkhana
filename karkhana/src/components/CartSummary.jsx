import React from 'react';
import { Box, Text, Button, Input } from '@chakra-ui/react';

const CartSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = subtotal * 0.10;
  const gratuity = 4.00;
  const total = subtotal - discount + gratuity;

  return (
    <Box borderWidth="1px" borderRadius="lg" p={6} ml={{ base: 0, md: 4}} mt={{ base: 4, md: 0 }}>
      <Input placeholder="Customer Name..." mb={4} />
      <Text fontSize="xl" mb={7} fontWeight="bold" textAlign={'center'}>Cart Summary</Text>
      {cartItems.map((item, index) => (
        <Box key={index} display="flex" justifyContent="space-between" mb={2}>
          <Text>{item.name}</Text>
          <Text>${item.price.toFixed(2)}</Text>
        </Box>
      ))}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Text>Subtotal</Text>
        <Text>${subtotal.toFixed(2)}</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Text>Discount (10%)</Text>
        <Text>-${discount.toFixed(2)}</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Text>Gratuity</Text>
        <Text>${gratuity.toFixed(2)}</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="bold">Total</Text>
        <Text fontSize="lg" fontWeight="bold">${total.toFixed(2)}</Text>
      </Box>
      <Button colorScheme="orange" width="full">Print Receipt</Button>
    </Box>
  );
};

export default CartSummary;
