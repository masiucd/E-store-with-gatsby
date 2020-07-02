import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { handleFlex } from '../../../utils/styled/flex';
interface Path {
  text: string;
  path: string;
}
interface Props {
  links: Path[];
}

const FooterLinks: React.FC<Props> = ({ links }) => {
  return (
    <LinksList>
      {links.map(link => (
        <li key={link.text}>
          <Link to={link.path}> {link.text} </Link>
        </li>
      ))}
    </LinksList>
  );
};

const LinksList = styled.ul`
  width: 100%;
  margin: 2rem 0;
  ${handleFlex('row', 'space-evenly', 'center')};
  li {
    background: none !important;
    a {
      color: ${props => props.theme.colors.text};
    }
  }
`;

export default FooterLinks;
