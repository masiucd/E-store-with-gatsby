import styled from 'styled-components';
import { below, above } from '../../utils/styled/media';
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
  .price {
    padding: 1rem 0.5rem;
    font-size: 3rem;
  }
  .desc {
    padding: 2rem 0.5rem;
    font-size: 2rem;
    strong {
      width: 100%;
      display: block;
      text-align: center;
      span {
        font-size: 2.8rem;
        font-weight: 800;
        text-align: center;
      }
    }
    p {
      font-size: 1.8rem;
    }
  }

  .select {
    width: 19rem;
    position: relative;
    border: 0;
    outline: red;
    select {
      width: 100%;
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
    }
    &:after {
      content: '👇🏻';
      position: absolute;
      cursor: pointer;
      top: 0;
      color: #333;
      right: 1.8rem;
      font-size: 2rem;
      width: 10px;
      height: 15px;
    }
  }
`;

export const GridProducts = styled.section`
  margin: 2rem auto;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px;
  grid-template-rows: auto;
  height: 100%;

  ${above.large`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const StyledProduct = styled.section`
  width: 100%;
  ${handleFlex('column', 'center', 'center')};
  height: 100%;
  margin: 6rem 0;
`;

export const Body = styled.div`
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 25rem;
  position: absolute;
  /* bottom: 0; */
  left: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  ${below.medium`
    left: 50%;
    transform: translate(-50%,-50%);
    width: 20em;
  `}

  ${below.small`
    width: 15em;
  `}
`;
