'use client';

import { Button, Flex, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ariaLabel = useColorModeValue('dark', 'light');

  return (
    <Flex
      alignItems='center'
      boxShadow='md'
      backgroundColor='element'
      justifyContent='space-between'
      paddingX={20}
      height={20}>
      <Link href='/'>
        <Heading as='h1' size='md' color='text' fontWeight={800}>
          Where in the world?
        </Heading>
      </Link>
      <Button
        color='text'
        aria-label={`Switch to ${ariaLabel}`}
        colorScheme={colorMode === 'light' ? 'gray' : 'whiteAlpha'}
        alignItems='center'
        fontWeight={600}
        leftIcon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        onClick={() => toggleColorMode()}
        variant='ghost'>
        {colorMode === 'light' ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </Flex>
  );
};

export default Navbar;
