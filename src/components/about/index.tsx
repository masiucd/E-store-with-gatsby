import React, { ReactElement } from 'react';
import {
  AboutPreviewGrid,
  AboutStyles,
  AboutStylesContent,
} from './AboutStyles';
import { IFluidObject } from 'gatsby-background-image';
import ProductPreview from './ProductPreview';

interface Image {
  localFile: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}
interface Node {
  node: {
    shopifyId: string;
    title: string;
    images: Array<Image>;
  };
}

interface Props {
  aboutContent: {
    title: string;
    content1: string;
    content2: string;
    content3: string;
  };
  onEdges: {
    edges: Node[];
  };
}

export default function About({ aboutContent, onEdges }: Props): ReactElement {
  return (
    <AboutStyles>
      <AboutStylesContent>
        <p>{aboutContent.content1}</p>
        <br />
        <br />
        <p>{aboutContent.content2}</p>
        <br />
        <br />
        <p>{aboutContent.content3}</p>
        <br />
        <br />
      </AboutStylesContent>
      <AboutPreviewGrid>
        {onEdges.edges.map(x => (
          <ProductPreview key={x.node.shopifyId} onImage={x.node.images} />
        ))}
      </AboutPreviewGrid>
    </AboutStyles>
  );
}
