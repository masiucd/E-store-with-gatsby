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
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline 2px ${({ theme }) => theme.colors.secondary};
  }
`;
export default ProductItemChild;
