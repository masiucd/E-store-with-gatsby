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

export const CheckoutCartStyles = styled.div`
  overflow-y: scroll;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.text};
  /* height: 100%; */
  max-height: 55em;
  width: 100%;
  ${({ theme }) => theme.shadow.elevations[2]};
  .cart-footer {
    padding: 2rem 0.5rem;
    font-size: 2rem;
    ${handleFlex('row', 'space-evenly', 'center')};
  }
`;

export const CheckoutCartItemStyles = styled.div`
  width: 90%;
  margin: 1rem auto;
  ${handleFlex('row', 'space-evenly', 'center')};

  .footer {
    padding: 1rem 0;
    ${handleFlex('column', 'center', 'center')};
  }
  h3 {
    text-transform: capitalize;
  }
  span {
    font-size: 1.6rem;
  }
  .gatsby-image-wrapper {
    max-width: 30em;
    border: 2px solid ${props => props.theme.colors.secondary};
  }
`;
