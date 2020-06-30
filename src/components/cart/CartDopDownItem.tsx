import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { handleFlex } from '../../utils/styled/flex';
import { useCartDispatch } from '../../context/cart/CartProvider';

export interface Variant {
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
  cartItem: {
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
  };
}

const CartDopDownItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useCartDispatch();
  return (
    <ItemStyles>
      <ImgWrapper>
        <Img
          fluid={cartItem.variants[0].image.localFile.childImageSharp.fluid}
        />
      </ImgWrapper>
      <div className="content">
        <strong>
          Product <span>{cartItem.title}</span>
        </strong>
        <strong>
          Amount: <span>{cartItem.qty}</span>
        </strong>
        <strong>
          Price:{' '}
          <span>
            {cartItem.priceRange.maxVariantPrice.amount}{' '}
            {cartItem.priceRange.maxVariantPrice.currencyCode}
          </span>
        </strong>
        <strong className="amount-display">
          <span
            onClick={() => {
              dispatch({ type: 'REMOVE_CART_ITEM', payload: cartItem });
            }}
          >
            ←
          </span>
          <span>{cartItem.qty}</span>
          <span
            onClick={() => {
              dispatch({ type: 'ADD_CART_ITEM', payload: cartItem });
            }}
          >
            →
          </span>
        </strong>
      </div>
    </ItemStyles>
  );
};

const ItemStyles = styled.li`
  ${handleFlex('row', 'space-between', 'center')};
  margin: 1rem 0;
  padding: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.common};
  width: 80%;
  strong {
    font-size: 1.8rem;
    text-transform: capitalize;
    span {
      font-weight: 400;
    }
  }
  .content {
    ${handleFlex('column', 'center', 'center')};
    padding: 0 0.5rem;
  }
  .amount-display {
    span {
      font-size: 5rem;
      margin: 0 2rem;
      &:nth-child(1) {
        cursor: pointer;
      }
      &:nth-child(3) {
        cursor: pointer;
      }
    }
  }
`;

const ImgWrapper = styled.div`
  width: 10rem;
  padding: 0 0.5rem;
`;
export default CartDopDownItem;
