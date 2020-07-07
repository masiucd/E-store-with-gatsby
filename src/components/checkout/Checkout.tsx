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

  let itemsInCart = countCartItems(cart);

  return (
    <CheckOutStyles>
      <Title
        className="Checkout-title"
        mainTitle="your Order"
        secondaryTitle={`You have ${itemsInCart} item${
          itemsInCart === 1 ? '' : "'s"
        } in your cart`}
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
