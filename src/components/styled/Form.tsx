import styled from 'styled-components';
import { handleFlex } from '../../utils/styled/flex';

export const Form = styled.form`
  ${handleFlex('column', 'center', 'center')};
  padding: 2rem 1rem;
  border: 3px solid #333;
`;
export const Label = styled.label`
  ${handleFlex('column', 'center', 'center')};
  padding: 1.5rem 0;
  /* border: 3px solid #333; */
  width: 90%;
  span {
    font-size: 1.6rem;
    text-transform: capitalize;
    margin-right: auto;
  }
  .select {
  }
`;

export const Input = styled.input`
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
export const Select = styled.select``;
