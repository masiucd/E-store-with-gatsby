import * as React from 'react';
import FaqItem from './FaqItem';
import { FaqWrapper } from './faqStyles';

interface FaqData {
  q: string;
  a: string;
}
interface Props {
  faqData: FaqData[];
}

const Faq: React.FC<Props> = ({ faqData }) => {
  return (
    <FaqWrapper>
      {faqData.map(x => (
        <React.Fragment key={x.a}>
          <FaqItem data={x} />
          <hr />
        </React.Fragment>
      ))}
    </FaqWrapper>
  );
};

export default Faq;
