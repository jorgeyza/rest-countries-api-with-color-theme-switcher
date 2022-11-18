'use client';

import { Flex, SimpleGrid } from '@chakra-ui/react';

import countriesJson from './dummy.json' assert { type: 'json' };

import SearchInput from './components/SearchInput';
import SelectInput from './components/RegionsFilter';
import CountryCard from './components/CountryCard';

const countriesInfo = countriesJson.slice(0, 8);

export default function Home() {
  return (
    <Flex flexDirection='column' rowGap={12}>
      <Flex justifyContent='space-between'>
        <SearchInput />
        <SelectInput />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {countriesInfo.map((countryInfo, index) => (
          <CountryCard countryInfo={countryInfo} key={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
