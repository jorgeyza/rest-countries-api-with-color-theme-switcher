'use client';

import { Flex, SimpleGrid } from '@chakra-ui/react';

import SearchInput from './components/SearchInput';
import SelectInput from './components/RegionsFilter';
import CountryCard from './components/CountryCard';

const countriesInfo = [
  {
    name: {
      common: 'Germany'
    },
    population: 81770900,
    region: 'Americas',
    capital: ['Berlin'],
    flags: {
      png: 'https://flagcdn.com/w320/de.png'
    }
  },
  {
    name: {
      common: 'Germany'
    },
    population: 81770900,
    region: 'Americas',
    capital: ['Berlin'],
    flags: {
      png: 'https://flagcdn.com/w320/de.png'
    }
  },
  {
    name: {
      common: 'Germany'
    },
    population: 81770900,
    region: 'Americas',
    capital: ['Berlin'],
    flags: {
      png: 'https://flagcdn.com/w320/de.png'
    }
  },
  {
    name: {
      common: 'Germany'
    },
    population: 81770900,
    region: 'Americas',
    capital: ['Berlin'],
    flags: {
      png: 'https://flagcdn.com/w320/de.png'
    }
  },
  {
    name: {
      common: 'Germany'
    },
    population: 81770900,
    region: 'Americas',
    capital: ['Berlin'],
    flags: {
      png: 'https://flagcdn.com/w320/de.png'
    }
  },
  {
    name: {
      common: 'Germany'
    },
    population: 81770900,
    region: 'Americas',
    capital: ['Berlin'],
    flags: {
      png: 'https://flagcdn.com/w320/de.png'
    }
  },
  {
    name: {
      common: 'Germany'
    },
    population: 81770900,
    region: 'Americas',
    capital: ['Berlin'],
    flags: {
      png: 'https://flagcdn.com/w320/de.png'
    }
  },
  {
    name: {
      common: 'Germany'
    },
    population: 81770900,
    region: 'Americas',
    capital: ['Berlin'],
    flags: {
      png: 'https://flagcdn.com/w320/de.png'
    }
  }
];

export default function Home() {
  return (
    <Flex paddingY={12} paddingX={20} flexDirection='column' rowGap={12}>
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
