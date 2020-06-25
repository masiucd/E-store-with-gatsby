import { useState } from 'react';

export default (initialState: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = (): void => {
    setState(!state);
  };

  return [state, toggle];
};
