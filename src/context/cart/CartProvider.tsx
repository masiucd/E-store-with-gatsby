import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import { addItemToCart, removeCartItem } from './utils';

interface Props {
  children: React.ReactNode;
}

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

export interface CartItem {
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
}

type Action =
  | { type: 'ADD_CART_ITEM'; payload: CartItem }
  | { type: 'SET_CART_TO_LOCAL_STORAGE'; payload: CartItem[] }
  | { type: 'CLEAR_CART' }
  | { type: 'DELETE_ITEM_FROM_CART'; payload: string } // id - DELETE thw whole product from cart
  | { type: 'REMOVE_CART_ITEM'; payload: CartItem }
  | { type: 'IS_OPEN' };

type Dispatch = (action: Action) => void;

type State = { cart: CartItem[]; isOpen: boolean };

const CartStateContext = React.createContext<State | undefined>(undefined);
const CartDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const initialState: State = {
  cart: [],
  isOpen: false,
};

function cartReducer(state: State, action: Action) {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cart: removeCartItem(state.cart, action.payload),
      };

    case 'DELETE_ITEM_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(
          cartItem => cartItem.shopifyId !== action.payload
        ),
      };
    case 'IS_OPEN':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case 'SET_CART_TO_LOCAL_STORAGE': {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default: {
      throw new Error(`Unable action type `);
    }
  }
}

const CartProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);

  const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  };

  React.useEffect(() => {
    const storedCart = window.localStorage.getItem('cart');
    console.log(storedCart);
    if (storedCart) {
      dispatch({
        type: 'SET_CART_TO_LOCAL_STORAGE',
        payload: JSON.parse(storedCart),
      });
    } else {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  }, []);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

const useCartState = () => {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error(
      'useCartState need to be used with in the CART_PROVIDER!!!'
    );
  }
  return context;
};
const useCartDispatch = () => {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCartDispatch need to be used with in the CART_PROVIDER!!!'
    );
  }
  return context;
};

export { CartProvider, useCartDispatch, useCartState };
