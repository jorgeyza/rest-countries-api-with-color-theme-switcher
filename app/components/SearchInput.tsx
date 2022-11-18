'use client';

import { Input, InputGroup, InputLeftElement, useColorModeValue } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
  const leftIconColor = useColorModeValue('lm.darkGray', 'text');
  return (
    <InputGroup maxWidth={500} size='lg'>
      <InputLeftElement pointerEvents='none' color={leftIconColor} children={<FaSearch />} />
      <Input
        // sx={{ '::placeholder': { color: 'white', fontWeight: 300, opacity: 0.9 } }}
        backgroundColor='element'
        border={0}
        boxShadow='sm'
        fontSize={16}
        type='text'
        placeholder='Search for a country...'
      />
    </InputGroup>
  );
};

export default SearchInput;
