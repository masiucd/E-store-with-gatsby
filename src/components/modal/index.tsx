import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import { useCartState, useCartDispatch } from '../../context/cart/CartProvider';
import styled from 'styled-components';
import Title from '../elements/Title';
import { handleFlex } from '../../utils/styled/flex';
import { BtnPrimary } from '../styled/Buttons';
import { countCartTotalPricePerItem } from '../../context/cart/utils';

interface Props {}

const Modal: React.FC<Props> = () => {
  const { isOpenConfirm, cart } = useCartState();
  const dispatch = useCartDispatch();

  const handleSuccess = () => {
    dispatch({ type: 'OPEN_CONFIRM_CARD' });

    localStorage.clear();
  };

  const { opacity, x } = useSpring({
    opacity: isOpenConfirm ? 1 : 0,
    zIndex: isOpenConfirm ? 1000 : -1,
    x: isOpenConfirm ? 0 : 100,
  });

  return (
    <ModalStyles
      style={{
        opacity,
        transform: x.interpolate(x => `translate3d(0,${x * 100}%,0)`),
      }}
    >
      <ModalBody>
        <Title
          mainTitle="confirm"
          secondaryTitle="your payment"
          className="modal title"
          textColor="#333"
        />
        <h4>Total Price {countCartTotalPricePerItem(cart)} SEK</h4>
        <BtnPrimary onClick={handleSuccess} as="button">
          Confirm
        </BtnPrimary>
      </ModalBody>
    </ModalStyles>
  );
};

const ModalStyles = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.primaryShadow};
  transform: translateY(-1000%);
`;

const ModalBody = styled.section`
  ${handleFlex('column', 'center', 'center')};
  height: 90%;
  width: 75%;
  margin: 0 auto;
  background: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  h4 {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;

export default Modal;
