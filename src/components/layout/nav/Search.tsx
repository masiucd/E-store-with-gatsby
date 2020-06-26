import * as React from 'react';
import { InputStyles } from '../../styled/Input';
import styled from 'styled-components';
interface Props {
  type?: string;
  placeholder?: string;
}

const Search: React.FC<Props> = ({ type, placeholder }) => {
  const [text, setText] = React.useState<string>('');
  return (
    <InputWrapper>
      <InputStyles
        type={type || 'text'}
        placeholder={placeholder || '..text'}
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  align-self: center;
  justify-self: center;
  width: 70%;
  padding: 0.5rem;
  ${InputStyles} {
    margin: 0 auto;
    border-radius: 0.5rem;
    font-size: 16px;
    &::placeholder {
      text-transform: capitalize;
      text-align: center;
    }
  }
`;

export default Search;
