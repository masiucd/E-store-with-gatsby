import styled from 'styled-components';
import { below } from '../../utils/styled/media';
import { handleFlex } from '../../utils/styled/flex';

export const DetailsStyles = styled.div`
  padding: 3rem 1rem;
  ${handleFlex('column', 'center', 'center')};
  height: 100%;
  .details-name {
    h3 {
      padding: 1rem;
      font-size: 3.5rem;
      text-transform: capitalize;
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      span {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
  ${below.medium`
    margin-top: 12em;
  `}
`;
