import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
interface ImgData {
  localFile: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

interface Product {
  node: {
    title: string;
    handle: string;
    productType: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: Array<ImgData>;
  };
}

interface Props {
  children: React.ReactNode;
}

type Action =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'SET_CURRENT_PRODUCT_TYPE'; payload: string }
  | { type: 'CLEAR_CURRENT_PRODUCT_TYPE' };

type Dispatch = (action: Action) => void;

type State = { products: Product[]; productType: string };

const initialState: State = {
  products: [],
  productType: '',
};

const productStateContext = React.createContext<State | undefined>(undefined);
const productDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function productReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'SET_CURRENT_PRODUCT_TYPE':
      return {
        ...state,
        productType: action.payload,
      };
    case 'CLEAR_CURRENT_PRODUCT_TYPE':
      return {
        ...state,
        productType: '',
      };

    default: {
      throw new Error(`Unable action type `);
    }
  }
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(productReducer, initialState);
  return (
    <productStateContext.Provider value={state}>
      <productDispatchContext.Provider value={dispatch}>
        {children}
      </productDispatchContext.Provider>
    </productStateContext.Provider>
  );
};

export const useProductState = () => {
  const context = React.useContext(productStateContext);
  if (context === undefined) {
    throw new Error(
      'useProductState need to be used with in the Product provider!'
    );
  }
  return context;
};
export const useProductDispatch = () => {
  const context = React.useContext(productDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useProductDispatch need to be used with in the Product provider!'
    );
  }
  return context;
};
