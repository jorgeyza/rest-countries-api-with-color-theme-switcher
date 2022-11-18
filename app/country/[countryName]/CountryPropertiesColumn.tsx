'use client';

import { Flex, Text } from '@chakra-ui/react';

interface CountryProperty {
  label: string;
  value: number | string;
}

interface Props {
  countryProperties: CountryProperty[];
}

const CountryPropertiesColumn = ({ countryProperties }: Props) => {
  return (
    <Flex flexDirection='column' rowGap={3}>
      {countryProperties.map((property) => {
        return (
          <Text key={property.label}>
            <Text as='span' fontWeight={600}>
              {property.label}:
            </Text>{' '}
            <Text as='span' fontWeight={300}>
              {property.value}
            </Text>
          </Text>
        );
      })}
    </Flex>
  );
};

export default CountryPropertiesColumn;
