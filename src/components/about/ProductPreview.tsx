import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import Img from 'gatsby-image';

interface Image {
  localFile: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

interface Props {
  onImage: Image[];
}

const ProductPreview: React.FC<Props> = ({ onImage }) => {
  return (
    <Img
      fluid={onImage[0].localFile.childImageSharp.fluid}
      alt="product-item"
    />
  );
};
export default ProductPreview;
