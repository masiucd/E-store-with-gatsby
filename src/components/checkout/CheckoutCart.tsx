import * as React from 'react';
import { useCartState } from '../../context/cart/CartProvider';

interface Props {}

const CheckoutCart: React.FC<Props> = () => {
  const { cart } = useCartState();
  return (
    <div>
      {' '}
      <h1> Legia CWSKS </h1>{' '}
    </div>
  );
};
export default CheckoutCart;
