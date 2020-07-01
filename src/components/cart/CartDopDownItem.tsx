import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { handleFlex } from '../../utils/styled/flex';
import { useCartDispatch, useCartState } from '../../context/cart/CartProvider';
import { below } from '../../utils/styled/media';

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
  const { cart } = useCartState();

  // const findCartItem = () => {
  //   return cart.find(item => item.shopifyId === cartItem.shopifyId);
  // };
  // const [trackCount, setTrackCount] = React.useState(findCartItem()?.qty || 0);

  const handleRemove = (id: string) => {
    // if(findCartItem()?.shopifyId === id){

    //   dispatch({ type: 'DELETE_ITEM_FROM_CART', payload: id });
    //   window.localStorage.removeItem('cartItem');
    // }else {
    //   return
    // }
    dispatch({ type: 'DELETE_ITEM_FROM_CART', payload: id });
  };

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
        <span id="remove" onClick={() => handleRemove(cartItem.shopifyId)}>
          ❌
        </span>
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
    position: relative;
    #remove {
      position: absolute;
      top: 0;
      right: -20px;
      cursor: pointer;
    }
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
  width: 20rem;
  padding: 0 0.5rem;
  ${below.medium`

  `}
`;
export default CartDopDownItem;
