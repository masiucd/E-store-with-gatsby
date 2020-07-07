import * as React from 'react';
import FaqItem from './FaqItem';

interface FaqData {
  q: string;
  a: string;
}
interface Props {
  faqData: FaqData[];
}

const Faq: React.FC<Props> = ({ faqData }) => {
  return (
    <>
      {faqData.map(x => (
        <FaqItem key={x.a} data={x} />
      ))}
    </>
  );
};

export default Faq;
