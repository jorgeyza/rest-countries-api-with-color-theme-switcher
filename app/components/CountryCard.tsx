'use client';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  countryInfo: {
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital?: string[];
    flags: {
      png: string;
    };
  };
}

const CountryCard = ({ countryInfo }: Props) => {
  const countryCapital = countryInfo.capital ? countryInfo.capital[0] : 'Does not have a capital';
  return (
    <Link href={`./country/${countryInfo.name.common}`}>
      <Flex flexDirection='column' backgroundColor='element' rounded={8} overflow='hidden' boxShadow='md'>
        <Box position='relative' width='100%' height={160}>
          <Image src={countryInfo.flags.png} alt={`${countryInfo.name.common} flag`} fill />
        </Box>
        <Flex flexDirection='column' rowGap={4} padding={6}>
          <Heading fontSize='18px'>{countryInfo.name.common}</Heading>
          <div>
            <div>
              <Text as='span' fontWeight={600}>
                Population:
              </Text>{' '}
              <Text as='span' fontWeight={300}>
                {countryInfo.population}
              </Text>
            </div>
            <div>
              <Text as='span' fontWeight={600}>
                Region:
              </Text>{' '}
              <Text as='span' fontWeight={300}>
                {countryInfo.region}
              </Text>
            </div>
            <div>
              <Text as='span' fontWeight={600}>
                Capital:
              </Text>{' '}
              <Text as='span' fontWeight={300}>
                {countryCapital}
              </Text>
            </div>
          </div>
        </Flex>
      </Flex>
    </Link>
  );
};

export default CountryCard;
