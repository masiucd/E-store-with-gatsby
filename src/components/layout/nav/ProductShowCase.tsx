import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { useSearchState } from '../../../context/SearchProvider';

interface Props {}

const ProductShowCase: React.FC<Props> = () => {
  const { filteredResults } = useSearchState();

  return (
    <StyledShowCase>
      <h1>apa</h1>
    </StyledShowCase>
  );
};

const StyledShowCase = styled(animated.ul)``;
export default ProductShowCase;
