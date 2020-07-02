import styled from 'styled-components';
import { handleFlex } from '../../utils/styled/flex';
import { below } from '../../utils/styled/media';

export const Wrapper = styled.div`
  ${handleFlex('column', 'center', 'center')};
  width: 100%;
  margin: 3rem auto 1rem auto;

  h3 {
    font-size: 3rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: ${({ theme }) => theme.colors.primary} 2px solid;
    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
export const StyledFeatureProducts = styled.section`
  padding: 2rem;
  width: 100%;
  ${handleFlex('row', 'space-evenly', 'center')};
  margin: 4rem auto;

  ${below.medium`
  ${handleFlex('column', 'center', 'center')};
`}
`;

export const StyledItem = styled.article`
  position: relative;
  cursor: pointer;
  transition: ${props => props.theme.transition.mainTransition};
  ${props => props.theme.shadow.elevations[3]};
  margin: 0.5rem;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme: { colors } }) => colors.primaryShadow};
    width: 100%;
    height: 100%;
  }
  &:hover {
    & > div {
      ${handleFlex('column', 'center', 'center')};
    }
  }
  .gatsby-image-wrapper {
    ${below.small`
        width: 30em !important;
     `}
  }
`;

export const BodyContent = styled.div`
  position: absolute;
  display: none;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: ${({ theme: { colors } }) => colors.text};
  transition: ${props => props.theme.transition.mainTransition};
  width: 100%;
  text-align: center;

  h4 {
    color: ${({ theme: { colors } }) => colors.text};
    font-size: 3rem;
    text-transform: capitalize;
    width: 100%;
    margin: 0.5rem 0;
  }
  span {
    margin: 0.5rem 0;
    font-size: 2rem;
    font-weight: 700;
  }
  a {
    margin: 2.5rem 0 0.5rem 0;
  }
`;
