import styled from 'styled-components';
import { animated } from 'react-spring';
import { handleFlex } from '../../utils/styled/flex';
import { above, below } from '../../utils/styled/media';

export const FaqWrapper = styled.div`
  padding: 1rem;

  width: 100%;
  ${handleFlex('column', 'center', 'center')};
  hr {
    width: 100%;
  }
`;

export const FaqItemStyles = styled(animated.div)`
  transform: translateX(-1000%);
  ${handleFlex('column', 'center', 'center')};
  position: relative;
  padding: 3rem 2rem;
  width: 80%;
  margin: 4rem 0;

  #open {
    position: absolute;
    top: 0;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
  p {
    font-size: 2rem;
    padding: 1rem;
    width: 100%;
    color: ${props => props.theme.colors.secondary};
    ${handleFlex('row', 'space-between', 'center')}
  }
  span {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 2rem;
    margin-left: auto;
    display: block;
    width: 100%;
    text-align: right;
  }
`;

export const AnimatedParagraph = styled(animated.p)`
  color: ${props => props.theme.colors.secondary};
  font-size: 2rem;
  padding: 1rem;
  width: 100%;
  ${handleFlex('row', 'space-between', 'center')}
  span {
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;
    font-weight: 500;
    margin-left: auto;
    display: block;
    width: 100%;
    text-align: right;
  }
`;
