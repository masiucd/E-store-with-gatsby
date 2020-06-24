import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *::before,
  *::after
  ,* {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    html {
      font-size: ${props => props.theme.appSize};
      font-family: 'Montserrat', sans-serif;
    }
    body {
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      padding: 0;
      margin: 0;
      height: 100%;
      line-height: 2;
      background: ${({ theme: { colors } }) => colors.text};
      color: ${({ theme: { colors } }) => colors.primary};
    }
    ul{
      list-style:none;
    }
    a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.size.a};
    }
    h1{
      font-size: ${props => props.theme.size.h1};

    }
    h2{
      font-size: ${props => props.theme.size.h2};
    }
    h3{
      font-size: ${props => props.theme.size.h3};
    }
    p{
      font-size: ${props => props.theme.size.p};

    }
`;

export default GlobalStyles;
