import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import { useCartState, useCartDispatch } from '../../context/cart/CartProvider';
import styled from 'styled-components';
import Title from '../elements/Title';
import { handleFlex } from '../../utils/styled/flex';
import { BtnPrimary } from '../styled/Buttons';
import { countCartTotalPricePerItem } from '../../context/cart/utils';
import { navigate } from '@reach/router';
import { below } from '../../utils/styled/media';

interface Props {}

const Modal: React.FC<Props> = () => {
  const { isOpenConfirm, cart } = useCartState();
  const dispatch = useCartDispatch();

  const handleSuccess = () => {
    dispatch({ type: 'OPEN_CONFIRM_CARD' });
    localStorage.clear();
    navigate('/');
  };
  const handleDecline = () => {
    dispatch({ type: 'OPEN_CONFIRM_CARD' });
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
        // transform: x.interpolate(x => `translate3d(0,${x * 100}%,0)`),
      }}
    >
      <ModalBody>
        <Title
          mainTitle="confirm"
          secondaryTitle="your payment"
          className="modal title"
          textColor="#333"
        />
        <h4>
          Total Price <span>{countCartTotalPricePerItem(cart)} SEK </span>
        </h4>
        <div className="btn-wrap">
          <BtnPrimary onClick={handleSuccess} as="button">
            Confirm
          </BtnPrimary>
          <BtnPrimary onClick={handleDecline} as="button">
            Decline
          </BtnPrimary>
        </div>
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
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 2rem 0;
    span {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.secondary};
      text-shadow: 1px 1px 2px #333;
    }
  }
  .btn-wrap {
    width: 70%;
    ${handleFlex('row', 'space-evenly', 'center')};

    ${below.small`
      ${handleFlex('column', 'center', 'center')};
    `}
  }
`;

export default Modal;
