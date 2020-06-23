import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    appSize: string;
    shadow: {
      elevations: Array<string>;
    };
    colors: {
      primary: string;
      secondary: string;
      common: string;
      primaryShadow: string;
      secondaryShadow: string;
      text: string;
    };
    size: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      p: string;
      a: string;
      maxWidth: string;
    };
    brakePoints: {
      small: number;
      medium: number;
      large: number;
    };
    transition: {
      mainTransition: string;
      secondaryTransition: string;
      quickTransition: string;
    };
  }
}
