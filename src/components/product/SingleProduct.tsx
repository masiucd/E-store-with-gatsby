import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import Img from 'gatsby-image';
import { StyledProduct, Body, ImageWrapper } from './ProductStyles';
import Hero from '../elements/Hero';
import Title from '../elements/Title';
import Details from './Details';
import { useCartDispatch } from '../../context/cart/CartProvider';
import { BtnPrimary } from '../styled/Buttons';
import useLocalStorage from '../../hooks/useLocalStorage';
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

  // React.useEffect(() => {
  //   if (countQty > 0) {
  //     window.localStorage.setItem('cartItem', JSON.stringify(productCopy));
  //   }
  // }, [countQty]);

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
          setCountQty(prev => prev + 1);
          dispatch({ type: 'ADD_CART_ITEM', payload: productCopy });
        }}
      >
        Add to cart
      </BtnPrimary>
    </StyledProduct>
  );
};

export default SingleProduct;
