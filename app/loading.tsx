'use client';

import { Box, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='90vh'>
      <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    </Box>
  );
}
