'use client';

import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import countriesInfo from '../../dummy.json' assert { type: 'json' };

import CountryBorders from './CountryBorders';
import CountryPropertiesColumn from './CountryPropertiesColumn';

interface Params {
  params: {
    countryName: string;
  };
}

export default function Country({ params }: Params) {
  const router = useRouter();
  const country = useMemo(
    () => countriesInfo.find((country) => country.name.common === params.countryName),
    [params.countryName]
  );
  console.log('🚀 ~ file: page.tsx ~ line 26 ~ Country ~ country', country);
  if (!country)
    return (
      <Center>
        <Heading>That country does not exist!</Heading>
      </Center>
    );

  let countryCurrencies = 'No official currencies';
  let countryNativeName = 'No native name';
  let countryCapitals = 'No capital';
  let countrySubregion = 'No sub region';
  let countryLanguages = 'No languages';
  let countryTld = 'No Top Level Domain';
  if (country.name.nativeName) {
    countryNativeName = Object.values(country.name.nativeName)[0].common;
  }
  if (country.capital) {
    countryCapitals = country.capital.join(' / ');
  }
  if (country.currencies) {
    countryCurrencies = Object.values(country.currencies)
      .map((currency) => currency.name)
      .join(', ');
  }
  if (country.subregion) {
    countrySubregion = country.subregion;
  }
  if (country.languages) {
    countryLanguages = Object.values(country.languages).join(', ');
  }
  if (country.tld) {
    countryTld = country.tld.join(', ');
  }

  const countryProperties1 = [
    { label: 'Native Name', value: countryNativeName },
    { label: 'Population', value: country.population },
    { label: 'Region', value: country.region },
    { label: 'Sub Region', value: countrySubregion },
    { label: 'Capital', value: countryCapitals }
  ];

  const countryProperties2 = [
    { label: 'Top Level Domain', value: countryTld },
    { label: 'Currencies', value: countryCurrencies },
    { label: 'Languages', value: countryLanguages }
  ];

  return (
    <>
      <Button
        leftIcon={<FaArrowLeft />}
        backgroundColor='element'
        boxShadow='md'
        fontWeight={300}
        marginBottom={20}
        paddingX={7}
        onClick={() => router.push('/')}>
        Back
      </Button>
      <Flex justifyContent='space-between' columnGap={140}>
        <Box flexBasis='50%' height={400} position='relative'>
          <Image src={country.flags.png} alt={`${country?.name.common} flag`} fill />
        </Box>
        <Flex flexDirection='column' flexBasis='50%' rowGap={6}>
          <Heading>{country.name.common}</Heading>
          <Flex columnGap={10}>
            <CountryPropertiesColumn countryProperties={countryProperties1} />
            <CountryPropertiesColumn countryProperties={countryProperties2} />
          </Flex>
          <CountryBorders countryBorders={country.borders} />
        </Flex>
      </Flex>
    </>
  );
}
