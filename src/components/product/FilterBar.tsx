import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IFluidObject } from 'gatsby-background-image';
import { handleFlex } from '../../utils/styled/flex';

import ProductButton from './ProductButton';
import {
  useProductDispatch,
  useProductState,
} from '../../context/product/ProductProvider';

interface Node {
  node: {
    title: string;
    handle: string;
    productType: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: Array<ImgData>;
  };
}

interface ImgData {
  localFile: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

interface Props {
  className: string;
  onEdges: Array<Node>;
}

function FilterBar({ className, onEdges }: Props): ReactElement {
  const { products } = useProductState();
  // Get unique product types , array
  const removeDuplicates = (): string[] => {
    let types = onEdges.map(x => x.node.productType);
    return types.filter((item, index) => types.indexOf(item) === index);
  };
  const [productText, setProductText] = React.useState<string>('');

  const dispatch = useProductDispatch();

  const sendProductTitleToState = (text: string): void => {
    setProductText(text);

    if (productText !== '') {
      dispatch({ type: 'SET_CURRENT_PRODUCT_TYPE', payload: productText });
    } else {
      dispatch({ type: 'CLEAR_CURRENT_PRODUCT_TYPE' });
    }
  };

  React.useEffect(() => {
    if (products === []) {
      setProductText('');
    }
  }, [productText]);

  return (
    <div className={className}>
      <div className="inputs">
        {removeDuplicates().map(title => (
          <div className="btn-wrap" key={title}>
            <button
              disabled={title === productText}
              type="button"
              onClick={() => {
                sendProductTitleToState(title);
              }}
            >
              {title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default styled(FilterBar)`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  ${({ theme: { shadow } }) => shadow.elevations[2]};
  width: 80%;
  margin: 2rem auto;
  padding: 2rem 0.5rem;
  display: block;
  position: relative;

  .inputs {
    ${handleFlex('row', 'center', 'center')};
  }
  label {
    ${handleFlex('row', 'center', 'center')};

    align-self: center;
    width: 12em;
    padding: 1rem 0.5rem;
    span {
      margin: 0 1rem;
      font-size: 1.6rem;
      text-transform: capitalize;
    }
  }
`;
