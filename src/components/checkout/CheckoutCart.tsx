import * as React from 'react';
import { useCartState } from '../../context/cart/CartProvider';
import { CheckoutCartStyles } from './CheckoutStyles';
import CheckoutCartItem from './CheckoutCartItem';
import { countCartTotalPricePerItem } from '../../context/cart/utils';

interface Props {}

const CheckoutCart: React.FC<Props> = () => {
  const { cart } = useCartState();

  return (
    <CheckoutCartStyles>
      {cart &&
        cart.length > 0 &&
        cart.map(item => <CheckoutCartItem key={item.shopifyId} data={item} />)}
      <div className="cart-footer">
        <h4>Total Price</h4>
        <span>{countCartTotalPricePerItem(cart)} SEK </span>
      </div>
    </CheckoutCartStyles>
  );
};

export default CheckoutCart;
