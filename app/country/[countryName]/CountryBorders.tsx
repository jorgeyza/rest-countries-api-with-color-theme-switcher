'use client';

import { Button, Flex, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getCountriesByCode } from '../../api';

interface CountryBordersListProps {
  countryBordersCodes: string[];
}

// Needed to separate into a different component to avoid calling useQuery conditionally (react-hooks/rules-of-hooks)
const CountryBordersList = ({ countryBordersCodes }: CountryBordersListProps) => {
  const { data: borderCountries } = useQuery({
    queryKey: ['countries-by-code', countryBordersCodes],
    queryFn: async () => await getCountriesByCode(countryBordersCodes)
  });
  return (
    <>
      {borderCountries?.map((borderCountry, index) => (
        <Button
          fontSize='sm'
          boxShadow='md'
          backgroundColor='element'
          key={`${index}${borderCountry.cca2}`}
          fontWeight={300}>
          {borderCountry.name.common}
        </Button>
      ))}
    </>
  );
};

interface CountryBordersProps {
  countryBordersCodes?: string[];
}

const CountryBorders = ({ countryBordersCodes }: CountryBordersProps) => {
  return (
    <Flex flexWrap='wrap' columnGap={3} marginTop={9} alignItems='center' rowGap={2}>
      <Text fontWeight={600}>Border Countries:</Text>
      {countryBordersCodes ? (
        <CountryBordersList countryBordersCodes={countryBordersCodes} />
      ) : (
        <Text>No land bordering countries</Text>
      )}
    </Flex>
  );
};

export default CountryBorders;
