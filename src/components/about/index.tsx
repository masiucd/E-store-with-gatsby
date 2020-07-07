import React, { ReactElement } from 'react';
import { AboutStyles } from './AboutStyles';

interface Props {
  aboutContent: {
    title: string;
    content1: string;
    content2: string;
    content3: string;
  };
}

export default function About({ aboutContent }: Props): ReactElement {
  return (
    <AboutStyles>
      <h1>About</h1>
    </AboutStyles>
  );
}
