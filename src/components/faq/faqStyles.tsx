import styled from 'styled-components';
import { animated } from 'react-spring';
import { handleFlex } from '../../utils/styled/flex';
import { above, below } from '../../utils/styled/media';

export const FaqStyles = styled.div`
  margin: 19rem auto;
  width: 80vw;
  height: 120vh;
  ${handleFlex('column', 'center', 'center')};
  ${below.medium`

  height: 150vh;
  `}
  ${below.small`

  height: 170vh;
  `}
`;

export const FaqItemStyles = styled(animated.div)`
  transform: translateX(-1000%);
  ${handleFlex('column', 'center', 'center')};
  position: relative;
  padding: 2rem 1rem;
  width: 60rem;

  #open {
    position: absolute;
    top: 0;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
  p {
    font-size: 1.6rem;
    padding: 1rem;
    width: 100%;
    color: ${props => props.theme.colors.secondary};
    ${handleFlex('row', 'space-between', 'center')}
  }
  span {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 1.3rem;
    ${above.medium`
      margin-left: 2rem;
    `}
  }
  ${below.medium`
    width: 90%;
    flex-wrap: wrap;
    p{
      margin: 0 2rem;
      width: 100%;
      padding: 2rem;
    }
  `}
`;

export const AnimatedParagraph = styled(animated.p)`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.6rem;
  padding: 1rem;
  width: 100%;
  ${handleFlex('row', 'space-between', 'center')}
  span {
    color: ${props => props.theme.colors.primary};
    font-size: 1.3rem;
    font-weight: 500;
    ${above.medium`
      margin-left: 2rem;
    `}
  }
  ${below.medium`
      margin: 0 2rem;
      width: 100%;
      padding: 2rem;
  `}
`;
