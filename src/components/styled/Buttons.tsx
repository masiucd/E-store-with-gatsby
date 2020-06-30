import styled from 'styled-components';
import { Link } from 'gatsby';

interface LinkProps {
  dark?: string;
}

export const MyLink = styled(Link)<LinkProps>`
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
    color-stop(
      50%,
      ${props => (props.dark ? props.theme.colors.primary : 'transparent')}
    ),
    color-stop(
      50%,
      ${props =>
        props.dark ? props.theme.colors.secondary : props.theme.colors.primary}
    )
  );
  background-image: linear-gradient(
    to right,
    ${props => (props.dark ? props.theme.colors.primary : 'transparent')} 50%,
    ${props =>
        props.dark ? props.theme.colors.secondary : props.theme.colors.primary}
      50%
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

//  REMEMBER to set as button , (PROP)
export const BtnPrimary = styled(MyLink)`
  color: ${({ theme: { colors } }) => colors.text};
  border: 1px solid ${({ theme: { colors } }) => colors.common};
  cursor: pointer;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(50%, ${props => props.theme.colors.primary}),
    color-stop(50%, ${props => props.theme.colors.secondary})
  );
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colors.primary} 50%,
    ${props => props.theme.colors.secondary} 50%
  );
  ${({ theme }) => theme.shadow.elevations[2]};
  display: block;
  margin: 2rem auto;
  &:active {
    position: relative;
    top: 8px;
    ${({ theme }) => theme.shadow.elevations[3]};
    border: 2px solid ${({ theme: { colors } }) => colors.secondary};
  }
  &:hover {
    ${({ theme }) => theme.shadow.elevations[3]};
    border: 1px solid ${({ theme: { colors } }) => colors.primary};
  }
`;
