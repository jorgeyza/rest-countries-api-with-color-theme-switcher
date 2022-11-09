'use client';
import { ChakraProvider, ColorModeScript, Container } from '@chakra-ui/react';
import { Nunito_Sans } from '@next/font/google';

import Navbar from './components/Navbar';

import theme from './theme';

const nunitoSans = Nunito_Sans({
  weight: ['300', '600', '800'],
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={nunitoSans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ChakraProvider theme={theme}>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Navbar />
          <Container maxWidth={1440}>{children}</Container>
        </body>
      </ChakraProvider>
    </html>
  );
}
