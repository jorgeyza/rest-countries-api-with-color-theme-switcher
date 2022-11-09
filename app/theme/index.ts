import { theme as base, extendTheme, type ThemeConfig } from '@chakra-ui/react';

import { globalStyles as styles } from './styles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const colors = {
  dm: {
    darkBlue: 'hsl(209, 23%, 22%)',
    veryDarkBlue: 'hsl(207, 26%, 17%)'
  },
  lm: {
    veryDarkBlue: 'hsl(200, 15%, 8%)',
    darkGray: 'hsl(0, 0%, 52%)',
    veryLightGray: 'hsl(0, 0%, 98%)'
  }
};

const fonts = {
  heading: `Nunito Sans, sans-serif, ${base.fonts?.heading}`,
  body: `Nunito Sans, sans-serif, ${base.fonts?.body}`
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  semanticTokens: {
    colors: {
      text: {
        default: 'lm.veryDarkBlue',
        _dark: 'white'
      },
      element: {
        default: 'white',
        _dark: 'dm.darkBlue'
      }
    }
  },
  styles
});

export default theme;
