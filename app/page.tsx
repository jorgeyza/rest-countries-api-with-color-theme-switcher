'use client';

import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import SearchInput from './components/SearchInput';
import SelectInput from './components/RegionsFilter';
import CountryCard from './components/CountryCard';

import { getAllCountries } from './api';

export default function Home() {
  const { data, isFetching } = useQuery({ queryKey: ['all-countries'], queryFn: getAllCountries });
  return (
    <Flex flexDirection='column' rowGap={12}>
      <Flex justifyContent='space-between'>
        <SearchInput />
        <SelectInput />
      </Flex>
      {isFetching ? (
        <p>Loading</p>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {data?.map((countryInfo, index) => (
            <CountryCard countryInfo={countryInfo} key={`${index}${countryInfo.cca2}`} />
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
}
