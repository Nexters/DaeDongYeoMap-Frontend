import 'styled-components';

declare module 'styled-components' {
  /**
   * @see figma 사이드바 > inspect 탭에서 확인 가능
   */
  export interface DefaultTheme {
    primary: {
      basic: string;
      light: string;
      dark: string;
    };
    secondary: {
      all: string;
      sugar0: string;
      sugar30: string;
      sugar50: string;
      sugar70: string;
      sugar100: string;
    };
    basic: {
      black: string;
      white: string;
    };
    grayscale: {
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
      '7': string;
      '8': string;
      '9': string;
      '10': string;
    };
    system: {
      error: string;
      positive: string;
    };
    font: {
      roboto: string;
    };
  }
}
