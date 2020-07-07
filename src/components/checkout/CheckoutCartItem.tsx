import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import { CheckoutCartItemStyles } from './CheckoutStyles';
import Img from 'gatsby-image';
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

interface CartItem {
  title: string;
  description: string;
  shopifyId: string;
  createdAt: string;
  qty: number;
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
}

interface Props {
  data: CartItem;
}

const CheckoutCartItem: React.FC<Props> = ({ data }) => {
  return (
    <CheckoutCartItemStyles>
      <div className="head">
        <h3>{data.title} </h3>
        <Img
          fluid={data.variants[0].image.localFile.childImageSharp.fluid}
          alt="showcase"
        />
      </div>
      <div className="footer">
        <span>qty: {data.qty} </span>
        <span>
          {data.priceRange.maxVariantPrice.amount}{' '}
          {data.priceRange.maxVariantPrice.currencyCode}
        </span>
        <span>Sku: {data.variants[0].sku}</span>
      </div>
    </CheckoutCartItemStyles>
  );
};
export default CheckoutCartItem;
