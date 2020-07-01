import * as React from 'react';
import { useProductDispatch } from '../../context/product/ProductProvider';

interface Props {
  onTitle: string;
}

const ProductButton: React.FC<Props> = ({ onTitle }) => {
  const [productType, setProductType] = React.useState(false);
  const dispatch = useProductDispatch();

  const sendProductTitleToState = (): void => {
    if (productType) {
      dispatch({ type: 'SET_CURRENT_PRODUCT_TYPE', payload: onTitle });
    } else {
      dispatch({ type: 'CLEAR_CURRENT_PRODUCT_TYPE' });
    }
  };

  sendProductTitleToState();

  return (
    <div className="btn-wrap">
      <button type="button"> {onTitle} </button>
    </div>
  );
};
export default ProductButton;
