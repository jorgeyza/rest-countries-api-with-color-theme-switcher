import { ICountry } from './types';

export const getAllCountries = async (): Promise<ICountry[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  return await response.json();
};

export const getCountryByName = async (countryName: string): Promise<ICountry[]> => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`);
  return await response.json();
};

export const getCountriesByCode = async (countryCodes: string[]): Promise<ICountry[]> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(',')}`);
  return await response.json();
};
