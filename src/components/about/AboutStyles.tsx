import styled from 'styled-components';
import { handleFlex } from '../../utils/styled/flex';
import { above, below } from '../../utils/styled/media';

export const AboutStyles = styled.div``;
export const AboutPreviewGrid = styled.div`
  grid-gap: 15px;
  padding: 1rem;
  display: grid;

  ${above.medium`
    grid-template-columns: repeat(3, 1fr);

  `}

  .gatsby-image-wrapper {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: ${props => props.theme.colors.primaryShadow};
      width: 100%;
      height: 100%;
    }
  }
`;
export const AboutStylesContent = styled.div`
  margin: 3rem 0;
  p {
    font-size: 2.4rem;
  }
`;
