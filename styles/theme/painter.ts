import { DefaultTheme } from 'styled-components';

type ImportColor = (props: {
  theme: DefaultTheme;
  [key: string]: any;
}) => string;

type ThemePainter<Theme> = {
  [key in keyof Theme]: ImportColor;
};

type Painter = {
  primary: ThemePainter<DefaultTheme['primary']>;
  secondary: ThemePainter<DefaultTheme['secondary']>;
  basic: ThemePainter<DefaultTheme['basic']>;
  grayscale: ThemePainter<DefaultTheme['grayscale']>;
  system: ThemePainter<DefaultTheme['system']>;
  font: ThemePainter<DefaultTheme['font']>;
  form: {
    placeholder: (color: string) => string;
  };
};

/**
 * @description theme를 props에서 가져오는 함수
 * @see
 * - color 가져올때마다 새로운 함수를 계속 만들면 불필요하게 메모리를 많이 먹을 것 같아서 사용
 * - props 에 따른 분기처리 할땐 컴포넌트 내에서 함수 만들어서 사용해도 무방할 듯
 */
const painter: Painter = {
  primary: {
    basic: (props) => props.theme.primary.basic,
    light: (props) => props.theme.primary.light,
    dark: (props) => props.theme.primary.dark,
  },
  secondary: {
    all: (props) => props.theme.secondary.all,
    sugar0: (props) => props.theme.secondary.sugar0,
    sugar30: (props) => props.theme.secondary.sugar30,
    sugar50: (props) => props.theme.secondary.sugar50,
    sugar70: (props) => props.theme.secondary.sugar70,
    sugar100: (props) => props.theme.secondary.sugar100,
  },
  basic: {
    black: (props) => props.theme.basic.black,
    white: (props) => props.theme.basic.white,
  },
  grayscale: {
    '1': (props) => props.theme.grayscale['1'],
    '2': (props) => props.theme.grayscale['2'],
    '3': (props) => props.theme.grayscale['3'],
    '4': (props) => props.theme.grayscale['4'],
    '5': (props) => props.theme.grayscale['5'],
    '6': (props) => props.theme.grayscale['6'],
    '7': (props) => props.theme.grayscale['7'],
    '8': (props) => props.theme.grayscale['8'],
    '9': (props) => props.theme.grayscale['9'],
    '10': (props) => props.theme.grayscale['10'],
  },
  system: {
    error: (props) => props.theme.system.error,
    positive: (props) => props.theme.system.positive,
  },
  font: {
    roboto: (props) => props.theme.font.roboto,
  },
  form: {
    placeholder: (color) => `
    &::placeholder {
      color: ${color}
    }
    &::-webkit-input-placeholder {
      color: ${color};
    }
    &::-moz-placeholder {
      color: ${color};
    }
    &:-ms-input-placeholder {
      color: ${color};
    }
    &:-moz-placeholder {
      color: ${color};
    }
    `,
  },
};

export default painter;
