import * as React from 'react';
import { useCartState, useCartDispatch } from '../../context/cart/CartProvider';
import { animated, useSpring, config } from 'react-spring';
import styled from 'styled-components';
import { handleFlex } from '../../utils/styled/flex';
import CartDopDownItem from './CartDopDownItem';
import { countCartTotalPricePerItem } from '../../context/cart/utils';
import { MyLink } from '../styled/Buttons';
interface Props {}

const CartDropDown: React.FC<Props> = () => {
  const { isOpen, cart } = useCartState();
  const dispatch = useCartDispatch();

  const { x } = useSpring({
    x: isOpen ? 0 : 100,

    config: config.gentle,
  });

  return isOpen ? (
    <StyledDropDown
      style={{
        transform: x.interpolate(x => `translate3d(0,${x * -1}%,0)`),
      }}
    >
      <span
        id="close-dropdown"
        onClick={() => {
          dispatch({ type: 'IS_OPEN' });
        }}
      >
        ⤫
      </span>
      <h1 id="cart-title">Your Cart</h1>{' '}
      <Body>
        {cart.length > 0 &&
          cart.map(cartItem => (
            <CartDopDownItem key={cartItem.shopifyId} cartItem={cartItem} />
          ))}
      </Body>
      <Total>
        <h4>Total Price {countCartTotalPricePerItem(cart)} SEK</h4>
        {cart.length > 0 && <MyLink to="/checkout">Checkout</MyLink>}
      </Total>
    </StyledDropDown>
  ) : null;
};

const StyledDropDown = styled(animated.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.secondary};

  width: 35vmax;
  ${handleFlex('column', 'center', 'center')};

  #close-dropdown {
    position: absolute;
    top: 0;
    right: 1rem;
    font-size: 5em;
    cursor: pointer;
  }
  #cart-title {
    text-align: center;
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
    width: 80%;
    margin: 0 auto;
    font-size: 4rem;
  }
`;
const Body = styled.ul`
  margin-top: 2rem;
  ${handleFlex('column', 'center', 'center')};
  /* height: 80%; */
  width: 90%;
  align-self: center;
  justify-self: center;
  color: ${({ theme: { colors } }) => colors.text};
  overflow-y: scroll;
`;

const Total = styled.div`
  margin-top: auto;
  width: 100%;
  padding: 1rem;
  ${handleFlex('row', 'space-between', 'center')}
  h4 {
    font-size: 2rem;
  }
  ${MyLink} {
    padding: 0;
  }
`;

export default CartDropDown;
