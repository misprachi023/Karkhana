import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <Box display="flex" mb={4}>
      <Input
        placeholder="Search all products here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        flex={{ base: '2', md: '0.5' }}
        mr={2}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Box>
  );
};

export default Header;
