import styled from 'styled-components';
import { handleFlex } from '../../../utils/styled/flex';
import { below, above } from '../../../utils/styled/media';
import { InputStyles } from '../../styled/Input';

export const Icons = styled.div`
  ${handleFlex('row', 'space-evenly', 'center')};
  align-self: center;

  img {
    cursor: pointer;
  }
  .col {
    padding: 0 2rem;

    display: flex;
    span {
      font-size: 1.5rem;
      margin-left: 1rem;
    }
  }
  ${below.medium`
    ${handleFlex('row', 'space-evenly', 'flex-end')};

  `}

  ${below.small`
    margin-bottom: 2rem;
  `}
`;

export const SearchContainer = styled.div`
  ${handleFlex('column', 'center', 'center')};
  position: relative;
  width: 50%;
  ${below.medium`
    margin-right-auto;
    width: 70%;
  `}
`;

export const InputWrapper = styled.div`
  align-self: center;
  justify-self: center;
  width: 100%;
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

export const Box = styled.div`
  position: relative;
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
