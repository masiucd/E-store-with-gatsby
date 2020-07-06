import styled, { css } from 'styled-components';
import { handleFlex } from '../../utils/styled/flex';

export const Form = styled.form`
  ${handleFlex('column', 'center', 'center')};
  padding: 2rem 1rem;
  width: 100%;
`;

interface FormError {
  cardNumberErrors?: string;
  cardNameErrors?: string;
  monthError?: string;
  dayError?: string;
  cvvError?: string;
}
interface LabelProps {
  formErrors?: FormError;
}
const handleErrorBorder = (errors: FormError) => {
  return css`
    border: ${errors.cardNameErrors} || ${errors.cardNameErrors};
  `;
};

export const Label = styled.label<LabelProps>`
  ${handleFlex('column', 'center', 'center')};
  padding: 1.5rem 0;
  ${props =>
    props.formErrors &&
    props.formErrors.cardNameErrors &&
    'border: 2px solid red'};
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

  .label-row {
    ${handleFlex('row', 'space-between', 'center')};
    width: 80%;

    span {
      margin: 0 1rem;
    }
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

export const ErrorMsg = styled.span`
  color: rgba(229, 57, 53, 1);
`;
