import Styled, { DefaultTheme, ThemeProvider } from 'styled-components';

const primaryTheme: DefaultTheme = {
  appSize: '10px',
  shadow: {
    elevations: [
      'box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)',
      'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
      'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)',
      'box-shadow: 3px 2px rgba(42, 43, 49,.3)',
    ],
  },
  colors: {
    primary: '#2a4858',
    secondary: '#fafa6e',
    common: '#255566',
    primaryShadow: 'rgba(42, 72, 88,0.55)',
    secondaryShadow: 'rgba(250, 250, 110,0.8)',
    text: '#fefefe',
  },
  brakePoints: {
    small: 400,
    medium: 960,
    large: 1140,
  },
  size: {
    h1: '50px',
    h2: '40px',
    h3: '30px',
    h4: '27px',
    h5: '22px',
    p: '18px',
    a: '16px',
    maxWidth: '1100px',
  },
  transition: {
    mainTransition: 'all .3s linear',
    secondaryTransition: 'all 1s ease',
    quickTransition: 'all 200ms ease-in-out',
  },
};
const secondaryTheme: DefaultTheme = {
  appSize: '10px',
  shadow: {
    elevations: [
      'box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)',
      'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
      'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)',
      'box-shadow: 3px 2px rgba(42, 43, 49,.3)',
    ],
  },
  colors: {
    primary: '#eaf8fa',
    secondary: '#030c0d',
    common: '#ade2ea',
    primaryShadow: 'rgba(234, 248, 250,0.55)',
    secondaryShadow: 'rgba(3, 12, 13,0.8)',
    text: '#020202',
  },
  brakePoints: {
    small: 400,
    medium: 960,
    large: 1140,
  },
  size: {
    h1: '50px',
    h2: '40px',
    h3: '30px',
    h4: '27px',
    h5: '22px',
    p: '18px',
    a: '16px',
    maxWidth: '1100px',
  },
  transition: {
    mainTransition: 'all .3s linear',
    secondaryTransition: 'all 1s ease',
    quickTransition: 'all 200ms ease-in-out',
  },
};

export { primaryTheme, secondaryTheme };
