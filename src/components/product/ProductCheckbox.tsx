import * as React from 'react';

interface Props {
  onTitle: string;
}

const ProductCheckBox: React.FC<Props> = ({ onTitle }) => {
  return (
    <label htmlFor={onTitle}>
      <span>{onTitle}</span>
      <input type="checkbox" name={onTitle} id={onTitle} />
    </label>
  );
};
export default ProductCheckBox;
