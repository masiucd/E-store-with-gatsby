import * as React from 'react';
import { IFixedObject } from 'gatsby-background-image';
import styled from 'styled-components';
import Img from 'gatsby-image';

interface ImgData {
  id: string;
  localFile: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}

interface Props {
  data: {
    id: string;
    title: string;
    description: string;
    publishedAt: string;
    images: Array<ImgData>;
  };
}

const FeatureProducts: React.FC<Props> = ({ data }) => {
  const { title, images } = data;
  return (
    <div>
      {' '}
      <h1> {title} </h1>{' '}
      <Img fixed={images[0].localFile.childImageSharp.fixed} alt={title} />
    </div>
  );
};
export default FeatureProducts;
