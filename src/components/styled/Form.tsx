import styled from 'styled-components';
import { handleFlex } from '../../utils/styled/flex';

export const Form = styled.form`
  ${handleFlex('column', 'center', 'center')};
  padding: 2rem 1rem;
  width: 100%;
`;
export const Label = styled.label`
  ${handleFlex('column', 'center', 'center')};
  padding: 1.5rem 0;

  width: 90%;
  span {
    font-size: 1.6rem;
    text-transform: capitalize;
    margin-right: auto;
    padding: 1rem 0;
  }
  .select {
    width: 100%;
    ${handleFlex('row', 'space-evenly', 'center')};
  }
  input[type='checkbox'] {
    padding: 1rem;
    background: red;
    width: 3rem;
    height: 3rem;
    margin-right: auto;
  }
`;

interface InputProps {
  isCheckbox?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  border: 0;
  font-size: 1.6rem;
  padding: 0.6rem 0.8rem;
  outline: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transition.quickTransition};
  &:focus {
    ${({ theme }) => theme.shadow.elevations[2]};
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
    width: 95%;
  }
`;

export const Select = styled.select`
  width: 30%;
  background: #fff;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  font-size: 1.5rem;
  outline: none;
  margin: 0 auto;
  display: block;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
