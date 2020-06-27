import * as React from 'react';
import { InputStyles } from '../../styled/Input';
import styled from 'styled-components';
import { below } from '../../../utils/styled/media';
import { handleFlex } from '../../../utils/styled/flex';
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
      <Box>
        <span>🐙</span>
      </Box>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  align-self: center;
  justify-self: center;
  width: 70%;

  ${handleFlex('row', 'flex-start', 'center')};
  ${InputStyles} {
    margin: 0 auto;
    border-radius: 0.5rem;
    font-size: 16px;
    flex: 1;
    &::placeholder {
      text-transform: capitalize;
      text-align: center;
    }
  }
`;

const Box = styled.div`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.text};
  width: 54px;
  border-radius: 0.5rem;
  height: calc(40px - 4px);
  padding: 0.8rem 0.6rem;
  cursor: pointer;
  ${handleFlex('row', 'center', 'center')};
  font-size: 2.7rem;
  transition: ${({ theme }) => theme.transition.secondaryTransition};
  &:active {
    position: relative;
    top: 6px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export default Search;
