import * as React from 'react';
import { IFixedObject } from 'gatsby-background-image';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { handleFlex } from '../../utils/styled/flex';

interface ImgData {
  id: string;
  localFile: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}

interface Price {
  price: string;
}

interface Props {
  productData: {
    id: string;
    title: string;
    description: string;
    variants: Array<Price>;
    publishedAt: string;
    images: Array<ImgData>;
  };
}

const FeatureProductItem: React.FC<Props> = ({ productData }) => {
  return (
    <StyledItem>
      <Img
        fixed={productData.images[0].localFile.childImageSharp.fixed}
        alt={productData.title}
      />
      <BodyContent>
        <h4>{productData.title}</h4>
      </BodyContent>
    </StyledItem>
  );
};

const StyledItem = styled.article`
  position: relative;
  cursor: pointer;
  transition: ${props => props.theme.transition.mainTransition};
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
`;

const BodyContent = styled.div`
  position: absolute;
  display: none;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: ${({ theme: { colors } }) => colors.text};
  transition: ${props => props.theme.transition.mainTransition};
  h4 {
    color: ${({ theme: { colors } }) => colors.text};
    font-size: 3rem;
  }
`;
export default FeatureProductItem;
