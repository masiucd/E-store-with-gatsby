import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

interface Product {
  id: string;
  title: string;
  handle: string;
}
interface Node {
  node: Product;
}

type Action =
  | { type: 'SET_PRODUCTS'; payload: Node[] }
  | { type: 'CLEAR_FILTER' };

type Dispatch = (action: Action) => void;

type State = { filteredResults: Node[] };

const SearchStateContext = React.createContext<State | undefined>(undefined);
const SearchDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const initialState: State = {
  filteredResults: [],
};

function searchReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        filteredResults: action.payload,
      };
    case 'CLEAR_FILTER':
      return {
        ...state,
        filteredResults: [],
      };

    default: {
      throw new Error(`Unable action type `);
    }
  }
}

export const SearchProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(searchReducer, initialState);
  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
};

export const useSearchState = () => {
  const context = React.useContext(SearchStateContext);
  if (context === undefined) {
    throw new Error('useSearchState must be used within a SearchProvider');
  }
  return context;
};

export const useSearchDispatch = () => {
  const context = React.useContext(SearchDispatchContext);
  if (context === undefined) {
    throw new Error('useSearchDispatch must be used within a SearchProvider');
  }
  return context;
};
