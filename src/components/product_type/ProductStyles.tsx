import styled from 'styled-components';
import { above } from '../../utils/styled/media';
import { handleFlex } from '../../utils/styled/flex';
import { animated } from 'react-spring';
import { MyLink, BtnPrimary } from '../styled/Buttons';
export const Page = styled.section`
  width: 80vw;

  margin: 16rem auto;
  height: 100%;
`;

export const Grid = styled.div`
  /* ${handleFlex('column', 'center', 'center')}; */
  margin: 3rem auto;
  /* border: 2px solid red; */
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    grid-template-rows: auto;
    grid-gap: 2rem;
    padding: 0;
  ${above.medium`

  `}
`;

export const ProductStyles = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  ${props => props.theme.shadow.elevations[2]};
  position: relative;
  cursor: pointer;
  .gatsby-image-wrapper {
    &:after {
      content: '';
      background: rgba(0, 0, 0, 0.3);
      width: 100%;
      /* height: calc(100% - 30%); */
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export const ProductStylesBody = styled.div`
  ${handleFlex('column', 'center', 'center')};
  h3 {
    text-transform: capitalize;
    font-size: 2rem;
    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  ${BtnPrimary} {
    padding: 0.5rem;
  }
  .yes {
    color: rgba(56, 142, 60, 1);
  }
  .no {
    color: rgba(211, 47, 47, 1);
  }
`;

interface ContentHideProps {
  onShow: boolean;
}
export const ContentHide = styled(animated.div)<ContentHideProps>`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  ${MyLink} {

    padding: 0;
    /* color: ${props => props.theme.colors.primary}; */
  }
`;
