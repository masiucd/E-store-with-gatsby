import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { useSearchState } from '../../../context/SearchProvider';
import ProductItemChild from './ProductItemChild';
import { handleFlex } from '../../../utils/styled/flex';

interface Props {}

const ProductShowCase: React.FC<Props> = () => {
  const { filteredResults } = useSearchState();
  const { y, opacity } = useSpring({
    y: filteredResults.length > 0 ? 0 : 10000,
    opacity: filteredResults.length > 0 ? 1 : 0,
  });
  return (
    <StyledShowCase
      style={{
        transform: y.interpolate(y => `translate3d(0,${y * -1}%,0)`),
        opacity,
      }}
    >
      {filteredResults.length > 0 &&
        filteredResults.map(({ node }) => (
          <ProductItemChild key={node.id} data={node} />
        ))}
    </StyledShowCase>
  );
};

const StyledShowCase = styled(animated.ul)`
  background: ${({ theme: { colors } }) => colors.primaryShadow};
  z-index: 40;
  align-self: center;
  ${handleFlex('column', 'center', 'center')};
  position: absolute;
  height: 30em;
  top: calc(30rem - 21rem);
  left: 15%;
  width: calc(100% - 30%);
  overflow-y: scroll;

  /* left: 50%;
  transform: translate(-50%, -50%); */
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
`;

export default ProductShowCase;
