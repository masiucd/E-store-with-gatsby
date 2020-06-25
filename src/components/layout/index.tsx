import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { primaryTheme } from '../../utils/styled/themes';
import GlobalStyles from './GlobalStyles';
import { handleFlex } from '../../utils/styled/flex';
import Nav from './nav';
interface Props {
  children: React.ReactNode;
}

export const Page = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
`;

const Main = styled.main`
  ${handleFlex('column', 'center', 'center')};
  height: 100%;
  flex-grow: 1 auto;
`;

const Layout: React.FC<Props> = ({ children }) => {
  React.useEffect(() => {
    // using local storage
  }, []);
  return (
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyles />
      <Nav className="Navbar" />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};
export default Layout;
