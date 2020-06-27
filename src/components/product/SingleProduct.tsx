import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Hero from '../elements/Hero';
import Title from '../elements/Title';
interface Variant {
  sku: string;
  title: string;
  image: {
    localFile: {
      childImageSharp: {
        fluid: IFluidObject | IFluidObject[];
      };
    };
  };
}

interface Props {
  onShopifyProduct: {
    title: string;
    createdAt: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    vendor: string;
    productType: string;
    tags: string[];
    variants: Variant[];
  };
}

const SingleProduct: React.FC<Props> = ({ onShopifyProduct }) => {
  const {
    title,
    createdAt,
    variants,
    priceRange: {
      maxVariantPrice: { amount, currencyCode },
    },
  } = onShopifyProduct;
  return (
    <StyledProduct>
      <Hero
        className={title}
        img={variants[0].image.localFile.childImageSharp.fluid}
      >
        <Title
          className={title}
          mainTitle={title}
          secondaryTitle={`${amount} ${currencyCode} `}
        />
      </Hero>
      <ImageWrapper>
        <Img fluid={variants[0].image.localFile.childImageSharp.fluid} />
      </ImageWrapper>
    </StyledProduct>
  );
};

const StyledProduct = styled.section`
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 25rem;
  position: absolute;
  bottom: 0;
  left: 1rem;
`;

export default SingleProduct;
