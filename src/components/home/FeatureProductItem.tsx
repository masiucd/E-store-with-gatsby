import * as React from 'react';
import { IFixedObject } from 'gatsby-background-image';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { handleFlex } from '../../utils/styled/flex';
import { MyLink } from '../styled/Buttons';

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
    handle: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    publishedAt: string;
    images: Array<ImgData>;
  };
}

const FeatureProductItem: React.FC<Props> = ({ productData }) => {
  const {
    images,
    title,
    handle,
    id,
    priceRange: {
      maxVariantPrice: { amount, currencyCode },
    },
  } = productData;

  return (
    <StyledItem>
      <Img fixed={images[0].localFile.childImageSharp.fixed} alt={title} />
      <BodyContent>
        <h4>{title}</h4>
        <span>
          From - {amount} {currencyCode}
        </span>
        <MyLink to={`/products/${handle}`}>product</MyLink>
      </BodyContent>
    </StyledItem>
  );
};

const StyledItem = styled.article`
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
`;

const BodyContent = styled.div`
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
export default FeatureProductItem;
