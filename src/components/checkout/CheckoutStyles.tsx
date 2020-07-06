import styled from 'styled-components';
import { above } from '../../utils/styled/media';
import { handleFlex } from '../../utils/styled/flex';

export const CheckOutStyles = styled.div`
  margin: 2rem 0;
  width: 100%;
`;

export const CheckoutGrid = styled.section`
  ${handleFlex('column', 'center', 'center')};

  padding: 1rem;
  margin: 2rem 0;

  ${above.medium`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  `}
`;
