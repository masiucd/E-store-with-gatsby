import styled from 'styled-components';
import { Link } from 'gatsby';

export const MyLink = styled(Link)`
  color: ${({ theme: { colors } }) => colors.text};
  border: 2px solid ${({ theme: { colors } }) => colors.text};
  padding: 0.8rem 1rem;
  transition: ${({ theme: { transition } }) => transition.quickTransition};
  width: 16rem;
  display: block;
  margin: 0 auto;
  text-align: center;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(50%, transparent),
    color-stop(50%, ${props => props.theme.colors.primary})
  );
  background-image: linear-gradient(
    to right,
    transparent 50%,
    ${props => props.theme.colors.primary} 50%
  );

  background-position: 0;
  background-size: 200%;
  -webkit-transition: ${props => props.theme.transition.mainTransition};
  transition: ${props => props.theme.transition.mainTransition};
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 3px;
  &:hover {
    background-position: -100%;
  }
`;
