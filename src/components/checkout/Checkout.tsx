import * as React from 'react';
import { useCartState } from '../../context/cart/CartProvider';
import { CheckOutStyles, CheckoutGrid } from './CheckoutStyles';
import Title from '../elements/Title';
import { countCartItems } from '../../context/cart/utils';
import CheckoutCart from './CheckoutCart';
import CheckoutForm from './CheckoutForm';
import Modal from '../modal';

interface Props {}

const Checkout: React.FC<Props> = () => {
  const { cart } = useCartState();

  return (
    <CheckOutStyles>
      <Title
        className="Checkout-title"
        mainTitle="your Order"
        secondaryTitle={`You have ${countCartItems(cart)} items in your cart`}
        textColor="#333"
      />
      <CheckoutGrid>
        <CheckoutCart />
        <CheckoutForm />
      </CheckoutGrid>
      <Modal />
    </CheckOutStyles>
  );
};
export default Checkout;
