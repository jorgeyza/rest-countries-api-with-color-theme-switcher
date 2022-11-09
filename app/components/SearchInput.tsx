'use client';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

// interface Props {}

const SearchInput = () => {
  return (
    <InputGroup maxWidth={500}>
      <InputLeftElement pointerEvents='none'>
        <FaSearch color='white' />
      </InputLeftElement>
      <Input
        sx={{ '::placeholder': { color: 'white', fontWeight: 300, opacity: 0.9 } }}
        color='white'
        type='text'
        backgroundColor='dm.darkBlue'
        placeholder='Search for a country...'
      />
    </InputGroup>
  );
};

export default SearchInput;
