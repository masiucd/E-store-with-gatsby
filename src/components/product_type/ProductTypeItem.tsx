import * as React from 'react';
import { IFluidObject } from 'gatsby-background-image';
import Img, { GatsbyImageProps } from 'gatsby-image';

interface SelectOption {
  name: string;
  value: string;
}
interface Variant {
  price: string;
  image: {
    id: string;
    localFile: {
      childImageSharp: {
        fluid: IFluidObject | any;
      };
    };
  };
  requiresShipping: boolean;
  selectedOptions: Array<SelectOption>;
  weight: number;
}
interface Node {
  shopifyId: string;
  title: string;
  description: string;
  tags: string[];
  variants: Array<Variant>;
}

interface IProductTypeItemProps {
  data: Node;
}

export default function ProductTypeItem(props: IProductTypeItemProps) {
  const { data } = props;

  return (
    <div>
      <Img fluid={data.variants[0].image.localFile.childImageSharp.fluid} />
      <h1>{data.title}</h1>
    </div>
  );
}
