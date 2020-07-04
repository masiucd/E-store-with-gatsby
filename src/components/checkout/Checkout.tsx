import * as React from 'react';
import { useCartState } from '../../context/cart/CartProvider';
import { CheckOutStyles, CheckoutGrid } from './CheckoutStyles';
import Title from '../elements/Title';
import { countCartItems } from '../../context/cart/utils';

interface Props {}

const Checkout: React.FC<Props> = () => {
  const { cart } = useCartState();

  return (
    <CheckOutStyles>
      <Title
        className="Checkout-title"
        mainTitle="Checkout"
        secondaryTitle={`You have ${countCartItems(cart)} items in your cart`}
        textColor="#333"
      />
      <CheckoutGrid>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          optio eum aut doloribus iusto ea repudiandae, ipsum exercitationem
          enim ducimus illo, tempora dolor voluptas natus ex, possimus dolorem
          recusandae magni perspiciatis maxime nostrum modi praesentium.
          Corporis numquam possimus placeat, excepturi obcaecati dignissimos
          laboriosam aut vel est. Culpa distinctio iusto quod corporis sint
          aspernatur, dolorum ipsa, debitis dolorem ullam alias suscipit
          praesentium perferendis ad porro amet accusamus nesciunt consequuntur
          doloribus aliquam architecto delectus omnis magni? Dolor inventore
          illo suscipit, enim quisquam est atque delectus autem molestias
          obcaecati maiores ratione ex quo ullam iure dolorem voluptas
          blanditiis officia accusantium minus sit fugiat.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          optio eum aut doloribus iusto ea repudiandae, ipsum exercitationem
          enim ducimus illo, tempora dolor voluptas natus ex, possimus dolorem
          recusandae magni perspiciatis maxime nostrum modi praesentium.
          Corporis numquam possimus placeat, excepturi obcaecati dignissimos
          laboriosam aut vel est. Culpa distinctio iusto quod corporis sint
          aspernatur, dolorum ipsa, debitis dolorem ullam alias suscipit
          praesentium perferendis ad porro amet accusamus nesciunt consequuntur
          doloribus aliquam architecto delectus omnis magni? Dolor inventore
          illo suscipit, enim quisquam est atque delectus autem molestias
          obcaecati maiores ratione ex quo ullam iure dolorem voluptas
          blanditiis officia accusantium minus sit fugiat.
        </p>
      </CheckoutGrid>
    </CheckOutStyles>
  );
};
export default Checkout;
