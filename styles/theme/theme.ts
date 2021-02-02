import type { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  primary: {
    basic: '#FD476D',
    light: '#FE91A7',
    dark: '#E94164',
  },
  secondary: {
    all: '#343A40',
    sugar0: '#449AFF',
    sugar30: '#4CE5B7',
    sugar50: '#FFCF52',
    sugar70: '#FF845E',
    sugar100: '#9971FF',
  },
  basic: {
    black: '#000',
    white: '#fff',
  },
  grayscale: {
    '1': '#F8F9FA',
    '2': '#F1F3F5',
    '3': '#E9ECEF',
    '4': '#DEE2E6',
    '5': '#CED4DA',
    '6': '#ADB5BD',
    '7': '#868E96',
    '8': '#495057',
    '9': '#343A40',
    '10': '#212121',
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
