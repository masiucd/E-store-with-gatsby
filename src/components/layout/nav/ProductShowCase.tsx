import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { useSearchState } from '../../../context/SearchProvider';
import ProductItemChild from './ProductItemChild';

interface Props {}

const ProductShowCase: React.FC<Props> = () => {
  const { filteredResults } = useSearchState();

  return (
    <StyledShowCase>
      {filteredResults.length > 0 &&
        filteredResults.map(({ node }) => (
          <ProductItemChild key={node.id} data={node} />
        ))}
    </StyledShowCase>
  );
};

const StyledShowCase = styled(animated.ul)``;
export default ProductShowCase;
