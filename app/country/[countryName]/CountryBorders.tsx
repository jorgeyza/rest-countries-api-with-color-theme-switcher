'use client';

import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  countryBorders?: string[];
}

const CountryBorders = ({ countryBorders }: Props) => {
  return (
    <Flex flexWrap='wrap' columnGap={3} marginTop={9} alignItems='center' rowGap={2}>
      <Text fontWeight={600}>Border Countries:</Text>
      {countryBorders ? (
        countryBorders.map((borderCountry) => (
          <Button fontSize='sm' boxShadow='md' backgroundColor='element' key={borderCountry} fontWeight={300}>
            {borderCountry}
          </Button>
        ))
      ) : (
        <Text>No land bordering countries</Text>
      )}
    </Flex>
  );
};

export default CountryBorders;
