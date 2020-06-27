import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'RESET' };
type Dispatch = (action: Action) => void;
type State = { count: number };

const SearchStateContext = React.createContext<State | undefined>(undefined);
const SearchDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const initialState: State = {
  count: 0,
};

function searchReducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
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
