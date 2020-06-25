import * as React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link } from 'gatsby';
import { handleFlex } from '../../../utils/styled/flex';

interface Path {
  text: string;
  path: string;
}

interface Props {
  on: boolean;
  onTitle: string;
  onPaths: Path[];
}

const NavList: React.FC<Props> = ({ on, onPaths, onTitle }) => {
  const { x, opacity } = useSpring({
    x: on ? 0 : 1000,
    opacity: on ? 1 : 0,
  });

  return (
    <StyledNavList
      style={{
        transform: x.interpolate(x => `translate3d(${x * -1}%,0,0)`),
        opacity,
      }}
    >
      <h3 id="list-title">{onTitle}</h3>
      <ListStyles>
        {onPaths.map(path => (
          <li key={path.text}>
            <Link to={path.path}>{path.text}</Link>
          </li>
        ))}
      </ListStyles>
    </StyledNavList>
  );
};

const StyledNavList = styled(animated.section)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 45vmax;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.text};
  z-index: 100;
  ${handleFlex('column', 'center', 'center')};
  #list-title {
    font-size: 4em;
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.text};
  }
`;

const ListStyles = styled.ul`
  align-self: center;
  ${handleFlex('column', 'center', 'center')};
  width: 80%;
  height: 60%;
  li {
    padding: 1rem;
  }

  a {
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.text};
    font-size: 3em;
    text-transform: capitalize;
    position: relative;
    &:after {
      content: '';
      transition: ${({ theme }) => theme.transition.mainTransition};
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      background: ${({ theme: { colors } }) => colors.text};
    }
    &:hover {
      &:after {
        width: 100%;
        padding: 0.1rem;
        height: 3px;
      }
    }
  }
`;

export default NavList;
