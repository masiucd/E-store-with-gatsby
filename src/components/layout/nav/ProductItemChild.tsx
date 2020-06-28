import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
interface Props {
  data: {
    id: string;
    title: string;
    handle: string;
  };
}

const ProductItemChild: React.FC<Props> = ({ data }) => {
  const { title, handle } = data;
  return (
    <StyledItem>
      <Link to={`/products/${handle}`}>{title}</Link>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  padding: 1rem 2rem;
  width: 100%;
  a {
    color: ${({ theme }) => theme.colors.text};
    display: block;
    font-weight: 800;
    font-size: 2rem;
    border-bottom: solid 2px ${({ theme }) => theme.colors.secondary};
    transition: ${({ theme: { transition } }) => transition.mainTransition};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
export default ProductItemChild;
