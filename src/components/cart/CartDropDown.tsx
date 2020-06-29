import * as React from 'react';
import { useCartState, useCartDispatch } from '../../context/cart/CartProvider';
import { animated, useSpring, config } from 'react-spring';
import styled from 'styled-components';
import { handleFlex } from '../../utils/styled/flex';
import CartDopDownItem from './CartDopDownItem';
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
      <Body>
        <h1 id="cart-title">Your Cart</h1>{' '}
        {cart.length > 0 &&
          cart.map(cartItem => (
            <CartDopDownItem key={cartItem.shopifyId} cartItem={cartItem} />
          ))}
      </Body>
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
`;
const Body = styled.ul`
  border: 2px solid red;
  height: 80%;
  width: 90%;
  color: ${({ theme: { colors } }) => colors.text};
  #cart-title {
    text-align: center;
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
    width: 80%;
    margin: 0 auto;
    font-size: 4rem;
  }
`;

export default CartDropDown;
