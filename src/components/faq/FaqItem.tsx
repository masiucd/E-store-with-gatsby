import * as React from 'react';
import { FaqItemStyles, AnimatedParagraph } from './faqStyles';
import useToggle from '../../hooks/useToggle';
import { useSpring, config } from 'react-spring';

interface Props {
  data: {
    q: string;
    a: string;
  };
}

const FaqItem: React.FC<Props> = ({ data }) => {
  const [start, toggleStart] = useToggle(false);
  const [show, toggle] = useToggle(false);

  const { x, opacity } = useSpring({
    opacity: start ? 1 : 0,
    x: start ? 0 : 100,
  });

  const paragraphAnimation = useSpring({
    opacity: show ? 1 : 0,
    config: config.slow,
  });

  React.useEffect(() => {
    setTimeout(() => {
      toggleStart();
    }, 200);
  }, []);

  const foo = (x: string, strToMatch: string) => {
    if (x.includes(strToMatch.trim())) {
      let res = x;
      // res = `${x} <a href=${strToMatch}> blog <a/>`;
      res = res.replace(strToMatch, `<a href="${strToMatch}"> blog <a/>`);
      return res;
    } else {
      return x;
    }
  };

  return (
    <FaqItemStyles
      style={{
        opacity,
        transform: x.interpolate(x => `translate3d(${x * -100}%,0,0)`),
      }}
    >
      <div id="open" onClick={toggle}>
        🚀
      </div>
      <p>
        Question <span>{data.q}</span>{' '}
      </p>

      <AnimatedParagraph style={paragraphAnimation}>
        Answer <span>{data.a}</span>{' '}
      </AnimatedParagraph>
    </FaqItemStyles>
  );
};
export default FaqItem;
