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
export const ListStyles = styled.ul`
  align-self: center;
  ${handleFlex('column', 'center', 'center')};
  width: 80%;
  height: 30%;
  margin: 2rem 0;
  li {
    padding: 1rem;
  }

  a {
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.text};
    font-size: 3em;
    text-transform: capitalize;
    position: relative;
    &:after {
      content: '';
      transition: ${({ theme }) => theme.transition.mainTransition};
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      background: ${({ theme: { colors } }) => colors.text};
    }
    &:hover {
      &:after {
        background: ${({ theme: { colors } }) => colors.secondary};
        width: 100%;
        padding: 0.1rem;
        height: 3px;
      }
    }
  }
`;

export const CategoryListStyles = styled.ul`
  ${handleFlex('row', 'space-evenly', 'center')};
  width: 80%;
  height: 20em;
  margin: 2rem 0;
  padding: 2rem 0;
  li {
  }
  a {
    color: ${({ theme: { colors } }) => colors.text};
    font-size: ${props => props.theme.size.a};
    text-transform: capitalize;
    position: relative;
    transition: ${({ theme }) => theme.transition.quickTransition};
    display: block;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 0;
      padding: 0;
      background: ${props => props.theme.colors.secondary};
      transition: ${({ theme }) => theme.transition.quickTransition};
    }
    &:hover {
      color: ${props => props.theme.colors.secondary};
      &:after {
        width: 100%;
        height: 0.2rem;
        padding: 0.1rem;
      }
    }
  }
`;
