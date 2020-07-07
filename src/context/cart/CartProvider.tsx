import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import { addItemToCart, removeCartItem } from './utils';
import useLocalStorage from '../../hooks/useLocalStorage';

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
type Status = 'ADDING' | 'DELETING' | 'REMOVING' | '' | 'PENDING';

type Action =
  | { type: 'ADD_CART_ITEM'; payload: CartItem }
  | { type: 'SAVED_LOCAL_STORAGE_CART'; payload: CartItem[] }
  | { type: 'CLEAR_CART' }
  | { type: 'DELETE_ITEM_FROM_CART'; payload: string } // id - DELETE thw whole product from cart
  | { type: 'REMOVE_CART_ITEM'; payload: CartItem }
  | { type: 'IS_OPEN' }
  | { type: 'OPEN_CONFIRM_CARD' };

type Dispatch = (action: Action) => void;

type State = { cart: CartItem[]; isOpen: boolean; isOpenConfirm: boolean };

const CartStateContext = React.createContext<State | undefined>(undefined);
const CartDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const initialState: State = {
  cart: [],
  isOpen: false,
  isOpenConfirm: false,
};

function cartReducer(state: State, action: Action) {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      return {
        ...state,
        status: '',
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
    case 'SAVED_LOCAL_STORAGE_CART': {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case 'OPEN_CONFIRM_CARD': {
      return {
        ...state,
        isOpenConfirm: !state.isOpenConfirm,
      };
    }
    default: {
      throw new Error(`Unable action type `);
    }
  }
}

const CartProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  const [storedCart, setStoredCart] = useLocalStorage('cart', state.cart);

  let getState = () => state.cart;
  let memoizedCart = React.useMemo(() => getState(), [state.cart]);

  React.useEffect(() => {
    let localStoregaCart: CartItem[] = JSON.parse(localStorage.getItem('cart'));

    if (localStoregaCart) {
      dispatch({
        type: 'SAVED_LOCAL_STORAGE_CART',
        payload: localStoregaCart,
      });
    } else {
      // localStorage.clear();
      return;
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
