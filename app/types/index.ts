// generated with quicktype.io

export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  borders?: string[];
  gini?: { [key: string]: number };
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right'
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America'
}

export interface Currencies {
  BBD?: CurrencyInfo;
  USD?: CurrencyInfo;
  XAF?: CurrencyInfo;
  BRL?: CurrencyInfo;
  EUR?: CurrencyInfo;
  AUD?: CurrencyInfo;
  KID?: CurrencyInfo;
  RON?: CurrencyInfo;
  LAK?: CurrencyInfo;
  XOF?: CurrencyInfo;
  IQD?: CurrencyInfo;
  KES?: CurrencyInfo;
  KYD?: CurrencyInfo;
  GNF?: CurrencyInfo;
  TND?: CurrencyInfo;
  BOB?: CurrencyInfo;
  CNY?: CurrencyInfo;
  KRW?: CurrencyInfo;
  KWD?: CurrencyInfo;
  DZD?: CurrencyInfo;
  AWG?: CurrencyInfo;
  RUB?: CurrencyInfo;
  DKK?: CurrencyInfo;
  GBP?: CurrencyInfo;
  TWD?: CurrencyInfo;
  CAD?: CurrencyInfo;
  FJD?: CurrencyInfo;
  XPF?: CurrencyInfo;
  PEN?: CurrencyInfo;
  CLP?: CurrencyInfo;
  EGP?: CurrencyInfo;
  MKD?: CurrencyInfo;
  BDT?: CurrencyInfo;
  SGD?: CurrencyInfo;
  ETB?: CurrencyInfo;
  BSD?: CurrencyInfo;
  TMT?: CurrencyInfo;
  ANG?: CurrencyInfo;
  ZMW?: CurrencyInfo;
  HNL?: CurrencyInfo;
  MAD?: CurrencyInfo;
  NPR?: CurrencyInfo;
  XCD?: CurrencyInfo;
  OMR?: CurrencyInfo;
  HKD?: CurrencyInfo;
  PYG?: CurrencyInfo;
  MDL?: CurrencyInfo;
  KGS?: CurrencyInfo;
  MUR?: CurrencyInfo;
  BTN?: CurrencyInfo;
  INR?: CurrencyInfo;
  YER?: CurrencyInfo;
  IMP?: CurrencyInfo;
  DOP?: CurrencyInfo;
  GGP?: CurrencyInfo;
  LRD?: CurrencyInfo;
  ZWL?: CurrencyInfo;
  UGX?: CurrencyInfo;
  VUV?: CurrencyInfo;
  ILS?: CurrencyInfo;
  JOD?: CurrencyInfo;
  PKR?: CurrencyInfo;
  BND?: CurrencyInfo;
  AED?: CurrencyInfo;
  GEL?: CurrencyInfo;
  SCR?: CurrencyInfo;
  FKP?: CurrencyInfo;
  GIP?: CurrencyInfo;
  SBD?: CurrencyInfo;
  UZS?: CurrencyInfo;
  MNT?: CurrencyInfo;
  GYD?: CurrencyInfo;
  BAM?: CurrencyInfo;
  TOP?: CurrencyInfo;
  RWF?: CurrencyInfo;
  BGN?: CurrencyInfo;
  NGN?: CurrencyInfo;
  SHP?: CurrencyInfo;
  FOK?: CurrencyInfo;
  LSL?: CurrencyInfo;
  ZAR?: CurrencyInfo;
  CVE?: CurrencyInfo;
  KPW?: CurrencyInfo;
  CUC?: CurrencyInfo;
  CUP?: CurrencyInfo;
  SRD?: CurrencyInfo;
  NZD?: CurrencyInfo;
  MXN?: CurrencyInfo;
  PHP?: CurrencyInfo;
  SEK?: CurrencyInfo;
  JMD?: CurrencyInfo;
  VES?: CurrencyInfo;
  JEP?: CurrencyInfo;
  AFN?: CurrencyInfo;
  MOP?: CurrencyInfo;
  SYP?: CurrencyInfo;
  STN?: CurrencyInfo;
  CHF?: CurrencyInfo;
  SZL?: CurrencyInfo;
  MYR?: CurrencyInfo;
  PLN?: CurrencyInfo;
  SSP?: CurrencyInfo;
  KHR?: CurrencyInfo;
  LKR?: CurrencyInfo;
  GHS?: CurrencyInfo;
  ERN?: CurrencyInfo;
  BZD?: CurrencyInfo;
  TTD?: CurrencyInfo;
  CKD?: CurrencyInfo;
  MZN?: CurrencyInfo;
  IRR?: CurrencyInfo;
  CDF?: CurrencyInfo;
  MVR?: CurrencyInfo;
  MRU?: CurrencyInfo;
  CZK?: CurrencyInfo;
  BYN?: CurrencyInfo;
  ALL?: CurrencyInfo;
  MWK?: CurrencyInfo;
  SOS?: CurrencyInfo;
  RSD?: CurrencyInfo;
  ISK?: CurrencyInfo;
  WST?: CurrencyInfo;
  MMK?: CurrencyInfo;
  THB?: CurrencyInfo;
  LBP?: CurrencyInfo;
  KZT?: CurrencyInfo;
  TVD?: CurrencyInfo;
  HUF?: CurrencyInfo;
  NOK?: CurrencyInfo;
  KMF?: CurrencyInfo;
  SDG?: CurrencyInfo;
  AMD?: CurrencyInfo;
  UYU?: CurrencyInfo;
  SAR?: CurrencyInfo;
  BIF?: CurrencyInfo;
  UAH?: CurrencyInfo;
  SLL?: CurrencyInfo;
  BMD?: CurrencyInfo;
  NAD?: CurrencyInfo;
  HTG?: CurrencyInfo;
  LYD?: CurrencyInfo;
  PGK?: CurrencyInfo;
  AOA?: CurrencyInfo;
  IDR?: CurrencyInfo;
  ARS?: CurrencyInfo;
  PAB?: CurrencyInfo;
  JPY?: CurrencyInfo;
  NIO?: CurrencyInfo;
  TZS?: CurrencyInfo;
  TJS?: CurrencyInfo;
  GTQ?: CurrencyInfo;
  BHD?: CurrencyInfo;
  MGA?: CurrencyInfo;
  DJF?: CurrencyInfo;
  GMD?: CurrencyInfo;
  BWP?: CurrencyInfo;
  TRY?: CurrencyInfo;
  AZN?: CurrencyInfo;
  CRC?: CurrencyInfo;
  VND?: CurrencyInfo;
  HRK?: CurrencyInfo;
  QAR?: CurrencyInfo;
  COP?: CurrencyInfo;
}

export interface CurrencyInfo {
  name: string;
  symbol?: string;
}

export interface Demonyms {
  eng: MaleFemaleDemonyms;
  fra?: MaleFemaleDemonyms;
}

export interface MaleFemaleDemonyms {
  f: string;
  m: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania'
}

export enum StartOfWeek {
  Monday = 'monday',
  Saturday = 'saturday',
  Sunday = 'sunday'
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned'
}
