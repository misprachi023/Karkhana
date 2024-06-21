import React from 'react';
import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { FaCoffee, FaHotjar, FaLeaf, FaSnowflake, FaCocktail } from 'react-icons/fa';

const categories = [
  { id: 1, name: 'Ice Coffee', icon: FaSnowflake },
  { id: 2, name: 'Hot Coffee', icon: FaHotjar },
  { id: 3, name: 'Artisan Tea', icon: FaLeaf },
  { id: 4, name: 'Ice Mojito', icon: FaCocktail },
  { id: 5, name: 'Beverage', icon: FaCoffee },
];

const ProductCategory = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Box
      display="flex"
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      mb={4}
      overflowX={{ base: 'auto', md: 'hidden' }}
    >
      {categories.map(category => (
        <Button
          key={category.id}
          onClick={() => setSelectedCategory(category.name)}
          isActive={selectedCategory === category.name}
          mr={2}
          mb={2}
          whiteSpace="nowrap"
        >
          <Icon as={category.icon} mr={2} />
          <Text>{category.name}</Text>
        </Button>
      ))}
    </Box>
  );
};

export default ProductCategory;
