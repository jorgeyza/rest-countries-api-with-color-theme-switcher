import { ICountry } from './types';

export const getAllCountries = async (): Promise<ICountry[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const getCountryByName = async (countryName: string): Promise<ICountry> => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const getCountriesByCode = async (countryCodes: string[]): Promise<ICountry[]> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(',')}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
