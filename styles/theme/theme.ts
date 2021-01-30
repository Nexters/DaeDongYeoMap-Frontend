import type { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  primary: {
    basic: '#FD476D',
    light: '#FE91A7',
    dark: '#E94164',
  },
  secondary: {
    sugar0: '#43B1FE',
    sugar30: '#37F4BC',
    sugar50: '#FBFE6B',
    sugar70: '#FF7759',
    sugar100: '#8E61FA',
  },
  basic: {
    black: '#000',
    white: '#fff',
  },
  grayscale: {
    '1': '#212121',
    '2': '#343A40',
    '3': '#495057',
    '4': '#868E96',
    '5': '#ADB5BD',
    '6': '#CED4DA',
    '7': '#DEE2E6',
    '8': '#E9ECEF',
    '9': '#F1F3F5',
    '10': '#F8F9FA',
  },
  system: {
    error: '#FF5B5B',
    positive: '#36D789',
  },
  font: {
    roboto: 'Roboto, sans-serif',
  },
};

export default theme;
