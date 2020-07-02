import styled from 'styled-components';
import { handleFlex } from '../../../utils/styled/flex';
import { below, above } from '../../../utils/styled/media';

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
    width: 30%;
    height: 70%;
  `}

  ${below.small`
    margin: 3rem 0 0 1rem;
  `}
`;
