import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Hero from '../elements/Hero';
import Title from '../elements/Title';
import Details from './Details';
import { handleFlex } from '../../utils/styled/flex';
import { below } from '../../utils/styled/media';
import { useCartDispatch, useCartState } from '../../context/cart/CartProvider';
import { BtnPrimary } from '../styled/Buttons';
interface Variant {
  sku: string;
  title: string;
  price: string;
  priceV2: {
    amount: string;
    currencyCode: string;
  };
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
    description: string;
    shopifyId: string;
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
    variants,
    priceRange: {
      maxVariantPrice: { amount, currencyCode },
    },
  } = onShopifyProduct;

  const dispatch = useCartDispatch();

  const [countQty, setCountQty] = React.useState<number>(0);

  const productCopy = { ...onShopifyProduct, qty: countQty };

  React.useEffect(() => {
    if (countQty > 0) {
      window.localStorage.setItem('cartItem', JSON.stringify(productCopy));
    }
  }, [countQty]);

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
          textShadow
        />
      </Hero>
      <Body>
        <ImageWrapper>
          <Img fluid={variants[0].image.localFile.childImageSharp.fluid} />
        </ImageWrapper>

        <Details data={onShopifyProduct} />
      </Body>
      <BtnPrimary
        as="button"
        type="button"
        onClick={() => {
          dispatch({ type: 'ADD_CART_ITEM', payload: productCopy });
          setCountQty(prev => prev + 1);
        }}
      >
        Add to cart
      </BtnPrimary>
    </StyledProduct>
  );
};

const StyledProduct = styled.section`
  width: 100%;
  ${handleFlex('column', 'center', 'center')};
  height: 100%;
`;

const Body = styled.div`
  height: 100%;
`;

const ImageWrapper = styled.div`
  width: 25rem;
  position: absolute;
  /* bottom: 0; */
  left: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  ${below.medium`
    /* left: 50%;
    transform: translate(-50%,-50%); */
    width: 20em;
  `}

  ${below.small`
    width: 15em;
  `}
`;

export default SingleProduct;
