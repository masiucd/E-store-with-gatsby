import styled from 'styled-components';

export const InputStyles = styled.input`
  border: 1px solid ${({ theme: { colors } }) => colors.primary};
  display: block;
  padding: 0.8rem 0.6rem;
  outline: 0;
  transition: ${({ theme: { transition } }) => transition.quickTransition};
  width: 80%;
  &:focus {
    border: 3px solid ${({ theme: { colors } }) => colors.secondary};
    padding: 0.7rem 0.5rem;
    width: calc(80% - 3em);
  }
`;
