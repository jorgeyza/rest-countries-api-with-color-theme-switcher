'use client';

import { useState } from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

const regions = [
  { label: 'Africa', value: 'africa' },
  { label: 'America', value: 'america' },
  { label: 'Asia', value: 'asia' },
  { label: 'Europe', value: 'europe' },
  { label: 'Oceania', value: 'oceania' }
];

const RegionsFilter = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleMenuItemClick = (value: string) => {
    setSelectedRegion(value);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        backgroundColor='element'
        boxShadow='sm'
        width='100%'
        maxWidth={200}
        height='48px'
        rightIcon={<FaChevronDown size={10} />}>
        {regions.find((region) => region.value === selectedRegion)?.label ?? (
          <Text as='span' fontWeight={300}>
            Filter by Region
          </Text>
        )}
      </MenuButton>
      <MenuList>
        {regions.map((region) => (
          <MenuItem key={region.value} onClick={() => handleMenuItemClick(region.value)}>
            {region.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RegionsFilter;
